const button = document.querySelector('.button');
const company = document.getElementById('company')
const form = document.querySelector('#form');
const models = document.querySelectorAll(".car-model")
const audi = document.querySelector('#audi')
const audiSelect = document.getElementById('audiSelect')
const bmw = document.querySelector('#bmw')
const bmwSelect = document.getElementById('bmwSelect')
const ford = document.querySelector('#ford')
const fordSelect = document.getElementById('fordSelect')
const honda = document.querySelector('#honda')
const hondaSelect = document.getElementById('hondaSelect')
const hyundai = document.querySelector('#hyundai')
const hyundaiSelect = document.getElementById('hyundaiSelect')
const kia = document.querySelector('#kia')
const kiaSelect = document.getElementById('kiaSelect')
const mazda = document.querySelector('#mazda')
const mazdaSelect = document.getElementById('mazdaSelect')
const old = document.querySelector('#old')
const owners = document.querySelector('#owners')
const inputs = document.querySelectorAll('input')
let price = document.querySelector('#price')
const radios = document.querySelectorAll('input[name="fuel"]');
const radioNew = document.querySelectorAll('input[name="new"]');
const radioOwner = document.querySelectorAll('input[name="owner"]');
const radioPay = document.querySelectorAll('input[name="pay"]');



function selectModel() {
    if (company.value == 'Audi') {
        audi.classList.remove('none');
    }
    if (company.value == 'BMW') {
        bmw.classList.remove('none');
    }
    if (company.value == 'Ford') {
        ford.classList.remove('none');
    }
    if (company.value == 'Honda') {
        honda.classList.remove('none');
    }
    if (company.value == 'Hyundai') {
        hyundai.classList.remove('none');
    }
    if (company.value == 'Kia') {
        kia.classList.remove('none');
    }
    if (company.value == 'Mazda') {
        mazda.classList.remove('none');
    }
    push();
};

function selectModel1() {
    if (old.checked) {
        owners.classList.remove('none');
    }
}


function push() {
    let totalPrice = 50000;
    let selectedIndex = audiSelect.selectedIndex;
    totalPrice = totalPrice * +Number(audiSelect[selectedIndex].value);
    for (const radio of radios) {
        if (radio.checked) {
            console.log(radio.value);
            totalPrice = totalPrice * +radio.value;
        }
    }
    for (const radio of radioNew) {
        if (radio.checked) {
            console.log(radio.value);
            totalPrice = totalPrice * +radio.value;
        }
    }

    for (const radio of radioOwner) {
        if (radio.checked) {
            console.log(radio.value);
            totalPrice = totalPrice * +radio.value;
        }
    }
    for (const radio of radioPay) {
        if (radio.checked) {
            console.log(radio.value);
            totalPrice = totalPrice * +radio.value;
        }
    }
    price.innerText = parseInt(totalPrice);
}
push();

for (const input of inputs) {
    input.addEventListener('input', function () {
        push();
    })
}

// form.addEventListener('submit', function () {
//     if (company.value == 'Audi') {
//         audi.classList.remove('none');
//     }
// });

// function calculate(event) {
//     if (company.value === 'Audi') {
//         audi.classList.remove('none');
//     }
// }
// function selectModel(target) {
//     models.forEach(e => {
//         e.classList.add("none");
//     });
//     document.getElementById(target.value).classList.remove("none");
// }