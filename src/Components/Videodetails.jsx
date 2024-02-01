import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { FetchApiYT } from "../Utils/FetchApiYT";

const Videodetails = () => {
  const { id } = useParams();
  const [Videodetails, setvideodetails] = useState(" ");
  useEffect(() => {
    FetchApiYT(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideodetails(data.items[0])
    );
  }, [id]);
  if (!Videodetails?.snippet) {
    return "Loading";
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = Videodetails;
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              controls
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" padding={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              color="#fff"
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle", md: "h6" }}
                  color="white"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Videodetails;
