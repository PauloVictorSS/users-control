const express = require('express');

const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const allUsers = []

app.use('/add-user', (req, res, next) => {

    res.render('add-user', {
        pageTitle: 'Adicionar um usuário'
    });
});

app.use('/users', (req, res, next) => {

    res.render('users', {
        pageTitle: 'Todos os usuários',
        allUsers
    });
});

app.use('/adding-a-user', (req, res, next) => {

    allUsers.push(req.body);
    res.redirect("/users");
});

app.use('/', (req, res, next) => {

    res.render('index', {
        pageTitle: 'Controle de Usuários'
    });
});


app.listen(3000);