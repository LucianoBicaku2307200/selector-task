import React from "react";
import "./ForYou.scss";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import { png, svg } from "../../Assets";
SwiperCore.use([Navigation]);
//1,8,11,12
const SlideCard = ({ data }) => {
  return (
    <div className="slide-foryou-card">
      <img alt="" src={data.img} />
      <p>{data.text}</p>
    </div>
  );
};

const Slides = [
  { img: png.Pic12, text: "shoes" },
  { img: png.Pic8, text: "Food & beverage" },
  { img: png.Pic11, text: "Jewerly" },
  { img: png.Pic1, text: "Other" },
];

const ForYou = () => {
  return (
    <div className="for-you">
      <h5>for you</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
      <div className="for-you-slider">
        <div className="prev-slider_3">
          <img alt="" src={svg.Next} />
        </div>
        <div className="next-slider_3">
          <img alt="" src={svg.Next} />
        </div>
        <Swiper
          navigation={{
            nextEl: ".next-slider_3",
            prevEl: ".prev-slider_3",
          }}
          spaceBetween={26}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          speed={1000}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {Slides.map((item, index) => (
            <SwiperSlide key={index}>
              <SlideCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ForYou;
