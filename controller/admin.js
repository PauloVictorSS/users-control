const allUsers = []

exports.addUser = (req, res, next) => {

    res.render('add-user', {
        pageTitle: 'Adicionar um usuário',
        linkActive: "/add-user"
    });
}

exports.getUsers = (req, res, next) => {

    res.render('users', {
        pageTitle: 'Todos os usuários',
        allUsers,
        linkActive: "/users"
    });
}

exports.saveUser = (req, res, next) => {

    allUsers.push({
        ...req.body,
        id: allUsers.length
    });
    res.redirect("/users");
}

exports.deleteUser = (req, res, next) => {

    allUsers.splice(req.body.userID, 1);
    res.redirect("/users");
}

exports.home = (req, res, next) => {

    res.render('index', {
        pageTitle: 'Controle de Usuários',
        linkActive: "/home"
    });
}