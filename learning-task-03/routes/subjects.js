const express = require('express');
const router = express.Router(); // router instance

router.get('/', (req, res) => {
    res.send(`Subject List `);
})

router.get('/:code',(req, res) => {
    res.send(`Subject Code: ${req.params.code}`);
})

module.exports = router;