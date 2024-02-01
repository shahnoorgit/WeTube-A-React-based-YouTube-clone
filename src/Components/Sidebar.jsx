import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { Stack } from "@mui/material";

const Sidebar = ({ SelectedCategory, setSelectedCategory }) => {
  const categories = [
    { name: "New", icon: <HomeIcon /> },
    { name: "Coding", icon: <CodeIcon /> },
    { name: "ReactJS", icon: <CodeIcon /> },
    { name: "NextJS", icon: <CodeIcon /> },
    { name: "Music", icon: <MusicNoteIcon /> },
    { name: "Education", icon: <SchoolIcon /> },
    { name: "Podcast", icon: <GraphicEqIcon /> },
    { name: "Movie", icon: <OndemandVideoIcon /> },
    { name: "Gaming", icon: <SportsEsportsIcon /> },
    { name: "Live", icon: <LiveTvIcon /> },
    { name: "Sport", icon: <FitnessCenterIcon /> },
    { name: "Fashion", icon: <CheckroomIcon /> },
    { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
    { name: "Comedy", icon: <TheaterComedyIcon /> },
    { name: "Gym", icon: <FitnessCenterIcon /> },
    { name: "Crypto", icon: <DeveloperModeIcon /> },
  ];
  const Selected = (category) => {
    setSelectedCategory(category);
  };
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        flexDirection: { md: "column" },
        height: { sx: "auto", md: "95%" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => Selected(category.name)}
          key={category.name}
          style={{
            backgroundColor: category.name === SelectedCategory && "purple",
            color: "white",
          }}
          className="category-btns"
        >
          <span
            style={{
              color: SelectedCategory === category.name ? "white" : "purple",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: SelectedCategory === category.name ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
