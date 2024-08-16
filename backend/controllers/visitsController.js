const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.app.get('db').all('SELECT id, parkCode FROM visits', (err, rows) => {
        if (err) {
            console.error(err.message);
        } else {
            res.send(rows);
        }
    })
});

router.post('/', (req, res) => {
    const db = req.app.get('db')
    const { parkCode } = req.body;
    if (!parkCode) {
        res.status(400).send('Park code is required');
    } else {
        const sql = 'INSERT INTO visits(parkCode) VALUES (?)';
        db.run(sql, [parkCode], function (err) {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal server error');
            } else {
                const id = this.lastID;
                res.status(201).send({ id, parkCode });
            }
        });
    }
});

router.delete('/:id', (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    db.run('DELETE FROM visits WHERE id = ?', [id], function (err) {
        console.log(this);
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
        } else if (this.changes === 0) {
            res.status(404).send('Visit not found');
        } else {
            res.status(204).send();
        }
    });
});

module.exports = router;