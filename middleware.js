import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req) {
  const { origin, pathname } = req.nextUrl;

  const secret = process.env.NEXTAUTH_SECRET;

  const token = await getToken({ req, secret });
  // console.log("token from middleware", token);

  if (pathname !== "/admin/sign-in") {
    if (pathname.includes("/admin")) {
      // if (token?.text !== "success") {
      if (token?.role !== "admin") {
        return NextResponse.redirect(`${origin}/admin/sign-in`);
      }
    }
  } else {
    // if (token?.text === "success") {
    if (token?.role === "admin") {
      return NextResponse.redirect(`${origin}/admin`);
    }
  }

  // example for users protected page
  // if (pathname !== "/sign-in") {
  //   if (pathname === "/viet-travels") {
  //     if (!token?.email) {
  //       return NextResponse.redirect(
  //         `${origin}/sign-in?callbackurl=/viet-travels`
  //       );
  //     }
  //   }
  // } else {
  //   if (token?.email) {
  //     return NextResponse.redirect(`${origin}`);
  //   }
  // }

  return NextResponse.next();
}

// example for users protected page
// export const config = {
//   matcher: ["/admin/:path*", "/viet-travels", "/sign-in"],
// };

export const config = { matcher: ["/admin/:path*"] };
