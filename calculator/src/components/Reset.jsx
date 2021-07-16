import React from 'react'

function Reset({ symbol, handleReset }) {
    return (
        <div onClick={() => { handleReset() }}>
            {symbol}
        </div>
    )
}

export default Reset