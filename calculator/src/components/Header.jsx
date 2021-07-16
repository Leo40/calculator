import React from 'react'

function Header({ handleToggle }) {
    return (
        <div className="Header">
            <div className="Left-Section">
                Calc
            </div>
            <div className="Right-Section"> 
                <div>
                    THEME
                </div>
                <div className="Toggle">
                    <div className="toggle-group" >
                        <div className="toggle-number" onClick={() => { handleToggle("1") }}>1</div>
                        <div className="toggle-number" onClick={() => { handleToggle("2") }}>2</div>
                        <div className="toggle-number" onClick={() => { handleToggle("3") }}>3</div>
                    </div>
                    <div>
                        <div className="Outer">
                            <div className="Inner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
