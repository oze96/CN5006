import React, { useState, useEffect } from "react"

function WeatherMoodWidget(props) {
    const [weather, setWeather] = useState("☀️")
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("function called", props.weather)
        if (props.weather === "Sunny") setWeather("☀️")
        else if (props.weather === "Rainy") setWeather("⛈️")
        else if (props.weather === "Cloudy") setWeather("☁️")
    })

    const ClickHandle = () => {
        setCount(count + 1)
    }
    return (
        <div className="App">
            <p>
                <span>{props.weather}</span>
                <button
                    style={{
                        fontSize: "2rem"
                    }}
                    onClick={ClickHandle}>
                    {count}
                    {weather}
                </button>
            </p>
        </div>
    )
}
export default WeatherMoodWidget
