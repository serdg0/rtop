import React, { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const handleChange = event => {
        const { target: { value } } = event;
        setSearchTerm(value);
    }

    return (
        <input
    )
}

export default Search;