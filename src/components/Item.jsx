import React from 'react';

function Item ({item, onDeleteItem}) {
    return (
        <div >
            <h2>{item.title}</h2>
            <button onClick={() => onDeleteItem(item.id)}>Удалить пост</button>
        </div>
    );
};

export default Item;