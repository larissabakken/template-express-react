import request from "supertest";
import app from "../src/service";

describe("Test app", () => {
    it('should respond with "Not Found" for unknown routes', async () => {
      const res = await request(app).get("/unknown-route");
      expect(res.status).toBe(404);
      expect(res.text).toBe("Not Found");
    });
  });