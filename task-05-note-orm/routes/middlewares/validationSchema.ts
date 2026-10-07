const { body } = require("express-validator");

const validationSchema = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("title is required")
      .isString()
      .withMessage("title must be a string")
      .custom((value: string) => {
        if (!isNaN(Number(value))) {
          throw new Error("title must contain text");
        }

        return true;
      }),

    body("content")
      .notEmpty()
      .withMessage("content is required")
      .isString()
      .withMessage("content must be a string"),
  ];
};

module.exports = validationSchema;
