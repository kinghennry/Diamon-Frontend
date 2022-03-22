/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Header from "./Header";
import { MenuList, PopOver, Error } from "./styles";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { SEO } from "../index";
import { ButtonOne, ButtonThree } from "../common/ui/Button";
import { Container, Layout } from "../common/formElements/FormLayout";
import { ListboxInput, ListboxList, ListboxOption } from "@reach/listbox";
import {
  Form,
  InputContainer,
  Input,
  Textarea,
  ButtonContainer,
} from "../common/formElements/Inputs";
import { newFeedback, updateFeedback } from "../../features/feedbackSlice";

const initialState = {
  title: "",
  description: "",
};

function NewFeedback() {
  const [feedbackData, setFeedbackData] = useState(initialState);
  const [category, setCategory] = useState("");
  const { title, description } = feedbackData;
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { error, loading, feedbacks } = useSelector((state) => ({
    ...state.feedback,
  }));

  useEffect(() => {
    if (id) {
      const singleFeedback = feedbacks.find((feedback) => feedback._id === id);
      setFeedbackData({ ...singleFeedback });
      const cat = feedbacks.find((feedback) => feedback._id === id);
      setCategory(cat);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const clear = () => {
    setFeedbackData({ title: "", description: "" });
    setCategory("");
  };

  const handleAddFeedback = (e) => {
    e.preventDefault();
    if (title && description && category) {
      const updatedFeedbackData = {
        ...feedbackData,
        category,
        name: user?.result?.name,
        img: user?.result?.img,
        verified: user?.result?.isAdmin,
      };
      if (!id) {
        dispatch(newFeedback({ updatedFeedbackData, history, toast }));
      } else {
        dispatch(updateFeedback({ id, history, toast, updatedFeedbackData }));
      }
      clear();
    }
  };
  return (
    <>
      {id ? (
        <SEO title="Edit your Feedback" />
      ) : (
        <SEO title="Create New Feedback" />
      )}
      <Layout>
        <Container className="form-animation">
          <Header />
          <Form onSubmit={handleAddFeedback}>
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient
                  cx="103.9%"
                  cy="-10.387%"
                  fx="103.9%"
                  fy="-10.387%"
                  r="166.816%"
                  id="a"
                >
                  <stop stopColor="#E84D70" offset="0%" />
                  <stop stopColor="#A337F6" offset="53.089%" />
                  <stop stopColor="#28A7ED" offset="100%" />
                </radialGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <circle fill="url(#a)" cx="28" cy="28" r="28" />
                <path
                  fill="#FFF"
                  fillRule="nonzero"
                  d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
                />
              </g>
            </svg>
            <InputContainer>
              <div>
                <h4>{id ? "Edit your Feedback Title" : " Feedback Title"}</h4>
                <p>Add a short, descriptive headline</p>
              </div>
              <Input
                name="title"
                required
                value={title}
                onChange={onInputChange}
              />
            </InputContainer>
            <InputContainer>
              <div>
                <h4>{id ? "Choose another Category! " : " Category"}</h4>
                <p>Choose a category for your feedback</p>
              </div>
              <ListboxInput
                name="category"
                defaultValue="Feature"
                value={category}
                onChange={(category) => setCategory(category)}
              >
                <MenuList arrow />
                <PopOver>
                  <ListboxList>
                    <ListboxOption value="Feature"> Feature </ListboxOption>
                    <ListboxOption value="UI">UI</ListboxOption>
                    <ListboxOption value="UX">UX</ListboxOption>
                    <ListboxOption value="Enhancement">
                      Enhancement
                    </ListboxOption>
                    <ListboxOption value="Bug">Bug</ListboxOption>
                  </ListboxList>
                </PopOver>
              </ListboxInput>
            </InputContainer>
            <InputContainer>
              <div>
                <h4>
                  {id ? "Edit your Feedback Detail! " : " Feedback Detail!"}
                </h4>
                <p>
                  Include any specific comments on what should be improved,
                  added, etc.
                </p>
              </div>
              <Textarea
                name="description"
                required
                value={description}
                onChange={onInputChange}
              />
            </InputContainer>
            <ButtonContainer>
              <ButtonOne type="submit" disabled={!user || loading}>
                <span style={{ marginLeft: "10px" }}>
                  {id ? "Update Feedback! " : " Add Feedback!"}
                </span>
              </ButtonOne>
              <ButtonThree onClick={() => history.push("/")}>
                Cancel
              </ButtonThree>
            </ButtonContainer>
            {!user && (
              <Error>
                Please <Link to="/login">Sign in</Link> or{" "}
                <Link to="/register">Sign up </Link>
                to create new feedback.
              </Error>
            )}
          </Form>
        </Container>
      </Layout>
    </>
  );
}

export default NewFeedback;
