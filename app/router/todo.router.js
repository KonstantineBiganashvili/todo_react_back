const express = require('express');

const router = express.Router();
const controller = require('../controller/todo.controller');

const app = express();

router.route('/').get(controller.getTodo).post(controller.postTodo);

router
  .route('/:id')
  .patch(controller.editTodoById)
  .delete(controller.deleteTodoById);

app.use(router);

module.exports = router;
