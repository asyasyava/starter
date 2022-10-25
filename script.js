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

const home = document.getElementById("Home")
home.onclick =() => {
    window.scrollTo ({
        top:0,
        behavior: 'smooth'
    })
}

const region = document.getElementById("Region")
const popular = document.getElementById("Popular")
region.onclick =() => {
    window.scrollTo ({
        top:popular.offsetTop-60,
        behavior: 'smooth'
    })
}

const about = document.getElementById("About")
const ourhotels = document.getElementById("OurHotels")
about.onclick =() => {
    window.scrollTo ({
        top: ourhotels.offsetTop-60,
        behavior: 'smooth'
    })
}


const clock = document.getElementById("Clock")
const datetime = document.getElementById("DateTime")

console.log (clock)

function showDateTime () {
    datetime.classList.toggle("showdatetime")
    console.log("done")
}

 clock.addEventListener ("click", showDateTime)



const hotels = [
    {
        img: "./images/Cairo.png", 
        name: "Hotel 1", 
        city: "Giza", 
        rate: "4", 
        view: "Mountain View",
        date: "30 oct-4 nov",
        price: "519"
    },
    {
        img: "./images/Giza.png", 
        name: "Hotel 2", 
        city: "Alexandria", 
        rate: "3", 
        view: "Mountain View",
        date: "20 oct-7 nov",
        price: "491"
    },
    {
        img: "./images/Hurghada.png", 
        name: "Hotel 3", 
        city: "Cairo", 
        rate: "4", 
        view: "Mountain View",
        date: "10 oct-27 oct",
        price: "349"
    },
    {
        img: "./images/Alexandria.png", 
        name: "Hotel 4", 
        city: "Hurghada", 
        rate: "5", 
        view: "Mountain View",
        date: "17 oct-30 oct",
        price: "649"
    }
];

const hotelsWrapper = document.getElementById("Hotels")
hotels.forEach( (hotel) => {
    const card = document.createElement("article")
    card.classList.add ("hotel")

    const image = document.createElement("img")
    image.classList.add ("hotelimg")
    image.src = hotel.img

    const namebox = document.createElement("div")
    namebox.classList.add("namebox")

    const name = document.createElement("h5")
    namebox.classList.add ("hotelname")
    namebox.textContent=`${hotel.name}, ${hotel.city}`;

    const ratebox = document.createElement("div")
    ratebox.classList.add("ratebox")

    const rate = document.createElement ("h5")
    const star = document.createElement ("i")
    star.classList.add ("bi-star-fill")
    rate.classList.add ("hotelrate")
    rate.textContent= hotel.rate
    ratebox.appendChild (star)
    ratebox.appendChild (rate)
    namebox.appendChild(ratebox)
    
    const view = document.createElement("p")
    view.classList.add ("view")
    view.textContent= hotel.view

    const date = document.createElement("p")
    date.classList.add ("date")
    date.textContent= hotel.date

    const pricebox = document.createElement("div")
    pricebox.classList.add("pricebox")
    const price = document.createElement ("h5")
    price.classList.add ("price")
    price.textContent="$"+hotel.price
    const pernight = document.createElement ("p")
    pernight.classList.add("pernight")
    pernight.textContent="per night"
    pricebox.appendChild(price)
    pricebox.appendChild(pernight)


    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(namebox)
    card.appendChild(view)
    card.appendChild(date)
    card.appendChild(pricebox)
    hotelsWrapper.appendChild(card)
})

// cardCreator( "./images/Cairo.png", "Cairo", "sunny", "34", "32")

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


let mycityname = document.getElementById("MyCityName")
let myhumi = document.getElementById("MyHumi")
let mymaxtemp = document.getElementById("MyMaxTemp")
let mymintemp = document.getElementById("MyMinTemp")
let mywindspeed = document.getElementById("MyWindSpeed")


let APIKey = "f0cd2fd2af31f487dba865ee97b534e6";
let my_city = "Katowice";

const my_weather = async (lat,lon) => {
    const my_cityURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
    const data = await fetch(my_cityURL);
    const weather = await data.json();
    showMyWeather(weather)
}

// .then(showMyWeather)

function showMyWeather (weather) {
    mycityname.textContent = "Weather in " + weather.name
    mymaxtemp.textContent = `${Math.round(weather.main.temp_max - 273.15)}°C`
    mymintemp.textContent = `${Math.round(weather.main.temp_min - 273.15)}°C`
    myhumi.textContent = weather.main.humidity + "%"
    mywindspeed.textContent = weather.wind.speed + " km/h"
}

navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    my_weather(lat, lon)
  });

const allWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/group?id=360630,360995,361291,361058&units;=metric&appid=${APIKey}`
    const weather = await(await fetch(URL)).json();
    return([...weather.list])
 }

const getCitiesWeather = (cities)=> {
    const citiesArray = [];
    cities.forEach(city=>{
        citiesArray.push ({
            name: city.name,
            desc: city.weather[0].description,
            temp: city.main.temp,
            humidity: city.main.humidity
        })
    })
    citiesArray.forEach((city)=>cardCreator(city));
}
let citiesWeather = allWeather().then(getCitiesWeather);

const cities = document.getElementById("Cities")

function cardCreator (item) {
    const card = document.createElement ("article")
    card.classList.add ("card")

    const photo = document.createElement ("img")
    photo.setAttribute("src",  `./images/${item.name}.png`)
    photo.classList.add ("photo")
    card.appendChild (photo)

    const infocard = document.createElement ("div")
    infocard.classList.add ("infocard")

    const city = document.createElement ("h3")
    city.classList.add ("city")
    city.textContent = item.name
    infocard.appendChild(city)

    const type = document.createElement ("p")
    type.classList.add ("type")
    type.textContent = "Weather is " + item.desc
    infocard.appendChild(type)

    const values = document.createElement ("div")
    values.classList.add ("values")

    const temp = document.createElement ("h4")
    const icon1 = document.createElement ("i")
    icon1.classList.add ("bi-thermometer-half")
    temp.classList.add ("temphumi")
    temp.innerHTML= `${Math.round(item.temp - 273.15)}°C`
    values.appendChild (icon1)
    values.appendChild (temp)

    const humi = document.createElement ("h4")
    const icon2 = document.createElement ("i")
    icon2.classList.add ("bi-droplet-half")
    humi.classList.add ("temphumi")
    humi.textContent = item.humidity + "%"
    values.appendChild (icon2)
    values.appendChild (humi)

    infocard.appendChild (values)
    card.appendChild (infocard)
    cities.appendChild (card)
}



// const weather_cities = [
//     {
//         img_w: "./images/Cairo.png", 
//         city_w: "Cairo", 
//         type_w: "sunny", 
//         temp_w: "34", 
//         humi_w: "32"
//     },
//     {
//         img_w: "./images/Giza.png", 
//         city_w: "Giza", 
//         type_w: "sunny", 
//         temp_w: "34", 
//         humi_w: "32"
//     },
//     {
//         img_w: "./images/Hurghada.png", 
//         city_w: "Hurghada", 
//         type_w: "sunny", 
//         temp_w: "34", 
//         humi_w: "32"
//     },
//     {
//         img_w: "./images/Alexandria.png", 
//         city_w: "Alexandria", 
//         type_w: "sunny", 
//         temp_w: "34", 
//         humi_w: "32"
//     }
// ];

// for (let i = 0, len = weather_cities.length; i < len; i++) {
//     cardCreator(weather_cities[i].img_w, weather_cities[i].city_w, weather_cities[i].type_w, weather_cities[i].temp_w, weather_cities[i].humi_w);
// }
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