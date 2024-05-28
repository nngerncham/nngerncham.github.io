import React from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import GreekCar from "../assets/greekCar.jpg";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Hello! My name is Nawat. I am a Data(/Backend) Engineer at{" "}
        <Link to={"https://thegang.tech/"}>The Gang Technology</Link>. Welcome
        to my GitHub Page!
      </p>

      <p>
        Here is a picture of a cat I took in Greece back in 2019 to pad out the
        home page. I hope you like it!
      </p>
      <Image alt={"Cat"} src={GreekCar} width={"42%"} />
    </div>
  );
};

export default Home;
