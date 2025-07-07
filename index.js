/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    let input = document.getElementById("user-input").value
    document.getElementById("length-result").textContent = `${input} meters = ${(input * 3.281).toFixed(2)} feet
     | ${input} feet = ${(input / 3.281).toFixed(2)} meters`
    document.getElementById("vol-result").textContent = `${input} liters = ${(input * 0.264).toFixed(2)} gallons
     | ${input} gallons = ${(input / 0.264).toFixed(2)} liters`
    document.getElementById("mass-result").textContent = `${input} kilos = ${(input * 2.204).toFixed(2)} pounds
     | ${input} pounds = ${(input / 2.204).toFixed(2)} kilos`
    document.getElementById("user-input").value = ""
})