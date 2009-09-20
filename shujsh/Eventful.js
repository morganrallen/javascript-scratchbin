Shujsh.Eventful = (function()
{
    var $eventFunctions = {},
        $eventOwners = {},
        $eventMap = {};

    function functionName(fn)
    {
        return String(fn).replace(/\n/, '').replace(/function (\w+).+/, '$1');
    }

    function Eventful()
    {
    }

    Eventful.prototype = {
        subscribe: function(e, fn, scope)
        {
            var fname = functionName(fn);
            if(!$eventFunctions[fname]) {
                $eventFunctions[fname] = fn;
            }

        },
        fire: function(e, data)
        {
        }
    };

    Eventful.fire = function()
    {
    }

    return Eventful;
})();
