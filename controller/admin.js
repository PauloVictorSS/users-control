const User = require('../model/user.js')

const user = new User();

exports.home = (req, res, next) => {

    res.render('index', {
        pageTitle: 'Controle de Usuários',
        linkActive: "/home"
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

exports.addUser = (req, res, next) => {

    res.render('add-user', {
        pageTitle: 'Adicionar um usuário',
        linkActive: "/add-user"
    });
}

exports.saveUser = (req, res, next) => {

    user.save(req.body)
    res.redirect("/users");
}

exports.editUser = (req, res, next) => {

    const userInfos = user.getUser(req.params.userID)

    res.render('edit-user', {
        pageTitle: 'Editar um Usuário',
        userInfos,
        linkActive: ""
    });
}

exports.editingUser = (req, res, next) => {

    const userID = req.params.userID

    const newInfosUser = {
        ...req.body,
        id: userID
    }

    user.editUser(newInfosUser)
    res.redirect("/users");
}

exports.deleteUser = (req, res, next) => {

    const userID = req.params.userID

    user.delete(userID)
    res.redirect("/users");
}