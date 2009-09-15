// usage
// var class = new CatchAll(baseClass, function(variable, value) {
//  doSomething(variable, value);
// }
var CatchAll = (function()
{
    var timer = false,
        timeout = 60,
        observedObjects = [];

    function runPropCheck()
    {
        for(var i = 0; i < observedObjects.length; i++) {
            observedObjects[i].check();
        };
    };

    function ObservableObject(obj, fnCatchAll, scope)
    {
        this._props = {};
        for(var i in obj) {
            this._props[i] = obj[i];
        };

        this._obj = obj;
        this._fnCatchAll = fnCatchAll;
        this._scope = scope;
    }

    ObservableObject.prototype.check = function()
    {
        for(var i in this._obj) {
            if(this._props[i] != this._obj[i] || !this._props[i])
            {
                if(this._fnCatchAll.call(this._scope || this, i, this._obj[i]) !== false) {
                    this._props[i] = this._obj[i];
                } else {
                    this._obj[i] = this._props[i];
                }
            };
        };

    };

    return function(baseObj, fnCatchAll)
    {
        function ca()
        {
            if(!timer) {
                timer = setInterval(runPropCheck, timeout);
            };

            observedObjects.push(new ObservableObject(this, fnCatchAll));

            baseObj.apply(this, arguments);
        };

        ca.prototype = baseObj.prototype;
        return ca;
    };
})();
