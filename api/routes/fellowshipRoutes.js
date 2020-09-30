const express = require('express');
const router = express.Router();
const {checkToken} = require("../controllers/UserController");
const { saveExtensionDetails, getExtensionHistory,getLeaveMaster,saveLeaveMaster,fellowEdit,
getDepartmentFellowList,updateExtensionDetails } = require("../controllers/fellowshipController");
//const {userSignupValidator}=require("../validator");
//const { check, validationResult,body ,sanitizeBody } = require('express-validator');


// fellowship Routes
router.get("/getExtensionHistory",checkToken, getExtensionHistory);

router.post("/fellowship/saveLeaveMaster",checkToken, saveLeaveMaster);
router.post("/fellowship/getDepartmentFellowList",checkToken, getDepartmentFellowList);
router.post("/saveExtensionDetails", checkToken,saveExtensionDetails);
router.get("/fellow/getLeaveMaster",checkToken, getLeaveMaster);
router.post("/fellowship/fellowEdit", checkToken,fellowEdit);
router.post("/fellowship/updateExtensionDetails",checkToken, updateExtensionDetails);
module.exports = router;
