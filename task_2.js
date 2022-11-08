function check_fun(x,z)
{
    var sum = 0;
    for (var x = 0; x < z; x++)
    {
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
    }
return sum;
}

module.exports.check_fun=check_fun;