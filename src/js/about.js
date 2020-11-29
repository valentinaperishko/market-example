import "../css/about.css";
import houses from "../data/houses.js";
// console.log(houses);

import refs from "./refs.js";
const { about } = refs;
// console.log(refs.about);

const aboutTitle = document.createElement("h2");
about.appendChild(aboutTitle);

const housesList = document.createElement("ul");
housesList.classList.add("housesList")



function createItem(array){
    // console.log(array);
    const li = array.map((house) => {
        // console.log(house);
        const { name, picture, price } = house;
        // console.log(name, picture, price);
        // console.log(picture);
        const houseItem = document.createElement("li");
        houseItem.classList.add("housesItem");
        
        const houseName = document.createElement("h3");
        houseName.textContent = name;

        const pictures = picture.map((url) => {
            // console.log(url);
            const houseImage = document.createElement("img");
            houseImage.setAttribute("src", url);
            houseImage.setAttribute("width", "200");
            // console.log(houseImage);
            return houseImage;
        });

        // console.log(pictures);
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("imageWrapper");
        imageContainer.append(...pictures);
        console.log(imageContainer);
        const housePrice = document.createElement("p");
        housePrice.textContent = `${price}$`;

        houseItem.append(houseName, imageContainer, housePrice);
        housesList.append(houseItem);
        // console.log(houseItem);
    });
    // console.log(li);
    return li;
}


console.log(createItem(houses));
const a = createItem(houses);
// console.log(a);
housesList.append(...a);
// console.log(housesList);
about.append(housesList);

