const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const list = document.querySelector("#ingredients");

function createItem(arr) {
    const fragment = document.createDocumentFragment();
    arr.forEach((ingredient) => {
        const newList = document.createElement("li");
        newList.textContent = ingredient;
        newList.classList.add("item");
        fragment.appendChild(newList);
        console.log(newList)
    });
    list.appendChild(fragment);
}
createItem(ingredients);