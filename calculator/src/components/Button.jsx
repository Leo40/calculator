import React from 'react'

function Button({ symbol, className, handleClick, altColor }) {
    return (
        <div className={className ?? 'key'}
        style={{backgroundColor: altColor}}
        onClick={() => { handleClick(symbol) }}>
            {symbol}
        </div >
    )
}

export default Button
