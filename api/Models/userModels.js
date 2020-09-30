const models = require('../Models')

const checkUser = (id) => {
    const sql = `select * from users where id=:id`;
    const options = {
      type: models.QueryTypes.SELECT,
      replacements: {
          id
      }
  };
  return models.query(sql, options)
}

const getUserDetails = (id) => {
  const sql = `SELECT u . * , d.name AS dept_name, d.type AS dept_type
  FROM ( SELECT users.id as username,users.auth_id,users.status,concat_ws(' ',user_details.salutation,user_details.first_name,user_details.middle_name,user_details.last_name) as name,user_details.* FROM users
      NATURAL JOIN user_details
      WHERE id = :id
    ) AS u, departments AS d
  WHERE u.dept_id = d.id
`;
  const options = {
    type: models.QueryTypes.SELECT,
    replacements: {
      id
    }
};
return models.query(sql, options)
}
const getUserAuths = (id) => {
  const sql = `select * from user_auth_types where user_auth_types.id=:id`;
  const options = {
    type: models.QueryTypes.SELECT,
    replacements: {
      id
    }
};
return models.query(sql, options)
}

module.exports = {
  checkUser,
  getUserDetails,getUserAuths
}
