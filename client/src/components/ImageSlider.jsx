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

//banner
import banner1 from "../assets/homepage/banner/banner1.png";
import banner2 from "../assets/homepage/banner/banner2.png";
import banner3 from "../assets/homepage/banner/banner3.png";
import banner4 from "../assets/homepage/banner/banner4.png";
import banner5 from "../assets/homepage/banner/banner5.png";
import banner6 from "../assets/homepage/banner/banner6.png";
import banner7 from "../assets/homepage/banner/banner7.png";
import banner8 from "../assets/homepage/banner/banner8.png";
import banner9 from "../assets/homepage/banner/banner9.png";
import banner10 from "../assets/homepage/banner/banner10.png";
import banner11 from "../assets/homepage/banner/banner11.png";
import banner12 from "../assets/homepage/banner/banner12.png";

const sliderImg = [
    { img: banner1, id: 3763 },
    { img: banner2, id: 3765 },
    { img: banner3, id: 3766 },
    { img: banner4, id: 3767 },
    { img: banner5, id: 3768 },
    { img: banner6, id: 3770 },
    { img: banner7, id: 3771 },
    { img: banner8, id: 3945 },
    { img: banner9, id: 3946 },
    { img: banner10, id: 3947 },
    { img: banner11, id: 3948 },
    { img: banner12, id: 3949 },
];
const sliderImgLink = [
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
