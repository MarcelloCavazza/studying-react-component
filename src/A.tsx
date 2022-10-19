import { Component, useState} from "react";
import { B } from "./B";

export function A (){
    const [listOfB, setListOfB] = useState([])
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
                }
                }
            >
                <b>Componente A</b>
                <button onClick={() =>  setListOfB([...listOfB, <B />] )}>Criar componente</button>
                {
                    listOfB.map((keyPop) => {
                        return (
                            <div key={keyPop    }>
                            <B makeLoop={false}/>
                            </div>
                            );
                    })
                }
            </div >
        );
}
