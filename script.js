function add(a,b)
{
    return (a+b);
}

function subtract(a,b)
{
    return (a-b);
}

function multiply(a,b)
{
    return (a*b);
}

function divide(a,b)
{
    return (a/b);
}


function operate(op,n1,n2)
{
    if(op === "+")
    {
        add(Number(n1),Number(n2));
    }
    else if(op === "-")
    {
        subtract(Number(n1),Number(n2));
    }
    else if(op === "*")
    {
        multiply(Number(n1),Number(n2));
    }
    else if(op === "/")
    {
        divide(Number(n1),Number(n2));
    }
}
function dispNum(num)
{
    const display = document.querySelector(".display");
    if(!isNaN(num))
    {
        display.textContent = display.textContent + num;
    }
    return display;
}
function pressKey()
{
    const screenKeys = document.querySelectorAll("button");
    screenKeys.forEach(key => {
        key.addEventListener("mousedown",() =>{
            dispNum(key.textContent);
        })
    });
    document.addEventListener('keydown', (e) => {
        //console.log('Key pressed:', e.key, typeof(e.key));
        dispNum(e.key);
      });
}

pressKey()