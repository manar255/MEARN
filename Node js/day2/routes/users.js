const express = require('express');
const router = express.Router();

let users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];


router.get('/', (req, res) => {
    res.json(users);
});
router.post('/', (req, res) => {
    const { name } = req.body;
    const id = users.length + 1;
    users.push({ id, name });
    res.json({ id, name });
});
router.delete('/:id', (req, res) => {
    const id = req.params.id;
     users = users.filter(user => user.id != id);
    res.json('User deleted');
});

module.exports = router;