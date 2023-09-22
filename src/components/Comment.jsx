import React from 'react';

function Comment({comment, onDeleteComment}) {
    return (
        <div className="block">
            <h4>Comment #{comment.id}</h4>
            <div className="comment">
                <input type="color" value={comment.color} readOnly="true"/>
                <p>{comment.text}</p>
            </div>
            <button className="delete" onClick={() => onDeleteComment(comment.id)}>Удалить комментарий</button>

        </div>
    )
        ;
}

export default Comment;