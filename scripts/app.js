import Cleave from '../node_modules/cleave.js/dist/cleave-esm.min.js';
var cleave = new Cleave('#card-number', {
    creditCard: true,
});

 const cardNameInput = document.getElementById('card-name');
/*const cardNumInput = document.getElementById('card-number');
const cardExpMonthInput = document.getElementById('card-expiry-month');
const cardExpYearInput = document.getElementById('card-expiry-year'); */

const errors = document.getElementsByClassName('error-message');

let inputIds = [];
let errorIds = [];

const test = document.forms[0].elements;

for (const e of test) {
    inputIds.push(e.id);
}

for (const e of errors) {
    errorIds.push(e.id);
}

inputIds.forEach(item => {
    try {
        let el = document.getElementById(item);
        let err = document.getElementById(`${item}-error`)
        // console.log(err)
        el.addEventListener('mouseout', () => {
            if (el.value === '' || el.value === null) {
                err.style.display = 'flex';
                let style = err.style.display;
                el.style.borderColor = 'hsl(0, 100%, 66%)';
                el.style.border = 'solid 1px hsl(0, 100%, 66%)';
                if (el.id === 'card-expiry-year' || el.id === 'card-expiry-month') {
                    /* el.style.border = 'solid 1px hsl(0, 100%, 66%)'; */
                    console.log('here');
                }
            } else if (el.value !== '' || el.value !== null) {
                err.style.display = 'none';
            }
        })
    } catch (error) {
        console.log(error)
    }
});

cardNameInput.addEventListener('mouseout', () => {
    let err = document.getElementById('card-name-error')
    const el = cardNameInput;
    if (el.value === '' || el.value === null) {
        err.style.display = 'block';
    } else if (el.value !== '' || el.value !== null) {
        err.style.display = 'none';
    };
})

console.log(inputIds);