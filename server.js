const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(
    bodyParser.json(
        {
            limit: '50mb',
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.json({
        message: "visit /log to log data to the server."
    })
})

/**
 * @param {{
 *     log: String,
 *     author: String,
 * }} req.body
 */
app.post('/log', (req, res) => {
    console.log(req.body);
    const {log, author} = req.body;

    // fs.writeFileSync('/app/data/logs.txt', `${log} - ${author}`);

    res.json({
        message: 'File Written Successfully!'
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
