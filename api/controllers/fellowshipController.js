const con = require('../config');
const SQL = require('sql-template-strings');
const fellowDb = require('../Models/fellowship/fellowModel');

module.exports.getDepartmentFellowList=async function(req,res){
const dept_id=req.body.dept_id;
console.log(dept_id);
  let result= await fellowDb.getDepartmentFellowList(dept_id);
console.log(result);
}

module.exports.updateExtensionDetails=async function(req,res){
    const id=req.body.id;
  //  console.log(id);
    con.query(SQL`update fellow_extension set status=? where id=?`,['2',id],function (err, result) {
        console.log(this.sql);
        if (err) {
            return res.status(400).json({
                status:false,
                showMsg:true,
                data:{},
                message:'Something Went Worng.Contact MIS.'
              })
        }else{

            con.query(SQL `insert into fellow_extension(admn_no,dept,course,branch,from_date,to_date,remark1)
            values (?,?,?,?,?,?,?)`, [req.body.admn_no,req.body.dept_id, req.body.course, req.body.branch
                , req.body.from_date, req.body.to_date, req.body.remark], function(err, StudentDetails) {
                    if (err) {
                        return  res.json({
                            status:false,
                            showMsg:true,
                            data:{},
                            message:'Something Went Worng.Please try again.'
                            })
                    }else{
                        return  res.json({
                            status:true,
                            showMsg:true,
                            data:{},
                            message:'Status Updated Successfully.'
                            })
                    }

            });


        }

    });
}
module.exports.fellowEdit=async function(req,res){
    let results={}
    const id=req.body.id;
    let result= await fellowDb.fellow_extension_details(id);
    if(result.length > 0 ){
        results.result=result;
        return  res.json({
            status:true,
            showMsg:false,
            data:{results}
        })

    }else{
        return  res.json({
            status:false,
            showMsg:true,
            data:{},
            message:'Student Details not found.'
        })
    }

}

module.exports.saveLeaveMaster=async function(req,res){
    let datas=[];
    const course_id=req.body.course_id;
    const lpy=req.body.lpy;
    const lpm=req.body.lpm;
    const ef=req.body.ef;
    con.query(SQL `insert into fellow_leave_master(target_degree_type,leave_permissible_yrly,leave_permissible_monthly,effective_from)
     values (?,?,?,?)`, [course_id,lpy, lpm, ef], function(err, StudentDetails) {
        //console.log(this.sql);
        if (err) {
            return res.status(400).json({
               // err: err,
                status: true,
                showMsg: true,
                data: {  },
                message: 'Something Went Worng.Please contact MIS.'
            })
        } else {
            if(StudentDetails.affectedRows > 0){
                let sql = (SQL`SELECT * FROM fellow_leave_master a ORDER BY a.id desc`);
                con.query(sql, (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                  }else{
                    datas['list']=results;
                    return res.json({
                        status: true,
                        showMsg: true,
                        data:results,
                        message: 'Leave Master Data Updated succesfully.'
                    })

                  }
                });

                console.log(datas);

            }else{
            return res.json({
                status: false,
                showMsg: true,
                data: { datas },
                message: 'Unable to insert Leave Master Data.Please try again.'
            })
        }

        }

    });
}
module.exports.getLeaveMaster = function(req, res) {
    con.query(SQL `SELECT * FROM fellow_leave_master a
  ORDER BY a.id desc`, function(err, history) {
        //console.log(this.sql);
        if (err) {
            // console.log(err);
            return res.status(400).json({
                err: err
            })
        } else {
            console.log(history);
            return res.json({
                status: true,
                showMsg: false,
                data: { history },
                message: ''
            })

        }

    });

}

module.exports.getExtensionHistory = function(req, res) {
    con.query(SQL `SELECT * FROM fellow_extension a where a.status='1'
  ORDER BY a.id desc`, function(err, history) {
        //console.log(this.sql);
        if (err) {
            // console.log(err);
            return res.status(400).json({
                err: err
            })
        } else {
            console.log(history);
            return res.json({
                status: true,
                showMsg: false,
                data: { history },
                message: ''
            })

        }

    });

}
module.exports.saveExtensionDetails = function(req, res) {
    const admn_no = req.body.admn_no;
    const course = req.body.course;
    const branch = req.body.branch;
    const file = req.body.file;
    //console.log(req.body.savedata.admn_no);
    con.query(SQL `insert into fellow_extension(admn_no,course,branch,from_date,to_date,file) values (?,?,?,?,?,?)`, [req.body.savedata.admn_no, req.body.savedata.course, req.body.savedata.branch, req.body.savedata.from_date, req.body.savedata.to_date, req.body.savedata.file], function(err, StudentDetails) {
        //console.log(this.sql);
        if (err) {
           // console.log(err);
            return res.status(400).json({
               // err: err,
                status: true,
                showMsg: true,
                data: {  },
                message: 'Something Went Worng.Please contact MIS.'
            })
        } else {
           // console.log(StudentDetails);
            return res.json({
                status: true,
                showMsg: true,
                data: { StudentDetails },
                message: 'Fellowship Extension Data saved succesfully.'
            })

        }

    });

}
