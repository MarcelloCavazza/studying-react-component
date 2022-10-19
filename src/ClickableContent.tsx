import { useEffect, useState} from "react";

export function ClickableContent(){ 
    const [counter, setCounter] = useState(0)
    return (
            <div style={{ border: "1px solid pink", padding: "10px" }}>
                <button onClick={() => setCounter(counter+1)}>Componente Clicavel {counter}</button>
            </div>
        )
}   
