Shujsh = {};

Shujsh.util = {
    // @baseFunction
    // @fillin, @fillin, ...
    curry: function()
    {
        var baseFunction = arguments[0],
            args = Array.prototype.splice.call(arguments, 1);

        return function()
        {
            return baseFunction.apply(this, args.concat(Array.prototype.splice.call(arguments,0)));
        }
    },

    generateGUID: function()
    {
        return (new Date()).valueOf() * Math.random();
    },

    extend: function()
    {
        var args = arguments;

        function mixin(base, mixins)
        {
            for(var i in mixins.prototype) {
                base.prototype[i] = mixins.prototype[i];
            }
            
            for(var i in mixins) {
                if(i != "prototype") {
                    base[i] = mixins[i];
                }
            }
        }

        var f = (function()
        {
            var $constructors = args;

            return function()
            {
                for(var i = 0; i < $constructors.length; i++)
                {
                    $constructors[i].apply(this, arguments);
                }
            }
        })();

        for(var i = 0; i < arguments.length; i++) {
            mixin(f, arguments[i]);
        }

        return f;
    }
};

Shujsh.classUtils = {
    /**
    * Mixes classes together
    * @class, ...
    */
    generate: function()
    {
        var args = arguments;

        function mixin(base, mixins)
        {
            for(var i in mixins.prototype) {
                base.prototype[i] = mixins.prototype[i];
            }
            
            for(var i in mixins) {
                if(i != "prototype") {
                    base[i] = mixins[i];
                }
            }
        }

        var f = (function()
        {
            var $constructors = args;

            return function()
            {
                for(var i = 0; i < $constructors.length; i++)
                {
                    $constructors[i].apply(this, arguments);
                }
            }
        })();

        for(var i = 0; i < arguments.length; i++) {
            mixin(f, arguments[i]);
        }

        return f;
    }
};
