import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../Utils/Constants";
const Channelcard = ({ ChannelDetails, marginTop }) => {
  console.log("here", ChannelDetails);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "236px",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${ChannelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={
              ChannelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={ChannelDetails?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              m: "50px",
            }}
          />
          <Typography variant="h6" sx={{ color: "#fff" }}>
            {ChannelDetails?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {ChannelDetails?.statistics?.subscriberCount && (
            <Typography color={"white"}>
              {parseInt(
                ChannelDetails?.statistics?.subscriberCount
              ).toLocaleString()}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default Channelcard;
