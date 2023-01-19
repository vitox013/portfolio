import "./ScrollUp.css";
import { Link } from "react-scroll";
const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    this.scrollY > 560
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  });
  return (
    <Link
      className="scrollup"
      to="home"
      spy={true}
      smooth={true}
      isDynamic={true}
      offset={0}
      duration={500}
    >
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </Link>
  );
};

export default ScrollUp;
