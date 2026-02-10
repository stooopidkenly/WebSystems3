// router for /users

const express = require("express");
const router = express.Router(); // Create the Router instance

router.get('/', (req, res) => {
	res.send(`Users List`);
});

router.get('/:id', (req, res) => {
	res.send(`User: ${req.params.id}`);
});

module.exports = router;