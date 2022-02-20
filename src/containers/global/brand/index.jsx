import React from "react";
// import Slider from "react-slick";
import Brand from "../../../components/brand/index";
import HomeData from "../../../data/home.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const BrandContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 5,
        spaceBetween: 0,
        pagination: false,
        navigation: false,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 3,
            },

            // when window width is >= 640px
            992: {
                slidesPerView: 4,
            },
        },
    };

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     accessibility: true,
    //     arrows: false,
    //     speed: 3000,
    //     autoplaySpeed: 3000,
    //     slidesToShow: 6,
    //     slidesToScroll: 3000,
    //     autoplay: false,
    //     autoplaySpeed: 0,
    //     cssEase: "linear",
    //     pauseOnHover: true,
    //     className: "custom-class",
    //     // useTransform: true,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: false,
    //             },
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: false,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: false,
    //             },
    //         },
    //     ],
    // };
    return (
        <div className="brand-section section-py ">
            <div className="container brand">
                <div className="row">
                    <div className="col-12">
                        <Swiper className="brand-carousel" {...swiperOption}>
                            {HomeData[1].brand &&
                                HomeData[1].brand.map((single, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Brand key={key} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandContainer;
