import { useEffect, useState} from "react";

export function ClickableContent({canLoop}){ 
    const [counter, setCounter] = useState(0)
    if(canLoop)
    {

    useEffect(()=>{
        setTimeout(()=>{
            setCounter(()=>counter+1)
        },1000)
    }, [counter])
    }

    return (
            <div style={{ border: "1px solid pink", padding: "10px" }}>
                <button onClick={() => setCounter(counter+1)}>Componente Clicavel {counter}</button>
            </div>
        )
}   
