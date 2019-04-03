const good = require('good');

module.exports = {
  plugin: good,
  options: {
    reporters: {
      consoleReporter: [
        {
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{ log: '*', response: '*', request: '*' }],
        },
        {
          module: 'good-console',
        },
        'stdout',
      ],
    },
  },
};
