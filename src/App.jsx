import { Route, Routes } from "react-router-dom";
import {
  Home,
  Master,
  Brand,
  Products,
  ListBrands,
  Category,
  Ckeditor,
} from "./containers/layouts";
import Scrape from "./containers/layouts/Scrape";
import paths from "./utils/paths";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Master />} path={paths.MASTER}>
          <Route element={<Home />} path={paths.HOME}></Route>
          <Route element={<Brand />} path={paths.BRAND_DETAIL}></Route>
          <Route element={<ListBrands />} path={paths.BRAND}></Route>
          <Route element={<Products />} path={paths.PRODUCTS}></Route>
          <Route element={<Category />} path={paths.CATEGORY}></Route>
          <Route element={<Scrape />} path={"/scrape"}></Route>
          <Route element={<Ckeditor />} path={"/ckeditor"}></Route>
          <Route element={<Home />} path="/*"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
