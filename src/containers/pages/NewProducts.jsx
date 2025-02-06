import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { CkEditor } from "../components";

const NewProducts = () => {
  return (
    <NewProductsStyled>
      <div className="flex items-center justify-between mt-3">
        <div className="blog">
          <CkEditor />
        </div>
      </div>
    </NewProductsStyled>
  );
};
const NewProductsStyled = styled.div`
  .category,
  .form {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 4px;
    .scrollbar_category::-webkit-scrollbar-track {
      width: 3px;
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    .scrollbar_category::-webkit-scrollbar {
      width: 3px;
      background-color: #f5f5f5;
    }

    .scrollbar_category::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #7460e4;
    }
  }
`;
export default NewProducts;
