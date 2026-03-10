# Weather Dashboard Application 🌤️

A responsive **front-end web application** built with **React** and **Tailwind CSS** that allows users to view current weather information for cities around the world. Users can search for any city, or quickly view weather for default cities like **Kigali, New York, London, and Shanghai**. The project fetches real-time weather data from the **OpenWeatherMap API**.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

---

## Demo

A live version of the app is deployed on Vercel:  
[Weather Dashboard on Vercel](https://your-vercel-app.vercel.app)

---

## Features

- Search for weather by city name
- View **current weather** including temperature, humidity, wind speed, and weather description
- Displays **default cities** on page load: Kigali, New York, London, Shanghai
- **Home button** to reset view to default cities
- Responsive layout for mobile, tablet, and desktop
- Loading indicators while fetching data
- User-friendly error messages for invalid searches
- Sticky footer with author and project title

---

## Technologies

- **React** – Front-end library for building UI components
- **Tailwind CSS** – Utility-first CSS framework for responsive styling
- **Vite** – Development server and build tool for React
- **OpenWeatherMap API** – Fetch real-time weather data
- **Vercel** – Hosting platform for deployment

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Vincidax/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file at the project root:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

4. Install dependencies:

```bash
npm run dev
```

Open http://localhost:5173 to view the app.

---

## Usage

- Type a city name in the search bar and press **Search**
- Click **Home** to reset the view to default cities
- Default cities appear automatically on page load
- Click any default city card to view detailed weather

---

## Folder Structure

src/
├── components/
│ ├── Header.jsx
│ ├── SearchBar.jsx
│ ├── WeatherCard.jsx
│ ├── Loader.jsx
│ ├── ErrorMessage.jsx
│ └── Footer.jsx
├── services/
│ └── weatherApi.js
├── App.jsx
├── main.jsx
└── index.css

---

## Author

Vincent DUSHIME –
Portfolio / GitHub: [Weather_dashboard](https://github.com/Vincidax/Weather_dashboard)
Project: Weather Dashboard Application (Capstone Project)

---

## License

This project is open-source and free to use.
