const request = require("supertest");
const app = require("../app");

describe("Dashboard Test", () => {

    it("GET / harus mengembalikan status 200", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

    });

});