import React, { useEffect, useState } from 'react';

const CompletedTasks = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <>
            <h2 className='text-center font-bold my-6'>To-Do Lists</h2>
            <div className='flex justify-center'>
                {
                    items.map((item) =>
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center border border-gray-300 my-2">
                                <h2 className="card-title">Cookies!</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-ghost">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default CompletedTasks;