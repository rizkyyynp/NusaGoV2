import ListPromo from "@/components/Promo/ListPromo";
import Layout from "@/layouts/Layout";
import { useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchBanners } from "@/pages/api/api";
import { FaTags } from "react-icons/fa";

export default function Promo({ initialBanners }) {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    const nextPage = () => {
        if (currentPage < maxPage) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <Layout>
            <section className={`${darkMode ? 'bg-dark1' : 'bg-white'} p-8 h-min-screen`}>
                <div className="flex items-center mb-1 mt-16 md:mt-0">
                    <FaTags className={`${darkMode ? 'text-secondary' : 'text-primary'} text-xl mr-2`} />
                    <h2 className={`text-xl lg:text-3xl font-bold font-podkova ${darkMode ? 'text-secondary' : 'text-primary'}`}>Special Promo For You!</h2>
                </div>
                <p className={`mb-6 font-hind ${darkMode ? 'text-secondary' : 'text-primary'}`}>Exclusive Offer Just for You! Don't Miss Out!</p>
                <ListPromo
                    currentPage={currentPage}
                    setPageCount={setMaxPage}
                />
                <div className="flex justify-center items-center mt-8 font-nunito">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={` py-2 px-4 rounded-full transition-all duration-100 ease-in-out border-2 border-primary
                        ${darkMode ? 'hover:bg-dark1 text-zinc-100' : 'bg-zinc-100 text-primary hover:bg-secondary'}
                        ${currentPage === 1 ?
                                'cursor-not-allowed' : 'hover:border-third hover:text-zinc-100 hover:bg-secondary'}`}
                    >
                        Previous
                    </button>
                    <p className={`${darkMode ? 'text-zinc-100' : 'text-primary'} mx-4`}>{currentPage}</p>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === maxPage}
                        className={` py-2 px-4 rounded-full transition-all duration-100 ease-in-out border-2 border-primary
                        ${darkMode ? 'hover:bg-dark1 text-zinc-100' : 'bg-zinc-100 text-primary hover:bg-secondary'}
                        ${currentPage === maxPage ?
                                'cursor-not-allowed   ' : '  hover:border-third hover:text-zinc-100 hover:bg-secondary'}`}
                    >
                        Next
                    </button>
                </div>
            </section>
        </Layout>
    );
}

export async function getServerSideProps() {
    const [initialBanners] = await Promise.all([fetchBanners()]);

    return {
        props: {
            initialBanners,
        },
    };
}