const grados = 6
const horas = document.querySelector(".hora")
const minutos = document.querySelector(".minuto")
const segundos = document.querySelector(".segundo")

setInterval(() =>{
    let tiempo = new Date()

    let hora = tiempo.getHours() * 30
    let minuto = tiempo.getMinutes() * grados
    let segundo = tiempo.getSeconds() * grados

    horas.style.transform = `rotate(${(hora) + (minuto/12)}deg)`
    minutos.style.transform = `rotate(${minuto}deg)`
    segundos.style.transform = `rotate(${segundo}deg)`
})