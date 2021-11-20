var express = require('express');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
var router = express.Router();
const{createUser,getUserByMobile,sendOTP,verifyOtp,getBookings,getBookingByUser,getBookingById,
    getBookingSearchLog}=require('./user.controller');
const { json } = require('body-parser');
const authenticate=require("../auth/index");

/* GET home page. */
//router.get('/create_user', createUser);
router.get('/create_user', function(req, res, next) {
    
    res1=createUser(req.query.fname,req.query.lname,req.query.mobileNo,req.query.email,(err,results)=>{
        if(err){
            responce=JSON.stringify({code:'501',error:err,data:''});
        }else{
            console.log("last inserted id="+results.insertId);
            responce=JSON.stringify({code:'200',msg:'user added',data:results.insertId});
        }
        res.send(responce);
    });  
    
  });
  router.get('/get_user', function(req, res, next) {
    
    res1=getUserByMobile(req.query.mobileNo,(err,results)=>{
        if(err){
            responce=JSON.stringify({code:'501',error:err,data:''});
        }else{
            console.log("last inserted id="+results);
            responce=JSON.stringify({code:'200',msg:'',data:results});
        }
        res.send(responce);
    }); 
    
  });
  
  router.get('/send_otp', function(req, res, next) {
    
    res1=sendOTP(req.query.mobileNo,(err,results)=>{
        if(err){
            responce=JSON.stringify({code:'501',error:'user not found',data:''});
        }else{
            
            console.log("last inserted id="+results);
            responce=JSON.stringify({code:'200',msg:'',data:results});
        }
        res.send(responce);
    }); 
    
  });
  router.get('/verify_otp', function(req, res, next) {
    
    res1=verifyOtp(req.query.mobileNo,req.query.otp,(err,results)=>{
        if(err){
            responce=JSON.stringify({code:'501',error:'user not found',data:''});
        }else{            
            //console.log(results[0]['id']+"last inserted id="+JSON.stringify(results));
            const token= jwt.sign({ id: results[0]['id'] }, process.env.secrete);
            //console.log("token=="+token);
            results[0]['token']=token;
            responce=JSON.stringify({code:'200',msg:'',data:results});
        }
        res.send(responce);
    }); 
    
  });
  
  router.get('/get_booking',authenticate, function(req, res, next) {
    
    res1=getBookings(req.query.userId,1,(err,results)=>{
        if(err){
            responce=JSON.stringify({code:'501',error:'user not found',data:''});
        }else{            
            console.log("last inserted id="+results);
            responce=JSON.stringify({code:'200',msg:'',data:results});
        }
        res.send(responce);
    });
  });
  
  router.get('/get_user_booking',authenticate, function(req, res, next) {
    
    res1=getBookingByUser(req.query.userId,(err,results)=>{
        if(err){
            responce=JSON.stringify({code:'501',error:'user not found',data:''});
        }else{            
            //console.log("last inserted id="+results);
            responce=JSON.stringify({code:'200',msg:'',data:results});
        }
        res.send(responce);
    }); 
    
  });
  
  router.get('/get_booking_details',authenticate, function(req, res, next) {    
    res1=getBookingById(req.query.bookingId,(err,results)=>{
        if(err){
            responce=JSON.stringify({code:'501',error:'user not found',data:''});
        }else{            
            console.log("last inserted id="+results);
            responce=JSON.stringify({code:'200',msg:'',data:results});
        }
        res.send(responce);
    });     
  });
  router.get('/get_search_log',authenticate, function(req, res, next) {   
     

    res1=getBookingSearchLog(req.query.userId,1,(err,results)=>{
        if(err){
            responce=JSON.stringify({code:'501',error:'user not found',data:''});
        }else{            
           // console.log("last inserted id="+results);
            responce=JSON.stringify({code:'200',msg:'',data:results});
        }
        res.send(responce);
    });   
  });
  
module.exports = router;
