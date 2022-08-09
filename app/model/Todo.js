const DataTypes = require('sequelize');
const sequelize = require('../db/db');

const Todo = sequelize.define('todos', {
  todoItem: {
    type: DataTypes.STRING,
  },
  checked: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Todo;
