const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

let current ="";
let cardNumber = [];
let dataNumber = [];
let cvvNumber = [];

inputCard.addEventListener('keydown', (e)=>{
    if (e.key === 'Tab') {
        return;        
    }
    e.preventDefault();
    handleInput(maskNumber, e.key, cardNumber);
    inputCard.value = cardNumber.join("");

    
    
});

inputCVV.addEventListener('keydown', (e)=>{
    if (e.key === 'Tab') {
        return;        
    }
    e.preventDefault();
    handleInput(maskCVV, e.key,cvvNumber);
    inputCVV.value = cvvNumber.join("");

    
    
});
inputDate.addEventListener('keydown', (e)=>{
    if (e.key === 'Tab') {
        return;        
    }
    e.preventDefault();
    handleInput(maskDate, e.key, dataNumber);
    inputDate.value = dataNumber.join("");

});

function handleInput(mask, key, arr){
    let numbers = ["0", "1", "2","3", "4", "5","6", "7", "8", "9"];

    if (key === 'Backspace' && arr.length > 0) {
        arr.pop();
        return;
    } if(numbers.includes(key) && arr.length +1 <= mask.length  ) {
        if (mask[arr.length]==='-' || mask[arr.length]==='/') {
            arr.push(mask[arr.length], key);
        }else{
            arr.push(key);
        }
        
    }

}
