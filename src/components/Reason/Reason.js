import Image from "next/image";
import ReasonImage1 from "@/assets/images/travelingBro.png";
import ReasonImage2 from "@/assets/images/travelerPana.png";
import ReasonImage3 from "@/assets/images/roadTrip.png";
import React from 'react';
import { useSelector } from 'react-redux';

export default function Reason() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const containerClass = darkMode ? 'border-secondary' : 'border-primary';
    const h3Class = darkMode ? 'text-secondary' : 'text-primary';
    const pClass = darkMode ? 'text-secondary' : 'text-zinc-800';

    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className={`${containerClass} text-center hover:border-2  transition-all duration-300 ease-in-out hover:scale-105 p-6 lg:p-8 rounded-tr-[20px] rounded-bl-[20px]`}>
                <Image
                    src={ReasonImage1}
                    alt="Authentic Local Experiences"
                    className="mx-auto mb-4"
                    width={150}
                    height={150}
                    quality={100}
                    loading="lazy"
                />
                <h3 className={`${h3Class} text-xl lg:text-lg font-semibold mb-2 font-hind`}>Authentic Local Experiences</h3>
                <p className={`${pClass} font-nunito text-sm`}>Immerse yourself in genuine Indonesian culture with our curated local experiences.</p>
            </div>
            <div className={`${containerClass} text-center hover:border-2  transition-all duration-300 ease-in-out hover:scale-105 p-6 lg:p-8 rounded-[20px]`}>
                <Image
                    src={ReasonImage2}
                    alt="Personalized Itineraries"
                    className="mx-auto mb-4"
                    width={150}
                    height={150}
                    quality={100}
                    loading="lazy"
                />
                <h3 className={`${h3Class} text-xl lg:text-lg font-semibold mb-2 font-hind`}>Personalized Itineraries</h3>
                <p className={`${pClass} font-nunito text-sm`}>Tailor your journey with customized itineraries to suit your interests & preferences.</p>
            </div>
            <div className={`${containerClass} text-center hover:border-2  transition-all duration-300 ease-in-out hover:scale-105 p-6 lg:p-8 rounded-tl-[20px] rounded-br-[20px]`}>
                <Image
                    src={ReasonImage3}
                    alt="Dedicated Support"
                    className="mx-auto mb-4"
                    width={150}
                    height={150}
                    quality={100}
                    loading="lazy"
                />
                <h3 className={`${h3Class} text-xl lg:text-lg font-semibold mb-2 font-hind`}>Dedicated Support</h3>
                <p className={`${pClass} font-nunito text-sm`}>Enjoy peace of mind with our 24/7 customer support and expert travel guidance.</p>
            </div>
        </div>
    )
}