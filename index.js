let date = new Date();
let year = date.getFullYear();
document.getElementById("currentYear").textContent = year;
let lastUpdated = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + "   " + date.toTimeString().split(" ")[0];
document.getElementById("editDate").textContent = lastUpdated;