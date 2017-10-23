var http=require("http");
var jade=require("jade");
var fs=require("fs");

http.createServer(function (req,res) {
    var str=jade.renderFile("./views/layout.jade");
    res.write(str);
    res.end()
}).listen(8080);