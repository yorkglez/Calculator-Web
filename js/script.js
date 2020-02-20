window.onload = function ()
{
    console.log('HERE');
    //*Const declaration
    const keys = document.getElementById('keys');
    const screen = document.getElementById('input-screen');

    //*Variables declaration
    let isOperation = false;
    let memoryNumber = 0;
    let operationType;

    const calculatorInit = () =>
    {
        //*
        if(!keys) return

        //*Key click event
        keys.addEventListener('click', event =>
        {
            //*Get key target
            const target = event.target;
            //*Get key dataset value
            const dataset = target.dataset;

            //*Check if the key is a number
            if(dataset.number)
            {
                console.log('number: ' + dataset.number);
                showScreen(dataset.number);
            }

            //*Check if the key is a operation
            if(dataset.operation)
            {
                console.log('operation: ' + dataset.operation);
                if(dataset.operation == 'clear')
                {
                    clearScreen();
                }
                else 
                {
                    operation();
                }           
            }

            //*Check if the ket is a math
            if(dataset.math)
            {
                console.log('math: ' + dataset.math);
                getOperation(target,dataset.math);
            }
        });
    }

    /**
     **This function show the numbers and math operations in the screen 
    * @param {*} number 
    */
    const showScreen = number =>
    {
        //*Validate if the key is operation or number
        if(isOperation)
        {
            screen.value = number;
        }
        else 
        {
            screen.value += number;
        }

        //*Clear operation
        isOperation = false;
    }

    /**
     **This function get the operation and show in screen the operation
    * @param element:  
    * @param operation: calculator operation type 
    */
    const getOperation = (element, operation) =>
    {
        console.log('getOperation');
    
        isOperation = true;

        //*Get operation and actual number on screen for save 
        memoryNumber = Number(screen.value);
        operationType = operation;

        //*Set new value
        screen.value = element.textContent;
    }

    /**
     **This function clear the screen 
    */
    const clearScreen = () =>
    {
        screen.value = '';
    }

    /**
     ** This function get the operation and show in screen the result
    * @param operation: operation type
    */
    const operation = (operation) =>
    {
        console.log('In operation');
        const getResult = (memoryNumber, operationType) =>
        {
            const number2 = Number(screen.value);
            console.log('first: ' + memoryNumber);
            console.log('secound: ' + number2);
            switch (operationType)
            {
                case 'add':
                    screen.value = memoryNumber + number2;
                    break;
                case 'minus':
                    screen.value = memoryNumber / number2;
                    break;
                case 'multiply':
                    screen.value = memoryNumber * number2;
                    break;
                case 'divide':
                    screen.value = memoryNumber / number2;
                    break;
                default:
                    break;
            }
        }

        //*Validate operation type
        if(operation === 'clear')
        {
            screen.textContent = '0';
        }
        else 
        {
            console.log('In result: ' + operationType);
            getResult(memoryNumber,operationType);
        }
    }

    calculatorInit();
}



