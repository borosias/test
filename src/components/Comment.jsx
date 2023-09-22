import React from 'react';

function Comment({ comment, onDeleteComment }) {
    return (
        <div>
            <h1>Comment {comment.id}</h1>
            <input type="color" value={comment.color} readOnly="true"/>
            <p>{comment.text}</p>
            <button onClick={() => onDeleteComment(comment.id)}>Удалить комментарий</button>
        </div>
    );
}

export default Comment;