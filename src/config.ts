import 'dotenv/config'

const {
  APP_KEY = 'secret',
  APP_EXPIRE_JWT = '1 day',
  APP_PORT = '3000',
  APP_HOST = 'localhost',
  APP_CORS,

  DB_HOST = 'localhost',
  DB_PORT = '5432',
  DB_USER = 'postgres',
  DB_PASSWORD = '12345678',
  DB_NAME = 'livbox',
  
  TEST_DB_HOST = 'localhost',
  TEST_DB_PORT = '5432',
  TEST_DB_USER = 'postgres',
  TEST_DB_PASSWORD = '12345678',
  TEST_DB_NAME = 'livbox_test',

  NODE_ENV = 'development'
} = process.env

export {
  APP_KEY,
  APP_EXPIRE_JWT,
  APP_PORT,
  APP_HOST,
  APP_CORS,
  
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,

  TEST_DB_HOST,
  TEST_DB_PORT,
  TEST_DB_USER,
  TEST_DB_PASSWORD,
  TEST_DB_NAME,

  NODE_ENV
}