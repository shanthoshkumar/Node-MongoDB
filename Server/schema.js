var mongo=require('mongoose')
const player=mongo.Schema({
    JERSY:Number,
    NAME:String,
    RANK:Number
})
module.exports=mongo.Collection('Players',player)