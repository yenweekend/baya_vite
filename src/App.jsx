import { Route, Routes } from "react-router-dom";
import {
  Home,
  Products,
  CheckOut,
  Register,
  Identify,
  Login,
  ChangePassword,
  CartDetail,
  PageMaster,
  AboutUs,
  Service,
  OrderInstruction,
  Installment,
  PayInstruction,
  Warranty,
  ShippingCost,
  RefundPolicy,
  DeliveryPolicy,
  PaymentMethods,
  Security,
  Chain,
  Contact,
  Blogs,
  BlogDetail,
  CollectionDetail,
  BlogMaster,
  Category,
} from "./containers/pages/ui";
import NewProducts from "./containers/pages/NewProducts";
import UserMaster from "./containers/layouts/user/Master";
import paths from "./utils/paths";
import { NotFound } from "./containers/components";
function App() {
  return (
    <>
      <Routes>
        <Route element={<NewProducts />} path={"/editor"}></Route>
        <Route element={<CheckOut />} path={paths.CHECKOUT}></Route>

        <Route
          element={<ChangePassword />}
          path="/auth/resetpassword/:token"
        ></Route>
        <Route element={<UserMaster />} path={paths.MASTER}>
          <Route element={<Register />} path="/account/register"></Route>
          <Route element={<Login />} path="/account/login"></Route>
          <Route element={<Identify />} path="/login/identify"></Route>
          <Route element={<Home />} path={paths.HOME}></Route>
          <Route element={<Products />} path={paths.PRODUCTS}></Route>
          <Route element={<Category />} path={"/categories/:slug"}></Route>
          <Route
            element={<CollectionDetail />}
            path={"/collections/:slug"}
          ></Route>
          <Route element={<BlogMaster />} path={"/blogs"}>
            <Route element={<Blogs />} path={"/blogs/:slug"}></Route>
            <Route
              element={<BlogDetail />}
              path={"/blogs/:blog-slug/:slug"}
            ></Route>
          </Route>
          <Route element={<CartDetail />} path={"/cart"}></Route>
          <Route element={<Chain />} path={"/pages/he-thong-cua-hang"}></Route>
          <Route element={<Contact />} path={"/pages/lien-he"}></Route>
          <Route element={<PageMaster />} path={"/pages"}>
            <Route element={<AboutUs />} path={"/pages/about-us"}></Route>
            <Route
              element={<Service />}
              path={"/pages/dieu-khoan-dich-vu"}
            ></Route>
            <Route
              element={<OrderInstruction />}
              path={"/pages/huong-dan-dat-hang"}
            ></Route>
            <Route
              element={<Installment />}
              path={"/pages/mua-hang-tra-gop"}
            ></Route>
            <Route
              element={<PayInstruction />}
              path={"/pages/huong-dan-thanh-toan-vnpay-qr-tren-website"}
            ></Route>
            <Route
              element={<Warranty />}
              path={"/pages/chinh-sach-bao-hanh"}
            ></Route>
            <Route
              element={<ShippingCost />}
              path={"/pages/chi-phi-van-chuyen"}
            ></Route>
            <Route
              element={<RefundPolicy />}
              path={"/pages/chinh-sach-doi-tra"}
            ></Route>
            <Route
              element={<DeliveryPolicy />}
              path={"/pages/chinh-sach-van-chuyen-va-giao-nhan"}
            ></Route>
            <Route
              element={<PaymentMethods />}
              path={"/pages/chinh-sach-thanh-toan"}
            ></Route>
            <Route
              element={<Security />}
              path={"/pages/chinh-sach-bao-mat-thong-tin"}
            ></Route>
          </Route>
          <Route element={<NotFound />} path="/*"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
