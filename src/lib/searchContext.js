import React, { createContext, useState } from 'react';

// Buat konteks
export const SearchContext = createContext();

// Buat provider untuk konteks
export const SearchProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <SearchContext.Provider value={{ searchKeyword, setSearchKeyword }}>
      {children}
    </SearchContext.Provider>
  );
};