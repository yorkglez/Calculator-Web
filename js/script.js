console.log('HERE');
//*Const declaration
const keys = document.getElementById('keys');
const screen = document.getElementById('input-screen');


const calculator = () =>
{
    if(!keys) return

    keys.addEventListener('click', event =>
    {
        const target = event.target;
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
        }
        //*Check if the ket is a math
        if(dataset.math)
        {
            console.log('math');
        }
    });
}

const showScreen = number =>
{
    screen.value += number;
}

const clearScreen = () =>
{
    screen.value = '';
}

calculator();