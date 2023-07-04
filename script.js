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
        //console.log(n1);
        return add(Number(n1),Number(n2));
    }
    else if(op === "-")
    {
        return subtract(Number(n1),Number(n2));
    }
    else if(op === "*")
    {
        return multiply(Number(n1),Number(n2));
    }
    else if(op === "/")
    {
        return divide(Number(n1),Number(n2));
    }
}

let n1 = null,n2 = null,op,opCheck=false,equalsPressed=false;

function displayContent(key)
{
    const display = document.querySelector(".display");
    if(isNaN(key))
    {
        if(key==='+' || key==='-' || key==='/' || key==='*')
        {
            if(n2 === null)
            {
                console.log("in if");
                n2 = display.textContent;
                console.log(n2,"is n2");
                opCheck = true;
            }
            else if(n1 === null) 
            {
                console.log("in elseif");
                if(!equalsPressed)
                {
                    n1 = display.textContent;
                }
                console.log(n1,"is n1");
                n2 = operate(op,n2,n1);
                display.textContent = n2;
                opCheck = true;
                equalsPressed = false;
            }
            else
            {
                console.log("in else");
                //n2 = display.textContent;
                if(!equalsPressed)
                {
                    n1 = display.textContent;
                    n2 = operate(op,n2,n1);
                    display.textContent = n2;
                }
                opCheck = true;
                // n2 = operate(op, n2, n1); 
                // display.textContent = n2;
            }
            op = key;
        }
        else if(key === "=")
        {
            equalsPressed = true;
            console.log("pressed equals");
            if (n1 !== null && n2 !== null) {
                n1 = display.textContent;
                n2 = operate(op, n2, n1);
                display.textContent = n2;
                n1 = null;
                opCheck = true;
            }
            else
            {
                n1 = display.textContent;
                n2 = operate(op,n2,n1);
                display.textContent = n2;
                opCheck = true;
            }
        }
    }
    else
    {
        //console.log(display.textContent);
        if(display.textContent==='0' || opCheck === true)
        {
            display.textContent='';
            //console.log(display.textContent);
            opCheck=false;
        }
        display.textContent = display.textContent + key;
    }
}
function pressKey()
{
    const screenKeys = document.querySelectorAll("button");
    screenKeys.forEach(key => {
        key.addEventListener("mousedown",() =>{
            displayContent(key.textContent);
        })
    });
    document.addEventListener('keyup', (e) => {
        //console.log('Key pressed:', e.key, typeof(e.key));
        displayContent(e.key);
      });
}

pressKey()