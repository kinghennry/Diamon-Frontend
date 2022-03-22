import React from "react";
import styled from "styled-components";

const ButtonTag = styled.div`
  display: inline-block;
  padding: 6px 16px;
  background: #f2f4ff;
  border-radius: 10px;
  color: #4661e6;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  border: 1px solid #4661e6;
`;

function Pagination({ setCurrentPage, dispatch, currentPage, numberOfPages }) {
  const renderPagination = () => {
    if (currentPage === numberOfPages && currentPage === 1) return null;
    if (currentPage === 1) {
      return (
        <div className="cheat">
          <ButtonTag onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
            Next
          </ButtonTag>
        </div>
      );
    } else if (currentPage !== numberOfPages) {
      return (
        <div className="cheat">
          <ButtonTag onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
            Prev
          </ButtonTag>
          <h3 style={{ margin: "0 10px 0 10px", color: "#4661e6" }}>
            {currentPage}
          </h3>
          <ButtonTag onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
            Next
          </ButtonTag>
        </div>
      );
    } else {
      return (
        <div className="cheat">
          <ButtonTag onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
            Prev
          </ButtonTag>
          <h3 style={{ marginLeft: "10px", color: "#4661e6" }}>
            {currentPage}
          </h3>
        </div>
      );
    }
  };

  return <div className="mt-4">{renderPagination()}</div>;
}

export default Pagination;
