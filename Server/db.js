var mongo=require('mongoose')
const dburl="mongodb://localhost:27017/Cricket";
mongo.connect(dburl,function(err,res){
    if(res)
    console.log("Database Connected");
    else
    console.log('DB connection Error');   
    
})