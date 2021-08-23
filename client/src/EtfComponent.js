import React from 'react'

const EtfComponent = ({data}) => {
    const { name, ticker, locale, primary_exchange } = data;
    return (
        <div>
            <h2>{name} ({ticker})</h2>
            <h3>Country: {locale.toUpperCase()}</h3>
            <p>Primary Exchange: {primary_exchange}</p>
        </div>
    )
}

export default EtfComponent;
