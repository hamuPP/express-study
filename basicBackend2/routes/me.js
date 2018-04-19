var fs = require("fs");

function me(req,res){
    let method = req.method.toUpperCase();
    switch(method){
        case 'GET':
            VerbGet(req,res);
            break;
        case 'POST':
            VerbPost(req,res);
            break;
        default:
            res.json({
                meta:{
                    code:404,
                    message:"没有这个接口"
                }
            });
            break;
    }
}

/**
 * 全部的get请求
 * @param reqq
 * @param ress
 */
function VerbGet(reqq,ress){
    let baseUrl = reqq.baseUrl;
    let originalUrl = reqq.originalUrl;
    let query = reqq.query;
    console.log(reqq.url);
    console.log(reqq.baseUrl);
    console.log(reqq.originalUrl);

    //TODO 不该用baseUrl

    //不论前端请求啥，一律登录成功
    fs.readFile('routes/me.json', 'utf8', (err, data) => {
        if (err) throw err;
        ress.send(data)
    });
}

/**
 * 全部的get请求
 * @param reqq
 * @param ress
 */
function VerbPost(reqq,ress){
    //不论前端请求啥，一律登录成功
    fs.readFile('routes/login.json', 'utf8', (err, data) => {
        if (err) throw err;
        ress.send(data)
    });
}

module.exports = me;