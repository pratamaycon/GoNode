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

const Users = ['Maycon Prata', 'Lyssa Melo', 'Viviane Prata'];


app.get('/', (req, res) => {
    res.render('list', { Users })
});

app.get('/new', (req, res) =>{
    res.render('new');
});

app.post('/create', (req, res) =>{
    Users.push(req.body.user);
    console.log(req.body);
    res.redirect("/")
});

app.listen(3000);