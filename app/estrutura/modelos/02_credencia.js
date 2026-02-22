import { DataTypes } from "sequelize";
import sequelize from "../../configuracao/db.js";
import Candidato from "./01_candidato.js";

const Credencia = sequelize.define('02_credencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Candidato,
            key: 'id',
        },
        autoIncrement: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nif: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Credencia;