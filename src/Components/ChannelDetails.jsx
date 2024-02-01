import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, Channelcard } from "./";
import { FetchApiYT } from "../Utils/FetchApiYT";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelinfo, setchannelinfo] = useState(null);
  const [channelvids, setchannelvids] = useState([]);
  console.log(channelinfo, channelvids);
  useEffect(() => {
    FetchApiYT(`channels?part=snippet&id=${id}`).then((data) =>
      setchannelinfo(data?.items[0])
    );
    ///For Inchannel Search
    FetchApiYT(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setchannelvids(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,11,142,1) 54%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <Channelcard ChannelDetails={channelinfo} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />{" "}
        <Videos marginTop="80px" videos={channelvids} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
