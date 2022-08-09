const express = require('express');
const cors = require('cors');
const routes = require('./app/router/todo.router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);
