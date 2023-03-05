interface DatabaseConfig {
  host: string;
  port: number;
  name: string;
  user:string;
  password:string;
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
      host: process.env.host ?? "host.docker.internal",
      port: process.env.port ? parseInt(process.env.port, 10) : 9900,
      name: process.env.name ?? "express-typescript-demo",
      user: process.env.user ?? "root",
      password: process.env.password ?? "root",
    },
  },
  production: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
    database: {
      host: process.env.DB_HOST ?? "localhost",
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 27017,
      name: process.env.DB_NAME ?? "myapp_prod",
      user: process.env.user ?? "root",
      password: process.env.password ?? "root",
    },
  },
};

export default config;
