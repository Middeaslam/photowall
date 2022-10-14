import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import AddPhoto from './AddPhoto';
import PhotoWall from './PhotoWall';
import Title from './Title';

const Main = () => {

    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const data = simulateFetchFromDatabase();
        setPosts(data)
    }, [])

    const removePhoto = (postRemoved) => {
        setPosts(prevState => prevState.filter(post => post !== postRemoved))
    }

    const simulateFetchFromDatabase = () => {
        return [{
            id: "0",
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
        }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
    }

    const addPhoto = (postSubmitted) => {
        setPosts(prevPost => {
            return prevPost.concat([postSubmitted])
        })
    }

    const handleAddPhoto = (addedPost) => {
        addPhoto(addedPost);
        navigate('/')
    }

    return (

        <Routes>
            <Route exact path='/' element={
                <>
                    <Title title="Photowall" />
                    <PhotoWall posts={posts} onRemovePhoto={removePhoto} />
                </>
            } />
            <Route path='/AddPhoto' element={<AddPhoto onAddPhoto={handleAddPhoto} />} />
        </Routes>
    )
}

export default Main