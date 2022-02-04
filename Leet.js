//EXAMINE THE DOCUMENT OBJECT//

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.body);
// console.log(document.links);
// console.log(document.all)

// console.log(document.images)


//GET ELEMENT BYID

// let headerTitle = document.getElementById('header-title')
// // console.log(headerTitle);
// let mainTitle = document.getElementById('main-header');
// console.log(mainTitle)
// // headerTitle.textContent = 'New title';
// // console.log(headerTitle)

// // console.log(headerTitle.textContent)
// // console.log(headerTitle.innerText)
// // headerTitle.innerHTML = '<h3>Hello</h3>'

// headerTitle.style.borderBottom = 'solid 3px #000'

//GET ELEMENTS BY CLASS NAME//

// let items = document.getElementsByClassName('list-group-item');
// console.log(items)
// items[1].textContent = 'Hello two!';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f6f6f6'
// }

//GET ELEMENTS BY TAG NAME//
// let li = document.getElementsByTagName('li');
// console.log(li)
// li[1].textContent = 'Hello two!';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f6f6f6'
// }

//QUERTYSELECTOR//
// let header = document.querySelector('#main-header');
// header.style.borderBottom = "solid 4px #ccc"

// let input = document.querySelector('input[type="text"]');
// input.value = 'I\'m text in the search box'

// let submit = document.querySelector('input[type="submit"]')
// submit.value = 'send'

// let item = document.querySelector('.list-group-item');
// item.style.color = "red";
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "blue";

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green'


//QUERYSELECTORALL//
// let titles = document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent = 'Hello, im the first title'
// titles[1].textContent = 'I\'m the second title'

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-Child(even)')

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'gray'
// }

// for (let i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = 'blue'
// }


//Traversing the DOM//
// let itemList = document.querySelector('#items');
//parentNode property
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "gray";
// console.log(itemList.parentNode.parentNode)
// console.log(itemList.parentNode.parentNode.parentNode)

// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = "gray";
// console.log(itemList.parentElement.parentElement)
// console.log(itemList.parentElement.parentElement.parentElement)

//CHILD NODES//
// console.log(itemList.childNodes)

// itemList.children[1].style.color = 'blue'
// console.log(itemList.children[1])

//FIRST CHILD//
// console.log(itemList.firstChild);
// //FIRST ELEMENT CHILD//
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello world"
// //LAST CHILD& LAST ELEMENT CHILD
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Im the last element"

// let headerTitle = document.getElementById("main-header");
// console.log(headerTitle);
// console.log(headerTitle.nextElementSibling);

//PREVIOUS SIBLING//
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);



//CREATING DOM ELEMENTS//
//CREATE ELEMENT//

//Create a div
// let newDiv = document.createElement('div');

// newDiv.className = 'hello';

// //Add id;
// newDiv.id = 'hello1';

// //add attribute;
// newDiv.setAttribute('title', 'Hello Div');
// //create a text node
// let newDivText = document.createTextNode('Hello World');
// //add text to div
// newDiv.appendChild(newDivText);
// console.log(newDiv)
// let container = document.querySelector("header .container")
// let h1 = document.querySelector('header h1')

// container.insertBefore(newDiv, h1)
