import { useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Sidebar, Videos } from "./";
import CircularProgress from "@mui/material/CircularProgress";
import { FetchApiYT } from "../Utils/FetchApiYT";
const Feed = () => {
  const [videos, setvideos] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [SelectedCategory, setSelectedCategory] = useState("New");
  useEffect(() => {
    setLoading(true);
    FetchApiYT(`search?part=snippet&q=${SelectedCategory}`).then((data) =>
      setvideos(data.items)
    );
    setLoading(false);
  }, [SelectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          p: { sx: 0, md: 2 },
        }}
      >
        {" "}
        <Sidebar
          SelectedCategory={SelectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: "1.5px", color: "white" }}
        >
          Copyright 2024 ShanDev
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {SelectedCategory}
          <span style={{ color: "purple", marginLeft: "10px" }}>Videos</span>
        </Typography>
        {Loading && <CircularProgress sx={{ margin: "0 50%" }} />}
        {!Loading && <Videos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default Feed;
