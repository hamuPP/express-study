var fs = require("fs");

function addressList(req,res){
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

    //假如前端请求http://192.168.0.105:10303/addressList/22
    console.log(reqq.url);// /22
    console.log(reqq.baseUrl);// /addressList
    console.log(reqq.originalUrl);// /addressList/22

    //TODO 不该用baseUrl

    switch(reqq.url){
        case '/enterprise/orgs/tree':
            fs.readFile('routes/components/addressList/enterprisesTree.json', 'utf8', (err, data) => {
                if (err) throw err;
                ress.send(data)
            });
            break;
        // case '/portal/page':
        //      setTimeout(function(){
        //         ress.redirect('http://www.baidu.com');
        //     },3000);
        //     break;
        // case '/treeMe':
        //     fs.readFile('routes/portal/enterprisesTree.json', 'utf8', (err, data) => {
        //         if (err) throw err;
        //         ress.send(data)
        //     });
        //     break;
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

module.exports = addressList;