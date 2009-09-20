var User = (function()
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

User = Shujsh.util.extend(User, Shujsh.Iterable, Shujsh.Eventful);
