import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useHistory, Redirect } from "react-router-dom";
import { selectToggle, toggleActive } from "../../features/navSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { SEO, MainLayout } from "../../components";
import { ThreeDots } from "react-loader-spinner";
import FileBase from "react-file-base64";
import { register } from "../../features/authSlice";
import {
  Background,
  Form,
  DivInput,
  InputDiv,
  Input,
  Label,
  WideBtn,
  GoBack,
  SignIn,
} from "./styles";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  img: "",
  password: "",
};

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const show = useSelector(selectToggle);
  const toggle = () => {
    dispatch(toggleActive());
  };

  const [formValue, setFormValue] = useState(initialState);
  const { username, firstName, lastName, img, password } = formValue;
  //handle input
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const { loading, error, user } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 3) {
      return toast.error("Username is too Short Bruv.");
    }
    if (password.length < 6) {
      return toast.error("Password Must be More Than 8 Characters.");
    }
    if (username && firstName && lastName && password && img) {
      dispatch(register({ formValue, toast, history }));
    }
  };
  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <SEO title="Join Diamon" />
      <Background>
        <Link to="/">
          <GoBack />
        </Link>
        <MainLayout className="fade-in">
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              placeholder="e.g Henry"
              id="firstName"
              required
              value={firstName}
              onChange={onInputChange}
            />
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              placeholder="e.g Ogbu"
              id="lastName"
              required
              value={lastName}
              onChange={onInputChange}
            />

            <Label htmlFor="user-name">User Name </Label>
            <Input
              type="text"
              name="username"
              placeholder="e.g JSXYoungboy"
              id="username"
              value={username}
              onChange={onInputChange}
              required
            />

            <Label htmlFor="password">Password</Label>
            <DivInput>
              <InputDiv
                name="password"
                type={show ? "text" : "password"}
                id="password"
                placeholder="Password"
                required
                minlength="6"
                value={password}
                onChange={onInputChange}
              />
              {show ? (
                <AiOutlineEye className="login__icon" onClick={toggle} />
              ) : (
                <AiOutlineEyeInvisible
                  className="login__icon"
                  onClick={toggle}
                />
              )}
            </DivInput>

            <Label htmlFor="password">Add Profile Picture</Label>
            <FileBase
              type="file"
              id="file"
              required
              multiple={false}
              onDone={({ base64 }) =>
                setFormValue({ ...formValue, img: base64 })
              }
            />
            <WideBtn type="submit">
              {loading && (
                <ThreeDots
                  height="20"
                  width="20"
                  color="white"
                  ariaLabel="loading"
                />
              )}
              <span style={{ marginLeft: "10px" }}> Join Diamon !</span>
            </WideBtn>
            <SignIn>
              Have an Account ? <Link to="/login">Sign In</Link> here{" "}
            </SignIn>
          </Form>
        </MainLayout>
      </Background>
    </>
  );
}

export default Register;
