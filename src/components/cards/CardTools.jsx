import "./CardTools.css";
import { tools } from "../data/SkillsData";

function CardTools({ item }) {
  return (
    <div className="card-tools">
      <h3>{item}</h3>
      <div className="itens">
        <ul>
          {tools.map((tool, i) => {
            if (tool.category == item) {
              return (
                <li key={tool.id}>
                  <i class={`${tool.icon} icons`}></i>
                  {tool.title}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default CardTools;
