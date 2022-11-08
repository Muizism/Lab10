function pow(a,b)
{
    var p=Math.pow(a,b);
    return p;
}

module.exports.pow=pow;

function round_fun(a)
{
    var R = Math.round(a);

    return R;
}

module.exports.round_fun=round_fun;

function ceiling(a)
{
    var C = Math.ceil(a);
    return C;
}
module.exports.ceiling=ceiling;