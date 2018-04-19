
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();

//todo 这个fs后面不需要，因为fs在每个具体的路由业务里
var fs = require("fs");

//业务模块-- start --
var addressList = require('./routes/components/addressList/addressList');
var index = require('./routes/index');
var login = require('./routes/login/login');
var portal = require('./routes/portal');
var me = require('./routes/me');
var accesstoken = require('./routes/accesstoken');
//业务模块-- end --

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


//功能模块 --start--
app.use('/login', login);
app.use('/me', me);
app.use('/access_token', accesstoken);
app.use('/index', index);
app.use('/portal', portal);
app.use('/addressList', addressList);

//todo 这个接口后面整合到portal文件夹内

app.get('/myNotice', function(req, res){
    fs.readFile('routes/portal/myNotice.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    });
});

app.post("/testLoginOne", function(req, res){
    console.log('请求接口 /testLoginOne');
    console.log(req.body);
    res.send(111);
});

app.get('/*', function(req,res){
    res.json({
        "meta": {
            "code": 1,
            "message": "成功—我的服务器"
        },

    });
});
//功能模块 --end--

// app.get('/users', user.list);

app.use(function(req, res, next) {
    console.log('code line 103');
    console.log(404);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    console.log('code line 112');

    // res.status(err.status || 500);
    // res.status(err.status || 200);
    // res.json(err);

    //为了让前端程序正常运行，后端一律返回200,正常应该返回500 -- for potal --start--
    res.json({
        meta:{
            code:1,
            msg:'ccccc'
        },
        data:[]
    });
    //为了让前端程序正常运行，后端一律返回200,正常应该返回500 -- for potal --end--

});




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
