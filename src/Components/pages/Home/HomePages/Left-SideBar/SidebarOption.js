import React from 'react'
import './SidebarOption.css'

function SidebarOption({ active, text, Icon }) {
    return (
        <div className = {`sidebarOption ${active && 'sidebarOption--active' }`}> 
            <Icon />
            <h2 className='texts'>{text}</h2>
        </div>
    )
}

export default SidebarOption
