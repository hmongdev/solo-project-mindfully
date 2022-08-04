const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    const queryText = `select * from "history";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('GET error in history.router.js', error);
            res.sendStatus(500);
        });
});

//POST
// router.post('/', (req, res) => {
//     //const
//     const checkin = req.body;
//     const sqlQuery = `insert into "history" ("feeling", "reflection", "gratitude1", "gratitude2", "gratitude3")
//     VALUES ($1, $2, $3, $4, $5);
//     `;

//     console.log(`New form is:`, checkin);

//     //pool.query
//     pool.query(sqlQuery, [
//         checkin.feeling,
//         checkin.reflection,
//         checkin.gratitude1,
//         checkin.gratitude2,
//         checkin.gratitude3,
//     ])
//         .then((result) => {
//             console.log(`POST Success!`, result);
//             res.sendStatus(201);
//         })
//         .catch((err) => {
//             console.log(`ERR in POST history.router.jsx`, err);
//             res.sendStatus(500);
//         });
// }); // END GET Route

module.exports = router;
