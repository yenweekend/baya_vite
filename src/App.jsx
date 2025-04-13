import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
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
  ProductsSearched,
  Address,
  AccountInfo,
  AccountMaster,
  PurchaseOrder,
} from "./containers/pages/ui";
import NewProducts from "./containers/pages/NewProducts";
import UserMaster from "./containers/layouts/user/Master";
import paths from "./utils/paths";
import { NotFound } from "./containers/components";
import { useDispatch, useSelector } from "react-redux";
import { verify, checkAuth } from "./redux-toolkit/slice/auth.slice";
import RedirectRoute from "./containers/components/RedirectRoute";
import ProtectedRoute from "./containers/components/ProtectedRoute";
function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      console.log("true");

      // check if user has logged in or they change islogged value in localstorage to true
      dispatch(verify());
    } else {
      // when user does not logged in how they change the islogged in key in localstorage; force them to log in to use web
      console.log("false");
      dispatch(checkAuth());
    }
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        <Route element={<NewProducts />} path={"/editor"}></Route>
        <Route element={<CheckOut />} path={paths.CHECKOUT}></Route>
        <Route
          element={<ChangePassword />}
          path="/auth/resetpassword/:token"
        ></Route>
        <Route element={<UserMaster />} path={""}>
          <Route
            element={
              <RedirectRoute redirectTo={"/"}>
                <Register />
              </RedirectRoute>
            }
            path="/account/register"
          ></Route>
          <Route
            element={
              <RedirectRoute redirectTo={"/"}>
                <Login />
              </RedirectRoute>
            }
            path="/account/login"
          ></Route>
          <Route element={<Identify />} path="/login/identify"></Route>
          <Route element={<Home />} path={"/"}></Route>
          <Route element={<Products />} path={"/products/:slug"}></Route>
          <Route element={<ProductsSearched />} path={"/search"}></Route>
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
          <Route
            path={"/my-account"}
            element={
              <ProtectedRoute redirectTo={"/account/login"}>
                <AccountMaster />
              </ProtectedRoute>
            }
          >
            <Route index element={<AccountInfo />}></Route>
            <Route path={"/my-account/addresses"} element={<Address />}></Route>
            <Route
              path={"/my-account/purchase"}
              element={<PurchaseOrder />}
            ></Route>
          </Route>
          <Route
            path={"/cart"}
            element={
              <ProtectedRoute redirectTo={"/account/login"}>
                <CartDetail />
              </ProtectedRoute>
            }
          ></Route>
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
        </Route>
        <Route element={<NotFound />} path="/*"></Route>
      </Routes>
    </>
  );
}

export default App;
