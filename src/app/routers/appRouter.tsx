import { createBrowserRouter } from "react-router";
import { WelcomePage } from "@/pages/welcome";
import { LoginPage } from "@/pages/login";
import { RegisterPage } from "@/pages/register";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
