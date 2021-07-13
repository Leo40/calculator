import React from 'react'

function Button({ symbol, handleClick }) {
    return (
        <div className="Button" onClick={() => { handleClick(symbol) }}>
            {symbol}
        </div >
    )
}

export default Button
