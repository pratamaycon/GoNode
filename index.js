const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});

app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'njk');

const logMiddleware = (req, res, next) =>{

    const { idade } = req.query;

    if (!idade) return res.redirect('/');

    return next();
};

app.get('/', (req, res) =>{
    res.render('age');
});

app.post('/check', (req, res) => {
     const url = req.body.idade > 18 ? `/major?idade=${req.body.idade}` : `/minor?idade=${req.body.idade}`
     return res.redirect(url);
});

app.get('/minor', logMiddleware, (req, res)=>{
    return res.render('minor', { idade : req.query.idade });
});

app.get('/major', logMiddleware, (req, res)=>{
    return res.render('major', { idade : req.query.idade });
});

app.listen(3000);
