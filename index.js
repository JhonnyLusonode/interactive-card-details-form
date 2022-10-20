

//cardNnumberTextContent.textContent = onBorderChange[1].value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
let submit = document.querySelector('.submit'),
        onInput = document.querySelectorAll('.onInput')

// input error 
let cardHolderError = document.querySelector('.cardHolder_error')
let nameError = document.querySelector('.text_error')

let cardNumberError = document.querySelector('.cardNumber_error')
let numberError = document.querySelector('.number_error')

let cardDateError = document.querySelector('.cardDate_error')
let dateError = document.querySelector('.date_error')

let cardCvcError = document.querySelector('.cardCvc_error')
let cvcError = document.querySelector('.cvc_error')



//TextContent On value Change for card 
let cardNumberText = document.querySelector('.card_numbers_textContent')
let cardNameText = document.querySelector('.cardName_textContent')
let dayText = document.querySelector('.date_mm')
let monthText = document.querySelector('.date_yy')
let cvvText = document.querySelector('.cvv_textContent')
//-----------------------------------------//

// Letters Allowed and Numbers Only RegExp
const letters = /^[a-zA-Z\s]*$/ ;
const numbers = /^(\s*[0-9]+\s*)+$/;
/*--------------- ------------------*/


const completedContainer = document.querySelector('.completed_container')
const wrapper_two = document.querySelector('.wrapper_two')
submit.addEventListener('click' , (e) => {
    e.preventDefault()
            if(onInput[0].value == "" && onInput[1].value == "" && onInput[2].value == "" && onInput[3].value == "" && onInput[4].value == ""){
                cardHolderError.classList.add('visible_character')
                cardNumberError.classList.add('visible_character')
                cardDateError.classList.add('visible_character')
                cardCvcError.classList.add('visible_character')
                nameError.textContent = "Filed Required!"
                numberError.textContent = "Filed Required!"
                dateError.textContent = "Field Required!"
                cvcError.textContent = "Field Required!"
                completedContainer.style.display = "none"
            }else if(onInput[0].value.length < 6){
                cardHolderError.classList.add('visible_character')
                nameError.textContent = "To short at Last 6 character"
                    if(!onInput[0].value.match(letters)){
                        cardHolderError.classList.add('visible_character')
                        nameError.textContent = "Number not allowed"
                    }
                if(onInput[1].value.length < 19){
                    cardNumberError.classList.add('visible_character')
                    numberError.textContent = "At lasst 16 characters"
                    if(!onInput[1].value.match(numbers)){
                        cardNumberError.classList.add('visible_character')
                        numberError.textContent = "Character not allowed!"
                    }
                        if(onInput[2].value.length < 2){
                            cardDateError.classList.add('visible_character')
                            dateError.textContent = "At last 2 Character"
                            if(!onInput[2].value.match(numbers)){
                                cardDateError.classList.add('visible_character')
                                dateError.textContent = "Character not allowed!"
                            }
                        }else if(onInput[3].value.length < 2){
                            cardDateError.classList.add('visible_character')
                            dateError.textContent = "At last 2 Character"
                            if(!onInput[3].value.match(numbers)){
                                cardDateError.classList.add('visible_character')
                                dateError.textContent = "Character not allowed!"
                            }
                        }
                        if(onInput[4].value.length < 3){
                            cardCvcError.classList.add('visible_character')
                            cvcError.textContent = "At last 3 Character"
                            if(!onInput[4].value.match(numbers)){
                                cardCvcError.classList.add('visible_character')
                                cvcError.textContent = "Character not allowed!"
                            }
                        }
                }
            } else{
                completedContainer.style.display = 'flex'
                wrapper_two.style.display = 'none'
            }

})

