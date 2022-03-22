/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { likeFeedback } from "../../../features/feedbackSlice";
import { excerpt } from "../../../utils";
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
} from "./styles";

function Feedback({
  _id,
  name,
  likes,
  comments,
  img,
  verified,
  createdAt,
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
        <Container className="item-animation">
          <DetailsContainer>
            <Button onClick={!user?.result ? null : handleLike}>
              <Arrow />
              {likes?.length}
            </Button>
            <Link to={`/feedback-detail/${_id}`}>
              <div>
                <User>
                  <Pic src={img} alt={name} />
                  <div>
                    <h4>
                      {name}
                      {verified && (
                        <>
                          <div className="owner">
                            <span>ADMIN</span>
                          </div>
                        </>
                      )}
                    </h4>
                    <p>{moment(createdAt).utc().format("MMM Do, YYYY")}</p>
                  </div>
                </User>
                <Title>{title}</Title>
                <Description>{excerpt(description, 30)}</Description>
                <ButtonTag>{category}</ButtonTag>
              </div>
            </Link>
          </DetailsContainer>
          {/* <CommentContainer>
            <Comment />
            <p>{comments?.length}</p>
          </CommentContainer> */}
        </Container>
      </MediaQuery>
      <MediaQuery maxWidth={630}>
        <Container className="item-animation">
          <DetailsContainer>
            <Link to={`/feedback-detail/${_id}`}>
              <div>
                <User>
                  <Pic src={img} alt={name} />
                  <div>
                    <h4>
                      {name}
                      {verified && (
                        <>
                          <div className="owner">
                            <span>ADMIN</span>
                          </div>
                        </>
                      )}
                    </h4>
                    <p>{moment(createdAt).utc().format("MMM Do, YYYY")}</p>
                  </div>
                </User>
                <Title>{title}</Title>
                <Description>{excerpt(description, 30)}</Description>
                <ButtonTag>{category}</ButtonTag>
              </div>
            </Link>
          </DetailsContainer>
          <MobileCont>
            <Button onClick={!user?.result ? null : handleLike}>
              <Arrow />
              {likes?.length}
            </Button>
            {/* <CommentContainer>
              <Comment />
              <p>{comments?.length}</p>
            </CommentContainer> */}
          </MobileCont>
        </Container>
      </MediaQuery>
    </>
  );
}

export default Feedback;
