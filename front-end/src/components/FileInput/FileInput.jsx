import React from 'react'
// import './FileInput.css'
export default function FileInput({OnchangeEvent , height , width,name}) {
    return (
        <label for="images"  className={`flex justify-center items-center bg-gray-300 cursor-pointer hover:bg-gray-200 transition-all text-gray-500 text-medium p-4 ${height} ${width}`}>
            <span>{name}</span>
            <input className='hidden' onChange={OnchangeEvent} type="file" id="images" />
        </label>

    )
}
