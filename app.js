var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
   res.render('default');
});
app.get('/me',function(req,res){
    res.send('helllo, me');
});

app.get('/who/:name?',function(req,res){
    var name = req.params.name;
    res.send('Hello, '+name);
});
app.get('/who/:name?/:title?',function(req,res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('Name: '+name);
    res.send('Title:' + title);
});
app.get('*',function(req,res){
    res.send('Bad Route');
});

var server = app.listen(8080, function(){
    console.log('1003 App Started on 8080');
});