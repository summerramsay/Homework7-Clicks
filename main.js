const firstB = document.querySelector('#FB');
const secondB = document.querySelector('#SB');
const thirdB = document.querySelector('#TB');


firstB.addEventListener('click', function() {
    const h3 = document.createElement('h3')
    h3.textContent = "Foo"
    document.body.appendChild(h3)
})

secondB.addEventListener('click', function() {
    h3 = document.createElement('h3')
    h3.textContent = "Bar"
    document.body.appendChild(h3)
})

thirdB.addEventListener('click', function() {
    const h2 = document.createElement('h2')
    h2.textContent = "FooBar"
    document.body.appendChild(h2)
})