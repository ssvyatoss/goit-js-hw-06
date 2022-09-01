const showCategory = document.querySelectorAll('.item');
console.log(`Number of categories: ${showCategory.length}`);
showCategory.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elemtnts: ${element.lastElementChild.children.length}`);
});
