const categoriesList = document.querySelectorAll("#categories > li.item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
    const categoryName = category.firstElementChild.textContent;
    const elementsItem = category.lastElementChild.children.length;
    console.log(`Category: ${categoryName} \nElements: ${elementsItem}`);
});