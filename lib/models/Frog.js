const pool = require("../connection/pool");

module.exports = class Frog {
  id;
  name;
  image;
  description;

  constructor({ id, name, image, description }) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
  }

  static async insert({ name, image, description }) {
    const { rows } = await pool.query(
      `
        INSERT INTO frogs (name,  image, description)
        VALUES ($1, $2, $3)
        RETURNING *;
      `,
      [name, image, description]
    );

    return new Frog(rows[0]);
  }
};
