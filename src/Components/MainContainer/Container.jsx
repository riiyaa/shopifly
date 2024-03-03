import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import image1 from "../../Images/SliderImage1.jpg";
import image2 from "../../Images/SliderImage2.jpg";
import image3 from "../../Images/SliderImage3.gif";
import image4 from "../../Images/SliderImage4.jpg";
import image5 from "../../Images/SliderImage5.gif";
import benefit1 from "../../Images/benifit1.jpg";
import benefit2 from "../../Images/benifit2.jpg";
import benefit3 from "../../Images/benifit3.jpg";
import women from "../../Images/womens.jpg";
import womenjacket from "../../Images/womenjacket.jpg";
import womenshirt from "../../Images/womenshirt.jpg";
import womenjeans from "../../Images/womenjenas.jpg";
import womenshoes from "../../Images/womenshoes.jpg";
import womentops from "../../Images/tops.jpg";
import men from "../../Images/mens.jpg";
import menshirt from "../../Images/menshirt.jpg";
import mentshirt from "../../Images/mentshirt.jpg";
import mentrouser from "../../Images/mentrouser.jpg";
import menjeans from "../../Images/menjeans.jpg";
import menshoes from "../../Images/menshoes.jpg";
import kids from "../../Images/kids.jpg";
import trending from "../../Images/trending.gif";
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

      <div className="my-10">
        <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
          <div>Our</div>
          <div>Benefits</div>
        </div>
        <div className="flex justify-evenly">
          <span>
            <img className="zoom-in" src={benefit1} alt="" />
          </span>
          <span>
            <img className="zoom-in" src={benefit2} alt="" />
          </span>
          <span>
            <img className="zoom-in" src={benefit3} alt="" />
          </span>
        </div>
      </div>

      <div className="my-12">
        <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
          <div>Women's Store</div>
        </div>
        <div className="flex items-center justify-start flex-wrap px-5">
          <span className="w-full">
            <img className="rounded-xl w-full" src={women} alt="" />
          </span>
        </div>
        <div className="flex items-center justify-start flex-wrap pl-5 my-5 gap-5">
          <span>
            <img className="rounded-xl" src={womenshirt} alt="" />
          </span>
          <span>
            <img className="rounded-xl" src={womentops} alt="" />
          </span>
          <span>
            <img className="rounded-xl" src={womenjeans} alt="" />
          </span>
          <span>
            <img className="rounded-xl" src={womenjacket} alt="" />
          </span>
          <span>
            <img className="rounded-xl" src={womenshoes} alt="" />
          </span>
        </div>
      </div>

      <div className="my-12">
        <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
          <div>Men's Store</div>
        </div>
        <div className="flex items-center justify-start flex-wrap px-5">
          <span className="w-full">
            <img className="rounded-xl w-full" src={men} alt="" />
          </span>
        </div>
        <div className="flex items-center justify-start flex-wrap pl-5 my-5 gap-5">
          <span>
            <img className="rounded-xl" src={menshirt} alt="" />
          </span>
          <span>
            <img className="rounded-xl" src={mentshirt} alt="" />
          </span>
          <span>
            <img className="rounded-xl" src={mentrouser} alt="" />
          </span>
          <span>
            <img className="rounded-xl" src={menjeans} alt="" />
          </span>
          <span>
            <img className="rounded-xl" src={menshoes} alt="" />
          </span>
        </div>
      </div>

      <div className="my-12">
        <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
          <div>Kid's Store</div>
        </div>
        <div className="flex items-center justify-start flex-wrap px-5">
          <span className="w-full">
            <img className="rounded-xl w-full" src={kids} alt="" />
          </span>
        </div>
      </div>

      {swiper.swipe1.length > 0 && (
        <div className="my-10">
          <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
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

      <div className="my-12">
        <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
          <div>Top</div>
          <div>Picks</div>
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

      <div className="my-12">
        <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
          <div>Category to bag</div>
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

      {/* <div className="my-12">
        <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
          <div>Giftcards</div>
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
      </div> */}
      <div className="pb-9">
        <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
          <div>Top</div>
          <div>Brands</div>
        </div>
        <div className="flex items-center justify-start flex-wrap px-5">
          <span className="w-full">
            <img className="rounded-xl w-full" src={trending} alt="" />
          </span>
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

      {/* {swiper?.swipe5?.length > 0 && (
        <div className="my-12">
          <div className="capitalize font-extrabold text-2xl text-gray-900 dark:text-slate-100 mb-5 mx-5 pr-3 flex items-start flex-col border-b-4 border-b-amber-700 w-fit">
            <div>Latest</div>
            <div>Arivals</div>
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
      )} */}

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
