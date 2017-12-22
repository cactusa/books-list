/**
 * Requirejs config
 */

requirejs.config({
    baseUrl: 'js',

    paths: {
        app: 'app',
        gapi: 'https://apis.google.com/js/api'
    }
});

/**
 * Main app
 */
require(['modules/Client', 'modules/Render'], function(Client, Render) {

    'use strict';

    var client = new Client();
    var doc = document;
    var templateElement = doc.getElementById('template');
    var targetElement = doc.getElementById('target');

    // Handle click of the login button - Google login
    doc.getElementById('login').addEventListener('click', function() {
        client.authenticate().then(client.loadClient());
    });
    // handle clicks of the books button - display books
    doc.getElementById('books').addEventListener('click', function() {
        client.execute().then(function(result) {
            new Render(templateElement, result, targetElement);
        });
    });

});
