import React from "react";
import "./BigSlider.scss";
import { png, svg } from "../../Assets";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
SwiperCore.use([Navigation]);

const SlideItem = ({ data }) => {
  return (
    <div className="slide-item">
      <div className="line" />
      <div className="slide-item-content">
        <h4>{data.title}</h4>
        <p>{data.text}</p>
        <a className="link-animation link-animation-black" href={data.link_url}>
          Shop Now
        </a>
      </div>
    </div>
  );
};

const Slides = [
  {
    id: 0,
    title: "INTERNATIONAL COCKTAILS",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    link_url: "#",
  },
  {
    id: 2,
    title: "INTERNATIONAL COCKTAILS",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    link_url: "#",
  },
  {
    id: 3,
    title: "INTERNATIONAL COCKTAILS",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    link_url: "#",
  },
  {
    id: 4,
    title: "INTERNATIONAL COCKTAILS",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    link_url: "#",
  },
];

const BigSlider = () => {
  return (
    <div className="big-slider">
      <div className="prev">
        <img alt="" src={svg.Next} />
      </div>
      <div className="next">
        <img alt="" src={svg.Next} />
      </div>
      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        spaceBetween={0}
        slidesPerView={1}
        // scrollbar={{ draggable: true }}
        speed={1000}
        loop
        className="slider-custom"
      >
        <img src={png.Pic15} alt="" />
        {Slides.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BigSlider;
