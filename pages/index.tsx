import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import Chart from "../components/Chart";
import { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SideMenu />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Chart />
        </Suspense>
      </ErrorBoundary>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 90px;
  background-color: #02c567;
`;

export default Home;
