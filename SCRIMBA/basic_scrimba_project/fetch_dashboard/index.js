fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=factory"
)
  .then((res) => res.json())
  .then((data) => {
    console.log("data img", data.urls.regular);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `Auteur: ${data.user.name}`;
  })
  .catch((err) => {
    console.log("something wrong with");
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something Wrong happen");
    }
    console.log(res.status);
    return res.json();
  })
  .then((data) => {
    console.log("data coin", data);
    // document.getElementById("crypto").innerHTML = `monnaie: ${data.name}`;
    document.getElementById("crypto").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;
    document.getElementById("crypto").innerHTML += `
      <p> current: ${data.market_data.current_price.eur} €</p>
      <p> high: ${data.market_data.high_24h.eur} €</p>
      <p> low: ${data.market_data.low_24h.eur} €</p>`;
  })
  .catch((err) => console.error(err));

// CLOCK
// const date = new Date();
// const clock = date.toLocaleTimeString("en-us", { timeStyle: "short" });
// document.getElementById("time").innerHTML = `<p>Il est ${clock}</p>`;

function get_current_time() {
  const date = new Date();
  const clock = date.toLocaleTimeString("en-us", { timeStyle: "short" });
  document.getElementById("time").innerHTML = `<p>Il est ${clock}</p>`;
}

setInterval(get_current_time, 1000);

// WEATHER
navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available");
      }
      return res.json();
    })
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      console.log("meteo url", icoUrl);
      document.getElementById("weather").innerHTML = `
                <p>marche pas la météo</p>
                <img src=${iconUrl} />
                <p>${Math.round(data.main.temp)}º</p>
                <p>${data.name}</p>
            `;
    })
    .catch((err) => console.error(err));
});
