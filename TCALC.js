let expression = ''; 

function appendToDisplay(value) {
  
  if (value === '×') {
    value = '*'; 
  }
  if (value === '÷') {
    value = '/'; 
  }
  if (value === 'π') {
    value = 'Math.PI';
  }
  if (value === 'sin(') {
    value = 'Math.sin('; 
  }
  if (value === 'cos(') {
    value = 'Math.cos('; 
  }
  if (value === 'tan(') {
    value = 'Math.tan('; 
  }
  if (value === 'log(') {
    value = 'Math.log10(';
  }

  expression += value; 
  document.getElementById('display').value = expression; 
}


function clearDisplay() {
  expression = ''; 
  document.getElementById('display').value = 0; 
}


function deleteLast() {
  expression = expression.slice(0, -1); 
  document.getElementById('display').value = expression || 0; 
}


function calculateResult() {
  try {
   
    expression = expression.replace(/Math\.(sin|cos|tan)\(([^)]+)\)/g, (match, func, arg) => {
     
      return `Math.${func}(${arg} * Math.PI / 180)`;
    });


    const result = eval(expression);
    document.getElementById('display').value = result; 
    expression = result;
  } catch (error) {
    document.getElementById('display').value = 'Error'; 
    expression = '';1
  }
}
