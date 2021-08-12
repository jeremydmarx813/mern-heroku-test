import React from 'react'

const EtfComponent = ({data}) => {
    const { name, ticker, country, description } = data;
    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    )
}

export default EtfComponent;
