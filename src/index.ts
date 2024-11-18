import { AppDataSource } from "./data-source";
import { Example } from "./entity";

(async () => {
  try {
    await AppDataSource.initialize();

    console.log("Datasource initialized.");
  } catch (e) {
    console.log("Failed to initialize datasource:", e);
    process.exit(1);
  }
})();
