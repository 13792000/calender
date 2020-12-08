const buttons = document.querySelectorAll(".num")
const operations = document.querySelectorAll(".ops")
const display = document.querySelector('.display')
const equal = document.querySelector('.equal')
const clean = document.querySelector('.clean')
const opsValue = document.getElementById('demo') 
let input = []
let result = ''
let ops = ''

equal.addEventListener('click', calculat)
clean.addEventListener('click', cleaner) 

buttons.forEach(res => {
  res.addEventListener('click', btnValue)
})

operations.forEach(res => {
  res.addEventListener('click', oprationBtn)
}) 

function btnValue(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue == '.') {
    if (!display.value.includes('.')) {
      display.value += clickedButtonValue;
    }
  } else
  display.value += clickedButtonValue;
}

function oprationBtn(event) {
  if (ops == '' ) {
    ops = event.target.value
    if (display.value != '') {
      input.push(display.value)
    }
  }
  else {
    input.push(display.value)
    let value = input[0] + ops + input[1]
    input = []
    input.push(value)
  }
    
  display.value = ''
  opsValue.innerText = `ops is : ${ops}`
}

function calculat() {
  input.push(display.value)
  display.value = ''
  result = input[0] + ops + input[1]
  display.value = eval(result)
  input = []
  result = ''
  ops = ''
  opsValue.innerText = `ops is :`
}

function cleaner(){
  result = ''
  display.value = ''
  ops = ''
  opsValue.innerText = `ops is :`
}

