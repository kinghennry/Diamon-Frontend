import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getUserUpvotes } from "../../features/feedbackSlice";
import Upvote from "../../components/upvotes/Upvote";
import Header from "../../components/upvotes/Header";
import Empty from "../../components/upvotes/Empty";
import MainLayout from "../../components/common/Layout";
import { Loading } from "../../components";

const Layout = styled(MainLayout)`
  max-width: 760px;
  width: 100%;
  padding: 94px 15px;
  margin: 0 auto;
`;

function YourUpvotes() {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userUpVotes, loading } = useSelector((state) => ({
    ...state.feedback,
  }));

  const userId = user?.result?._id;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(getUserUpvotes(userId));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  console.log(userUpVotes);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Header userUpVotes={userUpVotes} />
      {userUpVotes.length === 0 && <Empty />}
      {userUpVotes.map((userUpVote, index) => {
        return <Upvote key={userUpVote._id} {...userUpVote} />;
      })}
    </Layout>
  );
}

export default YourUpvotes;
