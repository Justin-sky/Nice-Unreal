import * as UE from 'ue';
import {argv} from 'puerts';



class GameMain{

    constructor(){

    }

    public start(){
        console.log("hello world, this is justin here...222..");


        let world = (argv.getByName("GameInstance") as UE.GameEngine).GetWorld();
      
        // let loginPageClass = UE.Class.Load("WidgetBlueprint'/Game/Blueprints/UI/Bag/BagWidget.BagWidget_C'");
        // let loginPage = UE.UMGManager.CreateWidget(world, loginPageClass) as UE.BP_LoginPage_C;
    
        // loginPage.AddToViewport(0);
        
        // let btnNormal = UE.Object.Load("/Game/Asset/UIAsset/Bag/ui_bag_tipbtn_1.ui_bag_tipbtn_1");
        // loginPage.loginBtn.WidgetStyle.Normal.ResourceObject = btnNormal;
        // loginPage.loginBtn.OnClicked.Add(()=>{
        //     console.log("justin click me........");
        //     loginPage.RemoveFromParent();
        // });


        // let bagGridClass = UE.Class.Load("WidgetBlueprint'/Game/Blueprints/UI/Bag/BagGridWidget.BagGridWidget_C'");
        // let bagGrid = UE.UMGManager.CreateWidget(world, bagGridClass) as UE.BagGridWidget_C;
        // let gridPanel = bagGrid.BagGridPanel;

        //let bagGridPanel = bagItem.find

//同步加载 
// LoadObject
// LoadClass
// LoadPackage
// FSoftObjectPath::TryLoad
// FStreamableManager::RequestSyncLoad
// FStreamableManager::LoadSynchronous
// FlushAsyncLoading（异步转同步）

//异步加载
// LoadPackageAsync
// FStreamableManager::RequestAsyncLoad

//判断加载状态
// GIsSavingPackage  判断引擎当前是否在保存Package。
// IsGarbageCollectingOnGameThread 判断引擎当前是否在gc
// IsLoading 判断引擎当前是否正在加载
// GetNumAsyncPackages 返回当前正在加载的包
// GetAsyncLoadPercentage  获取指定资源加载进度
// FStreamableManager::IsAsyncLoadComplete 判断指定的FSoftObjectPath对应的资源是否已经加载完成


        let icon1 = UE.Object.Load("Texture2D'/Game/Asset/UIAsset/Bag/i_s_yy_1.i_s_yy_1'");
        let icon2 = UE.Object.Load("Texture2D'/Game/Asset/UIAsset/Bag/i_s_yysz_2.i_s_yysz_2'");
        let icon3 = UE.Object.Load("Texture2D'/Game/Asset/UIAsset/Bag/i_s_yzhu_1.i_s_yzhu_1'");
        let icons = [icon1, icon2, icon3];
      

        let bagClass = UE.Class.Load("WidgetBlueprint'/Game/Blueprints/UI/Bag/BagWidget.BagWidget_C'");
        let bag = UE.UMGManager.CreateWidget(world, bagClass) as UE.BagWidget_C;
        let bagGrid = bag.BagItemWidget;
        let gridPanel = bagGrid.BagGridPanel;

        let bagGridItemClass = UE.Class.Load("WidgetBlueprint'/Game/Blueprints/UI/Bag/BagGridItemWidget.BagGridItemWidget_C'");
        for(let i=0; i<50; i++){
            
            let bagGridItem = UE.UMGManager.CreateWidget(world, bagGridItemClass) as UE.BagGridItemWidget_C;
            bagGridItem.ItemAmount.SetText(""+i*10);
            let rnd = Math.random()*10%3;
            bagGridItem.ItemImage.Brush.ResourceObject = icons[parseInt(""+rnd)];

            let gridSlot = gridPanel.AddChildToUniformGrid(bagGridItem);

            gridSlot.SetRow(parseInt(""+i/5));
            gridSlot.SetColumn(parseInt(""+i%5));
        }
       

        bag.AddToViewport();
      
    }
}


new GameMain().start();