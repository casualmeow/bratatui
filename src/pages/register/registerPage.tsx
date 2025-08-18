import { BackgroundLayout } from "@/shared/layouts";
import { Link } from "react-router";

export function RegisterPage() {
    return (
        <BackgroundLayout>
            <h1 className="text-3xl font-bold underline">Register Page</h1>
            <p>This is the registration page.</p>
            <Link to="/" className="hover:underline">Go to main page</Link>
            <Link to="/login" className="hover:underline">Login</Link>
        </BackgroundLayout>
    );
}