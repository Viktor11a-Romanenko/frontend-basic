//1
// https://get.geojs.io/v1/ip/geo.json
// киньте fetch по адресу и получите данные по широте (latitude), долготе (longitude) и городу
// сделайте используя async / await асинхронные функции
// cсылки на api в чате zoom

// ! до 10-10

async function fetchGeoAndWeather() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();
  // * работа с данными из объекта без деструктуризации
  // * объявили переменные и присвоили им значения из объекта
  //const latitude = data.latitude;
  //const longitude = data.longitude;
  //const city = data.city;
  // * работа с данными из объекта с деструктуризацией
  // мы в одну строчку объявляем переменные с именами совпадающими с именем нужных нам ключей и передаем им соответствующее значение
  const { city, latitude, longitude } = data;
  console.log(city, latitude, longitude);

  //2
  // сделайте fetch запрос по адресу:
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // вам нужно заменить координаты в строке на данные выше
  // получите данные погоды: температуру, скорость ветра и.т.д
  // также заберите weathercode - он вам понадобится

  const weather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const weatherRes = await fetch(weather);
  const weatherData = await weatherRes.json();
  const { temperature, windspeed, weathercode } = weatherData.current_weather;
  console.log(temperature, windspeed, weathercode);
}

//3
// напишите функцию расшифровщик для кода погоды
// выведите данные на странице, используйте current_weather_units
// задеплойте на git pages
// скиньте ссылку на код и на деплой

function getWeatherDescription() {
  const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };


}

// Функция для отображения данных о погоде на странице
function displayWeatherData(city, temperature, windspeed, weatherDescription) {
  // Отображаем данные в соответствующих элементах
  document.getElementById("city").textContent = city;
  document.getElementById("temperature").textContent = `${temperature} °C`;
  document.getElementById("windspeed").textContent = `${windspeed} m/s`;
  document.getElementById("weatherDescription").textContent =
    weatherDescription;
}
getWeatherDescription();
displayWeatherData();
fetchGeoAndWeather();
