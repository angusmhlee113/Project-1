import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Pages Import
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/Auth";
import PersonalPage from "./Pages/PersonalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "auth", element: <AuthPage /> },
      { path: "personalpage", element: <PersonalPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
