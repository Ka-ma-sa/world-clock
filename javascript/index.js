function updateDefaultCitiesTime() {
	let losAngelesElement = document.querySelector("#los-angeles");
	if (losAngelesElement) {
		let laDateElement = losAngelesElement.querySelector(".date");
		let laTimeElement = losAngelesElement.querySelector(".time");

		let laTime = moment().tz("America/Los_Angeles");

		laDateElement.innerHTML = `${laTime.format("MMMM Do YYYY")}`;
		laTimeElement.innerHTML = `${laTime.format(
			"h:mm:ss [<small>] A [</small>]"
		)}`;
	}

	let hongKongElement = document.querySelector("#hong-kong");
	if (hongKongElement) {
		let hkDateElement = hongKongElement.querySelector(".date");
		let hkTimeElement = hongKongElement.querySelector(".time");

		let hkTime = moment().tz("Asia/Hong_Kong");

		hkDateElement.innerHTML = `${hkTime.format("MMMM Do YYYY")}`;
		hkTimeElement.innerHTML = `${hkTime.format(
			"h:mm:ss [<small>] A [</small>]"
		)}`;
	}

	let torontoElement = document.querySelector("#toronto");
	if (torontoElement) {
		let torontoDateElement = torontoElement.querySelector(".date");
		let torontoTimeELement = torontoElement.querySelector(".time");

		let torontoTime = moment().tz("America/Toronto");

		torontoDateElement.innerHTML = `${torontoTime.format("MMMM Do YYYY")}`;
		torontoTimeELement.innerHTML = `${torontoTime.format(
			"h:mm:ss [<small>] A [</small>]"
		)}`;
	}
}

updateDefaultCitiesTime();
setInterval(updateDefaultCitiesTime, 1000);

function updateCityElement(event) {
	let selectedCity = event.target.value;
	if (selectedCity === "current") {
		selectedCity = moment.tz.guess();
	}
	let cityName = selectedCity.replace("_", " ").split("/")[1];
	let cityDate = moment().tz(selectedCity).format("MMMM Do YYYY");
	let cityTime = moment()
		.tz(selectedCity)
		.format("h:mm:ss [<small>] A [</small>]");

	let cityElement = document.querySelector("#city");
	cityElement.innerHTML = `
    <div class="default-cities">
		<div>
		    <h2>${cityName}</h2>
		    <div class="date">${cityDate}</div>
		    </div>
			<div class="time">${cityTime}</div>
	</div>
    <a href="https://sai3zung1.netlify.app/" class ="all-cities">ALL CITIES</a
			>
    `;
}

let selectedCity = document.querySelector("#cities");
selectedCity.addEventListener("change", updateCityElement);
