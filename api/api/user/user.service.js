const { PayloadTooLarge } = require("http-errors");
const pool=require("../../config/database");
var http = require('http');
var request = require('request');
module.exports={
    create:(data,callBack)=>{
        var sql="INSERT INTO prayag_users (firstName, lastName,mobileNo,email,status) VALUES (?,?,?,?,?)";
        //users=[[fName,lName,mobileNo,email,'Active']];
        pool.query(sql,[data.fname,data.lname,data.mobileNo,data.email,'Active'],(err,result,fields)=>{
            if(err)return callBack(err);
            return callBack(null,result);
        })
    },
    
    getUserByMobile:(mobileNo,callBack)=>{
        sqlcheck="select id,firstName,lastName,mobileNo,email,userType,createdTime from prayag_users where mobileNo=?";
        pool.query(sqlcheck,[mobileNo],(err,result)=>{
            if(err){
                return callBack(err);
            }else{
                return callBack(null,result);
            }
        })
    },
    sendOTP:(mobileNo,callBack)=>{
        let otp=Math.round(Math.random() * (9999 -1000 ) + 1000);
        var msg='your otp to login with prayag tourse & travels is '+otp;
        var url='http://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=anantkrd&Password=snra7522SN&SenderID=ANANTZ&Phno='+mobileNo+'&Msg='+encodeURIComponent(msg);
           //console.log(url); 
        
          request.get({ url: url },      function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("==otp sent=="+JSON.stringify(response));
               }
           });
           var sqlUpdate="update prayag_otp set isExpired='Y' where mobileNo=? and isExpired='N' and verified='N' and isDeleted='N'";
           pool.query(sqlUpdate,[mobileNo],(err,result,fields)=>{            
               
           })   
        var sql="INSERT INTO prayag_otp (mobileNo, otp) VALUES (?,?)";
        pool.query(sql,[mobileNo,otp],(err,result,fields)=>{
            if(err)return callBack(err);
            return callBack(null,result);
        })
    },
    verifyOtp:(mobileNo,otp,callBack)=>{        
        sqlcheck="select * from prayag_otp where mobileNo=? and otp=? and verified='N' order by id desc limit 1";
        pool.query(sqlcheck,[mobileNo,otp],(err,result,fields)=>{
            if(err){
                return callBack(err);
            }else{
                var sqlUpdate="update prayag_otp set verified='Y' where mobileNo=? and otp=?";
                pool.query(sqlUpdate,[mobileNo,otp],(err,result,fields)=>{            
                    
                });   
                return callBack(null,result);
            }            
        })
    },    
    getBookingById:(orderId,callBack)=>{
        sqlcheck="SELECT booking.*,cabs.cabType,cabs.ac,cabs.bags,cabs.capacity,cabs.cars,cabs.note ,(select mobileNo from prayag_users where id=booking.userId ) as mobileNo FROM `prayag_booking` booking inner JOIN prayag_cabs cabs ON booking.cabId=cabs.id WHERE booking.orderId=? limit 1";
        pool.query(sqlcheck,[orderId],(err,result)=>{
            if(err){
                return callBack(err);
            }else{
                return callBack(null,result);
            }
        })
    },    
    getBookingByUser:(userId,callBack)=>{
        sqlcheck="SELECT booking.*,cabs.cabType,cabs.ac,cabs.bags,cabs.capacity,cabs.cars,cabs.note FROM `prayag_booking` booking inner JOIN prayag_cabs cabs ON booking.cabId=cabs.id WHERE booking.userId=? and booking.isDeleted='N' ORDER by booking.id desc";
        pool.query(sqlcheck,[userId],(err,result)=>{
            if(err){
                return callBack(err);
            }else{
                return callBack(null,result);
            }
        })
    },    
    getBookings:(userId,pageId,callBack)=>{
        let start=((pageId-1)*10);
        let perPage=10;
        sqlcheck="SELECT booking.*,cabs.cabType,cabs.ac,cabs.bags,cabs.capacity,cabs.cars,cabs.note,(select mobileNo from prayag_users where id=booking.userId ) as mobileNo FROM `prayag_booking` booking inner JOIN prayag_cabs cabs ON booking.cabId=cabs.id WHERE booking.isDeleted='N' order by booking.id desc limit ?,?";
        pool.query(sqlcheck,[start,perPage],(err,result)=>{
            if(err){
                return callBack(err);
            }else{
                return callBack(null,result);
            }
        })
    },
    getBookingSearchLog:(userId,pageId,callBack)=>{
        let start=((pageId-1)*10);
        let perPage=10;
        sqlcheck="SELECT * from prayag_search_log where isDeleted='N' order by id desc limit ?,?";
        pool.query(sqlcheck,[start,perPage],(err,result)=>{
            if(err){
                return callBack(err);
            }else{
                return callBack(null,result);
            }
        })
    },
};
