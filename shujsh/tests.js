var cartoonPlanet = new Location('Cartoon Planet');
var bender = new User('bender');
var fry = new User('fry');

test("Basic tests", function()
{
    equals(cartoonPlanet.id, 0, "cartoonPlanet: ");
    equals(bender.id, 0, "bender: ");
    equals(fry.id, 1, "fry: ");
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

test("Eventful tests", function()
{
    var x = 0;

    bender.subscribe('test', function()
    {
        x++;
    });

    bender.fire('test');
    equals(x, 1, "Event fired");

    User.fire('test');
    equals(x, 2, "Global event fired");
});
