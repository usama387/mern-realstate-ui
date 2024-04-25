import "./layout.scss";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./routes/HomePage/HomePage";

const AppPage = () => {
  return (
    <div className="layout">
      <div className="Navbar">
        {/* First component */}
        <Navbar />
      </div>

      <div className="content F">
        {/* First route */}
        <HomePage />
      </div>
    </div>
  );
};

export default AppPage;
