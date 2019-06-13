const Sequelize = require('sequelize');
const { connection } = require('../config/database');
const { Model } = Sequelize;

class Colaborador extends Model {}
Colaborador.init({
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

}, {
  sequelize: connection,
  modelName: 'colaborador',
  timestamps: false,
});

module.exports = Colaborador;