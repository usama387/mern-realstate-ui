import Slider from "../../components/Slider/Slider";
import { singlePostData, userData } from "../../lib/data";
import "./SinglePage.scss";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="address" />
                  <span>{singlePostData.address}</span>
                </div>

                <div className="price">{singlePostData.price} pkr</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default SinglePage;
