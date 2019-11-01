// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

// 1. Create an HTML Marckup
      
const headercontainer = document.querySelector(".header-container") 

const header = document.createElement('div')
const span1 = document.createElement('span')  
const h1 = document.createElement('h1')
const span2 = document.createElement('span')

// 2. Define HTML structure

headercontainer.appendChild(header)
header.appendChild(span1)
header.appendChild(h1)
header.appendChild(span2)

// 3. Add some classes

header.classList.add('header')
span1.classList.add('date')
span2.classList.add('temp')


// 4. Add some content

span1.textContent = 'SMARCH 28, 2019'
h1.textContent = 'Lambda Times'
span2.textContent = '98°'


return header
}

Header()
