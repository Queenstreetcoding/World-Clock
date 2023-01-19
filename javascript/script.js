function updateTime (){

//amstedam
let amsterdamElement = document.querySelector("#amsterdam");
let amsterdamDateElement = amsterdamElement.querySelector(".date");
let amsterdamTimeElement = amsterdamElement.querySelector(".time");
let amsterdamTime = moment().tz("Europe/Amsterdam");

amsterdamDateElement.innerHTML = moment().format("MMMM Do YYYY");
amsterdamTimeElement.innerHTML = `${amsterdamTime.format("h:mm:ss")} <small>${amsterdamTime.format("A")}</small>`;



//sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = `${sydneyTime.format("h:mm:ss")} <small>${sydneyTime.format("A")}</small>`;

}

updateTime ();
setInterval (updateTime, 1000);