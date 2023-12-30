import React from 'react'
import { Box, Tabs, Tab } from '@mui/material';

const CategoryTabs = () => {
    const [value, setValue] = React.useState('general');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="general" label="General" />
                <Tab value="business" label="business" />
                <Tab value="sports" label="sports" />
                <Tab value="entertainment" label="entertainment" />
            </Tabs>
        </Box>
    );
}

export default CategoryTabs
