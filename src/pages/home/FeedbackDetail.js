import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFeedback } from "../../features/feedbackSlice";
import device from "../../components/common/MediaQueries";
import { Loading } from "../../components";
import MainLayout from "../../components/common/Layout";
import { Header, SingleFeedback } from "../../components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Layout = styled(MainLayout)`
  max-width: 760px;
  width: 100%;
  padding: 94px 15px;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

function FeedbackDetail() {
  const dispatch = useDispatch();
  const { feedback, loading } = useSelector((state) => ({
    ...state.feedback,
  }));

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getFeedback(id));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  console.log(feedback);
  return (
    <Layout>
      <Container className="form-animation">
        <Header feedback={feedback} />
        <SingleFeedback feedback={feedback} />
      </Container>
    </Layout>
  );
}

export default FeedbackDetail;
