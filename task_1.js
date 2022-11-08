function sum(a,b)
{
    return a+b;
}
module.exports.sum=sum;

function subtract(a,b)
{
    return a-b;
}
module.exports.subtract=subtract;

function multiply(a,b)
{
    return a*b;
}
module.exports.multiply=multiply;
function division(a,b)
{
    if(b==0)
    {
        return false;
    }
    return a/b;
}


module.exports.division=division;
