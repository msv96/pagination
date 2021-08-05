const listItems = [
	"Item 1",
	"Item 2",
	"Item 3",
	"Item 4",
	"Item 5",
	"Item 6",
	"Item 7",
	"Item 8",
	"Item 9",
	"Item 10",
	"Item 11",
	"Item 12",
	"Item 13",
	"Item 14",
	"Item 15",
	"Item 16",
	"Item 17",
	"Item 18",
	"Item 19",
	"Item 20",
	"Item 21",
	"Item 22"
];

const list = document.getElementById('lists');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let rows = 5;

function displayList(items, wrapper, perPage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = perPage * page;
    let end = start + perPage;
    let paginatedItems = items.slice(start, end);

    for(let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        let itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerText = item;

        wrapper.appendChild(itemElement);
    }
}
function paginationSetup(items, wrapper, perPage) {
    wrapper.innerHTML = "";
    
    let pageCount = Math.ceil(items.length / perPage);

    for(let i = 1; i < pageCount + 1; i++) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
    }
}
function paginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if(currentPage == page) {
        button.classList.add('active');
    }
    button.addEventListener('click', function () {
        currentPage = page;
        displayList(items, list, rows, currentPage);

        let currentButton = document.querySelector('.pageNo button.active');
        currentButton.classList.remove('active');

        button.classList.add('active');
    });
    return button;    
}
displayList(listItems, list, rows, currentPage);

paginationSetup(listItems, pagination, rows);