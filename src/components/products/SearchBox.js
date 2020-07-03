import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchField, clearSearchField } from '../../redux/search/searchActions';

function SearchBox() {
    const searchDispatch = useDispatch();

    function searchProducts(event) {
        searchDispatch(updateSearchField(event));
    }

    /* use hook with return function.
    It's equal to class componentWillUnmount */
    useEffect(() => {
        return function cleanup () {
            searchDispatch(clearSearchField());
        }
    }, [])

    return (
        <div className='search-div'>
            <input 
                type='search'
                placeholder='search products'
                onChange={searchProducts}
            />
        </div>
    );
}

export default SearchBox;
