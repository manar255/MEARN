let createtodo = (req, res, next) => {
    const { title } = req.body;
    if (!title) {
        const error = new Error('Title is required');
        error.status = 400;
        next(error);
    }
    if(title.length<3){
        const error = new Error('Title must be atleast 3 characters long');
        error.status = 400;
        next(error);
    }
   
    next();
}

module.exports = {
    createtodo
}