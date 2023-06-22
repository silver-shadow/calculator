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