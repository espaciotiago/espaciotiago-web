import React from 'react'

function VerticalText(props) {
    return (
        <div className="vertical-text">
            <div><p>{props.label}</p><div className="divider"><div /></div></div>
        </div>
    )
}

export default VerticalText