const localIsLogged = (req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
}

const localRoles = (req, res, next) => {
    res.locals.roles = req.session.roles;
    next()
}

module.exports = {
    localIsLogged,
    localRoles
}