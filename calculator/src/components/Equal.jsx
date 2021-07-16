import React from 'react'

function Equal({ symbol, handleClick, altColor}) {
    return (
        <div className="Equal" style={{backgroundColor: altColor}} onClick={() => { handleClick() }}>
            {symbol}
        </div>
    )
}

export default Equal
