import React from 'react';
import {useDispatch} from "react-redux";
import {addNewsAC, deleteNewsAC} from "../../reducers/newsReducer";

const ButtonsNews = (props) => {

    const dispatch=useDispatch();

    let onAddNews=()=>{

        let newNews={
            id:(new Date()).getTime(),//Date.now(),
            author:"Frank",
            title:"New news",
            description:"The Minsk is the capital of Belarus.",
            url:"https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA",
            urlToImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Babrujskaja%2C_Minsk.jpg/1280px-Babrujskaja%2C_Minsk.jpg",
            publishedAt:new Date(),//Date.now(),//new Date().getTime(),
            content:"There is place in city center"
        };

        dispatch(addNewsAC(newNews))
    };

    let onEditNews=()=>{
        props.setEditMode(true)
    };

    let onDeleteNews=()=>{
      dispatch(deleteNewsAC(props.id))
    };

    return (
        <div>
            <button onClick={onAddNews}>add</button>
            <button onClick={onEditNews}>edit</button>
            <button onClick={onDeleteNews}>delete</button>
        </div>
    );
};

export default ButtonsNews;