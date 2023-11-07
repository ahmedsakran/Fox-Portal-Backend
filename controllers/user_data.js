//#region Global Variables
const tbl_Service = require("../services/user_data");
const now_DateTime = require('../helpers/fun_datetime');
const fun_handled_messages = require('../helpers/fun_handled_messages');
var langTitle = ""
//#endregion

//#region Create Logger
const winston = require('winston');

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
  };
  
  const logger = winston.createLogger({
    levels: logLevels,
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });
//#endregion
  


exports.get_All_User =  async(req, res) => {
    try {
        langTitle = req.params.langTitle;
    
        let get_All_User_Promise = new Promise(async (resolve, reject)=>{
          var returnedList = await tbl_Service.get_All_Users();
          resolve(returnedList);
        });
  
        get_All_User_Promise.then((returned_Users) => {
  
          if((!returned_Users)||(returned_Users.length<=0)) {
              
              let get_Message_Promise = new Promise(async (resolve, reject)=>{
                  var result = await fun_handled_messages.get_handled_message(langTitle,251);
                  resolve(result);
              });
  
              get_Message_Promise.then((msg) => {
                  res.status(404).json({data: [] , message: msg , status: "empty rows" });
              }).catch((err)=>{
                  res.status(500).json({ message: err , status: "error" });
              });
  
          } else{
              res.status(200).json({ data: returned_Users , message: "rows selected", status: "success" });
          }
  
        }).catch((err)=>{
          res.status(500).json({ message: err.message , status: "error" });
        });

    } catch (error) {
      res.status(500).json({ message: error.message , status: "error" });
    }
};

exports.create_User =  async(req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message , status: "error" });
    }
};