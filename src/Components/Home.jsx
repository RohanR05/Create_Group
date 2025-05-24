import React from "react";
import img1 from "../assets/494906754_1732383237399957_8955080033023967184_n.jpg";
import img2 from "../assets/istockphoto-1190200652-1024x1024.jpg";
import img3 from "../assets/magic-cube-1976725_1280.jpg";
import img4 from "../assets/sewing-3405975_1280.jpg";
import img5 from "../assets/strategy-1080527_960_720.jpg";
// import MyLottieAnimation from "../Pages/MyLottieAnimation";
// import { useLoaderData } from "react-router";

const Home = () => {
  // const createData = useLoaderData()
  // console.log(createData)
  return (
    <div>
      {/* <MyLottieAnimation></MyLottieAnimation> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              WelCome to <span className="text-pink-400">HobbyHub</span>
            </h1>
            <p className="mb-5">
              A hobby is a personal interest or activity done for enjoyment
              during free time. It helps relieve stress, boosts creativity, and
              provides a sense of fulfillment and relaxation.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel w-full h-96 my-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <p className="text-3xl font-extrabold text-white">HobbyHub</p>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <p className="text-3xl font-extrabold text-white">HobbyHub</p>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <p className="text-3xl font-extrabold text-white">HobbyHub</p>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <p className="text-3xl font-extrabold text-white">HobbyHub</p>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
