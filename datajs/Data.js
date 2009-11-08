/*
    Data.js is an experiment in shared resource data tracking.
    What is that? The idea is that all data is held in one place,
    Common class types are aware of one another, sibling relations
    are auto-magicly.
    And here we go.
    

    $varName is shared between common class types
    $$varName is shared between everything.
*/

var Data = (function()
{
    var $$cid = 0,
        $$classes = {},
        $$constructors = {},
        $$data = {},
        $$guid = 0,
        $$mixins =
        {
            get: function(dataPoint, v)
            {
                return dataPoint[v];
            },
            set: function(dataPoint, v, vv)
            {
                dataPoint[v] = vv;
            }
        };

    return {
        /*
            Data.new()
            Returns new class constructor
        */
        new: function()
        {
            var $family = {},
                $index = 0,
                f = $$constructors[$$cid] = function(data)
                {
                    $$data[$$guid] =
                    {
                        instance: this,
                        glob: {}
                    };

                    for(var i in $$mixins) {
                        this[i] = curry($$mixins[i], $$data[$$guid].glob);
                    }

                    $family[$index] = this;

                    if(!$$classes[$$cid]) {
                        $$classes[$$cid] = [ $$guid ];
                    } else {
                        $$cid = $$classes[$$cid].push($$guid);
                    }
                    
                    if($index !== 0) this.prevSibling = $family[$index - 1];
                    if(this.prevSibling) this.prevSibling.nextSibling = this;

                    if(data) {
                        for(var i in data) {
                            this.set(i, data[i]);
                        }
                    }

                    $index++;
                    $$guid++;
                };

            /*
                @v [ string, function ]
                @vv [ string ] optional, if v is a string and this is set, query is v === vv
            */
            f.query = curry(function(c, v, vv)
            {
                var guid, r = [];

                if(typeof v === "function") {
                    for(guid in $$classes[c]) {
                        if(v.apply($$data[guid].glob) !== false) {
                            r.push($$data[guid].instance);
                        }
                    }
                } else {
                    for(guid in $$classes[c]) {
                        if($$data[guid].glob[v] && (!vv || $$data[guid].glob[v] === vv)) {
                            r.push($$data[guid].instance);
                        }
                    }
                }

                return r;
            }, $$cid);

            return f;
        }
    };
})();
