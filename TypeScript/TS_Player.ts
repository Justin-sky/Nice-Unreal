
import * as UE from 'ue'

class TS_Player extends UE.Character{

    MoveForward(axisValue : number):void{
       // console.log(`justin MoveForward ${axisValue}`)
        this.AddMovementInput(this.GetActorForwardVector(), axisValue, false);
    }

    MoveRight(axisValue:number):void{
        //console.log(`justin MoveRight ${axisValue}`)
        this.AddMovementInput(this.GetActorRightVector(), axisValue, false);
    }

}

export default TS_Player;