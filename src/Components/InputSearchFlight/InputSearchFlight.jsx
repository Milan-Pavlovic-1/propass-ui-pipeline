import React, { useState } from 'react';
import {Container , Input , Dropdown , ResultItem , SearchIcon, DropdownIcon} from "./Styles";

const InputSearchFlight = ({iconName, placeholder , searchArray}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setSearchTerm(item);
        setShowDropdown(false);
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
    };



    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const searchResults = searchArray;

    const filteredResults = searchResults?.filter((result) =>
        result.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    return (
        <Container>
            <SearchIcon className={`fa-solid fa-${iconName}`} />
            <Input
                type="text"
                value={searchTerm}
                placeholder={placeholder}
                onChange={handleInputChange}
                onFocus={handleDropdownToggle}
            />
            <DropdownIcon className="fa fa-angle-down" />
            {showDropdown && filteredResults.length > 0 && (
                <Dropdown>
                    {filteredResults.map((result) => (
                        <ResultItem key={result} onClick={()=>handleItemClick(result)} >{result}</ResultItem>
                    ))}
                </Dropdown>
            )}
        </Container>
    );
};

export default InputSearchFlight;
