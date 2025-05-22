import request from "supertest";
import app from "src/app";
import { connection } from "@persistence/connection";
import "@persistence/relations"

export const api = request(app)

beforeAll(async () => {
  await connection.authenticate({
    logging: false
  });
});

afterAll(async () => {
  await connection.close();
});