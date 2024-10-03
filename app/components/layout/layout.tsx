'use client'
import React from 'react'
import { Header } from './header';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { useRouter, usePathname } from 'next/navigation'
interface layout {
    children: React.ReactNode;
}
const Layout: React.FC<layout> = ({ children }) => {
    const active = usePathname();
    return (
        <>
            <Header />
            <Navbar show={active === '/' && true} />
            <main>
                <div className='container p-4 xl:px-5'>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Layout
