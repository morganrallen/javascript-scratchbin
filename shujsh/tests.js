var bender = new User('bender');
var fry = new User('fry');

test("Method mixin", function()
{
    var methods = [
        'getName',
        'getPrev',
        'getNext',
        'getId',
        'subscribe',
        'fire'
    ];

    for(var i = 0, m; i < methods.length; i++) {
        m = methods[i];
        equals(bender[m], User.prototype[m], "Method: " + m);
    }
});

test("Curry tests", function()
{
    function sum(a, b)
    {
        return a + b;
    }

    var plusThree = Shujsh.util.curry(sum, 3);

    equals(plusThree(3), 6, '3 + 3 = 6');
});

test("User methods", function()
{
    equals(bender.getName(), "bender", "Name");
});

test("Iterable methods", function()
{
    equals(fry.getPrev(), bender, "Previous member");
    equals(bender.getNext(), fry, "Next member");
    equals(fry.getId(), 1, "Get ID");
    equals(fry.subscribe('test', function test()
    {
    }), 1, 'dummy');
});
