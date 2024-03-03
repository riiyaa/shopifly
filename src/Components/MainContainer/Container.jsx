import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import image1 from "../../Images/SliderImage1.jpg";
import image2 from "../../Images/SliderImage2.jpg";
import image3 from "../../Images/SliderImage3.gif";
import image4 from "../../Images/SliderImage4.jpg";
import image5 from "../../Images/SliderImage5.gif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./container.scss";
import { GroupAPI } from "../../Data/api/group.api";
// import Category from "../Category";
// import { Route, Routes } from "react-router-dom";
// import Products from "../Products";

function Container() {
  const [swiper, setSwiper] = useState({
    swipe1: [],
    swipe2: [],
    swipe3: [],
    swipe4: [],
    swipe5: [],
    swipe6: [],
  });

  async function getSwiper1() {
    try {
      const response = await GroupAPI.getDealOfTheDay();
      setSwiper((prev) => ({ ...prev, swipe1: response }));
      setTimeout(() => {
        console.log(swiper);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }
  async function getSwiper2() {
    try {
      const response = await GroupAPI.getTopPick();
      setSwiper((prev) => ({ ...prev, swipe2: response }));
    } catch (error) {
      console.log(error);
    }
  }
  async function getSwiper3() {
    try {
      const response = await GroupAPI.getCategoriestoBag();
      setSwiper((prev) => ({ ...prev, swipe3: response }));
    } catch (error) {
      console.log(error);
    }
  }
  async function getSwiper4() {
    try {
      const response = await GroupAPI.getGiftcards();
      setSwiper((prev) => ({ ...prev, swipe4: response }));
    } catch (error) {
      console.log(error);
    }
  }
  async function getSwiper5() {
    try {
      const response = await GroupAPI.getDealsOnLatestArival();
      setSwiper((prev) => ({ ...prev, swipe5: response }));
    } catch (error) {
      console.log(error);
    }
  }
  async function getSwiper6() {
    try {
      const response = await GroupAPI.getNewInTopBrands();
      setSwiper((prev) => ({ ...prev, swipe6: response }));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSwiper1();
    getSwiper2();
    getSwiper3();
    getSwiper4();
    getSwiper5();
    getSwiper6();
  }, []);

  return (
    <>
      <div className="first">
        <Swiper
          grabCursor={true}
          rewind={true}
          effect={"creative"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide style={{ background: "transparent" }}>
            <img src={image1} alt="Image1"></img>
          </SwiperSlide>
          <SwiperSlide style={{ background: "transparent" }}>
            <img src={image2} alt="Image2"></img>
          </SwiperSlide>
          <SwiperSlide style={{ background: "transparent" }}>
            <img src={image3} alt="Image3"></img>
          </SwiperSlide>
          <SwiperSlide style={{ background: "transparent" }}>
            <img src={image4} alt="Image4"></img>
          </SwiperSlide>
          <SwiperSlide style={{ background: "transparent" }}>
            <img src={image5} alt="Image1"></img>
          </SwiperSlide>
        </Swiper>
      </div>

      {swiper.swipe1.length > 0 && (
        <div className="my-16">
          <div className="uppercase font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-6 px-5">
            Deal of the day
          </div>
          <Swiper
            grabCursor={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            delay={0}
            speed={3000}
            loop={true}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{
              type: "fraction",
            }}
            modules={[Autoplay]}
            className="mySwiper1"
          >
            {swiper.swipe1?.map((data, index) => {
              return (
                <SwiperSlide style={{ background: "transparent" }} key={index}>
                  <img src={data.url} alt={data.url}></img>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}

      <div className="my-16">
        <div className="uppercase font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-6 px-5">
          Top Picks
        </div>
        <div className="flex items-center justify-start gap-2 flex-wrap pl-5">
          {swiper.swipe2?.map((data, index) => {
            return (
              <img
                className="zoom-in"
                src={data.url}
                alt={data.url}
                key={index}
                style={{ minWidth: "150px", maxWidth: "180px" }}
              />
            );
          })}
        </div>
      </div>

      <div className="my-14">
        <div className="uppercase font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-6 px-5">
          Category to Bag
        </div>
        <div className="flex items-center justify-start flex-wrap pl-5 bg-[#9b8c8c14]">
          {swiper.swipe3?.map((data, index) => {
            return (
              <img
                src={data.url}
                alt={data.url}
                key={index}
                style={{ minWidth: "100px", maxWidth: "180px" }}
              />
            );
          })}
        </div>
      </div>

      <div className="my-16">
        <div className="uppercase font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-6 px-5">
          Giftcards
        </div>
        <div className="flex items-center justify-start gap-5 flex-wrap pl-5">
          {swiper.swipe4?.map((data, index) => {
            return (
              <img
                className="zoom-in"
                src={data.url}
                alt={data.url}
                key={index}
                style={{ minWidth: "200px", maxWidth: "250px" }}
              />
            );
          })}
        </div>
      </div>
      <div className="pb-9">
        <div className="uppercase font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-6 px-5">
          new In Top Brands
        </div>
        <div className="flex items-center justify-start gap-5 flex-wrap pl-5">
          {swiper.swipe6?.map((data, index) => {
            return (
              <img
                className="zoom-in"
                src={data.url}
                alt={data.url}
                key={index}
                style={{ minWidth: "200px", maxWidth: "250px" }}
              />
            );
          })}
        </div>
      </div>

      {swiper?.swipe5?.length > 0 && (
        <div className="my-16">
          <div className="uppercase font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-6 px-5">
            Deals On Latest Arival
          </div>
          <Swiper
            grabCursor={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            delay={0}
            speed={3000}
            loop={true}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{
              type: "fraction",
            }}
            modules={[Autoplay]}
            className="mySwiper1 pb-7"
          >
            {swiper?.swipe5?.map((data, index) => {
              return (
                <SwiperSlide style={{ background: "transparent" }} key={index}>
                  <img src={data.url} alt={data.url}></img>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}

      {/* <div className="py-3 px-[40px]">
        <Routes>
          <Route exact path="/" element={<Category />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </div> */}
    </>
  );
}

export default Container;
