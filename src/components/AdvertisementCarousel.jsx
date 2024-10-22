import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Courses.module.css"; // Adjust this path if needed

const AdvertisementCarousel = ({ advertisements, settings }) => {
  return (
    <div className={styles.advertisementCarousel}>
      <Slider {...settings}>
        {advertisements.map((ad) => (
          <div key={ad.id}>
            <img
              src={ad.image}
              alt={ad.alt}
              className={styles.advertisementImage}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdvertisementCarousel;
