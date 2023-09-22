import React from 'react';
import "../style/CommentsBlock.css"

function clickedItem(item){

}

const CommentsBlock = () => {
    return (
        <div className="commentsBlock">
            <h1>Comments</h1>
            <form>
                <input type="color" id="html5colorpicker" />
                <input type="text"/>
                <button type="submit">Add One</button>
            </form>

        </div>
    );
};

export default CommentsBlock;