import Cleave from '../node_modules/cleave.js/dist/cleave-esm.min.js';
var cleave = new Cleave('#card-number', {
    creditCard: true,
});

 const cardNameInput = document.getElementById('card-name');
 const cardNameDisplay = document.getElementById('card-name-display');
const cardNumInput = document.getElementById('card-number');
const cardExpMonthInput = document.getElementById('card-expiry-month');
const cardExpYearInput = document.getElementById('card-expiry-year'); 
const confirm = document.getElementById('submit-details');
const continueButton = document.getElementById('continue');

const form = document.forms.item(0)

const displayClass = document.getElementsByClassName('displays');
const errors = document.getElementsByClassName('error-message');
const completedContainer = document.getElementById('completion-container');

let inputIds = [];
let errorIds = [];
let displayIds = [];

const inputs = document.forms[0].elements;

for (const e of inputs) {
    inputIds.push(e.id);
}

for (const e of errors) {
    errorIds.push(e.id);
}

for (const e of displayClass) {
    displayIds.push(e.id);
}

console.log(displayIds);

inputIds.forEach(item => {
    try {
        let el = document.getElementById(item);
        let err = document.getElementById(`${item}-error`)
        // console.log(err)
        el.addEventListener('focusin', () => {
            el.style.border = 'solid 2px hsl(249, 99%, 64%)'
        })
        el.addEventListener('focusout', () => {
            el.style.border = 'solid 2px hsl(270, 3%, 87%)'
        })
        el.addEventListener('mouseout', () => {
            if (el.value === '' || el.value === null) {
                err.style.display = 'flex';
                //let style = err.style.display;
                el.style.border = 'solid 1px hsl(0, 100%, 66%)';
            } else if (el.value !== '' || el.value !== null) {
                err.style.display = 'none';
                el.style.border = 'solid 2px hsl(270, 3%, 87%)'
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

cardExpMonthInput.addEventListener('mouseout', () => {
    const el = cardExpMonthInput;
    if(el.value === '' || el.value === null) {
        el.style.border = 'solid 1px hsl(0, 100%, 66%)';
        el.setAttribute("placeholder", "Fill in")
    } else if (el.value !== '' || el.value !== null) {
        el.style.border = 'solid 2px hsl(270, 3%, 87%)'
        el.setAttribute("placeholder", "MM")
    }
})

cardExpYearInput.addEventListener('mouseout', () => {
    const el = cardExpYearInput;
    if(el.value === '' || el.value === null) {
        el.style.border = 'solid 1px hsl(0, 100%, 66%)';
        el.setAttribute("placeholder", "Fill in")
    } else if (el.value !== '' || el.value !== null) {
        el.style.border = 'solid 2px hsl(270, 3%, 87%)'
        el.setAttribute("placeholder", "YY")
    }
})

console.log(inputIds);

inputIds.forEach(item => {
    try {
        const el = document.getElementById(item); 
        const currentDisplay = document.getElementById(`${item}-display`);
        el.addEventListener('input', () => {
            currentDisplay.innerText = el.value
        })

    } catch (error) {
        console.log(error);
    }
})

confirm.addEventListener('click', (e) => {
    try {
        /* let isEmpty = true;
        inputIds.forEach(id => {
            let el = document.getElementById('id');
            if (el.value !== '' || el.value !== null) {
                isEmpty = false;
            } else if (el.value === '' || el.value === null) {
                isEmpty = true;
            }
        })
        if (!isEmpty) { */
            e.preventDefault();
            form.style.display = 'none';
            completedContainer.style.display = 'inline-block';
        /* } else {
            alert('Please fill in all card details');
        }
        console.log(isEmpty) */
    } catch (error) {
        console.log(error);
    }
})

continueButton.addEventListener('click', (e) => {
    try {
        // e.preventDefault()
        form.style.display = 'inline-block';
        completedContainer.style.display = 'none';
        form.reset()
        location.reload();
    } catch (error) {
        console.log(error);
    }
})