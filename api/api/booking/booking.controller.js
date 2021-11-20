const { json } = require('body-parser');
const{create,getCabs,createSearchLog}=require('./booking.service');
const{createUser,getUserByMobile}=require('../user/user.controller');
module.exports={
    create_booking:(data,callBack)=>{
        create(data,(err,results)=>{
            if(err)return callBack(err);
            return callBack(null,results);
        });
    },
    create_booking_log:(data,callBack)=>{
        console.log("data===="+JSON.stringify(data));
        createSearchLog(data,(err,results)=>{
            if(err){
                return callBack(err);
            }else{

            }
            console.log("results=="+results);
            return callBack(null,results);
        });
    },
    getCabs:(data,callBack)=>{
        getCabs(data,(err,results)=>{
            if(err){
                return callBack(err);
            }else{

            }
            console.log("results=="+results);
            return callBack(null,results);
        });
    }
}