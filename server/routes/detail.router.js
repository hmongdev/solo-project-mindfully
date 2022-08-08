const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET one specific checkin
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = `select * from history, to_char(history.date_created, 'Dy Mon d, yy - hh12:mi AM') as created where id = $1;`;

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
