const express = require('express');
const app = express();
const port = 3000;

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
    res.send('Bem-vindo à rota /app/synch');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
