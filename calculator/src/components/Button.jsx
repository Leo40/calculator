import React from 'react'

function Button({ symbol, handleClick, altColor }) {
    return (
        <div className="key" 
        style={{backgroundColor: altColor}}
        onClick={() => { handleClick(symbol) }}>
            {symbol}
        </div >
    )
}

export default Button
