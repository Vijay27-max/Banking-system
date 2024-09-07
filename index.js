// var express=require("express");
// var app=express();
// app.get('/',function(req,res){
//     res.send("hello world")
// })
// app.listen(6501);
// var con=require('/connection')
// var express = require('express');
// var router = express.Router();
// router.get('/form', function(req, res, next){ 
// res.render('signup.html'); 
// });
// router.post('/create', function(req, res, next) {
  
//   var myfirstname=req.body.myfirstname;
//   var mylastname=req.body.mylastname;
//   var fatherfullname=req.body.fatherfullname;
//   var motherfullname=req.body.motherfullname;
//   var mydob=req.body.mydob;
//   var mynumber=req.body.mynumber;
//   var mygender=req.body.mygender;
//   var myaadhar=req.body.myaadhar;
//   var mypan=req.body.mypan;
//   var uaadhar=req.body.myuaadhar;
//   var upan=req.body.upan;
//   var username=req.body.username;
//   var mypassword=req.body.mypassword;
 
//   var sql = "insert into  personal_info(myfirstname,mylastname,fatherfullname,motherfullname,mydob,mynumber,mygender,myaadhar,mypan,uaadhar,upan,username,mypassword)values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
//   con.query(sql, [myfirstname,mylastname,fatherfullname,motherfullname,mydob,mynumber,mygender,myaadhar,mypan,uaadhar,upan,username,mypassword],function (err, data) { 
//       if (err) throw err;
//          console.log("User data is inserted successfully "); 
//   });
//  res.redirect('/signup.html/form');
// }); 
// module.exports = router;
// router.listen(5501)
var con=require('./connection');
var express=require("express");
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }))
app.get('/',function(req,res){
 res.sendFile(__dirname + '/signup.html');
});
app.post('/',function(req,res){
  console.log(req.body)
  var myfirstname=req.body.myfirstname;
  var mylastname=req.body.mylastname;
  var fatherfullname=req.body.fatherfullname;
  var motherfullname=req.body.motherfullname;
  var mydob=req.body.mydob;
  var mynumber=req.body.mynumber;
  var mygender=req.body.mygender;
  var myaadhar=req.body.myaadhar;
  var mypan=req.body.mypan;
  var uaadhar=req.body.uaadhar;
  var upan=req.body.upan;
  var username=req.body.username;
  var mypassword=req.body.mypassword;
  con.connect(function(error){
    if(error) throw error;
    var sql = "insert into  customer_personal_info(myfirstname,mylastname,fatherfullname,motherfullname,mydob,mynumber,mygender,myaadhar,mypan,uaadhar,upan,username,mypassword)values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
    con.query(sql, [myfirstname,mylastname,fatherfullname,motherfullname,mydob,mynumber,mygender,myaadhar,mypan,uaadhar,upan,username,mypassword],function (error,result){ 
      if (error) throw error;
      res.send('User data is inserted successfully'+result.insertId);
    });
  });
});
app.listen(6501);

