// to es2015-ify

;"use strict";

var joose = window.joose || {};
joose.focusOptions = (function(joose) {

    // shared configuration / variables
    var config = {
        focusType: 'expand',
        direction: 'horizontal',
        focusedClass: 'focused',
        notFocusedClass: 'not-focused'
    };

    // private functions
    var init = function () {
        var focusOptionsAreas = document.querySelectorAll('[data-component="focus-options"]');
        focusOptionsAreas.forEach(function(focusOptionsArea) {

            var focusableOptions = focusOptionsArea.children;
            var noOfOptions = focusableOptions.length;

            for (var i=0; i<noOfOptions; i++) {

                focusableOption = focusableOptions[i];

                focusableOption.addEventListener('mouseover', function(event) {

                    focusableOptions.forEach(function(option) {
                        //joose.utils.removeClass(option, config.focusedClass);
                        //joose.utils.addClass(event.target, config.focusedClass);
                        console.log(option == event.target)
                    });

                });
            }
        });
    }

    // public functions
    return {
        init: init
    }

})(joose);