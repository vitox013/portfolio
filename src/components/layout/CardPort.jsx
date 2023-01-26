import "./CardPort.css";

function CardPort({urlImg, name,url}) {
  return (
    <a href={url} target="_blank">
      <div className="cardPort">
          <img src={urlImg} alt="" />
          <p className="title">{name}</p>
          <p className="demo">Demo <i class='bx bx-link-external seta' ></i></p>
      </div>
    </a>
  );
}

export default CardPort;
