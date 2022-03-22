import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { ButtonOne } from "../../components/common/ui/Button";
import { device } from "../../components";

export const Background = styled.div`
  min-height: 100vh;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    padding-top: 52px;
    padding-left: 24px;
    padding-right: 24px;
  }
  h1 {
    font-size: 72px;
    line-height: 104px;
    text-align: center;
    letter-spacing: -0.25px;
    color: #ffffff;
    width: 564px;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 464px;
  width: 100%;
  padding: 48px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #ffffff;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

export const DivInput = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const InputDiv = styled.input`
  width: 100%;
  padding: 20px;
  outline: none;
  border: none;
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 10px;
`;
export const Input = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  outline: none;
  border: none;
  background-color: rgba(59, 130, 246, 0.1);
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const WideBtn = styled(ButtonOne)`
  width: 100%;
  padding: 24px;
  margin-top: 24px;
`;

export const GoBack = styled(TiDelete)`
  position: absolute;
  color: #ffffff;
  font-size: 48px;
  left: 10px;
  top: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  @media ${device.mobile} {
    padding-bottom: 24px;
  }

  &:hover {
    color: #d73737;
  }
`;

export const SignIn = styled.p`
  text-align: center;

  a {
    text-decoration-line: underline;
    color: #ad1fea;
    font-weight: 700;
  }
`;

export const SignUp = styled.p`
  text-align: center;

  a {
    text-decoration-line: underline;
    color: #ad1fea;
    font-weight: 700;
  }
`;
