import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [coin, setCoin] = useState(null)
  const [money, setMoney] = useState(0)

  const onChangeCoin = (event) => {
    const selectedCoin = JSON.parse(event.target.value)
    setCoin(selectedCoin)
  };

  const onChangeMoney = (event) => {
    setMoney(event.target.value)
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChangeCoin}>
            <option>선택하세요 ...</option>
            {coins.map((coin) => (
              <option key={coin.id} value={JSON.stringify(coin)}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>
            <input onChange={onChangeMoney} placeholder="USD를 입력하세요.."></input>
            {coin ? <p>당신이 살 수 있는 {coin.name}은 {money / coin.quotes.USD.price}개 입니다.</p> : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default CoinTracker;
