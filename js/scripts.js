/* COMMON FUNCTIONS */
const updateElement = (elementID, content) => document.getElementById(elementID).innerHTML = content;
const createArrayFromSelector = selectorName => Array.from(document.querySelectorAll(selectorName));
const nodesToValuesCleaned = arr => arr.map(item => item.innerHTML.replace(/-(.*)/,'').trim()); // Creates array of innerHTML from nodes, removes anything after '-' and trims whitespace
const arrayUniques = arr => arr.sort().filter( (item, pos, arr) => !pos || item != arr[pos - 1]); // Returns array of all unique values
const frequency = (keyArr, itemsArr) => keyArr.map(item => [item, itemsArr.filter(elem => elem == item).length] );
const buildTable = (arr, elementID) => arr.forEach(item => document.getElementById(elementID).innerHTML += `<div class="tr"><div class="td">${item[1]}</div><div class="td">${item[0]}</div></div>`);

/* COMMON IMPLEMENTATION */
const parseContents = (content) => {
    updateElement('parse-me', content);
    const itemsArr = nodesToValuesCleaned( createArrayFromSelector('.orderNameLetter, .orderDetailsLetter > ul > li') );
    const keyArr = arrayUniques(itemsArr);
    buildTable( frequency(keyArr, itemsArr), 'results');
}

/* FUNCTIONS TO EXTRACT CONTENT */
const loadInputFieldContent = event => {
    parseContents(event.target.value);
}

function loadFileContent(event) {
    const reader = new FileReader();
    reader.onload = () => parseContents(reader.result);
    reader.readAsText( event.target.files[0] );
}

/* ON LOAD FUNCTIONS */
const eventListenerMap = [
    {selector: document.getElementById('html-input'), eventType: 'input', function: loadInputFieldContent},
    {selector: document.getElementById('file-input'), eventType: 'change', function: loadFileContent}
].forEach(item => item.selector.addEventListener(item.eventType, item.function, false));

window.addEventListener('DOMContentLoaded', eventListenerMap, false);