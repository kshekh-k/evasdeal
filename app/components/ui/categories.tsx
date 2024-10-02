'use client'
import { Angledownicon, Anglerighticon, Baricon } from '@/app/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const categoriesList = [
    {
        label: 'Electronic Devices',
        url: '#',
        icon: '/images/cate-1.webp',
        subCat: [
            {
                label: 'Smartphones',
                url: '#',
                cates: [
                    {
                        label: 'Realme Phones',
                        url: '#',
                    },
                    {
                        label: 'Samsung Phones',
                        url: '#',
                    },
                    {
                        label: 'Xiaomi Phones',
                        url: '#',
                    },
                    {
                        label: 'OPPO Phones',
                        url: '#',
                    },
                    {
                        label: 'Vivo Phones',
                        url: '#',
                    },
                    {
                        label: 'Infinix Phones',
                        url: '#',
                    },
                    {
                        label: 'Motorola Phones',
                        url: '#',
                    },
                    {
                        label: 'Tecno Phones',
                        url: '#',
                    },
                    {
                        label: 'iphone',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Feature Phone',
                url: '#',
                cates: [
                    {
                        label: 'Nokia Feature Phones',
                        url: '#',
                    },
                    {
                        label: 'Samsung Feature Phones',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Laptops',
                url: '#',
                cates: [
                    {
                        label: 'HP Laptops',
                        url: '#',
                    },
                    {
                        label: 'Asus Laptops',
                        url: '#',
                    },
                    {
                        label: 'Dell Laptops',
                        url: '#',
                    },
                    {
                        label: 'Lenovo Laptops',
                        url: '#',
                    },
                    {
                        label: 'Acer Laptops',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Cameras',
                url: '#',
                cates: [
                    {
                        label: 'DSLR',
                        url: '#',
                    },
                    {
                        label: 'Mirrorless',
                        url: '#',
                    },
                    {
                        label: 'Point & Shoot',
                        url: '#',
                    },
                    {
                        label: 'Car Cameras',
                        url: '#',
                    },
                    {
                        label: 'Action/Video Cameras',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Security Cameras',
                url: '#',
                cates: [
                    {
                        label: 'IP Security Cameras',
                        url: '#',
                    },
                    {
                        label: 'CCTV Security Cameras',
                        url: '#',
                    },

                ]
            },
        ]
    },
    {
        label: 'Electronic Accessories',
        url: '#',
        icon: '/images/cate-2.webp',
        subCat: [
            {
                label: 'Mobile Accessories',
                url: '#',
                cates: [
                    {
                        label: 'Phone Cases',
                        url: '#',
                    },
                    {
                        label: 'Power Banks',
                        url: '#',
                    },
                    {
                        label: 'Cables & Converters',
                        url: '#',
                    },
                    {
                        label: 'Wall Chargers',
                        url: '#',
                    },
                    {
                        label: 'Wireless Chargers',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Audio',
                url: '#',
                cates: [
                    {
                        label: 'Headphones & Headset',
                        url: '#',
                    },
                    {
                        label: 'Home Entertainment',
                        url: '#',
                    },
                    {
                        label: 'Bluetooth Speakers',
                        url: '#',
                    },
                    {
                        label: 'Live sound & Stage Equipment',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Wearable',
                url: '#',
                cates: [
                    {
                        label: 'Smartwatches',
                        url: '#',
                    },
                    {
                        label: 'Virtual Reality',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Console Accessories',
                url: '#',
                cates: [
                    {
                        label: 'Playstation Controllers',
                        url: '#',
                    },
                    {
                        label: 'Other Gaming Accessories',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Camera Accessories',
                url: '#',
                cates: [
                    {
                        label: 'Memory Cards',
                        url: '#',
                    },
                    {
                        label: 'DSLR Lens',
                        url: '#',
                    },
                    {
                        label: 'Mirrorless Lens',
                        url: '#',
                    },
                    {
                        label: 'Special Camera Lens',
                        url: '#',
                    },
                    {
                        label: 'Tripods & Monopods',
                        url: '#',
                    },
                    {
                        label: 'Camera Cases, Covers and Bags',
                        url: '#',
                    },
                    {
                        label: 'Lighting & Studio Equipment',
                        url: '#',
                    },
                    {
                        label: 'Dry Box',
                        url: '#',
                    },
                    {
                        label: 'Batteries',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Computer Accessories',
                url: '#',
                cates: [
                    {
                        label: 'Monitors',
                        url: '#',
                    },
                    {
                        label: 'Mice',
                        url: '#',
                    },
                    {
                        label: 'PC Audio',
                        url: '#',
                    },
                    {
                        label: 'Keyboards',
                        url: '#',
                    },
                    {
                        label: 'Mice & Keyboard Combos',
                        url: '#',
                    },
                    {
                        label: 'Power Cord & Adaptors',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Storage',
                url: '#',
                cates: [
                    {
                        label: 'Storage',
                        url: '#',
                    },
                    {
                        label: 'Internal Hard Drives',
                        url: '#',
                    },
                    {
                        label: 'Flash Drives',
                        url: '#',
                    },
                    {
                        label: 'OTG Drives',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Printer',
                url: '#',
                cates: [
                    {
                        label: 'Printers',
                        url: '#',
                    },
                    {
                        label: 'Ink & Toners',
                        url: '#',
                    },
                    {
                        label: 'Printer Stands',
                        url: '#',
                    },
                    {
                        label: 'Fax Machines',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Computer Components',
                url: '#',
                cates: [
                    {
                        label: 'Graphic Cards',
                        url: '#',
                    },
                    {
                        label: 'Desktop Casings',
                        url: '#',
                    },
                    {
                        label: 'Motherboards',
                        url: '#',
                    },
                    {
                        label: 'Fans & Heatsinks',
                        url: '#',
                    },
                    {
                        label: 'RAM',
                        url: '#',
                    },
                    {
                        label: 'Processors',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Network Components',
                url: '#',
                cates: [
                    {
                        label: 'Access Points',
                        url: '#',
                    },
                    {
                        label: 'Modems',
                        url: '#',
                    },
                    {
                        label: 'Network Interface Cards',
                        url: '#',
                    },
                    {
                        label: 'Network Switches',
                        url: '#',
                    },
                    {
                        label: 'Routers',
                        url: '#',
                    },
                    {
                        label: 'Wireless USB Adapters',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Software',
                url: '#',
                cates: [
                    {
                        label: 'Educational Media',
                        url: '#',
                    },
                    {
                        label: 'Operating System',
                        url: '#',
                    },
                    {
                        label: 'PC Games',
                        url: '#',
                    },
                    {
                        label: 'Security Software',
                        url: '#',
                    },

                ]
            },
        ]
    },
    {
        label: 'Health & Beauty',
        url: '#',
        icon: '/images/cate-3.webp',
        subCat: [
            {
                label: 'Bath & Body',
                url: '#',
                cates: [
                    {
                        label: 'Body & Massage Oils',
                        url: '#',
                    },
                    {
                        label: 'Body Moisturizers',
                        url: '#',
                    },
                    {
                        label: 'Body Scrubs',
                        url: '#',
                    },
                    {
                        label: 'Body Soaps & Shower Gels',
                        url: '#',
                    },
                    {
                        label: 'Foot Care',
                        url: '#',
                    },
                    {
                        label: 'Hair Removal',
                        url: '#',
                    },
                    {
                        label: 'Hand Care',
                        url: '#',
                    },
                    {
                        label: 'Sun Care for Body',
                        url: '#',
                    },
                    {
                        label: 'Bath & Body Accessories',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Beauty Tools',
                url: '#',
                cates: [
                    {
                        label: 'Curling Irons & Wands',
                        url: '#',
                    },
                    {
                        label: 'Flat Irons',
                        url: '#',
                    },
                    {
                        label: 'Multi-stylers',
                        url: '#',
                    },
                    {
                        label: 'Hair Dryers',
                        url: '#',
                    },
                    {
                        label: 'Face Skin Care Tools',
                        url: '#',
                    },
                    {
                        label: 'Foot Relief Tools',
                        url: '#',
                    },
                    {
                        label: 'Hair Removal Accessories',
                        url: '#',
                    },
                    {
                        label: 'Slimming & Electric Massagers',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Fragrances',
                url: '#',
                cates: [
                    {
                        label: 'Women Fragrances',
                        url: '#',
                    },

                    {
                        label: 'Men Fragrances',
                        url: '#',
                    },
                    {
                        label: 'Unisex Fragrances',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Hair Care',
                url: '#',
                cates: [
                    {
                        label: 'Shampoo',
                        url: '#',
                    },
                    {
                        label: 'Hair Treatments',
                        url: '#',
                    },
                    {
                        label: 'Hair Care Accessories',
                        url: '#',
                    },
                    {
                        label: 'Hair Brushes & Combs',
                        url: '#',
                    },
                    {
                        label: 'Hair Coloring',
                        url: '#',
                    },
                    {
                        label: 'Hair Conditioner',
                        url: '#',
                    },
                    {
                        label: 'Wig & Hair Extensions & Pads',
                        url: '#',
                    },
                ]
            },
            {
                label: "Men's Care",
                url: '#',
                cates: [
                    {
                        label: 'Deodorants',
                        url: '#',
                    },
                    {
                        label: 'Hair Care',
                        url: '#',
                    },
                    {
                        label: 'Shaving & Grooming',
                        url: '#',
                    },
                    {
                        label: 'Skin Care',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Personal Care',
                url: '#',
                cates: [
                    {
                        label: 'Oral Care',
                        url: '#',
                    },
                    {
                        label: 'Personal Safety & Security',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Skin Care',
                url: '#',
                cates: [
                    {
                        label: 'Moisturizers & Creams',
                        url: '#',
                    },
                    {
                        label: 'Serum & Essence',
                        url: '#',
                    },
                    {
                        label: 'Face Mask & Packs',
                        url: '#',
                    },
                    {
                        label: 'Face Scrubs & Exfoliators',
                        url: '#',
                    },
                    {
                        label: 'Facial Cleansers',
                        url: '#',
                    },
                    {
                        label: 'Lip Balm & Treatments',
                        url: '#',
                    },
                    {
                        label: 'Toner & Mists',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Food Supplements',
                url: '#',
                cates: [
                    {
                        label: 'Beauty Supplements',
                        url: '#',
                    },
                    {
                        label: 'Multivitamins',
                        url: '#',
                    },
                    {
                        label: 'Sports Nutrition',
                        url: '#',
                    },
                    {
                        label: 'Well Being',
                        url: '#',
                    },
                    {
                        label: 'Sexual Health Vitamins',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Medical Supplies',
                url: '#',
                cates: [
                    {
                        label: 'First Aid Supplies',
                        url: '#',
                    },
                    {
                        label: 'Health Accessories',
                        url: '#',
                    },
                    {
                        label: '>Health Monitors & Tests',
                        url: '#',
                    },
                    {
                        label: 'Injury Support & Braces',
                        url: '#',
                    },
                    {
                        label: 'Medical Tests',
                        url: '#',
                    },
                    {
                        label: 'Nebulizers & Aspirators',
                        url: '#',
                    },
                    {
                        label: 'Ointments & Creams',
                        url: '#',
                    },
                    {
                        label: 'Scales & Body Fat Analyzers',
                        url: '#',
                    },
                    {
                        label: 'Wheelchairs',
                        url: '#',
                    },

                ]
            },

        ]
    },
    {
        label: 'Babies & Toys',
        url: '#',
        icon: '/images/cate-4.webp',
        subCat: [
            {
                label: 'Feeding',
                url: '#',
                cates: [
                    {
                        label: 'Baby & Toddler Foods',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Fashion',
        url: '#',
        icon: '/images/cate-5.webp',
        subCat: [
            {
                label: 'Men Fashion',
                url: '#',
                cates: [
                    {
                        label: 'Jackets & Coats',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Watches & Accessories',
        url: '#',
        icon: '/images/cate-6.webp',
        subCat: [
            {
                label: "Men's Watch",
                url: '#',
                cates: [
                    {
                        label: 'Casual',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Sports & Outdoor',
        url: '#',
        icon: '/images/cate-7.webp',
        subCat: [
            {
                label: "Cycling",
                url: '#',
                cates: [
                    {
                        label: 'Bicycle',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Automotive & Motorbike',
        url: '#',
        icon: '/images/cate-8.webp',
        subCat: [
            {
                label: "Automobile",
                url: '#',
                cates: [
                    {
                        label: 'Imported Cars',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Home Appliances',
        url: '#',
        icon: '/images/default-image.png',
        subCat: [
            {
                label: "Small Kitchen Appliances",
                url: '#',
                cates: [
                    {
                        label: 'Food Preparation',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Digital Product',
        url: '#',
        icon: '/images/cate-10.webp',
        subCat: [
            {
                label: "HTML",
                url: '#',
                cates: []
            },
            {
                label: "WordPress",
                url: '#',
                cates: []
            },

        ]
    },
    {
        label: 'Cameroon',
        url: '#',
        icon: '/images/default-image.png',
        subCat: [
            {
                label: "Envato",
                url: '#',
                cates: []
            },

        ]
    },


]

export const Categories: React.FC = () => {
    const [showless, setShowless] = React.useState(false)

    return (
        <>
            <button className="relative w-full md:flex items-center border-r border-l cursor-pointer h-16 px-5 hidden bg-gray-50 text-gray-600 gap-4">
                <Baricon className='size-6' />
                <span className="text-base  ">Categories</span>
            </button>
            <div className='bg-white border transform scale-1 z-30 relative h-100 w-full hidden md:block'>
                <ul className="divide-y divide-gray-300">

                
                    
                    {showless ? (
                        <>
                            {categoriesList.map((item, index) => (
                                <li key={index} className='group/main relative font-dm'>
                                    <Link href="#" className='flex items-center justify-start w-full h-12 text-gray-600  ease-in-out duration-200 font-medium px-5 gap-3 group-hover/main:indent-2 group-hover/main:bg-primary group-hover/main:text-white'>
                                        <span className='size-5 group-hover/main:translate-x-2 ease-in-out duration-200'><Image src={item.icon} alt={item.label} width={20} height={20} /></span>
                                        <span className='text-sm flex-1'>{item.label}</span>
                                        {item.subCat && <Anglerighticon className="size-3" />}
                                    </Link>
                                    <ul className='bg-white absolute z-10 top-0 left-[calc(100%-1px)] w-52 rounded-md border border-gray-300 shadow-1 divide-y divide-gray-300 hidden group-hover/main:block'>
                                        {item.subCat?.map((subCitem, si) =>
                                            <li key={si} className='relative group/item'>
                                                <Link href={subCitem.url} className={`flex py-3 px-4 text-gray-600 items-center ease-in-out duration-200 group-hover/item:indent-2 group-hover/item:bg-primary group-hover/item:text-white ${si == 0 && 'rounded-t-md'} ${si === item.subCat.length - 1 && 'rounded-b-md'}`}>
                                                    <span className='text-sm flex-1'>{subCitem.label}</span>
                                                    {item.subCat && <Anglerighticon className="size-3" />}
                                                </Link>

                                                <ul className='bg-white absolute z-10 top-0 left-[calc(100%-1px)] w-52 rounded-md border border-gray-300 shadow-1 divide-y divide-gray-300 hidden group-hover/item:block'>
                                                    {subCitem.cates?.map((catesItem, pi) =>
                                                        <li key={pi} className='relative'>
                                                            <Link href={catesItem.url} className={`py-3 px-4 text-gray-600 flex ease-in-out duration-200 hover:bg-primary hover:text-white hover:indent-2 ${pi == 0 && 'rounded-t-md'} ${pi === subCitem.cates?.length - 1 && 'rounded-b-md'}`}>
                                                                <span className='text-sm'>{catesItem.label}</span>
                                                            </Link>
                                                        </li>
                                                    )}
                                                </ul>

                                            </li>
                                        )}
                                    </ul>
                                </li>

                            )
                            )}
                        </>
                    ) : (
                        <>
                            {categoriesList.slice(0, 8).map((item, index) => (
                                <li key={index} className='group/main relative font-dm'>
                                    <Link href="#" className='flex items-center justify-start w-full h-12 text-gray-600  ease-in-out duration-200 font-medium px-5 gap-3 group-hover/main:indent-2 group-hover/main:bg-primary group-hover/main:text-white'>
                                        <span className='size-5 group-hover/main:translate-x-2 ease-in-out duration-200'><Image src={item.icon} alt={item.label} width={20} height={20} /></span>
                                        <span className='text-sm flex-1'>{item.label}</span>
                                        {item.subCat && <Anglerighticon className="size-3" />}
                                    </Link>
                                    <ul className='bg-white absolute z-10 top-0 left-[calc(100%-1px)] w-52 rounded-md border border-gray-300 shadow-1 divide-y divide-gray-300 hidden group-hover/main:block'>
                                        {item.subCat?.map((subCitem, si) =>
                                            <li key={si} className='relative group/item'>
                                                <Link href={subCitem.url} className={`flex py-3 px-4 text-gray-600 items-center ease-in-out duration-200 group-hover/item:indent-2 group-hover/item:bg-primary group-hover/item:text-white ${si == 0 && 'rounded-t-md'} ${si === item.subCat.length - 1 && 'rounded-b-md'}`}>
                                                    <span className='text-sm flex-1'>{subCitem.label}</span>
                                                    {item.subCat && <Anglerighticon className="size-3" />}
                                                </Link>

                                                <ul className='bg-white absolute z-10 top-0 left-[calc(100%-1px)] w-52 rounded-md border border-gray-300 shadow-1 divide-y divide-gray-300 hidden group-hover/item:block'>
                                                    {subCitem.cates?.map((catesItem, pi) =>
                                                        <li key={pi} className='relative'>
                                                            <Link href={catesItem.url} className={`py-3 px-4 text-gray-600 flex ease-in-out duration-200 hover:bg-primary hover:text-white hover:indent-2 ${pi == 0 && 'rounded-t-md'} ${pi === subCitem.cates?.length - 1 && 'rounded-b-md'}`}>
                                                                <span className='text-sm'>{catesItem.label}</span>
                                                            </Link>
                                                        </li>
                                                    )}
                                                </ul>

                                            </li>
                                        )}
                                    </ul>
                                </li>

                            )
                            )}
                        </>
                    )}
                    <li>
                        <button className='flex items-center py-3 px-5 text-gray-600 uppercase w-full' onClick={() => setShowless(!showless)}>
                            <span className='flex-1 text-left text-sm font-medium'>See {showless ? 'Less' : 'More'} Categories</span>
                            <Angledownicon className={`size-3 ease-in-out duration-200 ${showless && 'rotate-180' }`} />
                        </button>
                    </li>
                </ul>
            </div>

        </>
    )
}


