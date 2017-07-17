({
    doSearch : function(component, event, helper) {
        var meetupSearchEvent = $A.get("e.lmeetup:MeetupSearchEvent");
        var searchTerms = component.find('meetupSearch').get('v.value');
        var zipCode = component.find('searchZipCode').get('v.value');
        var radius = component.find('searchRadius').get('v.value');
        var maxResults = component.get('v.maxResults');

        meetupSearchEvent.setParams({
            "searchTerms": searchTerms,
            "zipCode": zipCode,
            "radius": radius,
            "maxResults": maxResults
        }).fire();
    }
})