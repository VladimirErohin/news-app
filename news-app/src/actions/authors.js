import axios from 'axios';
import {setArticlesAC} from "../reducers/authorsReducer";

export const getAuthors = () => {

   //let url='https://jsonplaceholder.typicode.com/todos';
    //let apiKey = 'c2488f8c7bcd4b409b4c89f70967509e';
    //let url = `http://newsapi.org/v2/everything?q=hockey&apiKey=${apiKey}`;
    //let url = `http://newsapi.org/v2/everything?pageSize=50&q=football&apiKey=${apiKey}`;

    return function (dispatch) {
        axios.get("http://newsapi.org/v2/everything?pageSize=50&q=football&apiKey=c2488f8c7bcd4b409b4c89f70967509e")
            .then(res => dispatch(setArticlesAC(res.data.articles)))
        //.then(res=>console.log(res.data.articles))

    };

};







//    //let url='https://jsonplaceholder.typicode.com/todos';
//     //let url= "https://newsapi.org/v1/articles?author="+ Alone Coder+"&apiKey=${apiKey}"
//     return function (dispatch) {
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.data)
//             .then(json=>console.log(json))
//
//             //.then(res => dispatch(setArticlesAC(res.data.articles)))
//         //.then(res=>console.log(res.data.articles.map(a=>a.author)))
//
//     }