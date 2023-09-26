import React from 'react';
import hexRgb from 'hex-rgb';

function Comment({comment, onDeleteComment}) {

    const rgb = hexRgb(comment.color);
    const color = "rgba(" + rgb.red + "," + rgb.green + "," + rgb.blue + "," + 0.4 + ")";
    console.log(color)
    return (
        <div className="block" style={{backgroundColor: color}}>
            <h4>Comment #{comment.id}</h4>
            <div className="comment">
                <p>{comment.text}</p>
            </div>
            <button className="delete" onClick={() => onDeleteComment(comment.id)}>Удалить комментарий</button>

        </div>
    )
        ;
}

export default Comment;