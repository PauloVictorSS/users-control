const User = require('../model/user.js')

const user = new User();

exports.addUser = (req, res, next) => {

    res.render('add-user', {
        pageTitle: 'Adicionar um usuário',
        linkActive: "/add-user"
    });
}

exports.getUsers = (req, res, next) => {

    const allUsers = user.fetchAll();

    res.render('users', {
        pageTitle: 'Todos os usuários',
        allUsers,
        linkActive: "/users"
    });
}

exports.saveUser = (req, res, next) => {

    user.save(req.body)
    res.redirect("/users");
}

exports.deleteUser = (req, res, next) => {

    const userID = req.body.userID

    user.delete(userID)
    res.redirect("/users");
}

exports.home = (req, res, next) => {

    res.render('index', {
        pageTitle: 'Controle de Usuários',
        linkActive: "/home"
    });
}