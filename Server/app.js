const exp=require('express');
const mongo=require('mongoose');
const app=exp();
const cors=require('cors');
require('./db')
require('./schema')
app.use(cors())
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json())
var dbo=mongo.connection;
var _db=dbo.collection('India')
app.get('/time',(req,res)=>{
    res.json('Connected')
})

app.get('/list',(req,res)=>{
_db.find().toArray((er,re)=>{
    res.json(re)
})
})

app.post('/add',(req,res)=>{
        _db.insert(req.body,(er,re)=>{
               if(re)
               res.send('successfully Added')
               else 
               res.send(er,'error')
           })
})

app.post('/update',(req,res)=>{
    _db.findOneAndUpdate({JERSY:req.body.JERSY},{$set:{NAME:req.body.NAME, RANK:req.body.RANK}},(er,re)=>{
        if(re)
        res.send('successfully Added')
        else 
        res.send(er,'error')
    })
    })

app.post('/delete',(req,res)=>{
    console.log(req.body.JERSY);
    
    _db.findOneAndDelete({JERSY:req.body.JERSY},(er,re)=>{
        if(re)
        res.send('successfully Added')
        else 
        res.send(er,'error')
    })
})

app.get('/clear',(req,res)=>{
    console.log('in');
    
    _db.drop((er,re)=>{
        if(re)
        res.send('successfully Cleared')
        else 
        res.send(er,'error')
    })
})
app.listen(3000)