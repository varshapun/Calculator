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
let currentVal = '';
let prevValue = '';
let spacialOp = false;
let currentOperation = '';
let operationCount = 0;
let dotToggle = false;
let prevOp = '';
let toggle = 0;
// History list
const historyList = document.querySelector('.history-list')
const historyContainer = document.querySelector('.history-container')
const historyBtn = document.querySelector('.history-btn')
let historyToggle = false;



// functions
const addNumber = (e) => {
     btnAdd.disabled = false;
    btnSub.disabled = false;
    btnMultiply.disabled = false;
    btnDevide.disabled = false;
    btnModulo.disabled = false;
    btnOneX.disabled = false;
    btnSquare.disabled = false;
    btnSquareRoot.disabled = false;
    btnEqual.disabled = false;
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
     if ((currentVal !== '0' && currentVal !== '') || currentOperation !== '') {
         currentVal = currentVal + '0'
         screen.value = currentVal;
        }
}
const operationPerform = (e) => {
    spacialOp = true;
    dotToggle = false;
    console.log(
        `
        before perform 
        current val = ${currentVal}
        prev val = ${prevValue}
        currentOperation = ${currentOperation}
        prevOp = ${prevOp}
        toggle = ${toggle}
        e.target.id = ${e.target.id}
        `
    );
    if ((toggle === 0 && currentVal !== '')               ) {
       
        prevValue = currentVal;
        screen.value = prevValue
        currentVal = ''
        toggle = 1;
        noItemLi.style.visibility = 'hidden'
    }
    else if (currentOperation === 'plus' && currentVal !== '') {
        let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} + ${currentVal} = ${(+prevValue) + (+currentVal)} `));
        historyList.appendChild(node);
        prevOp = 'plus'
        prevValue = (+prevValue) + (+currentVal);
        screen.value = prevValue
        currentVal = ''; 
        toggle = 1;
    }
    else if (currentOperation === 'minus' && currentVal !== '') {
        let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} - ${currentVal} = ${(+prevValue) - (+currentVal)} `));
        historyList.appendChild(node);
         prevOp = 'minus'
        prevValue = (+prevValue) - (+currentVal);
        screen.value = prevValue;
         currentVal = '';
         toggle = 1;
    }
    else if (currentOperation === 'multiply' && currentVal !== '') {
        let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} x ${currentVal} = ${(+prevValue) * (+currentVal)} `));
        historyList.appendChild(node);
         prevOp = 'multiply'
        prevValue = (+prevValue) * (+currentVal);
        screen.value = prevValue;
         currentVal = '';
         toggle = 1;
    }
    else if (currentOperation === 'devide' && currentVal !== '') {
         let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} / ${currentVal} = ${(+prevValue) / (+currentVal)} `));
        historyList.appendChild(node);
         prevOp = 'devide'
        prevValue = (+prevValue) / (+currentVal);
        screen.value = prevValue;
         currentVal = '';
         toggle = 1;
    }
    else if (currentOperation === 'modulo' && currentVal !== '') {
         let node = document.createElement('li');
        node.appendChild(document.createTextNode(` ${prevValue} % ${currentVal} = ${(+prevValue) % (+currentVal)} `));
        historyList.appendChild(node);
         prevOp = 'modulo'
        prevValue = (+prevValue) % (+currentVal);
        screen.value = prevValue;
         currentVal = '';
         toggle = 1;
    }
    
    if (prevValue == 'NaN' || prevValue == 'Infinity') {
        prevValue = 0;
        screen.value = 0;

    }

        currentOperation = e.target.id;
    
       
    operationCount++;
    console.log(
        `
        after perform 
        current val = ${currentVal}
        prev val = ${prevValue}
          currentOperation = ${currentOperation}
           prevOp = ${prevOp}
        toggle = ${toggle}
        e.target.id = ${e.target.id}
        `
    );
}
const performEqual = (e) => {
    operationPerform(e);
    currentVal = '0'
    
    currentOperation = ''  
    spacialOp = true;
}
const performCE = (e) => {
    currentVal = ''
    screen.value = '0'
}
const performC = (e) => {
    currentVal = ''
    screen.value = '0'
    prevValue = ''
    toggle = 0
    currentOperation= '1'
    dotToggle = false;
    spacialOp = false;
    btnAdd.disabled = true;
    btnSub.disabled = true;
    btnMultiply.disabled = true;
    btnDevide.disabled = true;
    btnModulo.disabled = true;
    btnOneX.disabled = true;
    btnSquare.disabled = true;
    btnSquareRoot.disabled = true;
    btnEqual.disabled = true;
   
}
const squareRootPerform = (e) => {
     console.log(
        `
        before perform 
        current val = ${currentVal}
        prev val = ${prevValue}
        operation = ${operation}
        prevOp = ${prevOp}
        toggle = ${toggle}
        e.target.id = ${e.target.id}
        `
    );
   prevValue = Math.sqrt(screen.value);
    screen.value = prevValue;
    currentVal =prevValue;
    operation = ""; 
    spacialOp = true
    dotToggle = false;
    console.log(
        `
        after perform 
        current val = ${currentVal}
        prev val = ${prevValue}
          operation = ${operation}
           prevOp = ${prevOp}
        toggle = ${toggle}
        e.target.id = ${e.target.id}
        `
    );
}
const squarePerform = (e) => {
     console.log(
        `
        before perform 
        current val = ${currentVal}
        prev val = ${prevValue}
        operation = ${operation}
        prevOp = ${prevOp}
        toggle = ${toggle}
        e.target.id = ${e.target.id}
        `
    );
    prevValue = (+currentVal) * (+currentVal);
    screen.value = prevValue;
    currentVal = prevValue;
    operation = ""; 
    prevOp = operation;
    spacialOp = true;
    dotToggle = false;
    console.log(
        `
        after perform 
        current val = ${currentVal}
        prev val = ${prevValue}
          operation = ${operation}
           prevOp = ${prevOp}
        toggle = ${toggle}
        e.target.id = ${e.target.id}
        `
    );
}

