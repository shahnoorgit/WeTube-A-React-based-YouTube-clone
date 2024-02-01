import { Stack, Box } from "@mui/material";
import { Videocard, Channelcard } from "./";

function Videos({ videos, marginTop }) {
  return (
    <Stack
      sx={{ marginTop: marginTop }}
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={1}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {" "}
          {item.id.videoId && <Videocard video={item} />}
          {item.id.channelId && <Channelcard ChannelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
