import React, {useEffect, useState} from 'react';
import "../style/MainBlock.css"
import Item from "./Item";
import Comment from "./Comment";


function MainBlock() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')))
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')));
    const [selectedItemId, setSelectedItemId] = useState(null);


    useEffect(() => {
        localStorage.removeItem('items')
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        localStorage.removeItem('comments')
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);


    // Here I must put some code to save all statements in localstorage, but it was too late to do this
    //P.s. I also wanted to do this with Redux Persist, but i don't have any practice with it


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
        autoDeleteComments(itemId)
    }
//<======================================COMMENTS===================================================>
    const addComment = (itemId, text, color) => {
        const itemToUpdate = items.find((item) => item.id === itemId);
        if (itemToUpdate) {
            console.log(color)
            const newComment = {
                id: Date.now(),
                text,
                color,
                itemId
            };

            console.log("selectedItem")
            console.log(selectedItemId)


            setComments([...comments, newComment]);
        }

    };

    const deleteComment = (itemId, commentId) => {
        const updatedComments = comments.filter((comm) => comm.id !== commentId && comm.itemId !== itemId)
        setComments(updatedComments)
    };

    const autoDeleteComments = (itemId) => {
        const updatedComments = comments.filter((comm) => comm.itemId !== itemId)
        setComments(updatedComments)
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
                        e.target.reset()
                    }}>
                    <input className="itemNameInput" name="title" placeholder="Type there the name.." required="true"
                           type="text"/>
                    <button type="submit">Add One</button>
                </form>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onDeleteItem={deleteItem}
                        onSelectItem={() => setSelectedItemId(item.id)}
                    />
                ))}
            </div>
            {selectedItemId && (
                <div className="commentsBlock">
                    <h1>Comments</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const text = e.target.text.value;
                            const color = e.target.color.value;
                            addComment(selectedItemId, text, color);
                            e.target.reset();
                        }}
                    >
                        <input type="color" name="color" id="html5colorpicker"/>
                        <input type="text" name="text" required="true" placeholder="Type some comment..."/>
                        <button type="submit">Add One</button>
                    </form>
                    {comments.filter((comment) => comment.itemId === selectedItemId).map((comm) =>(
                        <Comment
                            key={comm.id}
                            comment={comm}
                            onDeleteComment={() => deleteComment(selectedItemId.id, comm.id)}
                        />
                    ))}
        </div>
    )
}

</div>
)
    ;
}

export default MainBlock;