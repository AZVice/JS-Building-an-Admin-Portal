const { application } = require("express");

// Your Code Here
async function getBooks() {
    let response = await fetch('http://localhost:3001/listBooks')
    let resultList = await response.json();
    console.log(resultList)
};


async function changeTitle (){
    let response = await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:3,
            title: 'The legends of Arathrae (updated)'
        })
    });
    let json = await response.json();
    console.log(json)
}