import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";
const sliderImg = [
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3763.png", id: 3763 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3765.png", id: 3765 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3766.png", id: 3766 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3767.png", id: 3767 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3768.png", id: 3768 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3770.png", id: 3770 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3671.png", id: 3771 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3945.png", id: 3945 },
];
const ImageSlider = () => {
  const [imges, setImages] = useState(sliderImg);

  return (
    <Box>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imges.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Image src={item.img} height="auto" width="800px" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSlider;

//// old carousel

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const ImageSlider = ({ slides }) => {
//   return (
//     <Carousel infiniteLoop autoPlay showThumbs={false}>
//       {slides.map((slide) => {
//         return (
//           <Image key={slide.id} src={slide.img} height="auto" width="800px" />
//         );
//       })}
//     </Carousel>
//   );
// };

// export default ImageSlider;
