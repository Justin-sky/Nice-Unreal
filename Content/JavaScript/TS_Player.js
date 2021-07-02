"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
class TS_Player extends UE.Character {
    MoveForward(axisValue) {
        console.log(`justin MoveForward ${axisValue}`);
        this.AddMovementInput(this.GetActorForwardVector(), axisValue, false);
    }
    MoveRight(axisValue) {
        console.log(`justin MoveRight ${axisValue}`);
        this.AddMovementInput(this.GetActorRightVector(), axisValue, false);
    }
}
exports.default = TS_Player;
//# sourceMappingURL=TS_Player.js.map