({
    doInit : function(component, event, helper) {
        if (typeof jQuery !== "undefined" && typeof $j === "undefined"){
            $j = jQuery.noConflict(true);
        }
        var searchTerms = component.get('v.searchTerms');
        var radius = component.get('v.radius');
        var zipCode = component.get('v.zipCode');
        var maxResults = component.get('v.maxResults');

        helper.checkConfigPerms(component);
        helper.searchEvents(component, searchTerms, radius, zipCode, maxResults);
        helper.initHandlers(component);
    },

    showSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : true });
        evt.fire();
    },

    hideSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : false });
        evt.fire();
    },

    handleSearchEvent : function(component, event, helper){
        var searchTerms = event.getParam("searchTerms");
        var radius = event.getParam("radius");
        var zipCode = event.getParam("zipCode");
        var maxResults = event.getParam("maxResults");

        helper.searchEvents(component, searchTerms, radius, zipCode, maxResults);
    },

    updateKey : function(component, event, helper){
        var inputAPIKey = component.find('meetupAPIKey').get('v.value');
        helper.updateAPIKey(component, inputAPIKey);
    },

    toggleSetup : function(component, event, helper){
        component.set('v.showSetup',!component.get('v.showSetup'));
    }
})