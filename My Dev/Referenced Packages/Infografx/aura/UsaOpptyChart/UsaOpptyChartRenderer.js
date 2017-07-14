({
    rerender : function(cmp,helper){
      var ret = this.superRerender();
        //console.log("UsaMapChartRenderer.rerender - calling initMap");
        helper.initMap(cmp);       
    },
    
    
})