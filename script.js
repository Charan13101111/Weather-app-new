const apikey = "3fe1d597cb80c0f2a65d0d9a3a005473";
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
            // const weatherIcon = document.querySelector(".weather-icon");

            async function checkWeather(location = "London") {
                if (!location) {
                    console.error("Please enter a city name");
                    return;
                }

                try {
                    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
                    
                    if (!response.ok) {
                        throw new Error("City not found");
                    }   
                    const data = await response.json();

                    document.querySelector(".location").innerHTML = data.name;
                    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
                    // document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                    // document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                    if(data.weather[0].main=="Clouds"){
                        weatherIcon.src="images/clouds.png";
                    }
                    else if(data.weather[0].main=="Clear"){
                        weatherIcon.src="images/clear.png";
                    }
                    else  if(data.weather[0].main=="Rains"){
                        weatherIcon.src="images/rain.png";
                    }
                    else if(data.weather[0].main=="Drizzle"){
                        weatherIcon.src="images/drizzle.png";
                    }
                    else if(data.weather[0].main=="Mist"){
                        weatherIcon.src="images/mist.png";
                    }
                } catch (error) {
                    console.error("Error fetching weather:", error);
                    alert(error.message);
                }
            }

            // Add event listener to search button
            document.querySelector("button").addEventListener("click", () => {
                const city = document.querySelector("input").value;
                checkWeather(location);
            });

            // Add event listener for Enter key
            document.querySelector("input").addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    const city = e.target.value;
                    checkWeather(location);
                }
            });

            // Load default weather on page load
            checkWeather();