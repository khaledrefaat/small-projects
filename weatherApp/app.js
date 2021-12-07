

window.addEventListener('load', () => {
    let long, lat;

    let temperatureDescription = document.querySelector('.temperature__description');
    let temperatureDegree = document.querySelector('.temperature__degree');
    let locationTimezone = document.querySelector('.location__timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/1bdb012c7022179075f08378ab39f3e2/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    const { temperature, summary, icon } = data.currently;
                    // set dom elements from the api
                    temperatureDegree.textContent = Math.round(((temperature - 32) * (5 / 9))) + ' C';
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                    // setIcons
                    setIcons(icon, document.querySelector('.icon'));

                    // change the temperature to farenheit
                    temperatureDegree.addEventListener('click', () => {
                        if (temperatureDegree.textContent.includes('C')) {
                            temperatureDegree.textContent = temperature + ' F'
                        } else {
                            temperatureDegree.textContent = Math.round(((temperature - 32) * (5 / 9))) + ' C';
                        }
                    })
                });
        });
    };

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ "color": "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});