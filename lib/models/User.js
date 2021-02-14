const pool = require("../connection/pool");

module.exports = class User {
  id;
  username;
  email;
  password;

  constructor({ id, username, email, password }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static async insert({ username, email, password }) {
    const { rows } = await pool.query(
      `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)
        RETURNING *;
      `,
      [username, email, password]
    );

    return new User(rows[0]);
  }
};
