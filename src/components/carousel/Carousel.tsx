import React from "react";
import styles from "./Carousel.module.css";
import { Carousel as AntCarosel, Image } from "antd";
import carousel_1 from "../../assets/carousel_1.jpg";
import carousel_2 from "../../assets/carousel_2.jpg";
import carousel_3 from "../../assets/carousel_3.jpg";

export const Carousel: React.FC = () => {
  return (
    <AntCarosel autoplay className={styles.slider}>
      <Image src={carousel_1}></Image>
      <Image src={carousel_2}></Image>
      <Image src={carousel_3}></Image>
    </AntCarosel>
  );
};
