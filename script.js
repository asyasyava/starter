const menu = document.getElementById("Menu")
const hamb = document.getElementById("Hamb")

function showMenu () {
//     if(menu.classList.contains("mobilemenu")) {
//    menu.classList.remove("mobilemenu")
//     }
//     else {
//         menu.classList.add("mobilemenu")
//     }
    menu.classList.toggle("mobilemenu")

}

hamb.addEventListener ("click", showMenu)

const clock = document.getElementById("Clock")
const datetime = document.getElementById("DateTime")

console.log (clock)

function showDateTime () {
    datetime.classList.toggle("showdatetime")
    console.log("done")
}

 clock.addEventListener ("click", showDateTime)

const cities = document.getElementById("Cities")



function cardCreator (p, c, ty, te, hu) {
    const card = document.createElement ("article")
    card.classList.add ("card")

    const photo = document.createElement ("img")
    photo.setAttribute("src", p)
    photo.classList.add ("photo")
    card.appendChild (photo)

    const infocard = document.createElement ("div")
    infocard.classList.add ("infocard")

    const city = document.createElement ("h3")
    city.classList.add ("city")
    city.textContent = c
    infocard.appendChild(city)

    const type = document.createElement ("p")
    type.classList.add ("type")
    type.textContent = "Weather is " + ty
    infocard.appendChild(type)

    const values = document.createElement ("div")
    values.classList.add ("values")

    const temp = document.createElement ("h4")
    const icon1 = document.createElement ("i")
    icon1.classList.add ("bi-thermometer-half")
    temp.classList.add ("temphumi")
    temp.innerHTML= te + "°C"
    values.appendChild (icon1)
    values.appendChild (temp)

    const humi = document.createElement ("h4")
    const icon2 = document.createElement ("i")
    icon2.classList.add ("bi-droplet-half")
    humi.classList.add ("temphumi")
    humi.textContent = hu + "%"
    values.appendChild (icon2)
    values.appendChild (humi)

    infocard.appendChild (values)
    card.appendChild (infocard)
    cities.appendChild (card)
}

const w1 = {img_w: "./images/Widget 1.png", city_w: "Cairo", type_w: "sunny", temp_w: "34", humi_w: "32"}
const w2 = {img_w: "./images/Widget 2.png", city_w: "Giza", type_w: "sunny", temp_w: "34", humi_w: "32"}
const w3 = {img_w: "./images/Widget 3.png", city_w: "Hurghada", type_w: "sunny", temp_w: "34", humi_w: "32"}
const w4 = {img_w: "./images/Widget 4.png", city_w: "Alexandria", type_w: "sunny", temp_w: "34", humi_w: "32"}

 const weather_cities = [w1, w2, w3, w4];

for (let i = 0, len = weather_cities.length; i < len; i++) {
    cardCreator(weather_cities[i].img_w, weather_cities[i].city_w, weather_cities[i].type_w, weather_cities[i].temp_w, weather_cities[i].humi_w);
}


// cardCreator( "./images/Widget 1.png", "Cairo", "sunny", "34", "32")

const greeting = document.getElementById("Greeting")

function showGreeting () {
    const hour = new Date().getHours();
    console.log (hour)
    if (hour>=6 && hour<12) {
        greeting.textContent = "Good Morning"
    }
    else if (hour>=12 && hour<16) {
        greeting.textContent = "Good Afternoon"
    }
    else if (hour>=16 && hour<22) {
        greeting.textContent = "Good Evening"
    }
    else {
        greeting.textContent = "Good Night"
    }
}

showGreeting ();


const d = new Date();

const myday = document.getElementById("Day")
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[d.getDay()];
myday.textContent = day

const mytime = document.getElementById("Time")

function showTime () {
    const time = new Date().toLocaleTimeString("en-GB");
    mytime.textContent = time
}

var a
a=setInterval(showTime, 1000)

const header = document.getElementById("Header");
const className = "inverted";
const scrollTrigger = 450;

function changeHeaderBG () {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >=scrollTrigger) {
        header.classList.add(className);
    }
    else {
        header.classList.remove (className);
    }
}

window.addEventListener ("scroll", changeHeaderBG)

// const stoptime = document.getElementById("Stop")

// function myStopFunction() {
//     clearInterval(a);
//   }

// stoptime.addEventListener("click", myStopFunction)


// const admin = true;

// if(admin === true) {
//     console.log("aaa")
// }
// else {
//     console.log("hhhh")
// }

// const result = admin === true ? "aaa" : "hhhh"
// console.log(result)