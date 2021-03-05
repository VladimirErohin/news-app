import React from 'react';
import {useDispatch} from "react-redux";
import {getTitleAC} from "../../reducers/authorsReducer";
import {author__title, author__url, author__name, author__item} from "./Author.module.css";

const ItemAuthor = (props) => {

    const dispatch=useDispatch();

    let a=props.data;

    let onAuthor=()=>{
//alert(a.author)
        dispatch(getTitleAC(a.author))
    }
    return (
        <div>
           <div className={author__item}>
               <span onClick={onAuthor} className={author__name}><b>author: </b>{a.author}</span>
               <div className={author__title}>title : "{a.title}"</div>
               <div className={author__url}><a href={a.url}>more...</a></div>
               </div>
        </div>
    );
};

export default ItemAuthor;

//               <span onClick={onAuthor} className={author__name}><b>author: </b>{a.author}</span>