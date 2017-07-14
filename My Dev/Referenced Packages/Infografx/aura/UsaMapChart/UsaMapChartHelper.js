({
    //Fetch the accounts from the Apex controller
    getStateList: function(component) {

        //console.log("usamapchartHelper.getStateList: entered");

        //Set the action to invoke the Apex controller method
		var action = component.get("c.getScopedEntityByState");
		var scope = component.get("v.scope");
        var entity = component.get("v.entity");
        //console.log("Requesting ", entity," with scope= ",scope);
        
        action.setParams({
            "scope": scope,
            "entity": entity
        });
        
        //Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
            //Reset the value of the component list attribute with the records returned 
            //console.log("usaMapChartHelper - setting stateData result");
            component.set("v.stateData", actionResult.getReturnValue());
        });

        //console.log("usaMapChartHelper.getStateList: out of callback");

        //Enque the action
        $A.enqueueAction(action);

        //console.log("usamapchartHelper.getStateList: exit");

    },

    
	initMap : function(component) {
        
    if (!component.dataLoaded || !component.libraryLoaded)
    {
        //console.log("UsaMapChartHelper.initMap: NOT loaded", component.dataLoaded, component.libraryLoaded);
        return;
    }    
    if (!AmCharts)
    {
        //console.log("UsaMapChartHelper.initMap: Amcharts not defined!");
        return;
    }
	      
	//var x=document.getElementById("mapdiv");
    var x = component.getElement();
    //console.log("usaMapChartHelper: node = "+x);        
    //console.log("usaMapChartHelper: node size (x,y) = ",x.clientWidth,",",x.clientHeight);
        
    var xStoredMap = x.map;   
    //console.log("UsaMapChartHelper.initMap: X-STORED MAP", xStoredMap);    
    //console.log("!!! usaMapChartHelper mapOptsData = ", mapOptsData);    
    
    var map = null;    
    var charts = AmCharts.charts;
        
    try{
	//console.log("!!! usaMapChartHelper at start of TRY block");
    if (xStoredMap)
    {
		//console.log("!!! usaMapChartHelper using x-stored map");
        map = xStoredMap;
           
        //console.log("usaMapChartHelper: updated node size (x,y) = ",x.clientWidth,",",x.clientHeight);

        setTimeout(function() {
         	map.invalidateSize();
       	}, 500);
        //console.log("usaMapChartHelper: updated node size (x,y) = ",x.clientWidth,",",x.clientHeight);
        
    }
    else
    {
		//console.log("!!! usaMapChartHelper creating new map");

        AmCharts.baseHref = true;

        map = AmCharts.makeChart(x, {
        type: "map",
        "theme": "light",
        pathToImages: "/resource/infografx__amcharts_",
    
        colorSteps: 10,
        fontFamily: "SalesforceSans-Regular, Arial",
    
        dataProvider: {
            map: "usaLow",
        },
            
        areasSettings: {
            autoZoom: false,
            balloonText: "[[title]] ([[value]])"
        },
    
        valueLegend: {
            right: 5,
            minValue: "few",
            maxValue: "many"
        }
        });
        //map.autoResize=false;

        //Create the state data
        var mapOptsData = {};
        mapOptsData.map=["usaLow"];
        mapOptsData.areas = [];    
        
        var states = component.get("v.stateData");
        //console.log ("states = ",states);    
        if (states) {
            //console.log(states);
            //console.log("States: "+states.length);
              
            for (i=0; i<states.length; i++) {
                var state = "US-" + states[i]["State"];
                var count = states[i]["expr0"];
                var entry = {};
                entry.id = state;
                entry.value = count;
                //entry.title = "states[i]["State"] ("+count+")";
                mapOptsData.areas.push(entry);
            }
        }
        var zoom = component.get("v.zoom");    
        //console.log ("!!! usaMapChartHelper.initMap: Set Zoom = ", zoom);    
    
        if (zoom)
            map.zoomControl.zoomControlEnabled = true;
        else
            map.zoomControl.zoomControlEnabled = false;
            
        map.dragMap = false;
        //Check the dataProvider to make sure it is valid
        if (mapOptsData.areas.length == 0)
        {
            console.log ("usaMapChartHelper.initMap: dataProvider INVALID!!!  = ", mapOptsData, "areas=", mapOptsData.areas);           
            return;
        }
        else
        {
            //console.log ("usaMapChartHelper.initMap: dataProvider", mapOptsData, "areas=", mapOptsData.areas);    
            map.dataProvider =  mapOptsData;
        }
            
            
        //Set the Map Title    
        map.addTitle(component.get("v.mapTitle"));        
        map.write(x);

    }
    //console.log ("!!! usaMapChartHelper.initMap: MAP = ", map);
    map.validateData();
    //map.write(x);
    x.map = map;
    //console.log ("!!! usaMapChartHelper.initMap: MAP VALIDATED");    

    }
    catch (err)
    {
        console.log ("!!! usaMapChartHelper.initMap: MAKE CHART FAILED!!!: ",err.message);
    }
    
  
    
    },
    
    
        
})