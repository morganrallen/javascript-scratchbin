jQuery.fn.stabs = (function()
{
    var $body,
        $this,
        config;

    function createCallbackHandler(cb)
    {
        if(typeof cb !== "function") {
            throw new Error("Callback must be defined for createCallbackHandler");
        }

        function handler(e)
        {
            var result = cb.call(this, e);
            if(result !== false)
            {
                loadTab(result);
            }
        }

        return handler;
    };

    function loadTab(data)
    {
        $body.html(data);
    }

    var f = function(c)
    {
        $this = $(this);
        $body = $('#' + c.body);
        config = c;

        $this
            .addClass('stabs-ul')
            .click(createCallbackHandler(config.click));

        $body
            .addClass('stabs-body');
    }

    return f;
})();
