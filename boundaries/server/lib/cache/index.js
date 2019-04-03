const redis = require('./redis');

module.exports = {
  async cacheRequest(token, func) {
    const result = await redis.get(token);

    if (result) {
      return result;
    }

    const funcResult = await func();

    await redis.set(token, funcResult);

    return funcResult;
  },
};
