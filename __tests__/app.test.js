const fs = require("fs");
const pool = require("../lib/connection/pool");
const request = require("supertest");
const app = require("../lib/app");

describe("bonus_full-stack-be routes", () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync("./sql/setup.sql", "utf-8"));
  });

  it("tests that a user can post to the /users endpoint successfully", () => {
    return request(app)
      .post("/users")
      .send({
        username: "username",
        email: "email@email.com",
        password: "password",
      })
      .then((res) =>
        expect(res.body).toEqual({
          id: expect.anything(),
          username: "username",
          email: "email@email.com",
          password: "password",
        })
      );
  });
});
