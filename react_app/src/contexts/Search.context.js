import React, { createContext, useState } from "react";
const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchISBN, setSearchISBN] = useState('');

    return (
        <SearchContext.Provider value={{searchISBN}}>
            {/* I'll be back */}
        </SearchContext.Provider>
    )
}