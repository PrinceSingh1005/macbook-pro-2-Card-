import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ img }) => {
    const Arrow = ({ direction, onClick }) => {
        const Icon = direction === 'left' ? IoIosArrowBack : IoIosArrowForward;
        return (
            <button className={`slick-arrow slick-${direction} hover:bg-blue-300 rounded-full`} onClick={onClick} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', [direction]: '15px', zIndex: 2 }}>
                <Icon size={40} />
            </button>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed:500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <Arrow direction='left' />,
        nextArrow: <Arrow direction='right' />,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                },
            },
        ],
    };

    return (
        <div className='w-full lg:w-4/5 p-4 h-[400px] bg-white rounded-lg relative'>
            <Slider {...settings}>
                {img.map((i, index) => (
                    <div className='w-full sm:w-52' key={index}>
                        <img className="h-60 md:h-80 w-52 mx-auto" src={i.src} alt={i.text} />
                        <p className='text-center mt-6 w-52 mx-auto font-medium text-gray-600'>{i.text}</p>
                    </div>
                ))}
            </Slider>
            </div>
    );
};
