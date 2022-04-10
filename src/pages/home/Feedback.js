import React from "react";
import { useSelector } from "react-redux";
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Footer, SEO, Main, MainLayout, SideBar } from "../../components";
import {
  HomePageGrid,
  GridItemSide,
  GridItemMain,
} from "../../components/feedbackList/Layout";

function Feedback() {
  const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <>
      {user?.result?._id ? (
        <SEO title={`Home || ${user?.result?.username.toLocaleUpperCase()} `} />
      ) : (
        <SEO title="Diamon" />
      )}
      <MainLayout>
        <HomePageGrid>
          <GridItemSide>
            <SideBar />
          </GridItemSide>
          <GridItemMain>
            <Main />
          </GridItemMain>
        </HomePageGrid>
      </MainLayout>
      <Footer />
    </>
  );
}

export default Feedback;
