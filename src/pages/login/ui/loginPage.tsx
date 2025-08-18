import { Link } from "react-router";
import { BackgroundLayout } from "@/shared/layouts";
import { FormField } from "./formField";
import { BottomGradient } from "@/shared/ui";
import { Github } from "lucide-react";

export function LoginPage() {
    

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
    };

    return (
        <BackgroundLayout>
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <div className="flex flex-col items-center justify-center w-5/10 h-8/10 bg-accent-foreground/20 backdrop-blur-xs rounded-2xl border-border" onSubmit={handleSubmit}>
                    <form onSubmit={handleSubmit}>
                    <h1 className="text-3xl text-accent font-bold">Login</h1>
                    <p className="text-shadow-primary-foreground">Log in to proceed</p>
                    <FormField label="Email" type="email" id="email" placeholder="Enter your email" />
                    <FormField label="Password" type="password" id="password" placeholder="Enter your password" />
                    <button type="submit" className="mt-4 px-4 py-2 rounded text-accent">Login</button>

                    <Link to="/register" className="mt-2 bg hover:underline">Register</Link>
                    </form>
                </div>
            </div>

            {/* <div className="flex flex-col items-center justify-center w-full h-screen">
            <form action="" onSubmit={handleSubmit}>
            <h1 className="text-3xl text-accent font-bold">Register Page</h1>
            <p >This is the registration page.</p>
            <Link to="/" className="hover:underline">Go to main page</Link>
            <Link to="/register" className=" hover:underline">Register</Link>
            </form>
            </div> */}
        </BackgroundLayout>
    );
}