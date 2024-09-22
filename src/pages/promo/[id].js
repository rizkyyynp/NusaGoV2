import { fetchPromoById, fetchBanners } from '../api/api';
import Layout from '@/layouts/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

export default function PromoDetail({ promo, initialBanners }) {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const router = useRouter();
    const formatPrice = (price) => {
        if (typeof price === 'number') {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return "0";
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    if (!promo) {
        return (
            <Layout>
                <div className="text-center py-16">
                    <h2 className="text-2xl font-bold">Promo Not Found</h2>
                    <p>Sorry, we couldn't find the promo you're looking for.</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <section className={`${darkMode ? 'bg-dark1' : 'bg-white'} p-8 lg:min-h-screen flex justify-center items-center`}>
                    <div className={`${darkMode ? 'bg-secondary' : 'bg-primary'} rounded-lg max-w-7xl mx-auto p-4 mt-16 md:mt-0`}>
                        <div className="flex flex-col lg:flex-row md:justify-center md:items-center">
                            <div className=" w-full lg:w-1/2 justify-center items-center flex">
                                <Image src={promo.imageUrl} alt={promo.title} className="rounded-lg aspect-video" width={700} height={700} quality={100} loading='lazy' style={{ objectFit: 'cover' }}   />
                            </div>
                            <div className=" w-full lg:w-1/2 md:pl-4 mt-4 md:mt-0 flex flex-col lg:items-center lg:justify-center">
                                <h2 className="text-2xl font-bold mb-2 text-fourth font-podkova">{promo.title}</h2>
                                <p className="mb-2 text-fourth font-nunito"><span className="font-semibold font-hind">Description :</span> {promo.description}</p>
                                <p className="mb-2 text-fourth font-nunito"><span className="font-semibold font-hind">Terms Condition :</span> {promo.terms_condition}</p>
                                <p className="mb-2 text-fourth font-nunito"><span className="font-semibold font-hind">Promo Code :</span> {promo.promo_code}</p>
                                <p className="mb-2 text-fourth font-nunito"><span className="font-semibold font-hind">Discount Price :</span> Rp {formatPrice(promo.promo_discount_price)}</p>
                                <p className="mb-2 text-fourth font-nunito"><span className="font-semibold font-hind">Minimum Claim Price :</span> Rp {formatPrice(promo.minimum_claim_price)}</p>
                                <p className="mb-2 text-fourth font-nunito"><span className="font-semibold font-hind">Created:</span> {formatDate(promo.createdAt)}</p>
                                <p className="mb-2 text-fourth font-nunito"><span className="font-semibold font-hind">Updated:</span> {formatDate(promo.updatedAt)}</p>
                                <Link href="/promo">
                                    <button className={`${darkMode ? 'bg-dark1/80 hover:bg-dark1' : 'bg-secondary hover:bg-secondary/80'}  mt-8 py-2 px-12 rounded-lg text-fourth font-semibold font-nunito ml-2}`}>Back</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            </section>
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const { id } = params;
    const [initialBanners, promo] = await Promise.all([fetchBanners(),fetchPromoById(id) ]);

    return {
        props: {
            promo,
            initialBanners,
        },
    };
}
