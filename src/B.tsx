import { Component } from "react";
import { ClickableContent } from "./ClickableContent";

export class B extends Component {

    render() {
        return (
            <div>
                <div style={{ border: "1px solid blue", padding: "10px" }}>
                    <div>Componente B</div>

                    <ClickableContent />
                </div>
            </div>


        )
    }
}   
