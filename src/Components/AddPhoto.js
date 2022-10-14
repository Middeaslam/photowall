import React, { useState } from 'react'

const AddPhoto = (props) => {

    const [newPhoto, setNewPhoto] = useState({
        id: '',
        imageLink: '',
        description: ''
    })

    const handleChange = (e) => {
        setNewPhoto({ ...newPhoto, [e.target.name]: e.target.value, id: Number(new Date()) })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newPhoto.imageLink && newPhoto.description) {
            props.onAddPhoto(newPhoto)
        }

    }

    return (
        <>
            <h1>This is the page where we wil add photos</h1>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="imageLink" placeholder='Link' value={newPhoto.link} onChange={handleChange} />
                    <input type="text" name="description" placeholder='Description' value={newPhoto.description} onChange={handleChange} />
                    <button>Post</button>
                </form></div></>
    )
}

export default AddPhoto