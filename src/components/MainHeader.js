import { Link, link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">welcome</Link>
          </li>
          <li>
            <Link to="/products">product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
