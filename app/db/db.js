const Sequelize = require('sequelize');

const sequelize = new Sequelize('todosdb', 'kote', 'kote', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
