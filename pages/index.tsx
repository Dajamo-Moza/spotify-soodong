import type { NextPage } from "next";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import Chart from "../components/Chart";
import useStore from "../store";
import Playlist from "../components/Playlist";
import SearchBar from "../components/SearchBar";

interface IProps {}

const Home: NextPage<IProps> = () => {
  const showPlaylists = useStore((state) => state.showPlaylists);
  const showSearchBar = useStore((state) => state.showSearchBar);

  return (
    <Wrapper>
      <SideMenu />
      <Chart />
      {showPlaylists && <Playlist />}
      {showSearchBar && <SearchBar />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 90px;
  background-color: #02c567;
`;

export default Home;
