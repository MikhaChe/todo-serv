const sequelize_db = require("./db.js");
const { DataTypes } = require("sequelize");

const todoData = sequelize_db.define('todo_data', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  body: {type: DataTypes.TEXT, allowNull: false},
  urgency_chk: {type: DataTypes.TINYINT(1)},
  execution_chk: {type: DataTypes.TINYINT(1)},
},
{
  timestamps: false,
  tableName: 'todo_data'
})

module.exports = {
  todoData
};


// const Users = sequelize_db.define('users', {
//   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//   email: {type: DataTypes.STRING},
//   password: {type: DataTypes.STRING}
// },
// {
//   timestamps: false,
//   tableName: 'users'
// }
// )





