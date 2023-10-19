/*const { application } = require("express");*/

// Your Code Here
// GET a list of books 
async function getBooks() {
    let response = await fetch('http://localhost:3001/listBooks')
    let resultList = await response.json();
    console.log(resultList)
};

//Updated book id-3 to the legends of Arathrae 
async function changeTitle (){
    let response = await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:3,
            title: 'The legends of Arathrae'
        })
    });
    let json = await response.json();
    console.log(json)
}

/*
async function updateQuantity(inputId){
    const quantityInput = document.getElementById(inputId);
    const newQuantity = quantityInput.value;

    let response = await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title:inputId.replace("Quantity", ""),
            quantity: newQuantity
        })
    });
    let json = await response.json();
    console.log(json);
}

*/

/*async function updateQuantity(title){
    const quantityInput = document.getElementById(`${title}Quantity`);
    const newQuantity = quantityInput.value;

    let response = await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            quantity: newQuantity
        })
    });
    let json = await response.json();
    console.log(json);
}
*/


