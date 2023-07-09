import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import InputAdornment from "@mui/material/InputAdornment";


const AutoComplete = ({
  handleChange,
  dataList,
  color,
  value,
  style,
  label,
  placeholder,
  icon,
  iconStart,
  iconEnd,
}) => {

  const OPTIONS_LIMIT = 1000;
const defaultFilterOptions = createFilterOptions();

const filterOptions = (options, state) => {
  return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
};

  return (
    <Autocomplete
    filterOptions={filterOptions}
      freeSolo
      disableClearable
      options={dataList}
      value={value}
      onInputChange={(e, newInputValue) => {
        handleChange(newInputValue);
      }}
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label && label}
          placeholder={placeholder && placeholder}
          InputProps={{
            ...params.InputProps,
            type: "search",
            style: { borderRadius: "6px", ...style },
            startAdornment: icon && (
              <InputAdornment position="start">
                {icon && !iconEnd && icon}
              </InputAdornment>
            ),

            endAdornment: icon && (
              <InputAdornment position="end">
                {icon && iconEnd && !iconStart && icon}
              </InputAdornment>
            ),
          }}
          size="small"
        />
      )}
    />
  );
};

export default AutoComplete