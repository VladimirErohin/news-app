import React, {  useEffect } from 'react';
import {getAuthors} from "../../actions/authors";
import {useDispatch, useSelector} from "react-redux";
import ItemAuthor from "./ItemAuthor";



const Authors = () => {

    const authors = useSelector(state => state.author.articles);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getAuthors());
    }, []);

    let onBack=()=>{
      dispatch  (getAuthors())
    };

    return(
            <div>
                <div><button onClick={onBack}> to authors</button></div>
                {authors.map(a=>
                <ItemAuthor
                data={a}
                />
                )}
            </div>
    )
}

export default Authors;