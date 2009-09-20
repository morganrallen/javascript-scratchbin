var Location = (function()
{
    // comminty scope
    
    var f = function(name)
    {
        this.name = name;
    }

    f.prototype = {
        getName: function() { return this.name; }
    }

    return f;
})();

Location = Shujsh.util.extend(Location, Shujsh.Iterable, Shujsh.Eventful);
