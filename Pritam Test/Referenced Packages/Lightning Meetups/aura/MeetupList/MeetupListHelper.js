({
    initHandlers : function(component){
        var ready = component.get("v.ready");
        if (ready === false) {
            return;
        }
        // Escape colon characters in aura ids
        var cardContainerId = "#"+component.getGlobalId().replace(/(:|;)/g,"\\$1")+"-event-cards";
        $j(cardContainerId).on("click",".event-read-more", function(e){
            var selectedEventId = $j(this).data('event-id');
            var cardContentElement = $j('#card-content-'+selectedEventId);
            if(cardContentElement){
                if(cardContentElement.height() <= 250){
                    cardContentElement.css('max-height','100%');
                    cardContentElement.animate({height:'100%'},200);
                    $j(this).text('Read Less');
                }else{
                    cardContentElement.animate({height:'250px'},200);
                    $j(this).text('Read More');
                }
            }
        });
    },

    searchEvents : function(component, searchTerms, radius, zipCode, maxResults) {
        if(!searchTerms){
            this.getEventsForRecentTopics(component, radius, zipCode, maxResults);
        }else{
            this.getEvents(component,searchTerms, radius, zipCode, maxResults);
        }
    },

    getEvents : function(component, searchTerms, radius, zipCode, maxResults) {
        var a = component.get("c.getEvents");

        //Set default values if not present
        var st = searchTerms || 'salesforce';
        var rd = radius ? radius.toString() : '50';
        var zp = zipCode || '94105';
        var mx = maxResults ? maxResults.toString() : '20';

        a.setParams({
            'searchText': st,
            'radius': rd,
            'zipCode': zp,
            'maxResults': mx
           });

        a.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                var response = action.getReturnValue();
                if(!response){
                    component.set('v.showSetup',true);
                }else{
                    component.set('v.events',response);
                    this.updateViewSearchCriteria(component, st, rd, zp);
                }
            } else {
                alert(action.getState());
            }
        });
        $A.enqueueAction(a);
    },

    getEventsForRecentTopics : function(component, radius, zipCode, maxResults) {
        var a = component.get("c.getRecentlyUsedTopics");
        a.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                var topics = action.getReturnValue();
                component.set('v.searchTerms',topics);
                this.getEvents(component, topics, radius, zipCode, maxResults);
            } else {
                alert(action.getState());
            }
        });
        $A.enqueueAction(a);
    },

    updateViewSearchCriteria : function(component, st, rd, zp){
        component.set('v.searchTerms',st);
        component.set('v.radius',rd);
        component.set('v.zipCode',zp);
    },

    updateAPIKey : function(component, apiKey){
        var a = component.get("c.updateAPIKey");
        a.setParams({
            'apiKey': apiKey
           });

        a.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                component.set('v.showSetup',false);
                this.getEvents(component, null, null, null);
            } else {
                alert(action.getState());
            }
        });
        $A.enqueueAction(a);
    },

    checkConfigPerms : function(component){
        var a = component.get("c.canModifyAllData");
        a.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                component.set('v.enableSetup',action.getReturnValue());
            } else {
                alert(action.getState());
            }
        });
        $A.enqueueAction(a);
    }
})