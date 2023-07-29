const categoriesList = document.querySelectorAll("#categories > li.item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const elementsItem = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryName} \nElements: ${elementsItem}`);
});