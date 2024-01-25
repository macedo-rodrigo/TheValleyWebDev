document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el elemento con la clase 'calculator__result' y lo asigna a la variable 'screen'.
    const screen = document.querySelector('.calculator__result');
    // Inicializa las variables para almacenar el operando actual, el operando anterior y la operación actual.
    let currentOperand = '';
    let previousOperand = '';
    let operation = null;
  
    // Función para actualizar el contenido del elemento de pantalla con el operando actual.
    function updateScreen() {
      screen.textContent = currentOperand;
    };
  
    // Función para agregar un número al operando actual, evitando agregar puntos duplicados.
    function appendNumber(number) {
      if (number === '.' && currentOperand.includes('.')) {
        return;
      };
  
      currentOperand = currentOperand.toString() + number.toString();
      updateScreen();
    };
  
    // Función para seleccionar una operación y realizar cálculos si ya hay un operando anterior.
    function chooseOperation(operator) {
      if (currentOperand === '') {
        return;
      };
      if (previousOperand !== '') {
        compute();
      }
      operation = operator;
      previousOperand = currentOperand;
      currentOperand = '';
    };
  
    // Función para realizar cálculos basados en la operación actual.
    function compute() {
      let computation;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);
  
      // Objeto que contiene funciones para realizar diferentes operaciones.
      const operates = {
        '+':  () => {computation = prev + current},  // Suma
        '-': () => {computation = prev - current},  // Resta
        '*': () => {computation = prev * current},  // Multiplicación
        '/': () => {computation = prev / current},  // División
      }
  
      operates[operation]();  // Realiza la operación actual
      clear(computation);  // Limpia y actualiza la pantalla
    };
  
    // Función para limpiar y actualizar la pantalla.
    function clear(computation) {
      currentOperand = computation || '';
      previousOperand = '';
      operation = null;
      updateScreen();
    };
  
    // Selecciona todos los elementos con la clase 'button'.
    const buttons = document.querySelectorAll('.button');
    // Agrega un evento de clic a cada botón.
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        // Verifica el tipo de botón y realiza la acción correspondiente.
        if (button.classList.contains('button--operand')) {
          appendNumber(button.value);
        } else if (button.classList.contains('button--operator')) {
          chooseOperation(button.value);
        } else if (button.classList.contains('button--equal')) {
          compute();
        } else if (button.classList.contains('button--clear')) {
          clear();
        }
      });
    });
  });
   