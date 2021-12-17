const res = require("express/lib/response");

const express= require ("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
    
})

app.post('/', function(req, res){

    const oneName=req.body.nameOne;
const twoName= req.body.nameTwo;

    const a= Math.random();
    const b= Math.floor((a*100)+1)
 
    if (b>=70) {
        res.write( oneName +", You " + " and " + twoName + " goonna go long way! ")
    }else if(b<70 && b>=40) {
        res.write(oneName +", You " + " and " + twoName + " need to spend some more time together! ")
    }else{
        res.write("<h1> Fake love!, " + twoName + " may be cheating on you! </h1>")
    }
    res.end();
    res.send("<h1> Thank you for using our services! </h1>")


})


app.listen('3000', function(req, res) {
    console.log("app is up and running at http://localhost:3000")
})