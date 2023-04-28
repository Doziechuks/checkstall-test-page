import React from 'react';
import classes from './SearchBox.module.css';

import {
  AiOutlineSearch,
} from "react-icons/ai";

const SearchBox = ({ isMobile }) => {
  return (
    <div className={`${classes.searchBox} ${isMobile && classes.mobileSearchBox}`}>
      <input
        type="text"
        className={classes.search}
        placeholder="Search products"
      />
      <div className={classes.searchIcon}>
        <AiOutlineSearch size={30} className={classes.icon} />
      </div>
    </div>
  );
}

export default SearchBox