onInput.forEach((item ,index) => {
    switch(index){
        case 0:
            item.addEventListener('keyup', () =>{
                if(!item.value.match(letters)){
                    cardHolderError.classList.add('visible_character')
                    nameError.textContent = "Characters only"
                    item.style.border = 'solid 1px #d22'
                }else if(item.value === ""){
                    cardHolderError.classList.add('visible_character')
                    nameError.textContent = "Can't be blank"
                    item.style.border = 'solid 1px #d22'
                }else if(item.value.length < 6){
                    cardHolderError.classList.add('visible_character')
                    nameError.textContent = "Name to short"
                    item.style.border = 'solid 1px #d22'
                    cardNameText.textContent = item.value
                }else if(item.value.length > 6 && item.value.length <= 20){
                    item.style.border = 'solid 1px #1FFF00 '
                    cardNameText.textContent = item.value
                    cardHolderError.classList.remove('visible_character')
                }else if(item.value.length >= 21){
                    cardHolderError.classList.add('visible_character')
                    nameError.textContent = "Name to long"
                    item.style.border = 'solid 1px #d22'
                }else{
                    cardHolderError.classList.remove('visible_character')
                    item.style.border = 'solid 1px #ccc'
                    
                }
            })
        break;
        case 1:
            item.addEventListener('keyup' , () => {
                if(item.value === ""){
                    cardNumberError.classList.add('visible_character')
                    numberError.textContent = "Can't be blank"
                    item.style.border = "solid 1px #d22"
                }else if(item.value.length > 0 && !item.value.match(numbers)){
                    cardNumberError.classList.add('visible_character')
                    numberError.textContent = "Only numbers are allowed"
                    item.style.border = "solid 1px #d22"
                }else {
                    cardNumberError.classList.remove('visible_character')
                    item.style.border = 'solid 1px #ccc'
                    cardNumberText.textContent = item.value;
                    item.style.border = 'solid 1px #1FFF00 '
                }
            })
        break;
        case 2:
            item.addEventListener('keyup' , () => {
                if(item.value === ""){
                    dayText.textContent = "00"
                    cardDateError.classList.add('visible_character')
                    item.style.border = "solid 1px #d22"
                    dateError.textContent = "Can't be blank"
                }else if(!item.value.match(numbers)){
                    cardDateError.classList.add('visible_character')
                    item.style.border = "solid 1px #d22"
                    dateError.textContent = "Numbers are allowed"
                }else if(item.value.match(numbers)){
                    cardDateError.classList.remove('visible_character')
                    item.style.border = "solid 1px #ccc"
                        if(item.value.length >= 2){
                            item.style.border = 'solid 1px #1FFF00  '
                            dayText.textContent = item.value
                        }
                }
            })
        break;
        case 3:
            item.addEventListener('keyup' , () => {
                if(item.value === ""){
                    monthText.textContent = "00"
                    cardDateError.classList.add('visible_character')
                    item.style.border = "solid 1px #d22"
                    dateError.textContent = "Can't be blank"
                }else if(!item.value.match(numbers)){
                    cardDateError.classList.add('visible_character')
                    item.style.border = "solid 1px #d22"
                    dateError.textContent = "Numbers are allowed"
                }else if(item.value.match(numbers)){
                    cardDateError.classList.remove('visible_character')
                    item.style.border = "solid 1px #ccc"
                        if(item.value.length >= 2){
                            item.style.border = 'solid 1px #1FFF00 '
                            monthText.textContent = item.value
                        }
                }
            })
        break;
        case 4:
            item.addEventListener('keyup' , () => {
                if(item.value === ""){
                    cvvText.textContent = '000'
                    cardCvcError.classList.add('visible_character')
                    item.style.border = "solid 1px #d22"
                    cvcError.textContent = "Can't be blank"
                }else if(!item.value.match(numbers)){
                    cardCvcError.classList.add('visible_character')
                    item.style.border = "solid 1px #d22"
                    cvcError.textContent = 'Only numbers are allowed'
                }else if(item.value.match(numbers)){
                    cardCvcError.classList.remove('visible_character')
                    item.style.border = "solid 1px #ccc"
                        if(item.value.length >= 3){
                            item.style.border = 'solid 1px #1FFF00 '
                            cvvText.textContent = item.value
                        }
                }
            })
        break;
    }
})


let  inputNumberFiledSplitter= document.getElementById("text");
inputNumberFiledSplitter.addEventListener("keyup", () => {
    var format = inputNumberFiledSplitter.value.split(" ").join("");
    if (format.length > 0) {
    format = format.match(new RegExp(".{1,4}", "g")).join(" ");
    }
    inputNumberFiledSplitter.value = format;
});














