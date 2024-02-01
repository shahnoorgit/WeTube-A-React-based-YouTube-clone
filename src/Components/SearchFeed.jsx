import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { Videos } from "./";
import { FetchApiYT } from "../Utils/FetchApiYT";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const { SearchTerm } = useParams();
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    FetchApiYT(`search?part=snippet&q=${SearchTerm}`).then((data) =>
      setvideos(data.items)
    );
  }, [SearchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        search results for:
        <span style={{ color: "purple", marginLeft: "10px" }}>
          {SearchTerm}
        </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
