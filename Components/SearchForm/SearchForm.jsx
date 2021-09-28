import React from 'react';

const SearchForm = ({name, actionHandler, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name={name} onChange={actionHandler} />
            <button>Search</button>
        </form>
    );
}

export default SearchForm;