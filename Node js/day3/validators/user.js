const createUser = (req, res, next) => {
    const { username, password, firstName, lastName, dob } = req.body;
    if (!username) {
        const error = new Error('Username is required');
        error.status = 400;
        next(error);
    }
    if (username.length < 3) {
        const error = new Error('Username must be atleast 3 characters long');
        error.status = 400;
        next(error);
    }
    if (!password) {
        const error = new Error('Password is required');
        error.status = 400;
        next(error);
    }
    if (password.length < 6) {
        const error = new Error('Password must be atleast 6 characters long');
        error.status = 400;
        next(error);
    }
    if (!firstName) {
        const error = new Error('First name is required');
        error.status = 400;
        next(error);
    }
    if (firstName.length < 3) {
        const error = new Error('First name must be atleast 3 characters long');
        error.status = 400;
        next(error);
    }
    if (!lastName) {
        const error = new Error('Last name is required');
        error.status = 400;
        next(error);
    }
    if (lastName.length < 3) {
        const error = new Error('Last name must be atleast 3 characters long');
        error.status = 400;
        next(error);
    }
    next();
}

const updateUser = (req, res, next) => {
    const { username, firstName, lastName, dob } = req.body;
    if (!username && username.length < 3) {
        const error = new Error('Username must be atleast 3 characters long');
        error.status = 400;
        next(error);
    }
    if (!firstName && firstName.length < 3) {
        const error = new Error('First name must be atleast 3 characters long');
        error.status = 400;
        next(error);
    }
    if (!lastName && lastName.length < 3) {
        const error = new Error('Last name must be atleast 3 characters long');
        error.status = 400;
        next(error);
    }
    next();
}



module.exports = {
    createUser,
    updateUser
}