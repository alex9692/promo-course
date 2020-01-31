const acl = require("express-acl");

acl.config({
  baseUrl: "api/v1",
  filename: "nacl.json",
  decodedObjectName: "user",
  path: "server/utils",
  denyCallback: res => {
    return res.status(403).json({
      status: "fail",
      message: "You are not authorized to access this resource"
    });
  }
});

module.exports = acl;
