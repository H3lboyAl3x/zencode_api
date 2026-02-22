import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_User,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: false
        }
    }
);

export default sequelize;

(async () => {
    try {
        await sequelize.sync({force: true});
        console.log("Tabelas sicronizadas");
    }
    catch (error){
        console.error("Erro ao sincronizar tabelas:", error);
    }
})();