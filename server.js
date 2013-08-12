var connect = require('connect');
connect.createServer(
    connect.static(__dirname + "/public", { maxAge: 86400000 })
).listen(8080);