// const person = {name: String, lastname: String, age: Number }
// let name = prompt("Введите имя", "Tim");
// let lastname = prompt("Введите фамилию", "Polh");
// let age = prompt("Введите возраст", 16)
//
// person.name = name
// person.lastname = lastname
// person.age = parseInt(age)
//
// alert(`${person.name} ${person.lastname} ${person.age}`);
// const person = {name: "Tim", lastname: "polh", age: 16 }
// const person1 = {name: "Tom", lastname: "pol", age: 25 }
// const person2 = {name: "Den", lastname: "hel", age: 61 }
//
// let myArray  = [person, person1, person2]
// for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i].name)
// }
// for (const myArrayKey in myArray) {
//     console.log(myArray[myArrayKey].lastname)
// }
// for (const myArrayElement of myArray) {
//     console.log(myArrayElement.age)
// }
// function name_func(name= ""){
//     console.log(`Имя ${name}`)
// }
//
// function lastname_func(lastname = "") {
//     console.log(`Фамилия ${lastname}`)
// }
//
// let _mes = name_func
// _mes("Tima")
// _mes = lastname_func
// _mes("Polh")
let btn = document.getElementById('btn')
btn.onclick = function (e) {
    e.preventDefault()
    let text = document.querySelector('.intro')
    text.classList.add('red')
    let img = document.querySelector('.desktop')
    img.style.display = 'none'
}


