export const SET_NEWS = "SET_NEWS";
export const ADD_NEWS = "ADD_NEWS";
export const EDIT_NEWS = "EDIT_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";
export const GET_ARTICLES_AUTHOR = "GET_ARTICLES_AUTHOR";


const initialState = {
    articles: []
};


export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                articles: action.news
            };
        case ADD_NEWS:
            return {
                ...state,
                articles: [...state.articles, action.newsItem]
            };
        case EDIT_NEWS:
            return {
                ...state,
                articles:state.articles.map((n,index)=>{
                    if(index===action.newsId){
                      return{...n, title:action.newTitle}
                    }else{
                        return n}
                })
            };
        case DELETE_NEWS:
            return {
                ...state,
              articles:state.articles.filter((n,index)=>{
                  if(index!==action.newsId){
                      return{n}
                  }
              })

            };
        case GET_ARTICLES_AUTHOR:
            return {
                ...state,
                articles: state.articles.filter((n) => {
                    if (n.author === action.name) {
                        return n
                    }
                })
            };
        default:
            return state
    }
};

export const setNewsAC = (news) => ({type: SET_NEWS, news});
export const addNewsAC = (newsItem) => ({type: ADD_NEWS, newsItem});
export const editNewsAC = (newsId, newTitle)=>({type:EDIT_NEWS, newsId,newTitle});
export const deleteNewsAC = (newsId)=>({type:DELETE_NEWS, newsId});
export const getTitleAuthAC = (name) => ({type: GET_ARTICLES_AUTHOR, name});