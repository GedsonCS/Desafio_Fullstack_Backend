import "dotenv/config";
import path from "path";

import { DataSourceOptions, DataSource } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "entities/**.{js,ts}");
  const migrationsPath = path.join(__dirname, "migrations/**{js,ts}");
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Missing env var: 'DATABASE_URL'");
  }
  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
