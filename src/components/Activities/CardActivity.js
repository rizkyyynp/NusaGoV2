import { useState } from "react";
import Link from "next/link";
import React from 'react';
import { useSelector } from 'react-redux';
import Image from "next/image";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaStar, FaLocationDot } from "react-icons/fa6";



export default function CardActivity({ initialItems }) {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const [items, setItems] = useState(initialItems);
    const [visibleItems, setVisibleItems] = useState(initialItems.slice(0, 3));
    const [showAll, setShowAll] = useState(false);
    const [hideButton, setHideButton] = useState(initialItems.length <= 3);

    const handleToggle = () => {
        if (showAll) {
            setVisibleItems(items.slice(0, 3));
        } else {
            setVisibleItems(items);
        }
        setShowAll(!showAll);
    };

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const isValidImageUrl = (url) => {
        return typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://'));
    };

    return (
        <section className={`${darkMode ? 'bg-dark1' : 'bg-white'} p-8`}>
            <div className="flex items-center mb-4">
                <FaPlaneDeparture className={`${darkMode ? 'text-secondary' : 'text-primary'} text-lg mr-2`} />
                <h2 className={`text-2xl lg:text-3xl font-bold font-podkova ${darkMode ? 'text-secondary' : 'text-primary'}`}>Discover Diverse Activities</h2>
            </div>
            <p className={`mb-6 font-hind ${darkMode ? 'text-secondary' : 'text-primary'} font-semibold`}>Explore a Variety of Activities Waiting to Be Discovered</p>
            <div>
                <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                    {visibleItems.map((item, index) => (
                        <Link href={`/activity/${item.id}`} key={index}>
                            <div className="bg-zinc-100 rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                                <div className="relative">
                                    <div className='overflow-hidden' style={{ width: '100%', height: '200px' }}>
                                        {isValidImageUrl(item.imageUrls[0]) ? (
                                            <Image
                                                    src={item.imageUrls[0]}
                                                    alt={item.title}
                                                    fill={true}
                                                    className="transition-transform duration-300 hover:scale-110"
                                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                                    quality={100}
                                                    priority={true}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                                <span className="text-[#25282C]">Image not available</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-1 flex items-center">
                                        <span className="text-yellow-500 text-xs"><FaStar /></span>
                                        <span className="text-base font-semibold font-hind text-primary">{item.rating}</span>
                                    </div>
                                </div>
                                <div className="px-2 py-4 flex justify-between items-end bg-primary">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold text-zinc-100 font-hind">{item.title}</h3>
                                        <p className="text-zinc-100 font-nunito flex items-center"><FaLocationDot className="text-zinc-100 mr-1" />{item.city}, {item.province}</p>
                                        <h4 className=" text-zinc-100 font-nunito">Rp {formatPrice(item.price_discount)} from <span className="line-through"> Rp {formatPrice(item.price)}</span></h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {!hideButton && (
                    <div className="mt-8 text-center">
                        <button onClick={handleToggle} className={`${darkMode ? 'bg-secondary hover:bg-white hover:text-secondary' : 'bg-primary/80'}  text-zinc-100 py-2 px-12 rounded-full hover:border-2 hover:bg-primary hover:border-secondary  transition-all duration-100 ease-in-out font-podkova`} aria-label="Button to see all/minimize">
                            {showAll ? "Minimize" : "See All"} →
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}