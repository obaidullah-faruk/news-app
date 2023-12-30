import { createContext, useContext, useState } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [categoryNewsData, setCategoryNewsData] = useState({});
    const [searchNewsData, setSearchNewsData] = useState({});
    const [readLaterItems, setReadLaterItems] = useState([]);

    const updateCategoryNewsData = (category, data) => {
        setCategoryNewsData((prevData) => ({ ...prevData, [category]: data }));
    };
    const updateSearchNewsData = (keyword, data) => {
        setSearchNewsData((prevData) => ({ ...prevData, [keyword]: data }));
    };

    const addReadLaterItem = (item) => {
        setReadLaterItems((prevItems) => [...prevItems, item]);
    };

    const removeReadLaterItem = (item) => {
        setReadLaterItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
    };

    return (
        <NewsContext.Provider
            value={{
                categoryNewsData,
                updateCategoryNewsData,
                searchNewsData,
                updateSearchNewsData,
                readLaterItems,
                addReadLaterItem,
                removeReadLaterItem,
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsContext = () => {
    return useContext(NewsContext)
}