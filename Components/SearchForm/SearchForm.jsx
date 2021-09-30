import React from 'react';

const SearchForm = ({name, actionHandler, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name={name} onChange={actionHandler} required />
            <button>Search</button>
        </form>
    );
}

export default SearchForm;