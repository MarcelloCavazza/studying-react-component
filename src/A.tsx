import { Component } from "react";
import { B } from "./B";

export class A extends Component{
    render() {
        return (
            <div style={{border: "1px solid red", padding: "10px", minWidth: "250px",maxWidth: "250px", minHeight: "250px", maxHeight: "250px"}}>
                <b>Componente A</b>
                <B />
            </div>
        )
    }
}   