import React, { useEffect } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import styled from "styled-components";
const BreadCrumb = ({ url }) => {
  const routes = [
    {
      path: "/",
      breadcrumb: "Trang chủ",
    },
    {
      path: "/categories/:slug",
      breadcrumb: url.vie,
    },
  ];
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <>
      <BreadCrumbStyled className="flex items-center">
        {breadcrumbs
          .filter((el) => !el.match.route === false)
          .map(({ match, breadcrumb }, index) => (
            <>
              <Link
                key={match.pathname}
                to={match.pathname}
                className="bread_crumb no-underline cursor-pointer "
              >
                {breadcrumb}
              </Link>
              {index ===
              breadcrumbs.filter((el) => !el.match.route === false).length - 1
                ? ""
                : helllo}
            </>
          ))}
      </BreadCrumbStyled>
    </>
  );
};
const BreadCrumbStyled = styled.div`
  .bread_crumb {
    color: #797979;
  }
`;
export default BreadCrumb;
