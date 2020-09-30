const models = require('../../Models')


const fellow_extension_details = (id) => {
    const sql = `select a.*,b.name,b.id as dept_id from fellow_extension a
    inner join cbcs_departments b on a.dept=b.id
    where a.id=:id`;
    const options = {
      type: models.QueryTypes.SELECT,
      replacements: {
          id
      }
  };
  return models.query(sql, options)
}
const getDepartmentFellowList =(dept_id)=>{
  const sql = `select DATE_FORMAT(now(), "%d/%m/%Y") as dates,a.*, now() from fellow_extension a
where a.dept=:dept_id and a.to_date < DATE_FORMAT(now(), "%d/%m/%Y")`;
  const options = {
    type: models.QueryTypes.SELECT,
    replacements: {
        dept_id
    }
};
return models.query(sql, options)
}
module.exports = {
    fellow_extension_details,getDepartmentFellowList
  }
