const paths = {
  MASTER: "",
  BRAND: "/brands",
  BRAND_DETAIL: "/brand/:slug",
  PRODUCTS: "/product/:slug",
  CATEGORY: "/categories/:slug",
  PREVIEWORDER: "/preview-order",
  CHECKOUT: "/check-out",
  STOREDETAIL: "/stores/:id",
  STORE: "/stores",
  HOME: "/",
};
export const adminPaths = {
  HOME: "/admin",
  PRODUCTS: "/admin/products",
  CREATEPRODUCTS: "/admin/products/create",
  SALEPRODUCT: "/admin/sale-products",
  SALEPRODUCTCREATE: "/admin/sale-products/create",
  VARIANT: "/admin/variants",
  DISCOUNTEDIT: "/admin/discounts/:id/edit",
};

export default paths;
