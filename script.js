const digitBtn = document.querySelectorAll('.btn');
const btnZero = document.querySelector('.btn-0')
const screen = document.querySelector('.screen');
const btnAdd = document.querySelector('#plus')
const btnSub = document.querySelector('#minus')
const btnMultiply = document.querySelector('#multiply')
const btnDevide = document.querySelector('#devide')
const btnModulo = document.querySelector('#modulo')
const btnSquareRoot = document.querySelector('#rootsq')
const btnSquare = document.querySelector('#square');
const btnOneX = document.querySelector('#one-x');
const btnDot = document.querySelector('#dot');
const btnPlusMinus = document.querySelector('#plus-minus')
const btnEqual = document.querySelector('#equal')
const btnDelete = document.querySelector('#delete')
const btnC = document.querySelector('#c')
const btnCE = document.querySelector('#ce')
const noItemLi = document.querySelector('.no-item-li')
let toggle = 0;
let operation = '';
let currentVal = ''
let prevValue;
let spacialOp = false;
let dotop = false;
let prevOp = '';
// History list
const historyList = document.querySelector('.history-list')
const historyContainer = document.querySelector('.history-container')
const historyBtn = document.querySelector('.history-btn')
let historyToggle = false;




// functions
const addNumber = (e) => {
    if (spacialOp === false) {
       if (currentVal == '0') {
        currentVal =  e.target.id
        screen.value = currentVal;
    }
    else
    {
        currentVal = currentVal + e.target.id
        screen.value = currentVal;
        } 
        
    } else {
        currentVal =  e.target.id
        screen.value = currentVal;
        spacialOp = false;
        
}
    
    
}
const zeroPressed = () => {
     if ((currentVal !== '0' && currentVal !== '') || operation !== '') {
         currentVal = currentVal + '0'
         screen.value = currentVal;
        }
}
const operationPerform = (e) => {
   let twoOp =0;
    dotop = false;
    console.log(
        `
        before perform 
        current val = ${currentVal}
        prev val = ${prevValue}
        operation = ${operation}
       
        `
    );
    
    if (toggle === 0 && currentVal !== '') {
       
        prevValue = currentVal;
        screen.value = prevValue
        currentVal = ''
        toggle = 1;
        noItemLi.style.visibility = 'hidden'
    }
    else if (operation === 'plus' && currentVal !== '') {
        let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} + ${currentVal} = ${(+prevValue) + (+currentVal)} `));
        historyList.appendChild(node);

        prevValue = (+prevValue) + (+currentVal);
        screen.value = prevValue
        currentVal = ''; 
        toggle = 1;
        

        
    }
    else if (operation === 'minus' && currentVal !== '') {
        let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} - ${currentVal} = ${(+prevValue) - (+currentVal)} `));
        historyList.appendChild(node);

        prevValue = (+prevValue) - (+currentVal);
        screen.value = prevValue;
         currentVal = '';
         toggle = 1;
    }
    else if (operation === 'multiply' && currentVal !== '') {
        let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} x ${currentVal} = ${(+prevValue) * (+currentVal)} `));
        historyList.appendChild(node);

        prevValue = (+prevValue) * (+currentVal);
        screen.value = prevValue;
         currentVal = '';
         toggle = 1;
    }
    else if (operation === 'devide' && currentVal !== '') {
         let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} / ${currentVal} = ${(+prevValue) / (+currentVal)} `));
        historyList.appendChild(node);
        
        prevValue = (+prevValue) / (+currentVal);
        screen.value = prevValue;
         currentVal = '';
         toggle = 1;
    }
    else if (operation === 'modulo' && currentVal !== '') {
         let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} % ${currentVal} = ${(+prevValue) % (+currentVal)} `));
        historyList.appendChild(node);

        prevValue = (+prevValue) % (+currentVal);
        screen.value = prevValue;
         currentVal = '';
         toggle = 1;
    }
    
    if (prevValue == 'NaN' || prevValue == 'Infinity') {
        prevValue = 0;
        screen.value = 0;

    }

    if (e.target.id === 'equal') {
       operation = prevOp
    }
    else {
        operation = e.target.id;
        currentVal = ''
    }
    
    console.log(
        `
        after perform 
        current val = ${currentVal}
        prev val = ${prevValue}
          operation = ${operation}
          
        `
    );
}
const squareRootPerform = (e) => {
   prevValue = Math.sqrt(screen.value);
    screen.value = prevValue;
    currentVal =prevValue;
    operation = ""; 
    spacialOp = true
    dotop = false;
}
const squarePerform = (e) => {
    prevValue = (+currentVal) * (+currentVal);
    screen.value = prevValue;
    currentVal = prevValue;
    operation = ""; 
    prevOp = operation;
    spacialOp = true;
    dotop = false;
}
const oneXPerform = (e) => {
    prevValue = 1 / (+currentVal);
    screen.value = prevValue;
    currentVal = prevValue;
    operation = ""; 
    spacialOp = true;
    dotop = false;
}
const addDot = (e) => {
    if (dotop === false)
    {
        if (currentVal == '') {
        currentVal = '0' + '.';
        screen.value = currentVal
    }
    else {
        currentVal = currentVal + '.'
        screen.value = currentVal
    }
        dotop = true;
    }
}
const setPlusMinus = (e) => {
    console.log(currentVal);
    if (parseInt(screen.value) > 0) {
        currentVal = -Math.abs(currentVal)
        screen.value = -Math.abs(screen.value)
    }
    else {
          currentVal = Math.abs(currentVal)
        screen.value = Math.abs(screen.value)
    }
}
const handleDelete = (e) => {
    console.log("abc".slice(-1));
    currentVal = currentVal.substring(0, currentVal.length - 1);
    screen.value = currentVal
}
const handleC = (e) => {
    currentVal = "0"
    screen.value = '0'
    prevValue = ""
    toggle = 0
    operation = ''
    spacialOp = false;
    dotop = false;   
}
const handleCE = (e) => {
currentVal = "0"
    screen.value = '0'
}




// Eventlistners
for (const btn of digitBtn) {
    btn.addEventListener('click', addNumber);
}

btnZero.addEventListener('click', zeroPressed);
btnAdd.addEventListener('click', operationPerform); 
btnSub.addEventListener('click', operationPerform); 
btnMultiply.addEventListener('click', operationPerform);
btnDevide.addEventListener('click', operationPerform);
btnModulo.addEventListener('click', operationPerform);    
btnSquareRoot.addEventListener('click', squareRootPerform);    
btnSquare.addEventListener('click', squarePerform)
btnOneX.addEventListener('click', oneXPerform)
btnDot.addEventListener('click', addDot)
btnPlusMinus.addEventListener('click', setPlusMinus)    
btnEqual.addEventListener('click', operationPerform)
btnDelete.addEventListener('click', handleDelete)
btnC.addEventListener('click', handleC)
btnCE.addEventListener('click', handleCE)
historyBtn.addEventListener('click', () => {
    historyContainer.style.transition = 'height 2s ease-in'
    if (historyToggle === false) {
         historyContainer.style.visibility = 'visible'
        historyContainer.style.height = '450px';
       
        historyToggle = true;
    }
    else {
        historyContainer.style.height = '0px';
        historyToggle = false;
        
    }
    

})




document.addEventListener('keydown', (event) => {
    if (event.key > 0 && event.key < 10) {
        screen.value = screen.value + event.key
    } 
    if (event.key == 0) {
        zeroPressed();
    }
});


 