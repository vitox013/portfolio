import "./CardTools.css";

function CardTools({ name, item }) {
  return (
    <div className="card-tools">
      <h3>{name}</h3>
      <div className="itens">
        <ul>
          {item.map((item, index) => (
            <li key={index}>
              <i class={`${item.icon} icons`}></i>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardTools;
