const { json } = require('body-parser');
const{create,getUserByMobile,sendOTP,verifyOtp,getBookings,getBookingByUser,getBookingById,getBookingSearchLog}=require('./user.service');
const {getCabs}=require('../common/cabs');
const pool = require('../../config/database');
module.exports={
    createUser_old:(req,res)=>{
        const body=req.query;
        console.log("body***"+JSON.stringify(req.query));
        create(body,(err,results)=>{
            console.log("results==="+results);
            let responce;
            if(err){
                //return res.send.json({code:500,})
                responce=JSON.stringify({code:'500',error:err,data:''});
                res.send(responce);
            }
            responce=JSON.stringify({code:'200',msg:'user added',data:results});
            res.send(responce);
        });
        
    },
    createUser:(fname,lname,mobileNo,email,callBack)=>{
        //const body=req.query;
        //data.fname,data.lname,data.mobileNo,data.email
        //console.log("results=fname=="+fname);
        const body={fname:fname,lname:lname,mobileNo:mobileNo,email:email}
        //console.log("body***"+JSON.stringify(req.query));
        create(body,(err,results)=>{
            if(err){
                return callBack(err)
            }
            return callBack(null,results)
        });        
    },
    getUserByMobile:(mobileNo,callBack)=>{
        
        getUserByMobile(mobileNo,(err,results)=>{
            if(err){
                return callBack(err)
            }
            return callBack(null,results)
        });        
    },
    sendOTP:(mobileNo,callBack)=>{             
        getUserByMobile(mobileNo,(err,results)=>{
            if(err){
                return callBack(err);
            }else{
                 console.log("getMobile=="+JSON.stringify(results))
                if(results.length>0){                    
                    sendOTP(mobileNo,(err,results)=>{
                        if(err){
                            return callBack(err)
                        }
                        return callBack(null,results)
                    }); 
                }else{
                   responce=JSON.stringify({code:'500',msg:'user not found',data:''});
                   return callBack(responce);
                }
            }
        });        
    },
    verifyOtp:(mobileNo,otp,callBack)=>{             
        verifyOtp(mobileNo,otp,(err,results)=>{
            if(err){
                responce=JSON.stringify({code:'500',msg:'invalid otp',data:''});
                return callBack(responce);
            }else{
                console.log("getMobile=="+JSON.stringify(results))
                //return callBack(null,results)
                if(results.length>0){
                    getUserByMobile(mobileNo,(err,results)=>{
                        if(err){
                            responce=JSON.stringify({code:'500',msg:'invalid otp',data:''});
                            return callBack(responce);
                        }else{
                            return callBack(null,results)
                        }
                    });
                }else{
                    responce=JSON.stringify({code:'500',msg:'invalid otp',data:''});
                   return callBack(responce);
                }
                 
            }
        });        
    },
    getBookingById:(bookingId,callBack)=>{             
        getBookingById(bookingId,(err,results)=>{
            if(err){
                responce=JSON.stringify({code:'500',msg:'invalid otp',data:''});
                return callBack(responce);
            }else{
                console.log("getMobile=="+JSON.stringify(results))
                return callBack(null,results);                                 
            }
        });        
    },
    getBookingByUser:(userId,callBack)=>{             
        getBookingByUser(userId,(err,results)=>{
            if(err){
                responce=JSON.stringify({code:'500',msg:'invalid otp',data:''});
                return callBack(responce);
            }else{
                console.log("getMobile=="+JSON.stringify(results))
                return callBack(null,results);                                 
            }
        });        
    },
    getBookings:(userId,pageId,callBack)=>{             
        getBookings(userId,pageId,(err,results)=>{
            if(err){
                responce=JSON.stringify({code:'500',msg:'invalid otp',data:''});
                return callBack(responce);
            }else{
                console.log("getMobile=="+JSON.stringify(results))
                return callBack(null,results);                                 
            }
        });        
    },
    getBookingSearchLog:(userId,pageId,callBack)=>{   
        //let rows = pool.query("select * from prayag_cabs where isDeleted='N'" );
       
        getBookingSearchLog(userId,pageId,(err,results)=>{
            if(err){
                responce=JSON.stringify({code:'500',msg:'no record found'+err,data:''});
               // console.log("Res"+responce);
                return callBack(responce);
            }else{
                console.log("getMobile==")
                return callBack(null,results);                                 
            }
        });       
    },
}
const getCabs1=async()=>{
    return "hello";
    /*sqlcheck="select * from prayag_cabs where isDeleted='N'";
        pool.query(sqlcheck,[],(err,result)=>{
            console.log("Result==="+result);
            return result;
        });*/
}