const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
const allCurcles = document.querySelector('#all')

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    allCurcles.removeEventListener('click', makeGreen);
    allCurcles.addEventListener('click', makeYellow);
}

allCurcles.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl1.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    allCurcles.removeEventListener('click', makeYellow);
    allCurcles.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl3.style.background = ('Red');
    trafficLightEl2.style.background = ('black');
    trafficLightEl1.style.background = ('black');
    allCurcles.removeEventListener('click', makeRed);
    allCurcles.addEventListener('click', makeGreen);
}



