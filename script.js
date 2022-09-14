// Create Two Functions -> addChild and redWedding
let stark = document.querySelector(".starks")
console.dir(stark)
const addChild = () => {
    const newChild = document.createElement('div')
    newChild.className = 'New Child'
    newChild.textContent = 'New Child'
    stark.appendChild(newChild)
}
const redWedding = () => {
//    stark.innerHTML=''
while(stark.firstChild){
    stark.firstChild.remove()
}
}
const childButton = document.querySelector("#add-child")
childButton.addEventListener('click', addChild)
const redButton = document.querySelector('#red-wedding')
redButton.addEventListener('click', redWedding)

 // Remove the element from the DOM
// const parentEl = document.querySelector('footer')
// const child = parentEl.firstElementChild.nextElementSibling
// const child = parentEl.lastElementChild
// console.log(child);
// parentEl.removeChild(newchild)

// Attach functions to buttons
// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)
