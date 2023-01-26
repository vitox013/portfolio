import "./CardAbt.css"
import { useState } from "react";

function CardAbt({icon, text, anima}) {

    const [animation, setAnimation] = useState('');

    return (
        <div className="card" onMouseEnter={() => setAnimation(anima)} onMouseLeave={()=> setAnimation('')}>
            <i class={`bx ${icon} abt ${animation}`}></i>
            <p>{text}</p>
            <i class='bx bx-check check'></i>
        </div>
    )
}

export default CardAbt;
