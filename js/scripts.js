/* COMMON FUNCTIONS */
const updateElement = (elementID, content) => document.getElementById(elementID).innerHTML = content;
const createArrayFromSelector = selectorName => Array.from(document.querySelectorAll(selectorName));
const nodesToValuesCleaned = arr => arr.map(item => item.innerHTML.replace(/-(.*)/,'').trim()); // Creates array of innerHTML from nodes, removes anything after '-' and trims whitespace
const arrayUniques = arr => arr.sort().filter( (item, pos, arr) => !pos || item != arr[pos - 1]); // Returns array of all unique values
const frequency = (keyArr, itemsArr) => keyArr.map(item => [item, itemsArr.filter(elem => elem == item).length] );
const buildTable = (arr, elementID) => arr.forEach(item => document.getElementById(elementID).innerHTML += `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`);

/* CORE IMPLEMENTATION */
const parseHTML = event => {
    updateElement('parse-me', event.target.value);
    const itemsArr = nodesToValuesCleaned( createArrayFromSelector('.orderNameLetter, .orderDetailsLetter > ul > li') );
    const keyArr = arrayUniques(itemsArr);
    buildTable( frequency(keyArr, itemsArr), 'results');
}

/* ON LOAD FUNCTIONS */
const eventListenerMap = [
    {selector: document.getElementById('html-input'), eventType: 'input', function: parseHTML},
].forEach(item => item.selector.addEventListener(item.eventType, item.function, false));

window.addEventListener('DOMContentLoaded', eventListenerMap, false);