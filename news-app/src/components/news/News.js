import React, {useEffect} from 'react';
import {registration} from '../formRegistration/Registration.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../actions/news";
import ItemNews from "../itemNews/ItemNews";
import {getAuthors} from "../../actions/authors";
import {header__main} from "./News.module.css";
const News = () => {

    const news = useSelector(state => state.news.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews())
          //  dispatch(getAuthors())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    let sortByDate = (function (a, b) {
        if (a.publishedAt > b.publishedAt) {
            return 1
        } else {
            return -1
        }
    });

    // {news.sort(sortByDate).map((n,index) =>

    return (
        <div className={registration}>
            <div className={header__main}>news</div>
            <div>
                {news.sort(sortByDate).map((n,index) =>
                    <ItemNews
                        news={n}
                        id={index}/>
                )}
            </div>
        </div>
    );
};

export default News;
