const Server = require('./server');

Server.createServer({ host: 'localhost', port: 3000 }).then(async server => {
  process.on('exit', server.stop);
  process.on('SIGINT', server.stop);
  process.on('SIGTERM', server.stop);

  await server.start();
});
