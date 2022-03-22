/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React from "react";
import MediaQuery from "react-responsive";
import { AiOutlineDelete } from "react-icons/ai";
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
  DeleteButton,
  MobileCont,
} from "../feedbackList/main/styles";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { deleteFeedback } from "../../features/feedbackSlice";

function SingleFeedback({ feedback }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => ({
    ...state.auth,
  }));

  let date = moment(feedback.createdAt);
  date = date.format("MMM Do, YYYY");
  const handleDelete = (id) => {
    dispatch(deleteFeedback({ id, toast, history }));
  };
  return (
    <>
      <MediaQuery minWidth={630}>
        <Container className="item-animation">
          <DetailsContainer>
            <Button>
              <Arrow />
              {feedback?.likes?.length}
            </Button>
            <div>
              <User>
                <Pic src={feedback.img} alt={feedback.name} />
                <div>
                  <h4>{feedback.name}</h4>
                  <p>{date}</p>
                </div>
                {feedback.creator === user?.result?._id && (
                  <DeleteButton type="button">
                    <AiOutlineDelete
                      onClick={() => handleDelete(feedback._id)}
                    />
                  </DeleteButton>
                )}
              </User>
              <Title>{feedback.title}</Title>
              <Description>{feedback.description}</Description>
              <ButtonTag>{feedback?.category}</ButtonTag>
            </div>
          </DetailsContainer>
          <CommentContainer>
            <Comment />
            <p>{feedback?.comments?.length}</p>
          </CommentContainer>
        </Container>
      </MediaQuery>
      <MediaQuery maxWidth={630}>
        <Container className="item-animation">
          <DetailsContainer>
            <div>
              <User>
                <Pic src={feedback.img} alt={feedback.name} />
                <div>
                  <h4>{feedback.name}</h4>
                  <p>{date}</p>
                </div>
                {feedback.creator === user?.result?._id && (
                  <DeleteButton type="button">
                    <AiOutlineDelete
                      onClick={() => handleDelete(feedback._id)}
                    />
                  </DeleteButton>
                )}
              </User>
              <Title>{feedback.title}</Title>
              <Description>{feedback.description}</Description>
              <ButtonTag>{feedback?.category}</ButtonTag>
            </div>
          </DetailsContainer>
          <MobileCont>
            <Button>
              <Arrow />
              {feedback?.likes?.length}
            </Button>
            <CommentContainer>
              <Comment />
              <p>{feedback?.comments?.length}</p>
            </CommentContainer>
          </MobileCont>
        </Container>
      </MediaQuery>
    </>
  );
}

export default SingleFeedback;
