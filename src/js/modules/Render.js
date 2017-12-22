/**
 * Rendering function for mustache templates
 */

define('modules/Render', function(require) {

    'use strict';

    var Mustache = require('../lib/mustache.min');

    /**
     * @param templateElement - the script element that contains the template
     * @param json - JSON which contains information for the template
     * @param targetElement - the host element for the template to berendered in
     */
    return function(templateElement, json, targetElement) {
        var template = templateElement.innerHTML;
        Mustache.parse(template); // optional, speeds up future uses
        var rendered = Mustache.render(template, json);
        targetElement.innerHTML = rendered;
    };
});
