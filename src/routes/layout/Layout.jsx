import Navbar from "../../components/navbar/Navbar";
import HomePage from "../homePage/HomePage";
import "./layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default Layout;
