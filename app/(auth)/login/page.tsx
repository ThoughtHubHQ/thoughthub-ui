import Login from "./Login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login - ThoughtHub HQ",
  description:
    "Access your ThoughtHub account to manage your projects, collaborate with your team, and stay organized. Sign in to unlock the full potential of our platform.",
};

export default async function LoginPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (accessToken) {
    redirect("/dashboard");
  }

  return (
    <div>
      <Login />
    </div>
  );
}
