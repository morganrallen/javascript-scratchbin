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
                $eventFunctions[fname] = {
                    fn: fn,
                    members: []
                }
            }
            $eventFunctions[fname].members.push(this);

            if(!$eventOwners[this.id]) {
                $eventOwners[this.id] = {
                    owner: this,
                    fns: []
                }
            }
            $eventOwners[this.id].fns.push(fn);

            if(!$eventMap[e]) {
                $eventMap[e] = [];
            }
            $eventMap[e].push({
                fn: fn,
                owner: this,
                scope: scope
            });
        },

        fire: function(e, data)
        {
            var fns = $eventOwners[this.id].fns, i;

            for(i = 0; i < fns.length; i++) {
                fns[i].apply(this, data);
            }
        }
    };

    Eventful.fire = function(e, data)
    {
        var event, i;

        for(i = 0; i < $eventMap[e].length; i++) {
            event = $eventMap[e][i];
            event.fn.apply(event.scope || null, data);
        }
    }

    return Eventful;
})();
