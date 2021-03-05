import axios from 'axios';
import {setNewsAC} from "../reducers/newsReducer";

export const getNews = (searchValue) => {

    let topic = searchValue;

    let apiKey = 'c2488f8c7bcd4b409b4c89f70967509e';
    //let url=`http://newsapi.org/v2/everything?&apiKey=${apiKey}`;

    let url = `http://newsapi.org/v2/everything?pageSize=50&q=${topic}&apiKey=${apiKey}`;

    return function (dispatch) {
        axios.get(url)
           .then(res => dispatch(setNewsAC(res.data.articles)))
            //.then(res=>localStorage.setItem('token', res.news))
        //.then(data=>console.log(data))
    }

};

//.then(res=>(localStorage.setItem('token',res.data.articles)))