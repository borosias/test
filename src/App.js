import './style/App.css';
import LeftNav from "./components/LeftNav";
import ItemsBlock from "./components/ItemsBlock";
import CommentsBlock from "./components/CommentsBlock";
import {useState} from "react";
import itemsBlock from "./components/ItemsBlock";


function App() {

    return (
        <div className="App">
            <LeftNav/>
            <ItemsBlock/>
            <CommentsBlock/>
        </div>
    );
}

export default App;
