import { useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { useSelector } from 'react-redux';
import { FaTags } from "react-icons/fa";



export default function PromoSlider({ initialItems }) {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const [items, setItems] = useState(initialItems);

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],

    };

    return (
        <section className={`${darkMode ? 'bg-dark1' : 'bg-white'} p-8`}>
            <div className="flex items-center mb-4">
                <FaTags className={`text-lg mr-2 ${darkMode ? 'text-secondary' : 'text-primary'}`} />
                <h2 className={`text-2xl lg:text-3xl font-bold font-podkova ${darkMode ? 'text-secondary' : 'text-primary'}`}>Special Promo For You!</h2>
            </div>
            <p className={`mb-6 font-hind ${darkMode ? 'text-secondary' : 'text-primary'} font-semibold`}>Exclusive Offer Just for You! Don't Miss Out!</p>
            <div className='min-[601px]: mb-10'>
                <div className="mt-8 slider-container">
                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <Link href={`/promo/${item.id}`} key={index} className='px-4'>
                                <div className={`bg-primary rounded-lg overflow-hidden ${darkMode ? 'shadow-BS5' : 'shadow-lg'}`}>
                                    <div className="overflow-hidden h-48">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full h-52 transition-transform duration-300 hover:scale-110 object-cover object-center"
                                        />
                                    </div>
                                    <div className="py-4 px-4 flex flex-col justify-center items-start">
                                        <h3 className="font-semibold text-zinc-100 font-hind text-base truncate">{item.title}</h3>
                                        <p className="text-zinc-100 font-nunito">Rp {formatPrice(item.promo_discount_price)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
