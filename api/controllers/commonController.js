const con = require('../config');
const SQL = require('sql-template-strings');
var Sequelize = require('sequelize');
const commonDb = require('../Models/commonModel');
module.exports.getCourseList=function(req,res){
  con.query(SQL`select * from cbcs_courses a
  where a.status=?
  order by a.name `,['1'],function (err, course) {
      //console.log(this.sql);
      if (err) {
      //  console.log(err);
        return res.status(400).json({
          err:err
        })
      }else{
        if(course.length>0){
        //  console.log(course);
        return  res.json({
            status:true,
            showMsg:false,
            data:{course}
        })
      }else{
      return  res.json({
          status:false
      })

      }
      }
    });
}
module.exports.getStudentDetails=async function(req,res){
  let StudentDetails={};
    const admn_no=req.body.admn_no;
  //  console.log(admn_no);

    if(admn_no.toLocaleLowerCase().includes('dr') || admn_no.toLocaleLowerCase().includes('dp')){
     let data= await commonDb.getStudentDetails(admn_no);
      StudentDetails.StudentDetails=data;
    //  console.log(data.length);
      if(data.length > 0 ){
    //    console.log(StudentDetails);
      return  res.json({
          status:true,
          showMsg:false,
          data:StudentDetails
      })
    }else{
    return  res.json({
        status:false,
        showMsg:true,
        data:{},
        message:'Student Details not found.'
    })

    }

    }else{
      return  res.json({
        status:false,
        showMsg:true,
        data:{},
        message:'Please Enter Valid Registration No.'
    })
 }

}
module.exports.getSession=function(req,res){
    con.query("SELECT * FROM mis_session order by active desc",function (err, session) {
        //console.log(this.sql);
        if (err) {
          return res.status(400).json({
            err:err
          })
        }else{
          if(session.length>0){

          return  res.json({
              status:true,
              data:{session}
          })
        }else{
        return  res.json({
            status:false,
            data:{},
            message:'Something went worng.'
        })

        }
        }
      //  console.log(session);
      });

}
module.exports.getDepartmentList=async function(req,res){
  let data= await commonDb.getDepartmentList();
  console.log(data);
  if(data.length > 0){
      return  res.json({
        status:true,
        data:{data}
    })
  }else{
  return  res.json({
      status:false,
      data:{},
      message:'Something went worng.'
  })

  }
}
module.exports.getSession_year=function(req,res){
    con.query("SELECT * FROM mis_session_year order by active desc",function (err, session_year) {
        //console.log(this.sql);
        if (err) {
          return res.status(400).json({
            err:err
          })
        }else{
          if(session_year.length>0){

          return  res.json({
              status:true,
              data:{session_year}
          })
        }else{
        return  res.json({
            status:false,
            data:{},
            message:'Something went worng.'
        })

        }
        }
        console.log(session);
      });

}
