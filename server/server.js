let path = require('path');

let jsonServer = require('json-server');

let server = jsonServer.create();
let router = jsonServer.router(path.join(__dirname, 'db.json'));
let middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api/', router);
server.listen(8080, function() {
	console.log('JSON Server is running');
});