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
}

updateDefaultCitiesTime();
setInterval(updateDefaultCitiesTime, 1000);
