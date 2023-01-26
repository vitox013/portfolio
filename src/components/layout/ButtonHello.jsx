import "./ButtonHello.css";
import { SiGooglemessages } from "react-icons/si";
function Button({ text, link }) {
  return (
    <div>
      <a href={link}>
        <button className="btn">
          {text}
          <SiGooglemessages />
        </button>
      </a>
    </div>
  );
}
export default Button;
