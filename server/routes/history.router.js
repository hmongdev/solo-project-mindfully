const express = require('express');
const { useSelector } = require('react-redux');
const router = express.Router();
const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    const user = useSelector((store) => store.user);
    const queryText = `select * from "history"
    where user_id = $1;`;
    pool.query(queryText, [user.id])
        .then((result) => {
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
    const user = useSelector((store) => store.user);
    const b = req.body;
    const sqlQuery = `insert into "history" ("user_id", feeling", "reflection", "gratitude1", "gratitude2", "gratitude3")
    VALUES ($1, $2, $3, $4, $5, $6);
    `;

    console.log(`user.id:`, user.id);

    //pool.query
    pool.query(sqlQuery, [
        user.id,
        b.feeling,
        b.reflection,
        b.gratitude1,
        b.gratitude2,
        b.gratitude3,
    ])
        .then((result) => {
            console.log(`POST Success!`, result);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`ERR in POST history.router.jsx`, err);
            res.sendStatus(500);
        });
}); // END GET Route

module.exports = router;
