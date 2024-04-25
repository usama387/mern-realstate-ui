import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Residencies & Get Your Dream Place</h1>
          <p>
            Discover your dream home with ease - our intuitive platform connects
            you to the perfect property match. Simplify your search and find
            your ideal space effortlessly
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Selling</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Satisfied Clients</h2>
            </div>

            <div className="box">
              <h1>200+</h1>
              <h2>Residencies To Buy</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="background-image" />{" "}
      </div>
    </div>
  );
};

export default HomePage;
