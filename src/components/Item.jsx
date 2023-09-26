import React from 'react';

function Item({ item, onDeleteItem, onSelectItem }) {
    return (
        <div className="block">
            <h2
                onClick={() => {
                   onSelectItem(item.id); // Вызываем onSelectItem при клике на элемент
                    console.log(item);
                }}
            >
                {item.title}
            </h2>
            <button onClick={() => onDeleteItem(item.id)}>Удалить пост</button>
        </div>
    );
}

export default Item;
