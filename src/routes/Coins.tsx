import { useState } from "react";
import { useQuery } from "react-query";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  color: ${(props) => props.theme.accentColor};
  margin: 20px 0px;
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  color: ${(props) => props.theme.textColor};
  padding: 0px 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    padding: 20px;
    display: block;
    width: 100%;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  position: relative;
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  font-size: 32px;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface ToggleDarkMode {
  toggleDark: () => void;
}
function Coins() {
  const { toggleDark } = useOutletContext<ToggleDarkMode>();
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);
  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title>Coin</Title>
        <button
          onClick={toggleDark}
          style={{
            textAlign: "center",
            backgroundColor: "transparent",
            outline: "none",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Toggle Dark Mode
        </button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Img
                src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
              ></Img>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
