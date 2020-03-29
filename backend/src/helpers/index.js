module.exports = function requestLogger(req, res, next) {
  const user_agent = req.headers['user-agent'];
  const { method, url, params, query } = req;
  const { statusCode } = res;

  console.log('\n---------------------------------------');
  console.log(`Last HTTP Request (${Date.now().toString()}):`)
  console.log(
    {
      response: statusCode,
      request: {
        method,
        url,
        params,
        query,
        user_agent
      }
    });

  next();
}