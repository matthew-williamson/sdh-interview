# Second Door Health Interview Boilerplate

This repo contains backend boilerplate code to help get you started with the Second Door Health technical challenge. Configuration for the following is included within:

**TypeScript**

- Dependencies for TypeScript and associated configuration via tsconfig.json.

**Docker**

- A dockerfile for building your backend image.
- A docker-compose file for orchestrating your backend implementation with a postgreSQL database.

**TypeORM**

- TypeORM data source configured for connectivity to the local postgres database.
- An "Example" entity.

**package.json**

- a "dev" script defined with ts-node-dev for compilation and hot reloading.

## Getting Started

1. Clone the repo
2. Install dependencies: `npm install`
3. Build the project: `docker compose build`
4. Start the project: `docker compose up`
