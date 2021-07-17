import React from 'react'

// JST: Add className as an optional characted instead of passing altColor
function Button({ className, symbol, handleClick, altColor }) {
    return (
        <div className={className ?? 'key'}
        style={{backgroundColor: altColor}}
        onClick={() => { handleClick(symbol) }}>
            {symbol}
        </div >
    )
}

export default Button
