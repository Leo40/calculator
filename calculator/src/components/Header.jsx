import React from 'react'

function Header({ handleToggle, handleSliderToggle }) {
    return (
        <div className="header">
            <div className="left-section">
                calc
            </div>
            <div className="right-section"> 
                <div>
                    THEME
                </div>
                <div className="toggle">
                    <div className="toggle-number-group" >
                        <div className="toggle-number" onClick={() => { handleToggle("theme-one") }}>1</div>
                        <div className="toggle-number" onClick={() => { handleToggle("theme-two") }}>2</div>
                        <div className="toggle-number" onClick={() => { handleToggle("theme-three") }}>3</div>
                    </div>
                    <div>
                        <div className="outer-slider" onClick={handleSliderToggle}>
                            <div className="inner-slider"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
