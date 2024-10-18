"use client"

import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
    const pathName = usePathname();
    if (!pathName.includes('dashboard') && !pathName.includes('signin') && !pathName.includes('signup')) {
        return (
            <div className='text-center bg-blue-100 p-5'>
                <p>This is Footer</p>
            </div>
        );
    }

};

export default Footer;