import React from "react"
import ReactDOM from "react-dom/client"
import WeatherMoodWidget from "./WeatherMoodWidget"
import EmojeeCounter from "./EmojiCounter"
import Hook_ControlledButtonState from "./Counter"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <WeatherMoodWidget weather="Rainy" />
        <WeatherMoodWidget weather="Sunny" />
        <WeatherMoodWidget weather="Cloudy" />
    </React.StrictMode>
)
