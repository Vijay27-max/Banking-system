var con=require('./connection');
var express=require("express");
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }))
app.get('/',function(req,res){
 res.sendFile(__dirname + '/contact.html');
});
app.post('/',function(req,res){
  console.log(req.body)
  var name=req.body.name;
  var email=req.body.email;
  var phonenumber=req.body.phonenumber;
  var message=req.body.message;
  con.connect(function(error){
    if(error) throw error;
    var sql = "insert into  contact_info(name,email,phonenumber,message)values(?,?,?,?)";
    con.query(sql, [name,email,phonenumber,message],function (error,result){ 
      if (error) throw error;
      res.send('User data is inserted successfully'+result.insertId);
    });
  });
});
app.listen(6501);

