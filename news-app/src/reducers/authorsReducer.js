export const SET_DATA = "SET_ARTIKLES";
export const GET_ARTICLES = "GET_ARTICLES";

const initialState = {
    articles: []
};


export const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                articles: action.articles
            };
        case GET_ARTICLES:
            return {
                ...state,
                articles: state.articles.filter((n) => {
                    if (n.author === action.name) {
                        return n.title && n.url
                    }
                })
            };

        default:
            return state
    }
};

export const setArticlesAC = (articles) => ({type: SET_DATA, articles});
export const getTitleAC = (name) => ({type: GET_ARTICLES, name});
