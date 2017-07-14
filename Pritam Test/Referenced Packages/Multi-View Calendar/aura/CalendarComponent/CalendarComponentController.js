({
    afterScriptsLoaded : function(component, event, helper) {
		var $ = jQuery = jQuery.noConflict().extend(true, $);

        var action = component.get("c.getEvent");
        action.setParams({"userId": ""});
        action.setCallback(this, function(a){
            var toastEvent = $A.get("e.force:showToast");
            if(action.getState() ==='SUCCESS'){
                //component.set("v.txt", a.getReturnValue());
            }else{
                toastEvent.setParams({
                    "title": "Error!",
                    "message": " Please, reload."
                });
                toastEvent.fire();
            }
            var response = a.getReturnValue();
            helper.createCalendar(component,JSON.parse(response));
        });
        $A.enqueueAction(action);
	},
    showSpinner : function (component, event, helper) {
        /*
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : true });
        evt.fire();
        */
    },
    hideSpinner : function (component, event, helper) {
        /*
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : false });
        evt.fire();
        */
    },
    SelectUserEvent: function(component, event, helper) {
        var searchKey = event.getParam("searchKey");
        jQuery("#TC_calendar").empty();
        component.set("v.uName" , searchKey.label);
        var action = component.get("c.getEvent");
        action.setParams({"userId": searchKey.id});
        action.setCallback(this, function(a){
            var toastEvent = $A.get("e.force:showToast");
            if(action.getState() ==='SUCCESS'){
                //component.set("v.txt", a.getReturnValue());
            }else{
                toastEvent.setParams({
                    "title": "Error!",
                    "message": " Please, reload."
                });
                toastEvent.fire();
            }
            var response = a.getReturnValue();
            helper.createCalendar(component,JSON.parse(response));
        });
        $A.enqueueAction(action);
    }
})