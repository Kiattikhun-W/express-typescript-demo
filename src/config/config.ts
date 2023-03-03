interface DatabaseConfig {
  host: string;
  port: number;
  name: string;
}

interface EnvironmentConfig {
  port: number;
  database: DatabaseConfig;
}

interface Config {
  development: EnvironmentConfig;
  production: EnvironmentConfig;
}

const config: Config = {
  development: {
    port: 3000,
    database: {
      host: "localhost",
      port: 27017,
      name: "myapp_dev",
    },
  },
  production: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
    database: {
      host: process.env.DB_HOST ?? "localhost",
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 27017,
      name: process.env.DB_NAME ?? "myapp_prod",
    },
  },
};

export default config;
