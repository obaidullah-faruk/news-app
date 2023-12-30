import React, { useEffect, useState } from 'react'
import { Box, Tabs, Tab, Typography, Container, CssBaseline } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';
import CardList from './CardList'
import { NEWS_SEARCH_ENDPOINT, NEWS_CATEGORY_ENDPOINT } from '../constant/apiEndpoints';
import { useNewsContext } from '../context/newsContext';

const ShowNews = () => {
    const [value, setValue] = useState('general');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [response, setResponse] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const { categoryNewsData, updateCategoryNewsData, searchNewsData, updateSearchNewsData } = useNewsContext();

    const fetchData = async (url) => {
        let page = 1;
        let pageSize = 100;
        let urlExtender = `&language=en&page=${page}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
        const fullUrl = url + urlExtender;
        let allResponse = []
        let jsonData;
        try {
            do {
                const response = await fetch(fullUrl);
                if (!response.ok) {
                    setErrorMessage('Failed to fetch data. Please try with a new API key.');
                    throw new Error('Failed to fetch data');
                }
                jsonData = await response.json();
                const data = jsonData.articles;
                allResponse = allResponse.concat(data);
                page++;
            } while (allResponse.length <= jsonData.totalResults || page < 11);
        } catch (err) {
            console.log("Error occured in fetchData. ", err)
        }

        return allResponse
    }

    const handleChangeCategory = async (event, newValue) => {
        setValue(newValue);
        setErrorMessage(null);
        if (!categoryNewsData[newValue]) {
            const response = await fetchData(`${NEWS_CATEGORY_ENDPOINT}?category=${newValue}`);
            setResponse(response);
            updateCategoryNewsData(newValue, response);
        } else {
            setResponse(categoryNewsData[newValue])
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        setErrorMessage(null);
        if (!searchNewsData[searchKeyword]) {
            const response = await fetchData(`${NEWS_SEARCH_ENDPOINT}?q=${searchKeyword}`)
            setResponse(response);
            updateSearchNewsData(searchKeyword, response);
        } else {
            setResponse(searchNewsData[searchKeyword]);
        }
    };

    useEffect(() => {
        const fetchDataAsync = async () => {
            if (!categoryNewsData[value]) {
                try {
                    const response = await fetchData(`${NEWS_CATEGORY_ENDPOINT}?category=${value}`);
                    setResponse(response);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                setResponse(categoryNewsData[value])
            }
        };
        fetchDataAsync();
    }, []);

    return (
        <Container >
            <CssBaseline />
            <Box mt={2} mb={2} sx={{ paddingTop: 8 }}>
                <form onSubmit={handleSearch}>
                    <TextField
                        id="search-bar"
                        className="text"
                        onInput={(e) => {
                            // setSearchQuery(e.target.value);
                        }}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        label="Search by Topic name"
                        variant="outlined"
                        placeholder="Bitcoin"
                        size="small"
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon style={{ fill: "blue" }} />
                    </IconButton>
                </form>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChangeCategory}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="general" label="General" />
                    <Tab value="business" label="business" />
                    <Tab value="sports" label="sports" />
                    <Tab value="entertainment" label="entertainment" />
                </Tabs>

                {errorMessage ? (
                    <Typography variant="h6" color="error" sx={{ textAlign: 'center', marginTop: 2 }}>
                        {errorMessage}
                    </Typography>
                ) : (
                    <CardList apiResponse={response} />
                )}

            </Box>
        </Container>
    );
}

export default ShowNews