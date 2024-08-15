import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search for food..." 
                value={searchTerm} 
                onChange={handleSearch} 
            />
        </div>
    );
};

export default SearchBar;
