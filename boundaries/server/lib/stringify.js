const stringifySafe = require('json-stringify-safe');

module.exports = {
  stringify(value) {
    const type = typeof value;

    if (type === 'string') {
      return value;
    }

    if (type === 'object') {
      return stringifySafe(value);
    }

    return `${value}`;
  },
};
