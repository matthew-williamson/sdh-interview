import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { AppDataSource } from "./data-source";

(async () => {
  try {
    await AppDataSource.initialize();

    console.log("Datasource initialized.");
  } catch (e) {
    console.log("Failed to initialize datasource:", e);
    process.exit(1);
  }

  try {
    const schema = await buildSchema({
      resolvers: [() => __dirname + "/resolvers/**/*.ts"], // TODOMLW
    });

    const server = new ApolloServer({ schema });
    const { url } = await server.listen(4000);
    console.log(`GraphQL server is running at ${url}`);
  } catch (e) {
    console.log("Failed to initialize GraphQL server:", e);
    process.exit(1);
  }
})();
