const pool=require('../../config/database');
module.exports={
    create:(data,callBack)=>{
        sqlBooking="INSERT INTO prayag_booking (userId,userName,orderId,cabId,pickup,destination,pickupDate,returnDate,isReturn,pickupLat,pickupLong,destinationLat,destinationLong,distance,journyTime,rate,amount,discount,finalAmount,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        booking=[data.userId,data.userName,data.orderId,data.cabId,data.pickup,data.destination,data.pickupDate,data.returnDate,data.isReturn,data.pickupLat,data.pickupLong,data.destinationLat,data.destinationLong,data.distance,data.journyTime,data.rate,data.amount,data.discount,data.finalAmount,data.status];
        pool.query(sqlBooking,booking,(err,results,fields)=>{
            if(err){
                return callBack(err);
            }else{
                return callBack(null,results);
            }
        });
    },
    createSearchLog:(data,callBack)=>{
        sqlBooking="INSERT INTO prayag_search_log (mobileNo, pickup,destination,pickupDate,returnDate,pickupLat,pickupLong,destinationLat,destinationLong,distance,journyTime,isDeleted,sedan,luxury,compact) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        booking=[data.mobileNo,data.pickup,data.destination,data.pickupDate,data.returnDate,data.pickupLat,data.pickupLong,data.destinationLat,data.destinationLong,data.distance,data.journyTime,'N',data.sedanRate,data.luxuryRate,data.compactRate];
        sqlBooking1="INSERT INTO prayag_search_log (mobileNo, pickup,destination,pickupDate,returnDate,pickupLat,pickupLong,destinationLat,destinationLong,distance,journyTime,isDeleted)  VALUES ("+data.mobileNo+","+data.pickup+","+data.destination+","+data.pickupDate+","+data.returnDate+","+data.pickupLat+","+data.pickupLong+","+data.destinationLat+","+data.destinationLong+","+data.distance+","+data.journyTime+",'N')";
        
        console.log("sqlBooking=="+sqlBooking1+"******"+data.pickupDate);
        console.log("booking===="+JSON.stringify(booking));
        pool.query(sqlBooking,booking,(err,results,fields)=>{
            if(err){
                return callBack(err);
            }else{
                return callBack(null,results);
            }
        });
    },
    getCabs:(data,callBack)=>{
        sql="select * from prayag_cabs where isDeleted='N'";
        pool.query(sql,(err,results,fields)=>{
            if(err){
                return callBack(err);
            }else{
                return callBack(null,results);
            }
        });
    }

}