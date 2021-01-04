const config = require('config');

export const db = process.env.MONGODB_URI || `${config.database.mongodb.host}:${config.database.mongodb.port}/${config.database.mongodb.name}`;

export default {
  db
};
