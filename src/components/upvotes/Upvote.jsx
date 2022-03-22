import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeFeedback } from "../../features/feedbackSlice";
import { excerpt } from "../../utils";
import { Link } from "react-router-dom";
import {
  Button,
  Arrow,
  Container,
  DetailsContainer,
  User,
  Pic,
  Title,
  Description,
  ButtonTag,
  CommentContainer,
  Comment,
  MobileCont,
} from "../feedbackList/main/styles";
import MediaQuery from "react-responsive";

function Upvote({
  _id,
  name,
  likes,
  comments,
  img,
  verified,
  createdAt,
  updatedAt,
  title,
  category,
  description,
}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    ...state.auth,
  }));

  const handleLike = () => {
    dispatch(likeFeedback({ _id }));
  };
  return (
    <>
      <MediaQuery minWidth={630}>
        <Container>
          <DetailsContainer>
            <Button onClick={!user?.result ? null : handleLike}>
              <Arrow />
              {likes?.length}
            </Button>
            <div>
              <Title>
                <Link to={`/feedback-detail/${_id}`}>{title}</Link>
              </Title>
              <Description>{excerpt(description, 30)}</Description>
              <ButtonTag>{category}</ButtonTag>
            </div>
          </DetailsContainer>
          <CommentContainer>
            <Comment />
            <p>{comments?.length}</p>
          </CommentContainer>
        </Container>
      </MediaQuery>
      <MediaQuery maxWidth={630}>
        <Container className="item-animation">
          <DetailsContainer>
            <div>
              <Title>
                <Link to={`/feedback-detail/${_id}`}>{title}</Link>
              </Title>
              <Description>{excerpt(description, 30)}</Description>
              <ButtonTag>{category}</ButtonTag>
            </div>
          </DetailsContainer>
          <MobileCont>
            <Button onClick={!user?.result ? null : handleLike}>
              <Arrow />
              {likes?.length}
            </Button>
            <CommentContainer>
              <Comment />
              <p>{comments?.length}</p>
            </CommentContainer>
          </MobileCont>
        </Container>
      </MediaQuery>
    </>
  );
}

export default Upvote;
