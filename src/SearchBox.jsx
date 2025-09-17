import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    if (jsonResponse.cod !== 200) {
      throw new Error("City not found");
    }
    let result = {
      city: city,
      temperature: jsonResponse.main.temp,
      minimumTemperature: jsonResponse.main.temp_min,
      maximumTemperature: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="city"
            label="Enter City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            fullWidth
          />
          <Button variant="contained" type="submit" size="large">
            Search
          </Button>
          {error && (
            <Alert severity="error">
              No such place in our weather database
            </Alert>
          )}
        </Stack>
      </form>
    </Paper>
  );
}
