import { fetchPromos, fetchCategories, fetchActivities, fetchBanners } from "./api/api";
import React from 'react';
import { useSelector } from 'react-redux';
import Reason from "@/components/Reason/Reason";
import Layout from "@/layouts/Layout";
import Hero from "@/components/Hero/Hero";
import PromoSlider from "@/components/Promo/PromoSlider";
import CategorySlider from "@/components/Categories/CategorySlider";
import CardActivity from "@/components/Activities/CardActivity";

export default function Home({ initialBanners, initialPromos, initialCategories, initialActivities }) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <Layout>
      <Hero initialItems={initialBanners} />
      <section className={`${darkMode ? 'bg-dark1' : 'bg-zinc-100'}}`}>
        <div className=" p-8 flex flex-col justify-center items-center">
          <h2 className={`${darkMode ? 'text-secondary' : 'text-primary'} text-center text-2xl lg:text-3xl font-bold  mb-8 font-podkova`}>Why Choose NusaGo?</h2>
          <Reason />
        </div>
      </section>
      <PromoSlider initialItems={initialPromos} />
      <CategorySlider initialItems={initialCategories} />
      <CardActivity initialItems={initialActivities} />
    </Layout>
  );
}


export async function getServerSideProps() {
  const [initialBanners, initialPromos, initialCategories, initialActivities] = await Promise.all([fetchBanners(), fetchPromos(), fetchCategories(), fetchActivities()]);

  return {
    props: {
      initialBanners,
      initialPromos,
      initialCategories,
      initialActivities,
    },
  };
}
