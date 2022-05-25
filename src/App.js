import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Pages/Auth/Login";
import PasswordReset from "./components/Pages/Auth/PasswordReset";
import Register from "./components/Pages/Auth/Register";
import RequireAdmin from "./components/Pages/Auth/RequireAdmin";
import RequireAuth from "./components/Pages/Auth/RequireAuth";
import Blogs from "./components/Pages/Blogs/Blogs";
import AddProduct from "./components/Pages/Dashboard/AddProduct";
import AddReview from "./components/Pages/Dashboard/AddReview";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyOrders from "./components/Pages/Dashboard/MyOrders";
import MyOrder from "./components/Pages/Dashboard/MyOrders";
import ManageOrders from "./components/Pages/Dashboard/ManageOrders";
import MyProfile from "./components/Pages/Dashboard/MyProfile";
import Users from "./components/Pages/Dashboard/Users";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import ProductDetails from "./components/Products/ProductDetails";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import ManageProducts from "./components/Pages/Dashboard/ManageProducts";
import MyPortolio from "./components/Pages/MyPortfolio/MyPortolio";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/password-reset" element={<PasswordReset></PasswordReset>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/my-portfolio" element={<MyPortolio></MyPortolio>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>

        }></Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="all-users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="add-product" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manage-orders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path="manage-products" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
