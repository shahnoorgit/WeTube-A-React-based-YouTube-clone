import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { Hidden } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "black",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="25px"
        >
          {" "}
          <img src="./Images/wtLogo.png" alt="logo" height={45} />
          <Hidden smDown>
            <Typography
              display={{}}
              fontWeight="bold"
              variant="h4"
              color="white"
            >
              We<span style={{ color: "purple" }}>Tube</span>
            </Typography>
          </Hidden>
        </Box>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
