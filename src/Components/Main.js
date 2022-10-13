import List from './List';
import React from 'react';
import Title from './Title';

const Main = () => {
    return (
        <>
            <Title title="todos" />
            <List tasks={["Mow the lan", "Walk the dog"]} />
        </>
    )
}

export default Main