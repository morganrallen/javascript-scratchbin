Shujsh.Iterable = (function()
{
    var $first,
        $last,
        $length = 0,
        $map = [],
        $members = {};
    
    function Iterable()
    {
        var $$id = Shujsh.classUtils.addToMap($map, this);
        $length++;
        $members[$$id] = this;
    };

    Iterable.prototype = {
        getId: function() { return Shujsh.classUtils.mapId($members, this); },
        getNext: function()
        {
            return $members[Shujsh.classUtils.mapId($members, this) + 1] || undefined
        },
        getPrev: function()
        {
            return $members[Shujsh.classUtils.mapId($members, this) - 1] || undefined;
        }
    }


    Iterable.each = function(fn)
    {
        for(var i in $members) {
            fn.call($members[i]);
        }
    }

    Iterable.getByProp = function(prop, val)
    {
        var r = [];
        for(var i in $members) {
            if(($members[i][prop] || Number($members[i][prop]) == $members[i][prop]) || (val && $members[i][prop] == val)) {
                r.push($members[i]);
            }
        }
        return r;
    }

    return Iterable;
})();
