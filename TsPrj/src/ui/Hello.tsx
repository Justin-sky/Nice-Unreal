import * as React from 'react';
import { VerticalBox, CanvasPanel, ReactUMG, CanvasPanelSlot, Button, HorizontalBox } from 'react-umg';


interface Props {
    names: string[];
}

interface State {
    names: string[];
    buttonTextureIndex: number;
}

class Hello extends React.Component<Props, State>{

    render(){
        return(
            <CanvasPanel>
                <Button OnClicked={()=>{ console.log("jusitn click....") }}>
                    
                </Button>
            </CanvasPanel>

        );
    }
}

export function Load(){
    return ReactUMG.render(
        <Hello names={["xxxbb"]}></Hello>
    );
}