import React, { useState } from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ButtonOne } from "../../../common/ui/Button";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Login from "../Login";
import LoggedIn from "./LoggedIn";
import { searchFeedbacks } from "../../../../features/feedbackSlice";

const Container = styled.header`
  position: relative;
  display: flex;
  padding: 16px 24px;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  align-items: center;
  z-index: 2;
`;

const HeaderTxt = styled.div`
  width: 100%;

  h2 {
    color: #ffffff;
  }

  p {
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.75;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }
`;

const Menu = styled(BiMenu)`
  font-size: 44px;
  color: #ffffff;
  cursor: pointer;
`;

const Close = styled(IoCloseSharp)`
  font-size: 44px;
  color: #ffffff;
  cursor: pointer;
`;

const Cta = styled.div`
  background: #373f68;
  color: #ffffff;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  line-height: 19px;
  position: relative;
`;

const MobileMenu = styled.div`
  position: absolute;
  background: #f7f8fd;
  height: 100vh;
  right: 0;
  padding: 24px;
  top: 80px;
  width: 280px;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

const Spacer = styled.div`
  height: 24px;
  width: 100;
`;

function MobileHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const history = useHistory();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchFeedbacks(search));
      history.push(`/feedback/search?searchQuery=${search}`);
      setSearch("");
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <Container>
        <HeaderTxt>
          <h2>Diamon</h2>
          <p>Feedback Board</p>
        </HeaderTxt>
        {openMenu ? (
          <Close className="fade-in" onClick={() => setOpenMenu(!openMenu)} />
        ) : (
          <Menu className="fade-in" onClick={() => setOpenMenu(!openMenu)} />
        )}
      </Container>
      {openMenu && (
        <Background className="fade-in" onClick={() => setOpenMenu(false)} />
      )}
      <Cta>
        {showSearch ? (
          <form onSubmit={handleSubmit} className="fade-in searchDiv">
            <input
              className="search__input"
              placeholder="Search Title...."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              onClick={() => setShowSearch(!showSearch)}
              style={{
                margin: "5px 10px 0 0px ",
              }}
            >
              <AiOutlineClose
                style={{
                  color: "black",
                  fontSize: "20px",
                }}
              />
            </div>
          </form>
        ) : (
          <div className="fade-in flex-bx">
            <ButtonOne onClick={() => history.push("/create-feedback")}>
              + Add Feedback
            </ButtonOne>
            <div
              className="search-btn"
              onClick={() => setShowSearch(!showSearch)}
            >
              <FiSearch style={{ fontSize: "18px", margin: "4px 10px 0 0" }} />
            </div>
          </div>
        )}
      </Cta>
      {openMenu && (
        <MobileMenu className="slide-in">
          {user ? <LoggedIn /> : <Login />}
          <Spacer />
        </MobileMenu>
      )}
    </>
  );
}

export default MobileHeader;
