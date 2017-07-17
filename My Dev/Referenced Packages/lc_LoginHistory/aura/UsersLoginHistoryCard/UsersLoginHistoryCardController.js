({
	linkToRecord : function(component, event, helper) {
        
        console.log("LoginHistoryUserCardController.handleClick: entered");
        //debugger;
        var crecord = component.get("v.followedrecord");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": crecord.userID,
          "slideDevName": "related"
        });
        navEvt.fire();
        
        console.log("LoginHistoryUserCardController.handleClick: exit");
        

	},
})