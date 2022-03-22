import React, { useState, useEffect } from "react";
import { SEO, MainLayout } from "../../components";
import { toast } from "react-toastify";
import { Link, useHistory, Redirect } from "react-router-dom";
import { selectToggle, toggleActive } from "../../features/navSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import { ThreeDots } from "react-loader-spinner";
import {
  Background,
  Form,
  DivInput,
  InputDiv,
  Input,
  Label,
  WideBtn,
  GoBack,
  SignUp,
} from "./styles";

const initialState = {
  username: "",
  password: "",
};
function Login() {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password } = formValue;
  const { loading, error, user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const history = useHistory();
  const show = useSelector(selectToggle);
  const toggle = () => {
    dispatch(toggleActive());
  };
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ formValue, toast, history }));
    }
  };

  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <SEO title="Login" />
      <Background>
        <Link to="/">
          <GoBack />
        </Link>
        <MainLayout className="fade-in">
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">User Name</Label>
            <Input
              type="text"
              placeholder="e.g JSXYoungboy"
              name="username"
              required
              value={username}
              onChange={onInputChange}
            />

            <Label htmlFor="email">Password</Label>

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

            <WideBtn type="submit">
              {" "}
              {loading && (
                <ThreeDots
                  height="20"
                  width="20"
                  color="white"
                  ariaLabel="loading"
                />
              )}
              <span style={{ marginLeft: "10px" }}> Login !</span>
            </WideBtn>

            <SignUp>
              Dont have an account ?{" "}
              <Link to="/register">Join Diamon Now!</Link> here{" "}
            </SignUp>
          </Form>
        </MainLayout>
      </Background>
    </>
  );
}

export default Login;
