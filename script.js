const todoValue= document.getElementById('todoText');
const todoAlert= document.getElementById("Alert");
const listItems = document.getElementById("list-items");
const addUpdate = document.getElementById("addUpdateClick");

let todo = JSON.parse(localStorage.get)