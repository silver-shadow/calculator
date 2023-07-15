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

function roundResult(result) {
    return Math.round((result + Number.EPSILON) * 100) / 100;
}

function operate(op,n1,n2)
{   
    if(op === "+")
    {
        //console.log(n1);
        return roundResult(add(Number(n1), Number(n2)));
    }
    else if(op === "-")
    {
        return roundResult(subtract(Number(n1),Number(n2)));
    }
    else if(op === "*")
    {
        return roundResult(multiply(Number(n1),Number(n2)));
    }
    else if(op === "/")
    {
        return roundResult(divide(Number(n1),Number(n2)));
    }
}

let n1 = null,n2 = null,op,opCheck=false,equalsPressed=false,decPressed=false;

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
                if(op === '/' && n1 === '0' )
                {
                    display.textContent = "not possible69";
                }
                else
                {
                    console.log(n1,"is n1");
                    n2 = operate(op,n2,n1);
                    display.textContent = n2;
                    opCheck = true;
                    equalsPressed = false;
                }
            }
            else
            {
                console.log("in else");
                //n2 = display.textContent;
                if(!equalsPressed)
                {
                    console.log("in if equals pressed");
                    n1 = display.textContent;
                    if(op === '/' && n1 === '0' )
                    {
                        display.textContent = "not possible5";
                    }
                    else
                    {
                        n2 = operate(op,n2,n1);
                        display.textContent = n2;
                    }
                    
                }
                else
                {
                    console.log("in else equals pressed");
                    n2 = display.textContent;
                }
                opCheck = true;
                // n2 = operate(op, n2, n1); 
                // display.textContent = n2;
            }
            op = key;
            decPressed = false;
        }
        else if(key === "." && decPressed === false)
        {
            display.textContent = display.textContent + key;
            decPressed = true;
        }
        else if(key === "AC")
        {
            display.textContent = "0";
            n1 = null,n2 = null,op="",opCheck=false,equalsPressed=false,decPressed=false;
        }
        else if(key === "DEL")
        {
            display.textContent = display.textContent.slice(0,-1);
        }
        else if(key === "=")
        {
            equalsPressed = true;
            console.log("pressed equals");
            if (n1 !== null && n2 !== null) {
                n1 = display.textContent;
                if(op === '/' && n1 === '0' )
                {
                    display.textContent = "not possible1";
                }
                else
                {
                    n2 = operate(op, n2, n1);
                    display.textContent = n2;
                    n1 = null;
                    opCheck = true;
                }
            }
            else
            {
                n1 = display.textContent;
                if(op === '/' && n1 === '0' )
                {
                    display.textContent = "not possible2";
                }
                else
                {
                    n2 = operate(op,n2,n1);
                    display.textContent = n2;
                    //n1 = null;
                    opCheck = true;
                } 
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
        if(display.textContent.length>9)
        {
            display.textContent=display.textContent.slice(0,9);
        }
        display.textContent = display.textContent + key;
        console.log(display.textContent.length);
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