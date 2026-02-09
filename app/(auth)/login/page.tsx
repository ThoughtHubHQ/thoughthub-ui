import Login from "./Login";

export const metadata = {
    title: 'Login - ThoughtHub HQ',
    description: 'Access your ThoughtHub account to manage your projects, collaborate with your team, and stay organized. Sign in to unlock the full potential of our platform.',
};

export default function LoginPage() {
    return(
        <div>
           <Login />
        </div>
    );
};