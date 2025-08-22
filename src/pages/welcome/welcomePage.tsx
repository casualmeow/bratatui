import { PageLayout } from "@/shared/layouts";
import { Link } from "react-router";

export function WelcomePage() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold underline">Welcome to the App!</h1>
      <p>This is the welcome page.</p>
      <Link to="/login" className="text-blue-500 hover:underline">
        Click here to login
      </Link>
    </PageLayout>
  );
}
