({
    rerender : function(cmp,helper){
      	this.superRerender();
        //console.log("UsaMapChartRenderer.rerender - calling initMap");
        helper.initMap(cmp);       
    },
    
})