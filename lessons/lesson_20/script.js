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

  // Функция для отображения данных о погоде на странице
  const weatherDescription = getWeatherDescription(weathercode);
  document.getElementById("city").textContent = city;
  document.getElementById("temperature").textContent = `${temperature} °C`;
  document.getElementById("windspeed").textContent = `${windspeed} m/s`;
  document.getElementById("weatherDescription").textContent =
    weatherDescription;
}

//3
// напишите функцию расшифровщик для кода погоды
// выведите данные на странице, используйте current_weather_units
// задеплойте на git pages
// скиньте ссылку на код и на деплой

function getWeatherDescription(code) {
  switch (code) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Light drizzle";
    case 53:
      return "Moderate drizzle";
    case 55:
      return "Dense intensity drizzle";
    case 56:
      return "Light intensity freezing drizzle";
    case 57:
      return "Dense intensity freezing drizzle";
    case 61:
      return "Slight rain";
    case 63:
      return "Moderate rain";
    case 65:
      return "Heavy intensity rain";
    case 66:
      return "Light freezing rain";
    case 67:
      return "Heavy intensity freezing rain";
    case 71:
      return "Slight snow fall";
    case 73:
      return "Moderate snow fall";
    case 75:
      return "Heavy intensity snow fall";
    case 77:
      return "Snow grains";
    case 80:
      return "Slight rain showers";
    case 81:
      return "Moderate rain showers";
    case 82:
      return "Violent rain showers";
    case 85:
      return "Slight snow showers";
    case 86:
      return "Heavy snow showers";
    case 95:
      return "Slight or moderate thunderstorm";
    case 96:
      return "Thunderstorm with slight ";
    case 99:
      return "Thunderstorm with heavy hail";
      default:
        return "Unknown weather condition";
  }
}
fetchGeoAndWeather();
