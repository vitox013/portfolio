import "./CardTools.css"

function CardTools({name, i1, prim, i2, segu, i3, terc, i4, quar,i5,quint,i6, sext}){
    return (
        <div className="card-tools">
            <h3>{name}</h3>
            <div className="itens">
                <ul>
                    <li><i class={i1} ></i>{prim}</li>
                    <li><i class={i2} ></i>{segu}</li>
                    <li><i class={i3} ></i>{terc}</li>
                </ul>
                <ul>
                    <li><i class={i4} ></i>{quar}</li>
                    <li><i class={i5} ></i>{quint}</li>
                    <li><i class={i6} ></i>{sext}</li>
                </ul>
            </div>
        </div>
    )
}

export default CardTools;

