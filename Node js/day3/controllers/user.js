const users = [];

const createUser = async (req, res, next) => {
    try {
        const { username, password, firstName, lastName, dob } = req.body;

        users.push({
            id: users.length + 1,
            username,
            password,
            firstName,
            lastName,
            dob,
            create_at: new Date(),
            update_at: new Date()
        });

        res.status(201).json({ message: 'User created successfully' });
    }
    catch (err) {
        next(err)
    }
}

const getUsers = async (req, res, next) => {
    try {
        res.status(200).json(users);
    }
    catch (err) {
        next(err)
    }
}
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = users.find(user => user.id === parseInt(id));
        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }
        res.status(200).json(user);
    }
    catch (err) {
        next(err)
    }
}

const deleteUser = (req, res, next) => {
    try {
        const id = req.params.id;
        const userIndex = users.findIndex(user => user.id === parseInt(id));
        if (userIndex === -1) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }
        users.splice(userIndex, 1);
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (err) {
        next(err)
    }
}

const updateUser = (req, res, next) => {
    try {
        const id = req.params.id;
        const { username, firstName, lastName, dob } = req.body;
        const userIndex = users.findIndex(user => user.id === parseInt(id));

        if (userIndex === -1) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }
        users[userIndex] = { username:username||users[userIndex].username, firstName, lastName, dob };
        res.status(200).json({ user: users[userIndex], message: 'User updated successfully' });
    }
    catch (err) {
        next(err)
    }
}



module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUser, updateUser
}