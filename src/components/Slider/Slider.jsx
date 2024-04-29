/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Slider.scss";

// It is child component of singlePage which takes images array as prop
const Slider = ({ images }) => {
  // imageIndex is used to show the full image in fullSlider and manage its viewing state
  const [imageIndex, setImageIndex] = useState(null);
  

  // When direction is left clicked and by default first image is showing it will got to last image then otherwise in order wise
  const changeSlide = (direction)=>{
    if(direction === "left"){
      if(imageIndex === 0){
        setImageIndex(images.length-1)

      }else{
        setImageIndex(imageIndex-1)

      }

    }else{
      if(imageIndex === images.length-1){
        // if the last image is in view show the first then when right is clicked
        setImageIndex(0)

      }else{
        // when first or 2nd image is in view
        setImageIndex(imageIndex+1)
      }
    }
  }

  return (
    <div className="slider">
      {/* If there is no imageIndex first child div will render*/}
      {imageIndex != null && (
        <div className="fullSlider">
          {/* Left Sliding arrow */}
          <div className="arrow">
            <img src="/arrow.png" onClick={()=>changeSlide("left")}/>
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} />
          </div>

          {/* Right Sliding arrow */}
          <div className="arrow">
            <img src="/arrow.png" className="right"  onClick={()=>changeSlide("right")}/>
          </div>

          {/* The X button nulls the imageIndex means back to single page */}
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        {/* first image in array will be main */}
        <img src={images[0]} onClick={() => setImageIndex(0)} />
      </div>

      {/* Small images container */}
      <div className="smallImages">
        {/* Iterate over the array of images, starting from the second one. */}
        {images.slice(1).map((image, index) => (
          // Display each image as an <img> element.
          <img
            // Set the image source to the current image URL.
            src={image}
            // Set the alt text for accessibility purposes.
            alt="property"
            // Assign a unique key to each image for React to efficiently manage them.
            key={index}
            // When an image is clicked, update the main image to the one clicked.
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
