import React from 'react';
import useItems from '../../hooks/useItems';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useItems([]);
    return (
        <>
            <h2 className='text-center font-bold my-6'>To-Do Lists</h2>
            <div className='flex justify-center'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </>
    );
};

export default Items;