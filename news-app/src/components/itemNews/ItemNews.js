import React, {useState} from 'react';
import './ItemNews.css';
import ButtonsNews from "../buttons/ButtonsNews";
import {useDispatch} from "react-redux";
import {editNewsAC, getTitleAuthAC} from "../../reducers/newsReducer";
import {author__name} from "../author/Author.module.css";

const ItemNews = (props) => {

    let news = props.news;

    const [editMode, setMode]=useState(false);
    const dispatch=useDispatch();

    let changeTitle=(e)=>{
        let newTitle=e.currentTarget.value;

            dispatch(editNewsAC(props.id,newTitle))
    };

    let onAuthorName=()=>{
        //alert(news.author)
        dispatch(getTitleAuthAC(news.author))
    };

    return (
        <div className="item__news">
            <div className="author__news"><span onClick={onAuthorName} className={author__name}><b>author: </b>{news.author}</span></div>
            <div className="title__news"><b>title: </b>
                {editMode
                ?  <input value={news.title} onChange={changeTitle} onBlur={()=>setMode(false)}/>
                    : <span onClick={()=>setMode(true)} >{news.title}</span>
                }
            </div>
            <div className="description__news"><b>descriptionNews: </b>{news.description}</div>
            <div><img className="img__news" src={news.urlToImage} alt="picture"/></div>
            <div className="link__news"><a href={news.url}>more... </a></div>
            <div className="btn__news">
                <ButtonsNews
                    id={props.id}
                    setEditMode={setMode}/>
            </div>
        </div>
    );
};

export default ItemNews;

// <div className="id__news"><b>id: </b>{props.id}</div>
//<div className="id__news"><b>id: </b>{sortByTime}</div>
