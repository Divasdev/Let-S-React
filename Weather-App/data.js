export const weatherData = {
  currentWeather: {
    city: "San Francisco",
    country: "US",
    temperature: 68,
    condition: "Partly Cloudy",
    icon: "partly-cloudy-day", // Corresponds to an icon name or path
    high: 72,
    low: 55,
    feelsLike: 68,
    description: "Partly cloudy conditions will continue all day. Wind gusts are up to 15 mph."
  },
  weatherStats: [
    {
      id: "air-quality",
      title: "Air Quality",
      icon: "leaf",
      value: "156",
      description: "Unhealthy",
      info: "Air quality is poor today."
    },
    {
      id: "wind",
      title: "Wind",
      icon: "wind",
      value: "12 mph",
      description: "Direction: NW",
      info: "Gusts up to 18 mph."
    },
    {
      id: "humidity",
      title: "Humidity",
      icon: "droplet",
      value: "68%",
      description: "Dew point: 55°",
      info: "Comfortable right now."
    },
    {
      id: "visibility",
      title: "Visibility",
      icon: "eye",
      value: "10 mi",
      description: "Perfectly clear view",
      info: "Visibility is good."
    },
    {
      id: "pressure",
      title: "Pressure",
      icon: "gauge",
      value: "29.92 inHg",
      description: "Falling",
      info: "Expected to drop slightly."
    },
    {
      id: "precipitation",
      title: "Precipitation",
      icon: "cloud-rain",
      value: "0 in",
      description: "in last 24h",
      info: "Next expected is 0.1 in on Thursday."
    }
  ],
  hourlyForecast: [
    { id: "h1", time: "Now", temperature: 68, condition: "Partly Cloudy", icon: "partly-cloudy-day" },
    { id: "h2", time: "11 AM", temperature: 70, condition: "Sunny", icon: "clear-day" },
    { id: "h3", time: "12 PM", temperature: 71, condition: "Sunny", icon: "clear-day" },
    { id: "h4", time: "1 PM", temperature: 72, condition: "Sunny", icon: "clear-day" },
    { id: "h5", time: "2 PM", temperature: 72, condition: "Sunny", icon: "clear-day" },
    { id: "h6", time: "3 PM", temperature: 71, condition: "Partly Cloudy", icon: "partly-cloudy-day" },
    { id: "h7", time: "4 PM", temperature: 70, condition: "Cloudy", icon: "cloudy" },
    { id: "h8", time: "5 PM", temperature: 68, condition: "Cloudy", icon: "cloudy" },
    { id: "h9", time: "6 PM", temperature: 66, condition: "Light Rain", icon: "rain" },
    { id: "h10", time: "7 PM", temperature: 64, condition: "Light Rain", icon: "rain" },
    { id: "h11", time: "8 PM", temperature: 62, condition: "Cloudy", icon: "cloudy" },
    { id: "h12", time: "9 PM", temperature: 60, condition: "Clear", icon: "clear-night" }
  ],
  dailyForecast: [
    { id: "d1", day: "Today", minTemp: 55, maxTemp: 72, condition: "Partly Cloudy", icon: "partly-cloudy-day", precipitationChance: 20 },
    { id: "d2", day: "Tue", minTemp: 54, maxTemp: 70, condition: "Sunny", icon: "clear-day", precipitationChance: 0 },
    { id: "d3", day: "Wed", minTemp: 57, maxTemp: 73, condition: "Cloudy", icon: "cloudy", precipitationChance: 10 },
    { id: "d4", day: "Thu", minTemp: 52, maxTemp: 64, condition: "Rain", icon: "rain", precipitationChance: 80 },
    { id: "d5", day: "Fri", minTemp: 50, maxTemp: 62, condition: "Showers", icon: "showers", precipitationChance: 60 },
    { id: "d6", day: "Sat", minTemp: 52, maxTemp: 68, condition: "Partly Cloudy", icon: "partly-cloudy-day", precipitationChance: 10 },
    { id: "d7", day: "Sun", minTemp: 55, maxTemp: 71, condition: "Sunny", icon: "clear-day", precipitationChance: 0 },
    { id: "d8", day: "Mon", minTemp: 58, maxTemp: 75, condition: "Sunny", icon: "clear-day", precipitationChance: 0 },
    { id: "d9", day: "Tue", minTemp: 60, maxTemp: 77, condition: "Partly Cloudy", icon: "partly-cloudy-day", precipitationChance: 20 },
    { id: "d10", day: "Wed", minTemp: 62, maxTemp: 79, condition: "Cloudy", icon: "cloudy", precipitationChance: 30 }
  ],
  sunMoonData: {
    sunrise: "6:15 AM",
    sunset: "7:45 PM",
    moonrise: "10:30 PM",
    moonset: "9:00 AM",
    moonPhase: "Waning Gibbous",
    illumination: "75%"
  }
};
