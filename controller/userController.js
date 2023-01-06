const { Validator } = require("node-input-validator");

// For create users
module.exports.addUser = (req, res) => {
  let formData = req.body;
  let schema = {
    name: "required",
    email: "required",
    contact: "required",
    pass: "required",
  };
  const validateData = new Validator(formData, schema);
  validateData.check().then(function (matched) {
    if (!matched) {
      res.status(200).json({
        status: false,
        message: "Somthing went wrong",
        error: validateData.errors,
      });
    } else {
      sql.select(["*"]);
      sql.where(`(eml= '${formData.email}')`);
      sql.get("users", (err, result) => {
        if (err) {
          res.status(200).json({
            status: false,
            message: "Somthing went wrong",
            error: err,
          });
        } else {
          if (result.length > 0) {
            res.status(200).json({
              status: true,
              message: "email already exist",
            });
          } else {
            let info = {};
            info.table = "users";
            info.data = {
              name: formData.name,
              eml: formData.email,
              mob: formData.contact,
              pass: helper.encrypt(formData.pass),
            };
            sql.insert(info.table, info.data, (err, result) => {
              if (err) {
                res.status(200).json({
                  status: false,
                  message: "Somthing went wrong",
                  error: err,
                });
              } else {
                res.status(200).json({
                  status: true,
                  data: result,
                  message: "User created",
                });
              }
            });
          }
        }
      });
    }
  });
};

// For getting all users list

module.exports.getAllUsers = (req, res) => {
  let info = {};
  info.table = "users";
  info.column = "*";
  sql.select(["*"]);
  sql.where(`(status= '1')`);
  sql.get(info.table, (err, result) => {
    if (err) {
      res.status(200).json({
        status: false,
        message: "something went wrong",
        error: err,
      });
    } else {
      res.status(200).json({
        status: true,
        message: "getting user list successfully",
        data: result,
      });
    }
  });
};

// For update users
