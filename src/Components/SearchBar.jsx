import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const Nav = useNavigate();
  const HandleSearch = (e) => {
    e.preventDefault();
    if (SearchTerm) {
      Nav(`/search/${SearchTerm}`);
      setSearchTerm("");
    }
  };
  const [SearchTerm, setSearchTerm] = useState("");
  return (
    <Paper
      component="form"
      onSubmit={HandleSearch}
      sx={{
        borderRadius: "20px",
        border: "1px solid #e3e3e3",
        pl: "2px",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={SearchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "purple" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
