const express = require('express');
const cors = require('cors');
const sequelize_db = require('./db.js');
const router = require('./router.js');
const models = require('./models.js');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5005;

const  app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router)

async function startApp() {
  try {
    await sequelize_db.authenticate().then(() => {
      console.log('Connection successful!');
    }).catch((err) => {
      console.log(err + ' Error connecting to database!');
  });
    await sequelize_db.sync();
    app.listen(PORT, () => console.log('SERVER HAS STARTED ON PORT' + PORT));
    const todos = models.todoData;
    todos.create
  } catch (e) {
    console.log(e);
  }
}

startApp();

