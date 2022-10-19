import { Component, useState} from "react";
import { B } from "./B";

export function ALoop () {
   const fakeMap = [0,1,2,3] 
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
                <b>Componente ALoop</b>
                {
                    fakeMap.map((keyPop) => {
                        return(
                            <div key={keyPop}>
                            <B makeLoop={true}/>
                            </div>
                        );
                    })
                }
            </div >
        );
}
