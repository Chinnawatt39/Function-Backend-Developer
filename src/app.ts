import express, { Application } from 'express';
import * as bodyParser from "body-parser";

//config
import config from './config/config.json'

import main from './route/main'
import { min } from 'moment';

export async function index(){
    const app = new App();
}

export class App{

    private app: Application;
    constructor(private port?: number | string){
        this.app = express();
        this.setting();
        this.listen();
        this.config();
        this.routes()
    }

    routes(){
        this.app.use(main);

    }


    setting(){
        this.app.set('port',this.port || process.env.PORT || config.app.port || 8001);
    }

    //ข้อ 1

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server runing port',this.app.get('port'))
    }

    private config(): void {
        this.app.use(bodyParser.json({limit: '50mb'}));
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

index();