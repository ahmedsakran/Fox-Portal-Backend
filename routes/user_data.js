const express = require("express");
const {
    get_All_User,
    create_User,
//   update_Data,
//   get_Collection_Data_By_Title,
//   updateMany_Rows_Data,
} = require("../controllers/user_data");
 
const router = express.Router();
 
//#region API Links Explanation
//http://localhost:27017/api/v1/En/user_data
//http://localhost:27017/api/v1/:langTitle/user_data
//#endregion
router.route("/:langTitle/user_data").get(get_All_User)

//#region API Links Explanation
//http://localhost:27017/api/v1/En/user_data
//http://localhost:27017/api/v1/:langTitle/user_data
//#endregion
router.route("/:langTitle/user_data").post(create_User)

 
module.exports = router;