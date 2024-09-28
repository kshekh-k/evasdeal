import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: "This Soho Apartment Filled with Antiques Feels Incredibly Fresh",
        author: "Agatha Williams",
        date: "Sep 25",
        imageUrl: "https://demo.martvill.techvill.net/public/uploads/20221201/0a3a2bb4ccba030f564bcecd87489167.webp",
        link: "https://demo.martvill.techvill.net/blog/details/this-soho-apartment-filled-with-antiques-feels-incredibly-fresh"
    },
    {
        id: 2,
        title: "3 Self-Defense Tips That Make You A Stronger",
        author: "Agatha Williams",
        date: "Sep 23",
        imageUrl: "https://demo.martvill.techvill.net/public/uploads/20221117/c5190024eddfec2d3f68133c7d654a6b.webp",
        link: "https://demo.martvill.techvill.net/blog/details/3-self-defense-tips-that-make-you-a-stronger-woman"
    },
    {
        id: 3,
        title: "Easy Home Decorating Tips For Eid!",
        author: "Agatha Williams",
        date: "Sep 16",
        imageUrl: "https://demo.martvill.techvill.net/public/uploads/20221117/28d75a3cf6dd453b42af95a6c1aa5caf.webp",
        link: "https://demo.martvill.techvill.net/blog/details/easy-home-decorating-tips-for-eid"
    }
];

const HomeBlog = () => {
    return (
        <section className="layout-wrapper px-4 xl:px-0 my-10 md:my-12 pb-7" style={{ marginTop: '100px', marginBottom: '0px' }}>
            <div className='max-w-screen-xl mx-auto'>
                <div className="flex justify-center  md:justify-between md:items-center md:mb-5 mb-2.5">
                    <p className="dm-bold text-sm text-center md:text-left md:text-[22px] text-gray-12 uppercase">
                        LATEST FROM OUR BLOGS
                    </p>
                    <a
                        href="https://demo.martvill.techvill.net/blogs"
                        className="process-goto justify-center text-gray-10 font-medium text-base font-dm hidden md:inline-flex items-center font-dm hover:text-gray-12 trans-2 ltr:ml-auto"
                    >
                        <span className='mr-2'>Read Blogs</span>
                        <svg className="relative ltr:ml-2 rtl:mr-2 neg-transition-scale" width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.70696 0L8.29274 1.41421L10.5856 3.70711H0.999849C0.447564 3.70711 -0.000150681 4.15482 -0.000150681 4.70711C-0.000150681 5.25939 0.447564 5.70711 0.999849 5.70711H10.5856L8.29274 8L9.70696 9.41421L14.4141 4.70711L9.70696 0Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div className="flex overflow-x-auto md:overflow-hidden md:gap-30p gap-5">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="w-4/5 md:w-1/3 mb-2 md:mb-0 relative">
                            <div className="w-260p rounded-md md:w-full overflow-hidden">
                                <div className="rounded-md">
                                    <div className="grows inline-block overflow-hidden w-full md:h-48 h-36">
                                        <a href={post.link}>
                                            <img
                                                className="w-full h-full rounded-md block object-cover neg-transition-scale"
                                                src={post.imageUrl}
                                                alt={post.title}
                                                loading="lazy" // Lazy loading for images
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-2.5 top-2.5 h-12 w-12 p-1 bg-white rounded md:left-4 md:top-4 md:h-11 md:w-11">
                                <p className="text-center text-15 md:text-xl font-bold dm-bold leading-3 mt-2 md:mt-0">
                                    {post.date.split(" ")[0]}
                                </p>
                                <p className="text-center text-xs md:text-sm font-normal mt-0.5 md:-mt-1.5 dm-regular">
                                    {post.date.split(" ")[1]}
                                </p>
                            </div>
                            <p className="text-xss md:text-[13px] font-semibold break-all text-gray-500 mt-3 font-dm">
                                {post.author}
                            </p>
                            <p className="text-base md:text-xl md:leading-relaxed break-all font-medium text-gray-12 font-dm">
                                {post.title}
                            </p>
                            <a href={post.link} className="text-gray-500 font-semibold text-sm md:text-base inline-flex items-center mt-1">
                                Read Now
                                <svg className="w-3 md:w-4 h-4 mt-0.5 ml-2 neg-transition-scale" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.70696 0L8.29274 1.41421L10.5856 3.70711H0.999849C0.447564 3.70711 -0.000150681 4.15482 -0.000150681 4.70711C-0.000150681 5.25939 0.447564 5.70711 0.999849 5.70711H10.5856L8.29274 8L9.70696 9.41421L14.4141 4.70711L9.70696 0Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default HomeBlog;
