const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIKey = '6a00ec660c4864e419a9b47694913c07'; 
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
        return;
    }

    // Correct fetch call using template literal with backticks
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temp');
        const description = document.querySelector('.weather-box .descrp');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');
        const video = document.querySelector('.background-video');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = "img/clear.png";
                video.querySelector('source').src = "img/clear.mp4";
                break;

            case 'Rain':
                image.src = "img/rain.png";
                video.querySelector('source').src = "img/rain.mp4";
                break;

            case 'Wind':
                image.src = "img/mist.png";
                video.querySelector('source').src = "img/mist.mp4";
                break;

            case 'Few Clouds':
                image.src = "img/mist.png";
                video.querySelector('source').src = "img/mist.mp4";
                break;

            case 'Snow':
                image.src = "img/snow.png";
                video.querySelector('source').src = "img/snow.mp4";
                break;

            case 'Clouds':
            case 'Overcast Clouds':
                image.src = "img/cloud.png";
                video.querySelector('source').src = "img/cloud.mp4";
                break;

            default:
                image.src = "img/clear.png";
                video.querySelector('source').src = "img/clear.mp4";
        }

        // Update temperature, description, wind, and humidity
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
        humidity.innerHTML = `${json.main.humidity}%`;

        // Reload the video after source change
        video.load();
    })
    .catch(error => console.log(error)); // Add error handling
});
