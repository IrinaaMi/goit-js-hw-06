const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const list = document.querySelector("#ingredients");

const itemsList = ingredients.map((ingredient) => {
    const newList = document.createElement("li");
    newList.textContent = ingredient;
    newList.classList.add("item");
    list.append(newList);
    console.log(newList);
});