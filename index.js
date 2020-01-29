
const express = require('express');

const app = express();

/**
 * Pegando parametros através do queryParams
 * Exemplo: http://localhost:3000/?name=Maycon
 */

app.get('/', (req, res)=>{
    return res.send(`Bem-Vindo, ${req.query.name}`);
});

/**
 * Pegando parametros vindo da url
 * Exemplo: http://localhost:3000/nome/Maycon
 */

app.get('/nome/:name', (req, res)=>{
    return res.send(`Bem-Vindo, ${req.params.name}`);
});

/**
 * retornando json com o nome vindo da url
 */

app.get('/teste/:name2', (req, res)=>{
    return res.json( {
        message: `Bem vindo, ${req.params.name2}`
    });
});

app.listen(3000);