import styled from "styled-components";
import { FaComment } from "react-icons/fa";
import device from "../../common/MediaQueries";
import { Avatar } from "@material-ui/core";
import { GoChevronUp } from "react-icons/go";

export const SearchDiv = styled.form`
  background: white;
  padding: 8px;
  border-radius: 10px;
`;
export const SearchInput = styled.input`
  outline: none;
  border: none;
  background: none;
`;
export const DeleteButton = styled.button`
  position: absolute;
  left: 40rem;
  transition: all 0.3s ease;
  background: ${(props) => props.bg || "#f2f4fe"};
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.color || "#3a4374"};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  @media (max-width: 520px) {
    left: 18rem;
  }
  @media (max-width: 375px) {
    left: 15rem;
  }
  @media (max-width: 320px) {
    left: 12rem;
  }
`;

export const Button = styled.div`
  width: 40px;
  height: 53px;
  transition: all 0.3s ease;
  background: ${(props) => props.bg || "#f2f4fe"};
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.180556px;
  color: ${(props) => props.color || "#3a4374"};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;

  &:hover {
    background: #cfd7ff;
    transform: translateX(0rem) translateY(-0.125rem);
  }

  @media ${device.mobile} {
    flex-direction: row;
    gap: 10px;
    justify-items: center;
    max-width: 69px;
    height: 32px;
    width: 100%;
  }
`;
export const Arrow = styled(GoChevronUp)`
  font-size: 16px;
  margin-bottom: 2px;

  @media ${device.mobile} {
    margin-bottom: 0px;
  }
`;

export const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(0.15rem) translateY(-0.3125rem);
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 24px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: #3a4374;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 4px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
  padding-bottom: 16px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.222222px;
    color: #3a4374;
  }
`;

export const Comment = styled(FaComment)`
  cursor: pointer;
  color: #cdd2ee;
`;

export const MobileCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  img {
    width: 40px;
    aspect-ratio: 1/1;
    border-radius: 100%;
  }

  h4 {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    color: #3a4374;
    display: flex;
    align-items: center;
  }

  p {
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    color: #647196;
  }
`;

export const Pic = styled(Avatar)`
  outline-offset: 2px;
  outline: 2px solid #a5d5ee !important;
`;

export const ButtonTag = styled.div`
  display: inline-block;
  padding: 6px 16px;
  background: #f2f4ff;
  border-radius: 10px;
  color: #4661e6;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
`;
