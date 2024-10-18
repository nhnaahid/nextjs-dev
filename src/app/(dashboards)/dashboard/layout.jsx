import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='text-center'>
            <nav className='bg-emerald-300'>
                <p>This is Dashboard Navbar</p>
            </nav>
            {children}
            <footer className='bg-emerald-100'>this is dashboard footer</footer>
        </div>
    );
};

export default layout;