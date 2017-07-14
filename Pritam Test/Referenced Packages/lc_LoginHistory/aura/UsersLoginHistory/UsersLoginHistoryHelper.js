({
	
    getListByObject : function(component, callback) {
        console.log("LoginHistory.getListByObject: entered");
        var attributeValue = component.get("v.selectedObj");
        var rowsLimitValue = component.get("v.limitRows");
        console.log("attributeValue: " + attributeValue);
        
            //var action = component.get("c.getLoginHistoryLimit");  
            var action = component.get("c.getLoginHistoryLimitInt");
        
            //Load the parm with the updated record 
            action.setParams({
                "uStatus": attributeValue,
                "rowsLimit": rowsLimitValue
            });
            // Setup the CallBack
            var self = this;
            action.setCallback(this, function(actionResult)
            {
                //Reset the value of the component list attribute with the records returned
                //debugger;
                var retvals = actionResult.getReturnValue();
                console.log("Returned Values: " + actionResult.getReturnValue()); 
                
                component.set("v.lstFlwRecords", actionResult.getReturnValue());                   
            });
            
            //Enqueue the action      
            $A.enqueueAction(action);
            
            console.log("LoginHistory.getListByObject: exited");
		//}
	}
})