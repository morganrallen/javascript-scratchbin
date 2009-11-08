function curry(b, f)
{
    return function()
    {
        return b.apply(this, [f].concat(Array.prototype.splice.call(arguments,0)));
    }
}
