import React from 'react';

const PromotionalSection: React.FC = () => {
    return (
        <div>
            <section className=" max-w-screen-xl mx-auto px-4 xl:px-0 my-10 md:my-12">
                <div className="relative h-full">
                    <div
                        className="promote-img neg-transition-scale"
                        style={{
                            background: 'linear-gradient(to right, #fdfdfd 21.44%, rgba(223, 223, 223, 0) 70.79%), url("https://demo.martvill.techvill.net/public/uploads/20221205/2dcff5a961eb2a3127b2fe3b87861d99.webp") ',
                            height: '270px',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    ></div>
                    <div className="absolute inset-0 p-6 flex items-center">
                        <div>
                            <p className="text-lg font-medium text-gray-700">Best in Electronics</p>
                            <p className="text-gray-900 font-bold text-2xl -mt-1.5 uppercase">Gadget Town</p>
                            <p className="text-base">
                                Starting from only <span className="text-orange-500">$9.99</span>
                            </p>
                            <a
                                className="flex text-gray-600 border border-gray-800 rounded-sm text-xs items-center justify-center p-2 w-28 mt-3 hover:bg-gray-600 hover:text-white transition-colors"
                                href="https://demo.martvill.techvill.net/search-products?categories=Electronic%20Devices"
                                title="Shop Electronic Devices at Gadget Town"
                            >
                                Shop Now
                                <svg className="relative mt-1 ml-2" width="10" height="7" viewBox="0 0 10 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.7344 0L5.75327 1.05155L7.34399 2.75644H0.69376C0.310607 2.75644 0 3.08934 0 3.5C0 3.91066 0.310607 4.24356 0.69376 4.24356H7.34399L5.75327 5.94845L6.7344 7L10 3.5L6.7344 0Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" layout-wrapper px-4 xl:px-0 my-10 md:my-12">
                <div className="flex flex-col max-w-screen-xl mx-auto md:flex-row md:gap-8 gap-4">
                    {/* First Promotional Item */}
                    <div className="md:w-1/2 w-full">
                        <div className="relative">
                            <div className="h-44">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300"
                                    src="https://demo.martvill.techvill.net/public/uploads/20220831/ad58f57577ee2331b94298ef8301a918.webp"
                                    alt="Electronics"
                                />
                            </div>
                            <div className="absolute p-6 inset-0 flex items-center">
                                <div>
                                    <p className="text-sm text-gray-500">ELECTRONICS</p>
                                    <p className="text-gray-800 font-bold text-lg uppercase">ELECTROFY</p>
                                    <p className="text-gray-800 font-bold text-2xl -mt-2 uppercase">YOUR LIFE</p>
                                    <a
                                        href="https://demo.martvill.techvill.net/search-products?categories=Electronic%20Devices"
                                        className="flex justify-center items-center text-gray-800 rounded-sm text-xs border border-gray-800 py-2 px-5 mt-2 hover:bg-gray-800 hover:text-white transition-colors"
                                    >
                                        <span>SHOP NOW</span>
                                        <svg className="ml-2" width="10" height="7" viewBox="0 0 10 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.7344 0L5.75327 1.05155L7.34399 2.75644H0.69376C0.310607 2.75644 0 3.08934 0 3.5C0 3.91066 0.310607 4.24356 0.69376 4.24356H7.34399L5.75327 5.94845L6.7344 7L10 3.5L6.7344 0Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Promotional Item */}
                    <div className="md:w-1/2 w-full">
                        <div className="relative">
                            <div className="h-44">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-300"
                                    src="https://demo.martvill.techvill.net/public/uploads/20220831/138b95f17cd98bb837051dfbe54bf64d.webp"
                                    alt="Shoes"
                                />
                            </div>
                            <div className="absolute p-6 inset-0 flex items-center">
                                <div>
                                    <p className="text-sm text-gray-500">SHOES</p>
                                    <p className="text-gray-800 font-bold text-lg uppercase">ADD STYLES TO</p>
                                    <p className="text-gray-800 font-bold text-2xl -mt-2 uppercase">YOUR FEET</p>
                                    <a
                                        href="https://demo.martvill.techvill.net/search-products?categories=Fashion"
                                        className="flex justify-center items-center text-gray-800 rounded-sm text-xs border border-gray-800 py-2 px-5 mt-2 hover:bg-gray-800 hover:text-white transition-colors"
                                    >
                                        <span>SHOP NOW</span>
                                        <svg className="ml-2" width="10" height="7" viewBox="0 0 10 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.7344 0L5.75327 1.05155L7.34399 2.75644H0.69376C0.310607 2.75644 0 3.08934 0 3.5C0 3.91066 0.310607 4.24356 0.69376 4.24356H7.34399L5.75327 5.94845L6.7344 7L10 3.5L6.7344 0Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PromotionalSection;
