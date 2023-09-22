import React, {useState} from 'react';
import "../style/MainBlock.css"
import Item from "./Item";
import item from "./Item";
import Comment from "./Comment";

const MainBlock = () => {
    const [items, setItems] = useState([])
    const [comments, setComments] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

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
//<======================================COMMENTS===================================================>
    const addComment = (itemId, text, color) => {
        const itemToUpdate = items.find((item) => item.id === itemId);
        if (itemToUpdate) {
            const newComment = {
                id: Date.now(),
                text,
                color,
            };
            itemToUpdate.comments.push(newComment);
            setComments([...itemToUpdate.comments]);
        }
    };

    const deleteComment = (itemId, commentId) => {
        const itemToUpdate = items.find((item) => item.id === itemId);
        if (itemToUpdate) {
            const updatedComments = itemToUpdate.comments.filter(
                (comment) => comment.id !== commentId
            );
            itemToUpdate.comments = updatedComments;
            setComments(updatedComments);
        }
    };

    return (
        <div className="main">
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
                <Item
                    key={item.id}
                    item={item}
                    onDeleteItem={deleteItem}
                    onSelectItem={() => setSelectedItem(item)}
                />
            ))}
        </div>
            {selectedItem && (
                <div className="commentsBlock">
                    <h1>Comments</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const text = e.target.text.value;
                            const color = e.target.color.value;
                            addComment(selectedItem.id, text, color);
                            e.target.reset();
                        }}
                    >
                        <input type="color" name="color" id="html5colorpicker" />
                        <input type="text" name="text" placeholder="Type some comment..." />
                        <button type="submit">Add One</button>
                    </form>
                    {selectedItem.comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            onDeleteComment={() => deleteComment(selectedItem.id, comment.id)}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default MainBlock;