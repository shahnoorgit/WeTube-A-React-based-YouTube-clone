import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "//yourApikeyy",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchApiYT = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
