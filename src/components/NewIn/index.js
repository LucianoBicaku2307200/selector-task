import React from "react";
import "./NewIn.scss";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import { png, svg } from "../../Assets";
SwiperCore.use([Navigation]);

const SlideCard = ({ data }) => {
  return (
    <div className="slide-card">
      {data.promo && <div className="slide-card-promo">Promo</div>}
      <div className="slide-card-img">
        <img src={data.img} alt="" />
      </div>
      <p className="slide-card-title">{data.title}</p>
      <p className="slide-card-description">{data.description}</p>
      <div>
        {data.prevPrice && (
          <span className="slide-card-prevPrice">€ {data?.prevPrice}</span>
        )}
        <span className="slide-card-price">€ {data?.price}</span>
      </div>
      <p className="slide-card-vat">{data.vat}</p>
    </div>
  );
};

const Slides = [
  {
    promo: true,
    img: png.Pic2,
    title: "Brand name",
    description: "Black Coat with Frogs",
    prevPrice: "900.00",
    price: "830.00",
    vat: "*VAT excluded",
  },
  {
    promo: false,
    img: png.Pic3,
    title: "Brand name",
    description: "Half Sleeves Multicolor Shirt",
    prevPrice: null,
    price: "135.00",
    vat: "*VAT excluded",
  },
  {
    promo: false,
    img: png.Pic4,
    title: "Brand name",
    description: "Black Leather Ankle Boots",
    prevPrice: null,
    price: "900.00",
    vat: "*VAT excluded",
  },
  {
    promo: true,
    img: png.Pic9,
    title: "Brand name",
    description: "Cream Sweater",
    prevPrice: "800.00",
    price: "650.00",
    vat: "*VAT excluded",
  },
  {
    promo: false,
    img: png.Pic16,
    title: "Brand name",
    description: "Champagne",
    prevPrice: null,
    price: "900.00",
    vat: "*VAT excluded",
  },
];

const NewIn = () => {
  return (
    <div className="new-in">
      <h3>New In</h3>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
      <div className="new-in-slider">
        <div className="prev-slider_2">
          <img alt="" src={svg.Next} />
        </div>
        <div className="next-slider_2">
          <img alt="" src={svg.Next} />
        </div>
        <Swiper
          navigation={{
            nextEl: ".next-slider_2",
            prevEl: ".prev-slider_2",
          }}
          spaceBetween={26}
          slidesPerView={4}
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

export default NewIn;
