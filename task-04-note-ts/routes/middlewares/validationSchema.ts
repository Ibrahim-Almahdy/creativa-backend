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

    body("price")
      .notEmpty()
      .withMessage("price is required")
      .custom((value: any) => {
        if (typeof value !== "number") {
          throw new Error("price must be a number");
        }

        return true;
      }),
  ];
};

module.exports = validationSchema;
