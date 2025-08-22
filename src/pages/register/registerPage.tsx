import { BackgroundLayout } from "@/shared/layouts";
import { Link } from "react-router";

export function RegisterPage() {
  return (
    <BackgroundLayout>
      <div className="flex flex-col items-center justify-center w-full h-screen">
      <div
          className="flex flex-col items-center justify-center w-5/10 h-8/10 bg-accent-foreground/20 backdrop-blur-xs rounded-2xl border-border"
        >
      <h1 className="text-3xl font-bold underline">Register Page</h1>
      <p>This is the registration page.</p>
      <Link to="/" className="hover:underline">
        Go to main page
      </Link>
      <Link to="/login" className="hover:underline">
        Login
      </Link>
      </div>
      </div>
    </BackgroundLayout>
  );
}
