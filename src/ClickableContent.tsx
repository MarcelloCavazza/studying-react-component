import { Component } from "react";

export class ClickableContent extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        alert("Before the update, the favorite was " + prevState.count);
    }
    render() {
        return (
            <div style={{ border: "1px solid pink", padding: "10px" }}>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Componente Clicavel {this.state.count}</button>
            </div>
        )
    }

}   
