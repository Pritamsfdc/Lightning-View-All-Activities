({    
    //Fetch the accounts from the Apex controller
    getStateList: function(component) {

        //console.log("UsaOpptyChartHelper.getStateList: entered");

        //Set the action to invoke the Apex controller method
		var action = component.get("c.getScopedEntityByState");
        var entity = component.get("v.entity");
        //console.log("Requesting ", entity," with scope= ",scope);
        
        action.setParams({
            "entity": entity
        });
        
        //Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
            //Reset the value of the component list attribute with the records returned 
            //console.log("UsaOpptyChartHelper - setting stateData result");
            component.set("v.stateData", actionResult.getReturnValue());
        });

        //console.log("UsaOpptyChartHelper.getStateList: out of callback");

        //Enque the action
        $A.enqueueAction(action);

        //console.log("UsaOpptyChartHelper.getStateList: exit");

    },


	initMap : function(component) {
    
    if (!component.dataLoaded || !component.libraryLoaded)
    {
        //console.log("UsaOpptyChartHelper.initMap: NOT loaded", component.dataLoaded, component.libraryLoaded);
        return;
    }    
    if (!AmCharts)
    {
        //console.log("UsaOpptyChartHelper.initMap: Amcharts not defined!");
        return;
    }
          
    //var x=document.getElementById("opptymapdiv");
    var x = component.getElement();
    //console.log("UsaOpptyChartHelper: node = "+x);        
    //console.log("UsaOpptyChartHelper: node size (x,y) = ",x.clientWidth,",",x.clientHeight);
        
    var xStoredMap = x.map;   
    //console.log("UsaOpptyChartHelper.initMap: X-STORED MAP", xStoredMap);    
    //console.log("!!! UsaOpptyChartHelper mapOptsData = ", mapOptsData);    
    
    var map = null;    
    var charts = AmCharts.charts;

    try{
    //console.log("!!! UsaOpptyChartHelper at start of TRY block");
    if (xStoredMap)
    {
        //console.log("!!! UsaOpptyChartHelper using x-stored map");
        map = xStoredMap;
           
        //console.log("UsaOpptyChartHelper: updated node size (x,y) = ",x.clientWidth,",",x.clientHeight);

        setTimeout(function() {
            map.invalidateSize();
        }, 500);
        //console.log("UsaOpptyChartHelper: updated node size (x,y) = ",x.clientWidth,",",x.clientHeight);
        
    }
    else
    {
        //console.log("!!! UsaOpptyChartHelper creating new map");

        AmCharts.baseHref = true;

        map = AmCharts.makeChart(x, {
        type: "map",
        "theme": "green",
        pathToImages: "/resource/infografx__amcharts_",
    
        colorSteps: 10,
        fontFamily: "SalesforceSans-Regular, Arial",
    
        dataProvider: {
            map: "usaLow",
        },
            
        areasSettings: {
            autoZoom: false,
        balloonText: "<b>[[title]]</b><br/>$[[value]]<br/>[[customData]]"
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
        //console.log ("UsaOpptyChartHelper states = ",states);    
        if (states) {
            //console.log(states);
              
            for (i=0; i<states.length; i++) {
                var state = "US-" + states[i]["State"];
                var value = states[i]["expr0"];
                var entry = {};
                entry.id = state;
                entry.value = value;
                var count = states[i]["expr1"];
                if (count == 1)
                    entry.customData = count + " Opportunity";
                else if (count > 1)
                    entry.customData = count + " Opportunities";
                mapOptsData.areas.push(entry);
            }
        }
        //console.log ("!!! UsaOpptyChartHelper.initMap: Done Getting States = ", mapOptsData.areas.length);    

        var zoom = component.get("v.zoom");    
        //console.log ("!!! UsaOpptyChartHelper.initMap: Set Zoom = ", zoom);    
    
        if (zoom)
            map.zoomControl.zoomControlEnabled = true;
        else
            map.zoomControl.zoomControlEnabled = false;
            
        map.dragMap = false;
        //Check the dataProvider to make sure it is valid
        if (mapOptsData.areas.length == 0)
        {
            console.log ("UsaOpptyChartHelper.initMap: dataProvider INVALID!!!  = ", mapOptsData, "areas=", mapOptsData.areas);           
            return;
        }
        else
        {
            //console.log ("UsaOpptyChartHelper.initMap: dataProvider", mapOptsData, "areas=", mapOptsData.areas);    
            map.dataProvider =  mapOptsData;
        }
            
            
        //Set the Map Title    
        map.addTitle(component.get("v.mapTitle"));        
        map.write(x);

    }
    //console.log ("!!! UsaOpptyChartHelper.initMap: MAP = ", map);
    map.validateData();
    //map.write(x);
    x.map = map;
    //console.log ("!!! UsaOpptyChartHelper.initMap: MAP VALIDATED");    

    }
    catch (err)
    {
        console.log ("!!! UsaOpptyChartHelper.initMap: MAKE CHART FAILED!!!: ",err.message);
    }


//*********

/*

	if (!component.dataLoaded || !component.libraryLoaded)
    {
        console.log("UsaOpptyChartHelper.initMap: NOT loaded", component.dataLoaded, component.libraryLoaded);
        return;
    }
	      
    console.log("UsaMapChartHelper.initMap: LOADING MAP")
    
        
    var x=document.getElementById("opptymapdiv");
        console.log("usaMapChartHelper: node = "+x);
    console.log("usamapchartController.initScripts: AmCharts"+AmCharts);
	
    var mapOptsData = {};
    mapOptsData.map=["usaLow"];
    mapOptsData.areas = [];    
    

    var states = component.get("v.stateData");
    //console.log ("states = ",states);    
   	if (states) {
        //console.log(states);
        //console.log("States: "+states.length);
          
        for (var i=0; i<states.length; i++) {
            var state = "US-" + states[i]["State"];
            var value = states[i]["expr0"];
            var entry = {};
            entry.id = state;
            entry.value = value;
			var count = states[i]["expr1"];
            if (count==1)
                entry.customData = count + " Opportunity";
            else if (count>1)
                entry.customData = count + " Opportunities";
            mapOptsData.areas.push(entry);
        }
    }
    //console.log("mapOptsData = ", mapOptsData);    
      
    var map = AmCharts.makeChart("opptymapdiv", {
	type: "map",
    "theme": "green",
    pathToImages: "/resource/infografx__amcharts_",

	colorSteps: 10,
    fontFamily: "SalesforceSans-Regular, Arial",

	areasSettings: {
		autoZoom: false,
        balloonText: "<b>[[title]]</b><br/>$[[value]]<br/>[[customData]]"
	},

	valueLegend: {
		right: 5,
		minValue: "few",
		maxValue: "many"
	}
	});
        
    //console.log ("initMap: MAP = ", map);    
        
    var zoom = component.get("v.zoom");
    if (zoom)
	    map.zoomControl.zoomControlEnabled = true;
	else
    	map.zoomControl.zoomControlEnabled = false;
	
    
    map.dragMap = false;
        
    map.dataProvider =  mapOptsData;
    //console.log ("initMap: dataProvider = ", mapOptsData);    
        
    //Set the Map Title    
    map.addTitle(component.get("v.mapTitle"));

    map.write(x);
  	//console.log("map WRITE",map.getDevInfo());

    
    component.alreadyhandledEvent = true;
    component.map = map;
        
    //console.log("usamapchartHelper.initMap: exit");


*/

    },
    
    
        
})