import React from 'react';

const withCryptoPrices = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            isLoading: true,
            items: [],
        };

        componentDidMount() {
            this.loadData();
        }

        loadData = async () => {
            this.setState(() => ({
                isLoading: true,
        }));
        try {
            const cryptoTicker = await fetch(
                'https://ed-4857933973159936.educative.run:3000' +
                '/api/v3/coins/markets?vs_currency=eur&per_page=10'
        );
        const cryptoTickerResponse = await cryptoTicker.json();
        this.setState(() => ({
            isLoading: false,
            items: cryptoTickerResponse,
        }));
        } catch (err) {
            this.setState(() => ({
                isLoading: false,
            }));
        }
    };

    render() {
        const { isLoading, items } = this.state;
        return (
            <WrappedComponent
                isLoading={isLoading}
                items={items}
                loadData={this.loadData}
            />
        );
    }
  };
};

const PriceTable = ({ isLoading, items, loadData }) => {
    if (isLoading) {
        return <p>Prices are being loaded. Please wait.</p>;
    }
    
    if (!items || items.length === 0) {
        return (
            <p>
                No data available. <button onClick={loadData}>Try again!</button>
            </p>
        );
    }

    return (
        <table>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>
                        {item.name} ({item.symbol})
                    </td>
                    <td>EUR {item.current_price}</td>
                </tr>
            ))}
            <tr>
                <td colSpan="2">
                    <button onClick={loadData}>Reload</button>
                </td>
            </tr>
        </table>
    );
};

const util = {
    withCryptoPrices,
    PriceTable,
};

export default util;