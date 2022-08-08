const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET all checkins for one user
router.get('/', (req, res) => {
    const id = req.user.id;
    const query = `select * from history, to_char(history.date_created, 'Dy Mon d, yy - hh12:mi AM') as created where user_id = $1;`;
    pool.query(query, [id])
        .then((result) => {
            console.log(`this is what im sending:`, result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('GET error in history.router.js', error);
            res.sendStatus(500);
        });
});

//POST
router.post('/', (req, res) => {
    //const
    const id = req.user.id;
    const b = req.body;
    //1. query MAKES THE FORM
    const sqlQuery = `insert into "history" ("user_id", "feeling", "reflection", "gratitude1", "gratitude2", "gratitude3")
    VALUES ($1, $2, $3, $4, $5, $6);
    `;
    //pool.query
    pool.query(sqlQuery, [
        id,
        b.feeling,
        b.reflection,
        b.gratitude1,
        b.gratitude2,
        b.gratitude3,
    ])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`POST ERROR in history.router.jsx`, err);
            res.sendStatus(500);
        });
}); // END GET Route

module.exports = router;
