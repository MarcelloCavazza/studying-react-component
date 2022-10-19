import { Component } from "react";
import { B } from "./B";

export class A extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            components: [],
        };
    }
    render() {
        return (
            <div
                style={{
                    border: "1px solid red",
                    padding: "10px",
                    minWidth: "250px",
                    maxWidth: "250px",
                    overflowY: "auto",
                    height: "600px",
                    overflowX: "hidden",
                }}
            >
                <b>Componente A</b>
                <button
                    onClick={() =>
                        this.setState({ components: [...this.state.components, <B />] })
                    }
                >
                    Criar componente
                </button>
                {this.state.components.map(() => {
                    return <B />;
                })}
            </div>
        );
    }
}
