// router for /books

const express = require("express");
const router = express.Router(); // Create the Router instance

router.get('/', (req, res) => {
	res.send(`Books List`);
});

router.get('/:id', (req, res) => {
	res.send(`Book: ${req.params.id}`);
});

module.exports = router;