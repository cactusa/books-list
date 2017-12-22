/**
 * Client for Google books API
 * @module modules/client
 */

define('modules/Client', ['gapi'], function() {

    'use strict';

    var Client = function() {
        // Authenticate with Google
        gapi.load('client:auth2', function() {
            gapi.auth2.init({ client_id: '66837997098-divu616nfgk38ubld3v4q2iasjpat9l4.apps.googleusercontent.com' }); // jshint ignore:line
        });
    };


    /**
     * Handle the json response from the Google API
     *
     * @param jsonResponse - The response from the Google books API
     * @return jsonFeed - a subsection of the google response
     */
    function responseHandler(jsonResponse) {
        var noOfBooks = jsonResponse.result.items.length;
        var books = [];
        var title, description, coverImage, descriptionShort;

        for (var i = 0; i < noOfBooks; i++) {
            title = jsonResponse.result.items[i].volumeInfo.title;
            description = jsonResponse.result.items[i].volumeInfo.description;

            if (typeof description !== 'undefined') {
                descriptionShort = description.substring(0, 200) + '...';
            }

            coverImage = jsonResponse.result.items[i].volumeInfo.imageLinks.thumbnail;

            books[i] = {
                'title': title,
                'description_short': descriptionShort,
                'image': coverImage,
            };
        }

        // Create a json with the required information only to be used by the Mustache template
        var jsonFeed = {
            'noOfBooks': noOfBooks,
            'books': books
        };

        return jsonFeed;
    }

    /**
     * Starts Google sing in prosess
     */
    Client.prototype.authenticate = function() {
        return gapi.auth2.getAuthInstance()
            .signIn({ scope: 'https://www.googleapis.com/auth/books' })
            .then(function() {
                console.log('Sign-in successful');
            }, function(error) {
                console.error('Error signing in', error);
            });
    };

    /**
     * Loads books API
     */
    Client.prototype.loadClient = function() {
        return gapi.client.load('https://content.googleapis.com/discovery/v1/apis/books/v1/rest')
            .then(function() {
                console.log('GAPI client loaded for API');
            }, function(error) {
                console.error('Error loading GAPI client for API', error);
            });
    };

    /**
     * Requests a list of the most recent 20 books
     */
    Client.prototype.execute = function() {
        return gapi.client.books.volumes.list({
                'q': 'books',
                'maxResults': '20',
                'orderBy': 'newest'
            })
            .then(function(response) {
                console.log('Response', response);
                return responseHandler(response);
            }, function(error) {
                console.error('Execute error', error);
            });


    };

    return Client;
});
