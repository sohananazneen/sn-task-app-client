import React from 'react';
import CompletedTasks from './CompletedTasks';
import Todo from './Todo';
const Home = () => {
    return (
        <div>
            <Todo></Todo>
            <CompletedTasks></CompletedTasks>
        </div>
    );
};

export default Home;