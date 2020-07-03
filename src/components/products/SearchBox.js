import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchField, clearSearchField } from '../../redux/search/searchActions';

function SearchBox() {
    const searchDispatch = useDispatch();
    const s = useSelector(state => state.searchReducer);
    console.log(s)

    function searchProducts(event) {
        searchDispatch(updateSearchField(event));
    }

    useEffect(() => {
        return function cleanup () {
            searchDispatch(clearSearchField());
        }
    }, [])

    return (
        <div className='search-div'>
            <input className='search-box'
                type='search'
                placeholder='search products'
                onChange={searchProducts}
            />
        </div>
    );
}

export default SearchBox;
