import "./CardPort.css";

function CardPort({ item }) {
    return (
        <div className={`cardPort`}>
            <a href={item.url} target="_blank" key={item.id}>
                <img src={item.image} alt="" />
                <p className="title">{item.title}</p>
                <p className="demo">
                    Demo <i class="bx bx-link-external seta"></i>
                </p>
            </a>
            <a href={item.repository} target="_blank">
                <i className="bx bxl-github git"></i>
            </a>
        </div>
    );
}

export default CardPort;
