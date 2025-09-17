import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=1170&auto=format&fit=crop";
  const COLD_URL =
    "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1332&auto=format&fit=crop";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=1170&auto=format&fit=crop";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 5 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temperature > 20
                ? HOT_URL
                : COLD_URL
            }
            title="Weather background"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon color="primary" />
              ) : info.temperature > 20 ? (
                <WbSunnyIcon color="warning" />
              ) : (
                <AcUnitIcon color="info" />
              )}
            </Typography>
            <Typography variant="body1" color="text.secondary" component="div">
              <div>🌡️ Temperature: {info.temperature}&deg;C</div>
              <div>💧 Humidity: {info.humidity}%</div>
              <div>⬇️ Min Temp: {info.minimumTemperature}&deg;C</div>
              <div>⬆️ Max Temp: {info.maximumTemperature}&deg;C</div>
              <div>
                🌥️ Weather: <i>{info.weather}</i>, feels like {info.feelsLike}
                &deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
