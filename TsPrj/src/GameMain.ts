import * as UE from 'ue';
import {argv} from 'puerts';
import {ReactUMG} from 'react-umg';

class GameMain{

    constructor(){

    }

    public start(){
        console.log("hello world, this is justin here...222..");


        let world = (argv.getByName("GameInstance") as UE.GameEngine).GetWorld();
        console.log(world);
       ReactUMG.init(world);

        
    }
}


new GameMain().start();