
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();

// all environments
app.set('port', 10303);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","OPTIONS,PUT,POST,GET,DELETE,PATCH");

    if(req.method === 'OPTIONS'){
        res.statusCode = 200;
        res.end();
    }else{
        next();
    }

});


app.get('/getUserInfo', function(req, res, next){
    console.log('get用户请求数据为：');
    console.log(req);

    res.json({
        meta:{
            code:200
        },
        data:{
            message:"蛤蟆皮"
        }
    });
});

app.post('/postUserInfo', function(req, res, next){
    console.log('post用户请求数据为：');
    console.log(req.body);

    res.json({
        meta:{
            code:200
        },
        data:{
            message:'啦啦啦啦啦'
        }
    });
});

app.put('/putUserInfo', function(req, res, next){
    console.log('put用户传入数据为：');
    console.log(req.body);

    res.json({
        meta:{
            code:200
        },
        data:{
            message:'请求putUserInfo接口成功'
        }
    });
});


app.delete('/deleteUserInfo', function(req,res,next){
    console.log(req.body);
    res.json({
        meta:{
            code:200,
            message:"success_我的deleteUserInfo接口成功"
        },
        data:null
    });
});

app.patch('/patchUserInfo', function(req,res,next){
    console.log(req.body);
    // setTimeout(function(){
    res.json({
        meta:{
            code:200,
            message:"success"
        },
        data:{
            message: "patchUserInfo接口请求成功"
        }
    });

});

app.use(function(req, res, next) {
    console.log(404);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json(err);
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
