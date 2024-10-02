// components/Breadcrumb.js
import { Homeicon } from '@/app/icons';
import Link from 'next/link';
import React from 'react'


const Breadcrumb = ({ paths }: any) => {
    return (
        <nav className="flex py-3 text-gray-700" >
            <ol className="inline-flex items-center gap-2">
                <li className="inline-flex items-center gap-2"><Link href={'/'} className='text-gray-500 hover:text-primary ease-in-out duration-200'><Homeicon className="size-3.5" /></Link><span className='text-gray-500 text-sm'>/</span> </li>
                {paths.map((path: any, index: any) => (
                    <li key={index} className="inline-flex items-center gap-2">
                        {index !== paths.length - 1 ? (
                            <>
                            <Link href={path.href} className="text-sm font-dm font-medium ">
                                    {path.name}
                                </Link>
                             <span className='text-gray-500 text-sm'>/</span>
                             </>
                        ) : (
                            <span className="text-sm font-medium text-gray-500">{path.name}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
