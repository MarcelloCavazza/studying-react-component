import { Component } from "react";
import { ClickableContent } from "./ClickableContent";

export class B extends Component{
    constructor(props: any){
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <div style={{border: "1px solid pink", padding: "10px"}}>
                <button onClick={() => this.setState({count: this.state.count+1})}>Componente B {this.state.count}</button>
            </div>
                <ClickableContent />
            </div>
            
            
        )    
    }   
}   
