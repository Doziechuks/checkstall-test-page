import React from 'react';
import classes from './SearchCategory.module.css';

const SearchCategory = () => {
  return (
    <div className={classes.wrapper}>
      <select className={classes.select}>
        <option value="category" className={classes.option}>
          Products Category
        </option>
        <option value="category" className={classes.option}>
          men's fashion
        </option>
        <option value="category" className={classes.option}>
          women's fashion
        </option>
        <option value="category" className={classes.option}>
          babies
        </option>
        <option value="category" className={classes.option}>
          shoes
        </option>
        <option value="category" className={classes.option}>
          bags
        </option>
        <option value="category" className={classes.option}>
          electronics
        </option>
        <option value="category" className={classes.option}>
          gadgets
        </option>
        <option value="category" className={classes.option}>
          accessories
        </option>
        <option value="category" className={classes.option}>
          utensils
        </option>
      </select>
    </div>
  );
}

export default SearchCategory
