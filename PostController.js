const {todoData} = require("./models.js");

class PostController {
  async create(req, res) {
    try {
      const {body, urgency_chk, execution_chk} = req.body;
      const instTodoData = todoData;

      instTodoData.sync({alter: true}).then(() => {
      }).then(() => {console.log('Table added to database');
      }).catch((err) => { console.log(err)});

    const data = await instTodoData.create({body, urgency_chk, execution_chk});
    return res.json({data});
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const instTodoData = await todoData.findAll();
      return res.json(instTodoData);
    } catch (e) {
      res.status(500).json(e)
    }  
  }

  async getOne(req, res) {
    try {
      const {id} = req.params;
      console.log(id);
      if(!id) {
        res.status(400).json({message: 'Id does not exist'})
      }
      const instTodoData = await todoData.findOne({where: {id}});
      return res.json(instTodoData);
    } catch (e) {
      res.status(500).json({message: `Id does not exist`})
    }  
  }

  async update(req, res) {
    try {
      const todo = req.body;
      console.log(todo.body)

      if(!todo.id) {
        res.status(400).json({message: 'Id does not exist'});
      }
      const updatedTodoData = await todoData.update(todo, {where: {id: todo.id}});
      return res.json(updatedTodoData);
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
      const {id} = req.params;
      if(!id) {
        res.status(400).json({message: 'Id does not exist'})
      }
      const todoDelete = await todoData.destroy({where: {id}});
      return res.json(todoDelete);
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = new PostController();