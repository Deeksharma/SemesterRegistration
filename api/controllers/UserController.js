const con = require('../config');
const md5 = require('md5');
const jwt=require('jsonwebtoken');//to generate signed web toket
const expressJwt=require('express-jwt');// for authorization check
var Sequelize = require('sequelize');
//const usersDb = require('../Queries/users')
const usersDb = require('../Models/userModels');
const { countBy } = require('lodash');


exports.checkToken=expressJwt({
  secret:process.env.JWT_SECRET,
  userProperty:"auth"
})

module.exports.validate=function(req,res){
  const id=req.body.id;
  const password=req.body.password;
  var dateFormat = require('dateformat');
  var day=dateFormat(new Date(), "yyyy-mm-dd");
  //console.log(day);

  con.query("select * from login_logout_log a  where a.user_id=? and a.logged_out_time is null and a.logged_in_time like ?\
  order by a.log_id desc limit 1",[id,day+'%'], function (err, result) {
   // console.log(this.sql);
    if (err) {
      return res.status(400).json({
        err:"Invalid username or password"
      })
    }else{
      //console.log(this.sql);
      if(result.length==1){
        console.log(result.length);
        console.log(this.sql);
        const token=jwt.sign({_id:result.id},process.env.JWT_SECRET);
        console.log(token);
        res.cookie('t',token,{expire:new Date()+ 9999})
      return  res.json({
          status:true,
          data:{token,result},
          message:'user signed in sucessfully'
      })
    }else{
    return  res.json({
        status:false,
        data:{},
        message:'Invalid username and password'
    })
    console.log('Invalid username and password');
    }
    }

  });




}

module.exports.userEdit=function(req,res){
  var id = req.params.id;
  console.log("User ID : "+id)

    con.query("SELECT * FROM users WHERE id=?",[id], function (err, result) {
    if (err) {
      return res.status(400).json({
        err:err
      })
    }else{
      if(result.length==1){

      return  res.json({
          status:true,
          data:{result},
          message:'success'
      })
    }else{
    return  res.json({
        status:false,
        data:{},
        message:'Something went worng.'
    })

    }
    }
    console.log(result);
  });
}

module.exports.register=function(req,res){
//  console.log(req.body);
  var today=new Date();
  var users={
    "name":req.body.name,
    "email":req.body.email,
    "password":md5(req.body.password),
    "address":req.body.address,
    "mobile":req.body.mobile,
    "role":"1",
  }
  con.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
      return  res.json({
            status:false,
            message:error
        })
      }else{
      return res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}

module.exports.userList=function (req,res){
      con.query("SELECT * FROM users ",function (err, result) {
    if (err) {
      return res.status(400).json({
        err:"Something went worng"
      })
    }else{
      if(result.length > 0){
        console.log(result.length);
        console.log(this.sql);
         return  res.json({
          status:true,
          data:{result},
          message:'success'
      })
    }else{
    return  res.json({
        status:false,
        data:{},
        message:'Data Not Found'
    })
  //  console.log(result);
    }
    }

  });
}
module.exports.signout=async (req,res)=>{
  res.clearCookie("t");
  return res.json({
    showMsg:true,
    status:false,
    data:{},
    message:'SignOut Sucessfully.'
  })
}
module.exports.Login=async (req,res) => {
   let mydata={};
   const id=req.body.username;
   const userpass=req.body.password;
   const password=md5(userpass);
   if((id === undefined || id === null || id === '') || (userpass === undefined || userpass === null || userpass === '')){
    return res.json({
      status:false,
      data:{mydata},
      message:'Please Enter Username and Password'
    })
   }
   let pass;
   let tempHash;
  const users = await usersDb.checkUser(id.trim())
  //console.log(users);
  if(users.length > 0 ){
    const salt = 'ISM';
    pass=users[0].password;
    const created_date=users[0].created_date;
    const year =new Date(created_date);
    tempHash = md5(password+year.getFullYear()+salt);
   // console.log(tempHash);
   };

   if(tempHash==pass){

    const getUserDetails = await usersDb.getUserDetails(id.trim())
    const getUserAuths = await usersDb.getUserAuths(id.trim())
    //mydata.getUserDetails=getUserDetails;
  //  mydata.getUserAuths=getUserAuths;

    const token=jwt.sign({_id:id,_password:tempHash,_key:'@bhijeet@'},process.env.JWT_SECRET);
    res.cookie("t",token,{expire:new Date()+999});
   // console.log(getUserDetails)
    //console.log('my data', mydata);
    return res.json({
      showMsg:false,
      status:true,
      token:token,
      userDetails:getUserDetails,
      userauths:getUserAuths,
      message:'Success'
    })
   }else{
    return res.json({
      showMsg:true,
      status:false,
      data:{},
      message:'Invalid Username or Password'
    })
   }

}
