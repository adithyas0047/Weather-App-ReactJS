import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Sample Data",
    feelsLike: 24.84,
    temperature: 25.05,
    minimumTemperature: 25.05,
    maximumTemperature: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 1 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        🌤️ Weather App
      </Typography>
      <Box sx={{ mb: 4 }}>
        <SearchBox updateInfo={updateInfo} />
      </Box>
      <InfoBox info={weatherInfo} />
    </Container>
  );
}
