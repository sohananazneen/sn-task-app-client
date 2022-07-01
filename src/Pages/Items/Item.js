import React from 'react';
import useItems from '../../hooks/useItems';

const Item = ({ item }) => {
    const { _id, title } = item;
    const [items, setItems] = useItems([]);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <>
            <div className='flex justify-center'>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center border border-gray-300 my-2">
                        <h2 className="card-title">{title}!</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Edit</button>
                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;