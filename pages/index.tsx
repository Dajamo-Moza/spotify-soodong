import type { NextPage } from "next";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import Chart from "../components/Chart";
import { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import useStore from "../store";
import Playlist from "../components/Playlist";

interface IProps {}

const Home: NextPage<IProps> = () => {
  const showPlaylists = useStore((state) => state.showPlaylists);

  return (
    <Wrapper>
      <SideMenu />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Chart />
        </Suspense>
      </ErrorBoundary>
      {showPlaylists && <Playlist />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 90px;
  background-color: #02c567;
`;

export default Home;
