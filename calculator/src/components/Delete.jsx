import React from 'react'

function Delete({ symbol, handleDelete }) {
    return (
        <div className="Delete" onClick={() => { handleDelete() }}>
        {symbol}
    </div>
    )
}

export default Delete
