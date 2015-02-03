(function () {
    "use strict";
    
    module.exports = {
        textIsEmpty: function (locator) {
            expect(locator.getText()).toEqual('');
        },
        
        textIs: function (locator, text) {
            expect(locator.getText()).toEqual(text);
        },
        
        setText: function (locator, text) {
            locator.sendKeys(text);
        },

        urlContains: function(text) {
            expect(browser.getCurrentUrl()).toContain(text);
        }
    };
}());
