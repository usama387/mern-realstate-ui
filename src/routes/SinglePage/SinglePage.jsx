/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/data";
import "./SinglePage.scss";
import DOMPurify from "dompurify";

const SinglePage = () => {
  // accessing single post
  const post = useLoaderData();

  return (
    <div className="singlePage">
      {/* Left Side */}
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="address" />
                  <span>{post.address}</span>
                </div>

                <div className="price">{post.price} pkr</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="user" />
                <span>{post.user.user1name}</span>
              </div>
            </div>

            {/* To prevent text being rendered in html tags */}
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
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
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>

            <div className="feature">
              <img src="/pet.png" alt="utility" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets allowed</p>
                ) : (
                  <p>Pets not allowed</p>
                )}
              </div>
            </div>

            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Income Policy</span>
                {post.postDetail.income}
              </div>
            </div>
          </div>

          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" />
              <span>{post.postDetail.size}</span>
            </div>
            <div className="size">
              <img src="/bed.png" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" />
              <span>{post.bathrooms} bathrooms</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="ListHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
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
