import { NextResponse } from 'next/server'

const user = true;

export const middleware = (request) => {
    const { pathname } = request.nextUrl;
    const cookie = request.cookies.get('token');

    console.log(pathname);
    // console.log(cookie);

    if (pathname === '/blogs')
        return NextResponse.next();

    if (!user || !cookie) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}


export const config = {
    matcher: ['/dashboard', '/categories', '/blogs/:slug*'],
}