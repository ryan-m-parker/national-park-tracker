const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

app.set('db', new sqlite3.Database('./nationalParkTracker.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
}));

const visitsController = require('./controllers/visitsController')

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(express.json());
app.use('/visits', visitsController);

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});