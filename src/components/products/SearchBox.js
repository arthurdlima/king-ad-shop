import React from 'react';

function SearchBox() {
    return (
        <div className='search-div'>
            <input className='search-box' type='search' placeholder='search products' /> 
            <button type='submit'>Search</button>
        </div>
    );
}

export default SearchBox;