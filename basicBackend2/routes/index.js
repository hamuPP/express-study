function index(req,res){
    console.log(req.method);

    let method = req.method.toUpperCase();
    switch(method){
        case 'GET':
            getFunction(req,res);
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

function getFunction(reqq,ress){
    ress.send('jjjjj');
}

module.exports = index;