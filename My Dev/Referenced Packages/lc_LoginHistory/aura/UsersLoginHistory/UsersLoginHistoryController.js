({
	doInit : function(component, event, helper) {
        
        console.log("LoginHistoryController.doInit: entered");
		var rowsLimitValue = component.get("v.limitRows");
        console.log("rowsLimitValue: " + rowsLimitValue);  
        if (rowsLimitValue > 0 && rowsLimitValue < 13) {
            component.set("v.validRange", true);
            helper.getListByObject(component);
        }
        else {
            component.set("v.validRange", false);
        }


        console.log("LoginHistoryController.doInit: exit");
	},
    
    //This is the event handler to update a record
    onSelectChange : function(component, event, helper) {
        
        console.log("LoginHistoryController.onSelectChange: entered");
        var selected = component.find("lstobjects").get("v.value");
        console.log("selected: " + selected);
        component.set("v.selectedObj", selected);
        
        var attributeValue = component.get("v.selectedObj");
        console.log("attributeValue: " + attributeValue);        

        helper.getListByObject(component);
  
        
        console.log("LoginHistoryController.onSelectChange: exit");
    },
})