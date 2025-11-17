import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const FilterSortPanel = ({
  sortOption,
  setSortOption,
  filterDomain,
  setFilterDomain,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full md:w-2/3">
      {/* Filter by Domain Input */}
      <TextField
        label="Filter by Email Domain"
        variant="outlined"
        size="small"
        placeholder="e.g., reqres.in"
        value={filterDomain}
        onChange={(e) => setFilterDomain(e.target.value)}
        className="w-full md:w-1/2"
        sx={{ bgcolor: "white" }}
      />

      {/* Sort Dropdown */}
      <FormControl
        size="small"
        className="w-full md:w-1/2"
        sx={{ bgcolor: "white" }}
      >
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortOption}
          label="Sort By"
          onChange={(e) => setSortOption(e.target.value)}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="first_name">First Name</MenuItem>
          <MenuItem value="last_name">Last Name</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterSortPanel;
