import "reflect-metadata";

import { DataSource } from "typeorm";

import * as entities from "./entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities,
  subscribers: [],
  migrations: [],
});
