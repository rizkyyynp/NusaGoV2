import { useEffect, useState } from 'react';
import { fetchPromos } from '@/pages/api/api';
import Link from 'next/link';
import Image from 'next/image';
import { FaTags } from "react-icons/fa";

export default function ListPromo({ currentPage, setPageCount }) {
    const [items, setItems] = useState([]);
    const itemsPerPage = 6;

    useEffect(() => {
        async function loadPromos() {
            const data = await fetchPromos();
            setItems(data);
            setPageCount(Math.ceil(data.length / itemsPerPage));
        }

        loadPromos();
    }, [setPageCount]);

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const paginateItems = (items) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    };

    return (
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paginateItems(items).map((item, index) => (
                <Link href={`/promo/${item.id}`} key={index}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-BS cursor-pointer">
                        <div className='relative overflow-hidden' style={{ width: '100%', height: '200px' }}>
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill={true}
                                className="transition-transform duration-300 hover:scale-110"
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                quality={100}
                                priority={true}
                            />
                        </div>
                        <div className="px-2 py-4 flex justify-between items-center bg-primary">
                            <h3 className="text-lg font-semibold text-zinc-100 font-hind truncate w-1/2">{item.title}</h3>
                            <div className='flex justify-center items-center truncate'>
                                <FaTags className='text-zinc-100 mr-1' />
                                <p className="text-zinc-100 font-nunito">Rp {formatPrice(item.promo_discount_price)}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
