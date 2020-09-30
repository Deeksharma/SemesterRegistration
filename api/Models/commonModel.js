const models = require('../Models')
const getStudentDetails = (id) => {
    const sql = `select * from reg_regular_form a
    where a.admn_no=:id order by a.form_id desc limit 1`;
    const options = {
      type: models.QueryTypes.SELECT,
      replacements: {
          id
      }
  };
  return models.query(sql, options)
}

const getDepartmentList=()=>{
  const sql=`select * from  cbcs_departments a
where a.type='academic' and a.status='1'`;
  const options = {
    type: models.QueryTypes.SELECT
};
return models.query(sql, options)
}

module.exports = {
    getStudentDetails ,getDepartmentList
  }
