import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import Card from "./Card";  
import "./carousel.css";
import "swiper/css";
import "swiper/css/pagination";

const AssetCarousel = ({ data }) => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      breakpoints={{
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          {/* Hover wrapper */}
          <div
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}
          >
            <Card
              title={item.title}
              dev={item.dev}
              info={item.info}
              price={item.price}
              link={item.link}
              img={item.img}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AssetCarousel;
