const greeting = document.querySelectorAll('output')

function greet() {
    let name = prompt('Please enter your name');
    greeting.forEach(item => item.innerHTML = name);
}
greet();