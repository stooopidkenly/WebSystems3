// router for /admin

const express = require("express");
const router = express.Router(); // Create the Router instance

// Router-level Middleware
// This middleware ONLY runs for routes defined on admin router.
router.use((req, res, next) => {
	console.log(`Admin Router Middleware`);
	next();
});

router.get('/settings', (req, res) => {
	res.send(`Settings Page`);
});

router.get('/stats', (req, res) => {
	res.send(`Stats Page`);
});

module.exports = router;