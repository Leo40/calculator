import React from 'react'

function Reset({ symbol, handleClick }) {
    return (
        <div className="Reset" onClick={() => { handleClick(symbol) }}>
            {symbol}
        </div>
    )
}

export default Reset
