let date = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const days = ['Sunday', 'Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


let currentMonth = months[date.getMonth()]
let currentDay = days[date.getDay()]
let currentYear = date.getFullYear()
document.getElementById("currentDate").innerHTML = `${currentDay}, ${currentMonth}, ${currentYear} `;

window.addEventListener('load', () => {
    const hambutton = document.querySelector(".hamburgerMenue");
    const mainnav = document.querySelector(".hlinks");

    hambutton.addEventListener(
        "click",
        (event) => {
          event.preventDefault()
            mainnav.classList.toggle("responsive");
        },
        false
    );
})








if (date.getDay() !== 5) {
    document.getElementById("pancake-banner").className = 'hidden';
} else {
    document.getElementById("pancake-banner").className = 'show'

}