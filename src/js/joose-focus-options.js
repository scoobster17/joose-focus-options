// to es2015-ify

;"use strict";

var joose = window.joose || {};
joose.focusOptions = (function(joose) {

    // shared configuration / variables
    var config = {
        focusType: 'expand',
        direction: 'horizontal'
    };

    // private functions
    var init = function () {
        var focusOptionsAreas = document.querySelectorAll('[data-component="focus-options"]');
        focusOptionsAreas.forEach(function(focusOptionsArea) {
            console.log(focusOptionsArea);
        });
    }

    // public functions
    return {
        init: init
    }

})(joose);