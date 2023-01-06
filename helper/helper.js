var crypto = require("crypto"),
  algorithm = "aes-256-ctr",
  password = "d6F3Efeq3hd6f3";
let key = crypto
  .createHash("sha256")
  .update(String(password))
  .digest("base64")
  .substr(0, 32);
const iv = Buffer.alloc(16, 0);

module.exports.encrypt = function (text) {
  var cipher = crypto.createCipheriv(algorithm, key, iv);
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
};

module.exports.decrypt = function (text) {
  var decipher = crypto.createDecipheriv(algorithm, key, iv);
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
};
