import React, { useState } from 'react'
import './Checkbox.css'
export default function Checkbox({color,text}) {
    const [checked, setChecked] = useState(false)
    return (
        <label className="checkbox-container">
            {text}
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <span className={checked ? `${color} checkmark`: `checkmark bg-gray-300`}></span>
        </label>

    )
}
