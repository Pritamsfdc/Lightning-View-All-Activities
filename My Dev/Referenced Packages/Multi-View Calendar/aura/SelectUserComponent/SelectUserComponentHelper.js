({
    setUsers: function(component , uData){
        try{
        jQuery("#TC_searchText").autocomplete({  
          minLength: 1,
          delay: 500,
          source: JSON.parse( uData ),
          select: function(event, ui) {  
            event.preventDefault();
            var ctx = component.getElement();
            jQuery("#TC_searchText").blur();
            var selectionEvent = $A.get("e.mvc:SelectUserEvent");
            selectionEvent.setParams({
              "searchKey": ui.item 
            });
            selectionEvent.fire();
            jQuery("#TC_searchText").val("");
          }
      });

        }catch (e) {console.log(" Please reload try this page.")}

    }

})