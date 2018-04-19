var fs = require("fs");

function portal(req,res){
    let method = req.method.toUpperCase();
    switch(method){
        case 'GET':
            VerbGet(req,res);
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
    // console.log('=======');
    // console.log(reqq.path);
    // console.log(reqq.url);
    // console.log(reqq.baseUrl);
    // console.log(reqq.originalUrl);
    // console.log('=======');


    //TODO 不该用baseUrl

    switch(reqq.path){
        case '/portal':
            ress.send('yeeeeeh');
            break;
        case '/portal/page':
             setTimeout(function(){
                ress.redirect('http://www.baidu.com');
            },3000);
            break;
        case '/treeMe':
            fs.readFile('routes/portal/enterprisesTree.json', 'utf8', (err, data) => {
                if (err) throw err;
                ress.send(data)
            });
            break;
        case '/resources/admin/functions':
            fs.readFile('routes/portal/functions.json', 'utf8', (err, data) => {
                if (err) throw err;
                ress.send(data)
            });
            break;
            case '/resources/undefined/functions':
            fs.readFile('routes/portal/functions.json', 'utf8', (err, data) => {
                if (err) throw err;
                ress.send(data)
            });
            break;
        default:
            res.json({
                meta:{
                    code:200,
                    message:"没有这个接口,但是为了让前端程序正常运行，后端一律返回200" + url
                }
            });
            break;
    }
}

module.exports = portal;