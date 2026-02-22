import { DataTypes } from "sequelize";
import sequelize from "../../configuracao/db.js";

const Candidato = sequelize.define('01_candidato', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Candidato;