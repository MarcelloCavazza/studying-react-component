import { Component } from "react";
import { B } from "./B";

export class A extends Component {
    private variableLength = [0, 1, 2, 4];

    render() {
        return (
            <div
                style={{
                    border: "1px solid red",
                    padding: "10px",
                    minWidth: "250px",
                    maxWidth: "250px",
                }}
            >
                <b>Componente A</b>
                {this.variableLength.map((i) => {
                    return <B />;
                })}
            </div>
        );
    }
}
