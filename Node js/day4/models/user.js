const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
    catch (err) {
        next(err);
    }
});
userSchema.methods.isValidPassword = async function (password) {
        try {
            return await bcrypt.compare(password, this.password);
        }
        catch (err) {
            throw new Error(err);
        }
    }
userSchema.methods.generateToken = async function () {
    try {
        const token = await jwt.sign({ id: this._id }, process.env.JWT_SECRET);
        return token;
    }
    catch (err) {
        throw new Error(err);
    }
}
module.exports = mongoose.model('User', userSchema);