const oneXPerform = (e) => {
     console.log(
        `
        before perform 
        current val = ${currentVal}
        prev val = ${prevValue}
        operation = ${operation}
        prevOp = ${prevOp}
        toggle = ${toggle}
        e.target.id = ${e.target.id}
        `
    );
    prevValue = 1 / (+currentVal);
    screen.value = prevValue;
    currentVal = prevValue;
    operation = ""; 
    spacialOp = true;
    dotToggle = false;
    console.log(
        `
        after perform 
        current val = ${currentVal}
        prev val = ${prevValue}
          operation = ${operation}
           prevOp = ${prevOp}
        toggle = ${toggle}
        e.target.id = ${e.target.id}
        `
    );
}
const addDot = (e) => {
    if (dotToggle === false)
    {
        if (currentVal == '') {
        currentVal = '0' + '.';
        screen.value = currentVal
    }
    else {
        currentVal = currentVal + '.'
        screen.value = currentVal
    }
        dotToggle = true;
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




// Event Listeners
for (const btn of digitBtn) {
    btn.addEventListener('click', addNumber);
}
btnZero.addEventListener('click', zeroPressed);
btnAdd.addEventListener('click', operationPerform);
btnSub.addEventListener('click', operationPerform);
btnAdd.addEventListener('click', operationPerform); 
btnSub.addEventListener('click', operationPerform); 
btnMultiply.addEventListener('click', operationPerform);
btnDevide.addEventListener('click', operationPerform);
btnModulo.addEventListener('click', operationPerform); 
btnEqual.addEventListener('click', performEqual);
btnCE.addEventListener('click', performCE)
btnC.addEventListener('click', performC)
 
btnSquareRoot.addEventListener('click', squareRootPerform);    
btnSquare.addEventListener('click', squarePerform)
btnOneX.addEventListener('click', oneXPerform)
btnDot.addEventListener('click', addDot)
btnPlusMinus.addEventListener('click', setPlusMinus)    
btnEqual.addEventListener('click', operationPerform)
btnDelete.addEventListener('click', handleDelete)




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
});

document.addEventListener('keydown', (event) => {
    if (event.key > 0 && event.key < 10) {
      if (spacialOp === false) {
        if (currentVal == '0') {
                 currentVal =  event.key
                 screen.value = currentVal;
        }
        else
        {
            currentVal = currentVal + event.key
            screen.value = currentVal;
        } 
        
    }else {
        currentVal =  event.key
        screen.value = currentVal;
        spacialOp = false;
        
    }
  } 
  if (event.key == 0) {
        zeroPressed();
  }
});








// let toggle = 0;
// let operation = '';
// let currentVal = ''
// let prevValue;
// let spacialOp = false;
// let dotToggle = false;
// let prevOp = '';
// // History list
// const historyList = document.querySelector('.history-list')
// const historyContainer = document.querySelector('.history-container')
// const historyBtn = document.querySelector('.history-btn')
// let historyToggle = false;




// 
//
// 
// const handleC = (e) => {
//      console.log(
//         `
//         before perform 
//         current val = ${currentVal}
//         prev val = ${prevValue}
//         operation = ${operation}
//         prevOp = ${prevOp}
//         toggle = ${toggle}
//         e.target.id = ${e.target.id}
//         `
//     );
//     currentVal = ""
//     screen.value = '0'
//     prevValue = ""
    
   
//     operation = ''
//     spacialOp = false;
//     dotToggle = false;   
//     console.log(
//         `
//         after perform 
//         current val = ${currentVal}
//         prev val = ${prevValue}
//           operation = ${operation}
//            prevOp = ${prevOp}
//         toggle = ${toggle}
//         e.target.id = ${e.target.id}
//         `
//     );
// }
// const handleCE = (e) => {
//      console.log(
//         `
//         before perform 
//         current val = ${currentVal}
//         prev val = ${prevValue}
//         operation = ${operation}
//         prevOp = ${prevOp}
//         toggle = ${toggle}
//         e.target.id = ${e.target.id}
//         `
//     );
// currentVal = "0"
//     screen.value = '0'
    
//     console.log(
//         `
//         after perform 
//         current val = ${currentVal}
//         prev val = ${prevValue}
//           operation = ${operation}
//            prevOp = ${prevOp}
//         toggle = ${toggle}
//         e.target.id = ${e.target.id}
//         `
//     );
// }




// // Eventlistners
// for (const btn of digitBtn) {
//     btn.addEventListener('click', addNumber);
// }

// btnZero.addEventListener('click', zeroPressed);
// btnAdd.addEventListener('click', operationPerform); 
// btnSub.addEventListener('click', operationPerform); 
// btnMultiply.addEventListener('click', operationPerform);
// btnDevide.addEventListener('click', operationPerform);
// btnModulo.addEventListener('click', operationPerform);    
// btnSquareRoot.addEventListener('click', squareRootPerform);    
// btnSquare.addEventListener('click', squarePerform)
// btnOneX.addEventListener('click', oneXPerform)
// btnDot.addEventListener('click', addDot)
// btnPlusMinus.addEventListener('click', setPlusMinus)    
// btnEqual.addEventListener('click', operationPerform)
// btnDelete.addEventListener('click', handleDelete)
// btnC.addEventListener('click', handleC)
// btnCE.addEventListener('click', handleCE)
//




// 


 