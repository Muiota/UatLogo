var connect = require('connect');
var serveStatic = require('serve-static');
//https://raw.githubusercontent.com/afonsopacifer/cdn/master/earthmap1k.jpg
//https://raw.githubusercontent.com/afonsopacifer/cdn/master/jupitermap.jpg
connect()
    .use(serveStatic(__dirname))
    .listen(8081, () => console.log('Server running on 8081...'));