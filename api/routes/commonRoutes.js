const express = require('express');
const router = express.Router();
const { getSession, getSession_year, getStudentDetails,getCourseList,getDepartmentList } = require("../controllers/commonController");
const {checkToken} = require("../controllers/UserController");

router.get("/getSession",checkToken, getSession);
router.get("/getCourseList",checkToken, getCourseList);
router.get("/getSession_year",checkToken, getSession_year);
router.get("/getDepartmentList",checkToken, getDepartmentList);
router.post("/getStudentDetails",checkToken, getStudentDetails);
module.exports = router;
