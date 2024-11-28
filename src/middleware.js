import { NextResponse } from 'next/server'

const user = true;

export const middleware = (request) => {
    const { pathname } = request.nextUrl;
    const cookies = request.cookies.get('token')

    // console.log(pathname);

    if (pathname === '/blogs')
        return NextResponse.next();

    if (!user || !cookies) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}


export const config = {
    matcher: ['/dashboard', '/categories', '/blogs/:slug*'],
}