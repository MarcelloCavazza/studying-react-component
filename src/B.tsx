import { ClickableContent } from "./ClickableContent";

export function B ({makeLoop}){
        return (
            <div>
                <div style={{ border: "1px solid blue", padding: "10px" }}>
                    <div>Componente B</div>

                    <ClickableContent canLoop={makeLoop}/>
                </div>
            </div>
        )
}   
