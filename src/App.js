import React, {useState} from "react";
import './App.css';
import data from "./data.json"
import {
    Autocomplete,
    Box, Button,
    createFilterOptions,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import Person4Icon from '@mui/icons-material/Person4';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const filter = createFilterOptions();

function App() {
    const [category, setCategory] = useState("Men");
    const [value, setValue] = React.useState("");

    const categoryChange = (event) => {
        setCategory(event.target.value);
    }
    return (
        <>
            <Box sx={{display: "flex"}}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    gap: 5,
                    height: "100px",
                    padding: "5px",
                    background: "#F3F3F3",
                }}>
                    {/*Logo*/}
                    <Box
                        component="img"
                        sx={{
                            height: 80,
                            width: 400,
                            maxHeight: {xs: 233, md: 167},
                            maxWidth: {xs: 350, md: 250},
                        }}
                        alt="JTL-Logo"
                        src="https://demo.jtl-shop.blackbike-forest.de/bilder/intern/shoplogo/bbf_demoshop_logo.png"
                    />

                    {/*Category*/}
                    <Box sx={{width: "150px", marginLeft: "30px"}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                onChange={categoryChange}
                            >
                                <MenuItem value={"Men"}>Men</MenuItem>
                                <MenuItem value={"Women"}>Women</MenuItem>
                                <MenuItem value={"Kids"}>Kids</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    {/*Search Bar*/}
                    <Box sx={{width: "500px"}}>
                        <Autocomplete
                            value={value}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
                                    setValue({
                                        title: newValue,
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    setValue({
                                        title: newValue.inputValue,
                                    });
                                } else {
                                    setValue(newValue);
                                }
                            }}
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            id="free-solo-with-text-demo"
                            options={data}
                            getOptionLabel={(option) => {
                                // Value selected with enter, right from the input
                                if (typeof option === 'string') {
                                    return option;
                                }
                                // Add "xxx" option created dynamically
                                if (option.inputValue) {
                                    return option.inputValue;
                                }
                                // Regular option
                                return option.title;
                            }}
                            renderOption={(props, option) => <li {...props}>{option.title}</li>}
                            sx={{width: 600}}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label="Search for product..."/>
                            )}
                        />
                    </Box>
                    {/*Profile&Cart*/}
                    <Box sx={{display: "flex", marginLeft: "250px", gap: 2}}>
                        <Button>
                            <Person4Icon sx={{width: "64px", height: "44px", color: "#696868"}}/>
                        </Button>
                        <Button>
                            <ShoppingCartIcon sx={{width: "64px", height: "44px", color: "#696868"}}/>
                        </Button>
                    </Box>
                </Box>
            </Box>

        </>
    );
}

export default App;
