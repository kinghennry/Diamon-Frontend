/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { toast } from "react-toastify";
import Loading from "../../common/Loading";
import { useSelector, useDispatch } from "react-redux";
import Empty from "./Empty";
import { getFeedbacks, setCurrentPage } from "../../../features/feedbackSlice";
import Header from "./Header";
import Feedback from "./Feedback";
import Pagination from "../../page/Pagination";
import { useLocation } from "react-router-dom";
import NoSearchResult from "./NoSearchResult";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Main = () => {
  const {
    feedbacks,
    loading,
    error,
    numberOfPages,
    currentPage,
    totalFeedbacks,
  } = useSelector((state) => ({
    ...state.feedback,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedbacks(currentPage));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <MediaQuery minWidth={630}>
        <Header totalFeedbacks={totalFeedbacks} />
      </MediaQuery>
      {feedbacks.length === 0 && location.pathname === "/" && <Empty />}
      {feedbacks.map((feedback, index) => {
        return <Feedback key={feedback._id} {...feedback} />;
      })}

      {feedbacks.length === 0 && location.pathname !== "/" && (
        <NoSearchResult searchQuery={searchQuery} />
      )}

      {feedbacks.length > 0 && !searchQuery && (
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          dispatch={dispatch}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
};
export default Main;
