import React from 'react'

function Button({ symbol, handleClick, altColor }) {
    return (
        <div className="Button" 
        style={{backgroundColor: altColor}}
        onClick={() => { handleClick(symbol) }}>
            {symbol}
        </div >
    )
}

export default Button
