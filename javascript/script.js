

let amsterdamElement = document.querySelector("#amsterdam");
let amsterdamDateElement = amsterdamElement.querySelector(".date");
let amsterdamTimeElement = amsterdamElement.querySelector(".time");
let amsterdamTime = moment();

amsterdamDateElement.innerHTML = moment().format("MMMM Do YYYY");
amsterdamTimeElement.innerHTML = `${amsterdamTime.format("h:mm:ss")} <small>${amsterdamTime.format("A")}</small>`;