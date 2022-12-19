/**
 * 🌧️.
 *
 */

const renderAlert = (msg, type = "info") => {
  document.querySelector("#forecast").innerHTML = `
    <div class="alert alert-${type}">${msg}</div>
  `;
};

const renderNotice = (msg) => renderAlert(msg, "info");
const renderWarning = (msg) => renderAlert(msg, "warning");
const renderError = (msg) => renderAlert(msg, "danger");

const renderCurrentWeather = (data) => {
  const conditions = data.weather.map(
    (condition) =>
      `
        <li>
          <img src="http://openweathermap.org/img/wn/${condition.icon}@2x.png" title="${condition.description}">
        </li>
      `
  );

  const now = Math.round(Date.now() / 1000);
  const banner =
    now > data.sys.sunrise && now < data.sys.sunset
      ? "assets/images/day.svg"
      : "assets/images/night.svg";

  const freshness = new Date(data.dt * 1000);

  document.querySelector("#forecast").innerHTML = `
		<div class="card">
			<img src="${banner}" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title" id="location">
					<span id="city">${data.name}</span>,
					<span id="country">${data.sys.country}</span>
				</h5>
				<p class="temp">
					<span id="temperature">${data.main.temp}</span>
					&deg;C
				</p>
				<p class="humidity">
					<span id="humidity">${data.main.humidity}</span>
					&percnt; humidity
				</p>
				<p class="wind">
					<span id="windspeed">${data.wind.speed}</span>
					m/s
				</p>
        <ul class="conditions">
          ${conditions.join("")}
        </ul>

        <p class="text-muted small">${freshness.toLocaleString()}</p>
			</div>
		</div>
	`;
};

document.querySelector("#search-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  document.querySelector("#forecast").innerHTML = `
    <div class="spinner-border text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `;

  const city = e.target.query.value.trim();

  localStorage.setItem("weather_city", city);

  if (city.length < 3) {
    renderNotice("Please enter at least 3 chars");
    return;
  }

  // do search
  console.log(`Searching for city "${city}"`);

  try {
    const data = await getCurrentWeather(city);
    // render current weather conditions
    renderCurrentWeather(data);
  } catch (e) {
    renderWarning("City not found!");
  }
});

document.querySelector("#query").value =
  localStorage.getItem("weather_city") ?? "";
