import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { Carousel, Image } from "antd";

import NawaOne from "../assets/nawaone.jpg";
import NawaTwo from "../assets/nawatwo.jpg";
import NawaThree from "../assets/nawathree.jpg";
import GreekCar from "../assets/greekCar.jpg";

const images = [NawaOne, NawaTwo, NawaThree];

const thesisLink =
  "https://github.com/nngerncham/parrd_sampling/blob/master/Thesis-Full.pdf";
const theGangLink = "https://thegang.tech/";
const ytLink = "https://www.youtube.com/channel/UCHzesjQAM9fWP7iPN5YsZYw";

const About = () => {
  return (
    <div className={"about"}>
      <h1>About</h1>
      <p>
        Hello again! Let me re-introduce myself. My name is Nawat Ngerncham.
        Some people also know me as Paan (ป่าน for the Thais out there) but I do
        prefer the name Nawat.
      </p>
      <p>
        Currently, I am a full-time Data Engineer at{" "}
        <a href={theGangLink}>The Gang Technology</a>. I occasionally work on
        backend services and APIs for the company as well depending on what
        needs to be done. Before that, I was a Teacher's Assistant and an
        undergraduate student in Computer Science with a minor in Applied
        Mathematics at Mahidol University International College.
      </p>
      <p>
        Apart from my full-time job, I have been doing research on parallel and
        graph algorithms, though I am currently taking a short break after
        graduating. My undergraduate senior thesis was on Parallel Sampling
        without Replacement. If you are interested, you can find the full thesis{" "}
        <Link to={thesisLink}>here</Link>. While the thesis itself has already
        been submitted and graded, I am still looking into this topic.
      </p>
      <p>
        I also occasionally upload videos to my{" "}
        <Link to={ytLink}>YouTube channel</Link>. Most of them are just
        presentations of the various projects I worked on in my undergraduate
        degree, though.
      </p>
      <p>
        If you need to contact me, you can reach me via email at{" "}
        <code>n.ngerncham[at]gmail[dot]com</code>.
      </p>
      <Carousel
        dotPosition={"bottom"}
        infinite={true}
        autoplay
        autoplaySpeed={5000}
      >
        {images.map((image, index) => (
          <Image alt={`Nawat ${index + 1}`} src={image} width={"25%"} />
        ))}
      </Carousel>
    </div>
  );
};

export default About;
