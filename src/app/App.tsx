import { RouterProvider } from "react-router";
import { appRouter } from "./routers/appRouter";
import "./App.css";

export default function App() {
  return <RouterProvider router={appRouter} />;
}
