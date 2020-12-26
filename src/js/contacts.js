import "../css/contacts.css";

import a from "./refs.js";
const { contacts } = a;

console.log(contacts);

const game = ["stone", "scissors", "paper"];

function createBtns(array){
    return array.map((el) => {
        const btn = document.createElement("button");
        btn.textContent = el;
        btn.dataset.value = el;
        return btn;
    });
}
const buttons = createBtns(game);
console.log(buttons);

contacts.append(...buttons);


//Универсальная функция, вернет рандомный индекс любого массива//
function randomIdx(array) {
    let idx = Math.round(Math.random()*(array.length - 1));
    // console.log(idx);
    return idx;
}
// randomIdx(game);


const p = document.createElement("p");
p.style.fontSize = '30px';
contacts.append(p);

contacts.addEventListener("click", (e)=>{
// console.log(e.target.dataset.value);
p.textContent = myGame(e, game, p)
});

function myGame(e, array, place) {
    let user = e.target.dataset.value ;
    console.log(user);

    let comp = array[randomIdx(array)];
    console.log(comp);
    let msg = place.textContent;
    if(user === comp){
        msg = `user: ${user} - comp: ${comp} = нычья`;
    } else {
        if((user === "stone" && comp === "scissors") || (user === "scissors" && comp === "paper") || 
        (user === "paper" && comp === "stone")) {
            msg = `user with value ${user} won`;
        } else {
            msg = `comp with value ${comp} won`;
        }
    }
    return msg;
}
