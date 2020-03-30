const requestLogger = (req, res, next) => {
  const user_agent = req.headers["user-agent"];
  const { method, url, params, query } = req;

  console.log("\n---------------------------------------");
  console.log(`Last HTTP Request (${Date.now().toString()}):`);
  console.log({
    request: {
      method,
      url,
      params,
      query,
      user_agent
    }
  });

  next();
};

const generateUniqueId = () => {
  const crypto = require("crypto");

  return crypto.randomBytes(4).toString("HEX");
};

module.exports = {
  requestLogger,
  generateUniqueId
};
