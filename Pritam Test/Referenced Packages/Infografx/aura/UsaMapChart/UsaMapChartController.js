({
    
    //Initialize the view and fetch the list of accounts on load
    doInit : function(component, event, helper) {
       
        //console.log("usaMapChartController.doInit: entered INIT");
        
        helper.getStateList(component);
        component.dataLoaded = true;
        
        var border = component.get("v.border");
        var size = component.get("v.size");
        var style_class = "";
        if (border)
            style_class = "map-border";
        else
            style_class = "map";          
        style_class = style_class + " " + size;
        component.set("v.style_class", style_class);


        //console.log("usamapchartController.doInit: exit");
    },
    
    initScripts : function(component, event, helper) {
    
        //console.log("usamapchartController.initScripts: entered INIT");
        //check if already inited previously
        //console.log("usamapchartController.initScripts: library already loaded???", component.libraryLoaded);

        component.libraryLoaded = true;
		
        //Try to init the map
        helper.initMap(component);        

        //console.log("usamapchartController.initScripts: exit INIT");
    

    }
    
 
    
})