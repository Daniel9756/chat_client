require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DATABASE_MODELS,
    password: process.env.PASSWORD_MODELS,
    database: process.env.DATABASE_MODELS,
    host: process.env.DATABASE_HOST_MODELS,
    dialect: process.env.DATABASE_MODELS,
  },
  test: {
    username: process.env.DATABASE_MODELS,
    password: process.env.PASSWORD_MODELS,
    database: process.env.DATABASE_MODELS,
    host: process.env.DATABASE_HOST_MODELS,
    dialect: process.env.DATABASE_MODELS,
  },
  production: {
    username: process.env.DATABASE_MODELS,
    password: process.env.PASSWORD_MODELS,
    database: process.env.DATABASE_MODELS,
    host: process.env.DATABASE_HOST_MODELS,
    dialect: process.env.DATABASE_MODELS,
  },
};
