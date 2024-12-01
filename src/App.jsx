import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPass from "./pages/Auth/forgotPass";
import ForgotPass from "../../pages/Auth/forgotPass";
import VerifyCode from "../../pages/Auth/verifyCode";
import ResetPassword from "../../pages/Auth/resetPassword";
const routes = [
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/aturulang", element: <ForgotPass /> },
  { path: "/aturulang", element: <ResetPassword  /> },
  { path: "/aturulang", element: <ForgotPass /> },
  { path: "/aturulang", element: <VerifyCode /> },

  { path: "*", element: <div>404 - Page Not Found</div> },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
