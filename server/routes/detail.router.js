const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`what is id?`, id);

    const queryText = `select * from history where id = $1;`;
    pool.query(queryText, [id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('GET error in history.router.js', error);
            res.sendStatus(500);
        });
});

module.exports = router;
