import { Route, Routes, } from 'react-router-dom';

import AddPhoto from './AddPhoto';
import PhotoWall from './PhotoWall';
import React from 'react';
import Single from './Single';
import Title from './Title';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={
                <>
                    <Title title="Photowall" />
                    <PhotoWall />
                </>
            } />
            <Route path='/AddPhoto' element={<AddPhoto />} />
            <Route path='/single/:id' element={<Single />} />
        </Routes>
    )
}

export default Main