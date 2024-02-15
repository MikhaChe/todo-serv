const Router = require('express');

const PostController = require('./PostController.js');


const router = new Router();

router.post('/todos', PostController.create);
router.get('/todos', PostController.getAll);
router.get('/todo/:id', PostController.getOne);
router.put('/todos', PostController.update);
router.delete('/todo/:id', PostController.delete);

module.exports = router;