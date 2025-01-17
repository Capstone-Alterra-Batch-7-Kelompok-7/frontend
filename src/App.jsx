import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPass from "./pages/Auth/forgotPass";
import VerifyCode from "./pages/Auth/verifyCode";
import ResetPassword from "./pages/Auth/resetPassword";
import ArticleList from "./pages/article/ArticleList";
import ArticleDetail from "./pages/article/ArticleDetail";
import ScrollTop from "./components/ScrollTop";
import ProductList from "./pages/product/ProductList";
import DetailProduct from "./pages/product/DetailProduct";
import BuyNowProduct from "./pages/product/BuyNowProduct";
import PaymentSucces from "./pages/PaymentSucces";
import { ProtectedRoute } from "./ProtectedRoute";
import CartProducts from "./pages/product/CartProduct";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/homepage/HomePage";
import EventList from "./pages/event/EventList";
import ProductDataDashboard from "./pages/admin/product/ProductDataDashboard";
import FormAddProduct from "./pages/admin/product/FormAddProduct";
import FormEditProduct from "./pages/admin/product/FormEditProduct";
import DashboardHome from "./components/AdminDashboard";
import ArticleDataDashboard from "./pages/admin/article/ArticleDataDashboard";
import EventTable from "./pages/event/crud event/EventTable";
import AddEventPage from "./pages/event/crud event/AddEventPage";
import { WrapperDashboard } from "./components/WrapperDashboard";
import EditEventPage from "./pages/event/crud event/EditEventPage";
import Chatbot from "./pages/homepage/ChatBot";
import DetailEvent from "./pages/event/DetailEvent";
import BuyTicket from "./pages/event/buyTicket";
import Eticket from "./pages/event/BarcodeTicket";
import TransactionDashboard from "./pages/admin/transactions/TransactionDashboard";


const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/register", element: <Register /> },
  { path: "/aturulang", element: <ForgotPass /> },
  { path: "*", element: <div>404 - Page Not Found</div> },
  { path: "/login", element: <Login /> },
  { path: "/homepage", element: <HomePage /> },
  { path: "/dashboard", element: <DashboardHome /> },

  { path: "/reset", element: <ResetPassword /> },
  { path: "/verify", element: <VerifyCode /> },

  {path:"/event-table", element: <EventTable />},
  {path:"/event-table/:id", element: <EditEventPage />},
  {path:"/add-event", element: <AddEventPage />},
  {path:"/wrapper", element:<WrapperDashboard/>}, 
  { path: "/chatbot", element: <Chatbot /> },

  { path: "/events/buyticket/eticket", element: <Eticket /> },

  {
    path: "/",
    element: <ScrollTop />,
    children: [
      { path: "/article", element: <ArticleList /> },
      { path: "/article/:id", element: <ArticleDetail /> },
      { path: "/products", element: <ProductList /> },
      { path: "/events", element: <EventList /> },
      { path: "/event/:id", element: <DetailEvent/> },
      { path: "/product/:id", element: <DetailProduct /> },
      { path: "/buy-now", element: <BuyNowProduct /> },
      { path: "/events/buyticket", element: <BuyTicket />},
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          { path: "/cart", element: <CartProducts /> },
          { path: "/success", element: <PaymentSucces /> },
          { path: "/dashboard/product", element: <ProductDataDashboard /> },
          { path: "/dashboard/product/add", element: <FormAddProduct /> },
          { path: "/dashboard/product/edit/:id", element: <FormEditProduct /> },
          { path: "/dashboard/article", element: <ArticleDataDashboard /> },
          { path: "/dashboard/transaction", element: <TransactionDashboard /> },
        ],
      },
    ],
  },
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

