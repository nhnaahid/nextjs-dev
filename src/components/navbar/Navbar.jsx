"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const navLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact Us',
            path: '/contact'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        }
    ]

    const handleLogin = () => {
        router.push('/about');
    }

    return (
        <nav className="flex justify-between items-center px-10 bg-blue-200 p-3">
            <Link href={'/'}><h1 className="w-1/5 font-bold text-3xl">Next<span className='text-blue-600'>Dev</span></h1></Link>
            <ul className="flex w-4/5 justify-center gap-10">
                {
                    navLinks.map(link => <Link className={`${pathName === link.path && 'text-blue-700 font-semibold'} hover:text-blue-600`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handleLogin} className='p-2 rounded-lg bg-sky-600 text-white hover:bg-sky-500'>Login</button>
        </nav>
    );
};

export default Navbar;