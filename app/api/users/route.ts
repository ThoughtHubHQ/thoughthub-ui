import { NextResponse } from 'next/server';
import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({ 
  rejectUnauthorized: false,
  keepAlive: true 
});

const AUTH_CONFIG = {
  username: process.env.ROUTER_USER!,
  password: process.env.ROUTER_PASSWORD!,
};

const BASE_URL = `${process.env.ROUTER_ADD}/rest/user-manager`;

export async function GET() {
  try {
    const userListRes = await axios.get(`${BASE_URL}/user`, {
      auth: AUTH_CONFIG,
      httpsAgent,
    });

    const users = userListRes.data;

    if (!Array.isArray(users)) {
      return NextResponse.json([]);
    }
    const usersWithStats = await Promise.all(
      users.map(async (user: any) => {
        try {
          const monitorRes = await axios.post(
            `${BASE_URL}/user/monitor`,
            { ".id": user[".id"], once: true },
            { auth: AUTH_CONFIG, httpsAgent }
          );

          return { 
            ...user, 
            ...(monitorRes.data?.[0] || {}) 
          };
        } catch (err) {
          console.error(`Monitor failed for user ${user.name}:`, err);
          return user;
        }
      })
    );

    return NextResponse.json(usersWithStats);
  } catch (error: any) {
    console.error("MikroTik API Error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Failed to connect to MikroTik" }, 
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { userId, isDisabled } = await request.json();

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const response = await axios.patch(
      `${BASE_URL}/user/${userId}`,
      { disabled: isDisabled ? "true" : "false" },
      {
        auth: AUTH_CONFIG,
        httpsAgent,
      }
    );

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    console.error("Update Error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Failed to update user status" }, 
      { status: 500 }
    );
  }
}