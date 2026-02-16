const express = require('express');
const router = express.Router(); // router instance

router.use((req, res, next) => {
	console.log(`Student Router Accessed`);
	next();
});

router.get('/', (req, res) => {
    res.send(`Student List `);
})

router.get('/:id',(req, res) => {
    res.send(`Student ID: ${req.params.id}`);
})

module.exports = router;