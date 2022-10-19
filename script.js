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

 clock.addEventListener ("click", () => {
    console.log("teeeet")
 })