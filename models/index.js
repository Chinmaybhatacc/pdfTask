import { DataTypes, Sequelize } from "sequelize"
import { HOST,DB,PASSWORD,USER,dialect as _dialect, pool as _pool } from "../config/dbConfig.js"
import pdfCreation from './pdfModel.js'

const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD, {
    host: HOST,
    dialect: _dialect,
    operatorsAliases: false,

    pool: {
        max: _pool.max,
        min: _pool.min,
        acquire: _pool.acquire,
        idle: _pool.acquire
    }
}
)

//Authentication
sequelize.authenticate()
    .then(() => {
        console.log('connected...');
    })
    .catch(err => {
        console.log('Error' + err);
    })

    //Initiate

  export  const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.info=pdfCreation(sequelize,DataTypes);

db.sequelize.sync({ alter:true })
    .then(() => {
        console.log('yes re-sync done !');
    })
