import React from 'react';

function Item({ item, onDeleteItem, onSelectItem }) {
    return (
        <div className="block">
            <h2
                onClick={() => {
                    onSelectItem(item); // Вызываем onSelectItem при клике на элемент
                }}
            >
                {item.title}
            </h2>
            <button onClick={() => onDeleteItem(item.id)}>Удалить пост</button>
        </div>
    );
}

export default Item;
