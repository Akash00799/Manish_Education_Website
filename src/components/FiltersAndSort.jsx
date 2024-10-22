import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "../styles/Filters.module.css";

const FiltersAndSort = ({
  filters,
  handleFilterChange,
  sortOption,
  handleSortChange,
  categories = [], // Default empty array if undefined
  classes = [], // Default empty array if undefined
  ratings = [], // Default empty array if undefined
  sortOptions = [], // Default empty array if undefined
}) => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.dropdownGroup}>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <MenuItem value="">
              <em>All Categories</em>
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Class</InputLabel>
          <Select
            label="Class"
            name="class"
            value={filters.class}
            onChange={handleFilterChange}
          >
            <MenuItem value="">
              <em>All Classes</em>
            </MenuItem>
            {classes.map((cls) => (
              <MenuItem key={cls} value={cls}>
                {cls}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Rating</InputLabel>
          <Select
            label="Rating"
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
          >
            <MenuItem value="">
              <em>All Ratings</em>
            </MenuItem>
            {ratings.map((rating) => (
              <MenuItem key={rating} value={rating}>
                Above {rating}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={styles.sortByContainer}>
        <FormControl variant="outlined" sx={{ minWidth: 160 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            label="Sort By"
            name="sortOption"
            value={sortOption}
            onChange={handleSortChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FiltersAndSort;
