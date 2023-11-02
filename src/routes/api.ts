const BASE_URL = `https://api.coinpaprika.com/v1`;
const NICO_API = `https://ohlcv-api.nomadcoders.workers.dev?coinId=`;

export async function fetchCoins() {
  return await await fetch(`${BASE_URL}/coins`).then((response) =>
    response.json()
  );
}

export async function fetchCoinInfo(coinId: string) {
  return await await fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}
export async function fetchCoinTickers(coinId: string) {
  return await await fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinHistory(coinId: string) {
  return await await fetch(`${NICO_API}${coinId}`).then((response) =>
    response.json()
  );
}
