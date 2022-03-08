const express = require('express');
const usersController = require('./controller/admin.js')

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/users', usersController.getUsers);

app.use('/add-user', usersController.addUser);

app.use('/adding-a-user', usersController.saveUser);

app.use('/deleting-post', usersController.deleteUser);

app.use('/', usersController.home);


app.listen(3000);