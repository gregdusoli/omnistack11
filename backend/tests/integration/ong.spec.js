const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able o create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAE",
        email: "mail@mail.com",
        whatsapp: "5199999999",
        city: "Porto Alegre",
        uf: "RS"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
