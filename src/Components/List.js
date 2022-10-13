import React from 'react'

const Lists = ({ tasks }) => {
    return (
        <ol>
            {tasks.map((task, index) => {
                return <li key={index}>{task}</li>
            })}
        </ol>
    )
}

export default Lists

