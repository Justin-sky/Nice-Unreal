import * as UE from 'ue';
import {argv} from 'puerts';



class GameMain{

    constructor(){

    }

    public start(){
        console.log("hello world, this is justin here...222..");


        let world = (argv.getByName("GameInstance") as UE.GameEngine).GetWorld();
      
        let loginPageClass = UE.Class.Load("/Game/Blueprints/UI/BP_LoginPage.BP_LoginPage_C");
        let loginPage = UE.UMGManager.CreateWidget(world, loginPageClass) as UE.BP_LoginPage_C;
    
        loginPage.AddToViewport(0);
        
        loginPage.loginBtn.OnClicked.Add(()=>{
            console.log("justin click me........");
        });
    }
}


new GameMain().start();