const util = require('util');
const redis = require('redis');

const client = redis.createClient({
  host: 'localhost',
});

const quit = client.quit.bind(client);

client.on('error', err => {
  if (err.code === 'ECONNREFUSED') {
    console.error(
      new Error(
        'Make sure the redis url and port are correct. Cannot connect to redis instance.'
      )
    );
    quit();
    return;
  }

  console.error(err);
});

process.on('exit', quit);
process.on('SIGTERM', quit);
process.on('SIGINT', quit);

const setPromised = util.promisify(client.setex.bind(client));
const getPromised = util.promisify(client.get.bind(client));

module.exports = {
  set(key, value) {
    return setPromised(key, 500, value);
  },
  get(key) {
    return getPromised(key);
  },
};
