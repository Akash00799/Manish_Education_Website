import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import styles from "../styles/Courses.module.css";

const Filters = ({
  filters,
  handleFilterChange,
  sortOption,
  handleSortChange,
}) => {
  return (
    <div className={styles.filterSortContainer}>
      <h3>Filters</h3>
      <div className={styles.dropdownGroup}>
        <FormControl variant="outlined" sx={{ minWidth: 150 }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={filters.category}
            onChange={handleFilterChange}
            name="category"
            label="Category"
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="Frontend Development">
              Frontend Development
            </MenuItem>
            <MenuItem value="Backend Development">Backend Development</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 150 }}>
          <InputLabel id="class-label">Class</InputLabel>
          <Select
            labelId="class-label"
            value={filters.class}
            onChange={handleFilterChange}
            name="class"
            label="Class"
          >
            <MenuItem value="">All Classes</MenuItem>
            <MenuItem value="11th">11th</MenuItem>
            <MenuItem value="12th">12th</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 150 }}>
          <InputLabel id="rating-label">Rating</InputLabel>
          <Select
            labelId="rating-label"
            value={filters.rating}
            onChange={handleFilterChange}
            name="rating"
            label="Rating"
          >
            <MenuItem value={0}>All Ratings</MenuItem>
            <MenuItem value={3}>3+</MenuItem>
            <MenuItem value={4}>4+</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </div>

      <h3>Sort By</h3>
      <div className={styles.dropdownGroup}>
        <FormControl variant="outlined" sx={{ minWidth: 150 }}>
          <InputLabel id="sort-label">Sort By</InputLabel>
          <Select
            labelId="sort-label"
            value={sortOption}
            onChange={handleSortChange}
            name="sortOption"
            label="Sort By"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="highestRating">Highest Rating</MenuItem>
            <MenuItem value="lowestPrice">Lowest Price</MenuItem>
            <MenuItem value="highestPrice">Highest Price</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filters;
