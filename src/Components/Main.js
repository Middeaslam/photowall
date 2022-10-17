import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import AddPhoto from './AddPhoto';
import PhotoWall from './PhotoWall';
import Title from './Title';

const Main = () => {

    // const [posts, setPosts] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        // const data = simulateFetchFromDatabase();
        // setPosts(data)
    }, [])


    const addCustomer = () => {

    }

    // const removePhoto = (postRemoved) => {
    //     setPosts(prevState => prevState.filter(post => post !== postRemoved))
    // }



    // const addPhoto = (postSubmitted) => {
    //     setPosts(prevPost => {
    //         return prevPost.concat([postSubmitted])
    //     })
    // }

    // const handleAddPhoto = (addedPost) => {
    //     addPhoto(addedPost);
    //     navigate('/')
    // }

    return (

        <Routes>
            <Route exact path='/' element={
                <>
                    <Title title="Photowall" />
                    <PhotoWall />
                </>
            } />
            {/* <Route path='/AddPhoto' element={<AddPhoto />} /> */}
        </Routes>
    )
}

export default Main