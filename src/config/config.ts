import { Dialect } from 'sequelize';
import dotenv  from "dotenv";
dotenv.config({ path: '.env' });

interface IConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
}

const config: IConfig = {
    username: process.env.PG_USER || "your_username",
    password: process.env.PG_PASSWORD || "your_password",
    database: process.env.PG_DATABASE || "your_database",
    host: "127.0.0.1",
    dialect: "postgres"
};

export default config;
