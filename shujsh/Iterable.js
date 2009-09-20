Shujsh.Iterable = function()
{
    var $first,
        $last,
        $length = 0,
        $map = [],
        $members = {};
    
    function Iterable()
    {
        this.id = $length++;
        $members[this.id] = this;
    };

    Iterable.prototype = {
        getId: function() { return this.id; },
        getNext: function()
        {
            return $members[this.id + 1] || undefined
        },
        getPrev: function()
        {
            return $members[this.id - 1] || undefined;
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
};
