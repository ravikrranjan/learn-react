import React from 'react';


const CryptoListItem = ({ name, symbol, quotes }) => (
    <li>
        <h1>
            {name} ({symbol})
        </h1>
        <p>{quotes.EUR.price.toFixed(2)} €</p>
    </li>
);

const CryptoList = ({ currencies }) => (
    // ~!Warning: Each child in a list should have a unique "key" prop.

    // ~*Keys: The primary reasoning behind this rule is to make it easier for React’s reconciler to identify and compare list elements.
    //  ~*The reconciler can spot whether an array element was added, removed, or modified if the key prop has been given.
    //  ~*This prop needs to be a unique identifier that only appears once in the array.
    //   ~*Normally, the ID of a data set is used for this.
  <ul>
    
    {currencies.map((currency) => (
            // <CryptoListItem
            //     key={currency.id} // ~^<CryptoListItem /> needs to contain the key prop as it is the top level component
            //     name={currency.name}
            //     symbol={currency.symbol}
            //     quotes={currency.quotes}
            // />

            <CryptoListItem
             key={currency.id} // ~^<CryptoListItem /> needs to contain the key prop as it is the top level component
             {...currency} />
        ))}
  </ul>
);

const cryptos = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    quotes: { EUR: { price: 7179.92084586 } },
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    quotes: { EUR: { price: 595.218568203 } },
  },
  {
    id: 3,
    name: 'Litecoin',
    symbol: 'LTC',
    quotes: { EUR: { price: 117.690716234 } },
  },
];

export default class CryptoListApp extends React.Component {
  render() {
    return (
      <CryptoList currencies={cryptos} />
    );
  }
}