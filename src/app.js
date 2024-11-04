const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect('/app/synch');
});

app.use((req, res, next) => {
    if (req.path !== '/app/synch') {
        return res.redirect('/app/synch');
    }
    next();
});

app.get('/app/synch', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
