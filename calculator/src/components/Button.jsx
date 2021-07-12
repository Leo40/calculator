import React from 'react'

function Button({ symbol, handleClick }) {
    return (
        <div onClick={() => { handleClick(symbol) }}>
            {symbol}
        </div >
    )
}

export default Button
