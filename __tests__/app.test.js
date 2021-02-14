const fs = require("fs");
const pool = require("../lib/connection/pool");
const request = require("supertest");
const app = require("../lib/app");

describe("bonus_full-stack-be routes", () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync("./sql/setup.sql", "utf-8"));
  });

  it("tests that a user can post to the /frogs endpoint successfully", () => {
    return request(app)
      .post("/frogs")
      .send({
        name: "name",
        image: "image",
        description: "description",
      })
      .then((res) =>
        expect(res.body).toEqual({
          id: expect.anything(),
          name: "name",
          image: "image",
          description: "description",
        })
      );
  });
});
