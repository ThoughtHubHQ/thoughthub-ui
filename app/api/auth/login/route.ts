import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { data } = await axios.post(
      `${process.env.SERVER_URL}/api/v1/auth/login`,
      body,
      { withCredentials: true },
    );

    if (data.success) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 15,
        sameSite: "lax",
      });

      cookieStore.set("refreshToken", data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
      });
    }

    return NextResponse.json(data, { status: data.success ? 200 : 400 });
  } catch (err: any) {
    console.error("Login API error:", err);
    const message = err.response?.data?.message;

    return NextResponse.json(
      { success: false, message },
      { status: err.response?.status },
    );
  }
}
