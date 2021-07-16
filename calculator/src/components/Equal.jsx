import React from 'react'

function Equal({ symbol, handleClick }) {
    return (
        <div className="Equal" onClick={() => { handleClick() }}>
            {symbol}
        </div>
    )
}

export default Equal
