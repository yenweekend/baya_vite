import { Route, Routes } from "react-router-dom";
import {
  Home,
  BrandDetail,
  Products,
  ListBrands,
  Category,
  Ckeditor,
  PrevidewOrder,
  CheckOut,
  StoreView,
  Store,
  Register,
  Identify,
  Login,
  ChangePassword,
} from "./containers/pages/user";
import {
  AdminProduct,
  ProductCreate,
  ProductSale,
  ProductSaleCreate,
  Variants,
  DiscountEdit,
} from "./containers/pages/admin/index";
import UserMaster from "./containers/layouts/user/Master";
import AdminMaster from "./containers/layouts/admin/Master";
import paths from "./utils/paths";
import { adminPaths } from "./utils/paths";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Identify />} path="/login/identify"></Route>
        <Route
          element={<ChangePassword />}
          path="/auth/resetpassword/:token"
        ></Route>
        <Route element={<UserMaster />} path={paths.MASTER}>
          <Route element={<Home />} path={paths.HOME}></Route>
          <Route element={<BrandDetail />} path={paths.BRAND_DETAIL}></Route>
          <Route element={<ListBrands />} path={paths.BRAND}></Route>
          <Route element={<Products />} path={paths.PRODUCTS}></Route>
          <Route element={<Category />} path={paths.CATEGORY}></Route>
          <Route element={<PrevidewOrder />} path={paths.PREVIEWORDER}></Route>
          <Route element={<CheckOut />} path={paths.CHECKOUT}></Route>
          <Route element={<StoreView />} path={paths.STOREDETAIL}></Route>
          <Route element={<Store />} path={paths.STORE}></Route>
          <Route element={<Ckeditor />} path={"/ckeditor"}></Route>
          <Route element={<Home />} path="/*"></Route>
        </Route>
        <Route element={<AdminMaster />} path={adminPaths.HOME}>
          <Route element={<AdminProduct />} path={adminPaths.PRODUCTS}></Route>
          <Route
            element={<ProductCreate />}
            path={adminPaths.CREATEPRODUCTS}
          ></Route>
          <Route
            element={<ProductSale />}
            path={adminPaths.SALEPRODUCT}
          ></Route>
          <Route
            element={<ProductSaleCreate />}
            path={adminPaths.SALEPRODUCTCREATE}
          ></Route>
          <Route element={<Variants />} path={adminPaths.VARIANT}></Route>
          <Route
            element={<DiscountEdit />}
            path={adminPaths.DISCOUNTEDIT}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
