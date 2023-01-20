function updateTime (){

//amstedam
let amsterdamElement = document.querySelector("#amsterdam");
if (amsterdamElement) {
let amsterdamDateElement = amsterdamElement.querySelector(".date");
let amsterdamTimeElement = amsterdamElement.querySelector(".time");
let amsterdamTime = moment().tz("Europe/Amsterdam");

amsterdamDateElement.innerHTML = moment().format("MMMM Do YYYY");
amsterdamTimeElement.innerHTML = `${amsterdamTime.format("h:mm:ss")} <small>${amsterdamTime.format("A")}</small>`;
}


//sydney
let sydneyElement = document.querySelector("#sydney");
if (sydneyElement) {
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = `${sydneyTime.format("h:mm:ss")} <small>${sydneyTime.format("A")}</small>`;
}
}

updateTime ();
setInterval (updateTime, 1000);


function updateCity (event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "Current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace ("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector ("#cities");
    cityElement.innerHTML = `
    <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${moment().format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}
    <small>${cityTime.format("A")}</small></div>
  </div>
    `;
}

let selectCity = document.querySelector("#city");
selectCity.addEventListener ("change", updateCity);