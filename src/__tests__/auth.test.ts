import request from "supertest";
import app from "../app";

describe("Auth Endpoints", () => {
  it("should register a new user", async () => {
    const res = await request(app).post("/auth/register").send({
      email: "testuser@example.com",
      password: "password123",
      name: "Test User",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.email).toBe("testuser@example.com");
  });

  it("should not register an existing user", async () => {
    const res = await request(app).post("/auth/register").send({
      email: "testuser@example.com",
      password: "password123",
      name: "Test User",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("ALREADY_USER");
  });

  it("should login a user", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "testuser@example.com",
      password: "password123",
    });
    // Asegúrate de ajustar esto según tu lógica de autenticación
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
