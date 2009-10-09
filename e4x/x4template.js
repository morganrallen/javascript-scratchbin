/*
* @author Morgan 'ARR!' Allen <morganrallen@gmail.com>
* @description Ridiculously simple E4X templates
* @usage X4Tpl(String template, Object/Array[Object, Object, ...]);
* @example var chunk = X4Tpl("<div>{name}</div>", [ { name: 'person1' }, { name: 'person2' } ]);
*/

function X4Tpl(tpl, data)
{
    var i, xml = "";

    if(data.constructor !== Array.prototype.constructor)
    {
        data = [ data ];
    }

    data.forEach(function(a)
    {
        with(a) {
            // eval the e4x instead of new XML(tpl) which apparently doesn't resolve {variables}
            xml += eval(tpl);
            if(!xml) {
                throw new Error("Invalid template", tpl);
            }
        }
    });

    return xml;
}
