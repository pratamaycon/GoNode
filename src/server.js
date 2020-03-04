import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';


class App{
    constructor(){
        this.express = express();
        this.isDev = process.env.NODE_ENV !== 'production';

        this.middlewares();
        this.views();
        this.routes();
    }

    middlewares(){
        this.express.use(express.urlencoded({ extended: false }));
    }

    views(){
        nunjucks.configure(path.resolve(__dirname, 'app' , 'views'), {
            watch: this.isDev,
            express: this.express,
            autoescape: true
        });

        this.express.set('view engine', 'njk');
    }

    routes(){
        this.express.use(require('./routes'));
    }
}

export default new App().express;