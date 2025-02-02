// const users = [];
const User = require('../models/user');



const createUser = async (req, res, next) => {
    try {
        const { username, password, firstName, lastName, dob } = req.body;

        const user = await User.create({
            username,
            password,
            firstName,
            lastName,
            dob
        });

        res.status(201).json({user, message: 'User created successfully' });
    }
    catch (err) {
        next(err)
    }
}

const login=async(req,res,next)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username});
        if(!user){
            const error=new Error('User not found');
            error.status=404;
            throw error;
        }
        const isValidPassword=await user.isValidPassword(password);
        if(!isValidPassword){
            const error=new Error('Invalid password');
            error.status=401;
            throw error;
        }
        const token=await user.generateToken();
       
        res.status(200).json({token,message:'Login successful'});
    }
    catch(err){
        next(err);
    }
}
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (err) {
        next(err)
    }
}
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await User.findById(id);

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

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndRemove(id);
        res.status(200).json({user, message: 'User deleted successfully' });
    }
    catch (err) {
        next(err)
    }
}

const updateUser = (req, res, next) => {
    try {
        const id = req.params.id;
        const { username, firstName, lastName, dob } = req.body;

        const user = User.findByIdAndUpdate(id, { username, firstName, lastName, dob }, { new: true });

        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }
        res.status(200).json({ user, message: 'User updated successfully' });
    }
    catch (err) {
        next(err)
    }
}



module.exports = {
    createUser,
    login,
    getUsers,
    getUserById,
    deleteUser, updateUser
}