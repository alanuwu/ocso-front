import {NextRequest, NextResponse} from "next/server";
import {TOKEN_NAME} from "@/constants";
import {cookies} from "next/headers";

export default function middleware(req: NextRequest) {
    const token = cookies().get(TOKEN_NAME)?.value;
    if (req.nextUrl.pathname == '/dashboard') {
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
        if (!req.nextUrl.searchParams.has('store')) {
            return NextResponse.redirect(new URL('/dashboard?store=1', req.url));
        }
    }
    if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard?store=1', req.url))
    }
    return NextResponse.next()
}
