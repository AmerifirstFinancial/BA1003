var express = require('express');
var app = express();

app.set('view engine','ejs');

//app.set('views',__dirname+'/views');

app.get('/',function(req,res){
    res.render('default',
        {
            title: 'Home',
            classname: 'home'
        }
    );
});

app.get('/about', function (req, res) {
    res.render('default',
        {
            title: 'About',
            classname: 'about'
        }
    );
});

app.get('*',function(req,res){
    res.send('Bad Route');
});


var server = app.listen(80, function () {
    console.log('1003 App Started on 80');
});

//2.7