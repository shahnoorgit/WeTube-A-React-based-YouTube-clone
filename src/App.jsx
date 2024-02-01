import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  Videodetails,
  ChannelDetails,
  SearchFeed,
} from "./Components";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/Video/:id" element={<Videodetails />} />
          <Route path="/Channel/:id" element={<ChannelDetails />} />
          <Route path="/Search/:SearchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
