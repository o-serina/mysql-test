const express = require('express');
const mysql = require('mysql');

const port = process.env.port || 3000;
const app = express();

var connection = mysql.createConnection({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5738184',
    password: 'byBDWwg6qR',
    database: 'sql5738184'
});

app.get('/api/signup', async (req, res) => {
    const {username, password} = res.body;
    const pwd = encryptPassword(password);
    const date = transformDate(new Date());
    connection.connect();

    connection.query('INSERT INTO user VALUES ("", ?,?, date)', [date], function (error, results, fields) {
        connection.end();
        if (error) throw error;
        res.json(results);
    });

});

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});