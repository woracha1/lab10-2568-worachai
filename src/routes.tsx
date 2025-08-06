import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout"; // ใช้ tem หรือ layout นี้กับทุกๆ หน้า
import ErrorPage from "./pages/ErrorPage";
import RandomUserPage from "./pages/RandomUserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/
      { index: true, element: <RandomUserPage /> },
    ],
  },
]);
