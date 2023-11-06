//#region Global Variables
var tbl_Model = require("../models/user_data");
const user_roles_lkp_Model = require("../models/user_roles_lkp");
const Templates_Forms_Log_Model = require("../models/templates_forms_log");
const now_DateTime = require('../helpers/fun_datetime');
//#endregion

exports.get_All_Users = async () => {
    try {
        return await tbl_Model.aggregate([
            {
                "$project": {
                "id": "$_id",
                "Serial_Number": 1,
                "First_Name": 1,
                "Last_Name": 1,
                "User_Roles_ID": 1,
                "Phone_Number": 1,
                "Email": 1,
                "Address": 1,
                "Location": 1,
                "Photo_Profile": 1,
                "Inserted_DateTime": 1,
                "Last_Login_DateTime": 1,
                "LastUpdate_DateTime": 1,
                "Is_Business": 1,
                "Business_Organization_ID": 1,
                "Is_Verified": 1,
                "Is_Suspended": 1,
                "Inserted_By": 1,
                "Updated_By": 1,
                "_id": 0
                }
            }
        ]) ;
    } catch (error) {
      console.log(error.message);
    }
     
};