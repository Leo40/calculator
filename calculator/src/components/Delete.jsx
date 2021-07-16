import React from 'react'

function Delete({ symbol, handleDelete }) {
    return (
        <div onClick={() => { handleDelete() }}>
        {symbol}
    </div>
    )
}

export default Delete
