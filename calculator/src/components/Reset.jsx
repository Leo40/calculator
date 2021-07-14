import React from 'react'

function Reset({ symbol, handleReset }) {
    return (
        <div className="Reset" onClick={() => { handleReset() }}>
            {symbol}
        </div>
    )
}

export default Reset