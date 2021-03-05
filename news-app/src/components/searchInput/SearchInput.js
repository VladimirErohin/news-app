import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getNews} from "../../actions/news";

const SearchInput = () => {

    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    let onSearchInput = () => {
        setSearchValue('');
        dispatch(getNews(searchValue))
    };

    return (
        <div>
            <input
                value={searchValue} type="text" placeholder="Search..."
                onChange={(e) => setSearchValue(e.target.value)}/>
            <button onClick={onSearchInput}>search</button>
        </div>
    );
};

export default SearchInput;