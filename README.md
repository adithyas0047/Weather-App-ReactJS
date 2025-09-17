# Weather App 🌤️

A simple, responsive weather application built with **React** and **Material UI** that lets users search a city and view current conditions including temperature, humidity, min/max, feels like, and a descriptive icon with contextual background.

## Features

- City search with validation and clear error states
- Current conditions: temperature, humidity, min/max, feels like, description
- Contextual backgrounds and icons for hot, cold, and rainy conditions
- Clean, responsive UI using Material UI components
- Environment-based configuration for API URL and key

## Tech Stack

- React (Vite)
- Material UI (MUI)
- Fetch API
- Environment variables via Vite

## Getting Started

- Prerequisites
  - Node.js 18+ and npm
- Install
  - Clone the repository, then run:
  ```bash
  npm install
  ```
- Environment variables
  - Create a .env.local file in the project root:
  ```text
  VITE_API_URL=<your_weather_api_endpoint>
  VITE_API_KEY=<your_api_key>
  ```
  - Notes:
    - Vite exposes only variables prefixed with VITE\_ to the client.
    - Do not commit your API key. Add .env.local to .gitignore.
    - The app expects the endpoint to support query parameters: q (city name), appid (API key), and units=metric.
- Run locally
  ```bash
  npm run dev
  ```
  Open the local URL shown in your terminal.
- Build
  ```bash
  npm run build
  npm run preview
  ```

## Usage

- Enter a city name and click Search.
- If the city is found, the info card updates with current weather data.
- If not found, an inline error alert appears: “No such place in our weather database”.
