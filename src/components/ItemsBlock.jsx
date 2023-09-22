import React, {useState} from 'react';
import "../style/ItemsBlock.css"
import Item from "./Item";

const ItemsBlock = () => {
    const [items, setItems] = useState([])

    const addItem = (title) => {
        const newItem = {
            id: Date.now(),
            title,
            comments: []
        }
        setItems([...items, newItem])
    }

    const deleteItem = (itemId) => {
        const updatedItems = items.filter((item) => item.id !== itemId)
        setItems(updatedItems)
    }
    return (
        <div>
        <div className="itemsBlock">
            <h1>Items</h1>
            <form
                onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                addItem(title);
                e.target.reset()}}>
                <input className="itemNameInput" name="title" placeholder="Type there the name.." required="true" type="text"/>
                <button type="submit">Add One</button>
            </form>
            {items.map((item) => (
                <Item key={item.id} item={item} onDeleteItem = {deleteItem}/>
            ))}
        </div>

        </div>
    );
};

export default ItemsBlock;