/**
 *  https://git.fxiaoke.com
 *  @author: cuiyx
 */
var http = require("http");
var fs = require("fs");
var url = require("url");

var querystring = require('querystring');
var util = require('util');



function onRequest(request, response) {

    var body = [];
    console.log(request.method) ;
    console.log(request.headers) ;
    request.on('data', function (chunk) {
        body.push(chunk);
    }) ;
    request.on('end', function () {
        body = Buffer.concat(body) ;
        console.log(body.toString()) ;
    });


    var post = '';
    request.on('data', function(chunk){
        post += chunk;
    });
    post = querystring.parse(post);
    console.log("请求参数:"+util.inspect(post))

    var pathname = url.parse(request.url).pathname;
    console.log("请求地址:"+pathname);
    response.writeHead(200, {
        "Content-Type": 'text/plain',
        'charset': 'utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
    });//可以解决跨域的请求
    var n = 'none';

    n = pathname.substring(1, pathname.length); // 取子字符串。
    console.log("文件名:"+n);

    fs.readFile("json/"+n + '.json', function (err,data) {

        if(err){
            response.write("{'code':'error','message':'server read file error!'}");
            response.end();
        }else{
            response.write(data.toString());
            response.end();
        }

    });

}

http.createServer(onRequest).listen(8888);

console.log("Server has started.port on 8888\n");
