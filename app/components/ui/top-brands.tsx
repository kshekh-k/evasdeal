'use client'
// components/TopBrands.js

import Image from 'next/image';
export const TopBrands: React.FC = () => {
 
    return (
        <section className="layout-wrapper px-4 xl:px-0 my-10 md:my-12" style={{ marginTop: '', marginBottom: '' }}>
            <div className='max-w-screen-xl mx-auto'>
                <p className="dm-bold text-sm text-center md:text-left mb-2.5 md:mb-5 md:text-[22px] text-gray-900 uppercase">
                    TOP BRANDS
                </p>
                <div>
                    <div className="flex flex-col md:flex-row mt-2 md:mt-5 md:gap-x-[29px]">
                        <a
                            href="https://demo.martvill.techvill.net/search-products?brands=Aarong"
                            className="relative h-36 md:h-80 md:w-1/4 border rounded-md flex justify-center items-center"
                        >
                            <div className="inset-center">
                                <div className="grow">
                                    <Image
                                        className="w-44 object-contain"
                                        src="/extra/brands-1.webp"
                                        alt="Aarong"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        </a>
                        <div className="w-full md:w-3/4 mt-5 md:mt-0">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
                                {[
                                    {
                                        name: 'Samsung',
                                        imgSrc: '/extra/brands-3.webp',
                                        link: 'https://demo.martvill.techvill.net/search-products?brands=Samsung',
                                    },
                                    {
                                        name: 'Huawei',
                                        imgSrc: '/extra/brands-4.webp',
                                        link: 'https://demo.martvill.techvill.net/search-products?brands=Huawei',
                                    },
                                    {
                                        name: 'Richman',
                                        imgSrc: '/extra/brands-5.webp',
                                        link: 'https://demo.martvill.techvill.net/search-products?brands=Richman',
                                    },
                                    {
                                        name: 'Yellow',
                                        imgSrc: '/extra/brands-6.webp',
                                        link: 'https://demo.martvill.techvill.net/search-products?brands=Yellow',
                                    },
                                    {
                                        name: 'DorjiBari',
                                        imgSrc: '/extra/brands-7.webp',
                                        link: 'https://demo.martvill.techvill.net/search-products?brands=DorjiBari',
                                    },
                                    {
                                        name: 'KayKraft',
                                        imgSrc: '/extra/brands-8.webp',
                                        link: 'https://demo.martvill.techvill.net/search-products?brands=KayKraft',
                                    },
                                    {
                                        name: 'Smartex',
                                        imgSrc: '/extra/brands-1.webp',
                                        link: 'https://demo.martvill.techvill.net/search-products?brands=Smartex',
                                    },
                                    {
                                        name: 'Sailor',
                                        imgSrc: '/extra/brands-10.webp',
                                        link: 'https://demo.martvill.techvill.net/search-products?brands=Sailor',
                                    },
                                ].map((brand, index) => (
                                    <a key={index} href={brand.link}>
                                        <div className="border rounded-md">
                                            <div className="grow p-6 flex flex-row h-36 justify-center items-center">
                                                <Image
                                                    className="w-[80%] h-20 object-contain neg-transition-scale"
                                                    src={brand.imgSrc}
                                                    alt={brand.name}
                                                    width={1000} // Set appropriate width for the image
                                                    height={500} // Set appropriate height for the image
                                                />
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

 
