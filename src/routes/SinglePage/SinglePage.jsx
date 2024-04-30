/* eslint-disable no-unused-vars */
import Slider from "../../components/Slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/data";
import "./SinglePage.scss";

const SinglePage = () => {
  return (
    <div className="singlePage">
      {/* Left Side */}
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

      {/* Right Side */}
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>

          <div className="ListVertical">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="utility" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Rent</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>

          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" />
              <span>3 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" />
              <span>1 Bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="ListHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat" />
              Send Message
            </button>
            <button>
              <img src="/save.png" alt="save" />
              Save Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
