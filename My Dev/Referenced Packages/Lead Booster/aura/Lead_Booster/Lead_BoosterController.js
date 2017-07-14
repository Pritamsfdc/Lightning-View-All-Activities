({
    
    afterScriptsLoaded : function(component, event, helper) {
    },
    
    leadwithcheckbox : function(component, event, helper) {
       var action =component.get("c.selectleadrecord");
       action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
               component.set("v.wrpvar", response.getReturnValue());
             }
        });
         
        $A.enqueueAction(action);
         
         
      var action =component.get("c.history");
       action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
              component.set("v.emailhistory", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);   
    },
    
    openmodal : function(component, event, helper) {
     var j$=jQuery.noConflict();
       var wraapobjcheck = component.get("v.wrpvar");
          var trueleadcheck=new Array();
           for(var i = 0; i < wraapobjcheck.length; i++){
              if(wraapobjcheck[i].checkkvar==true){  
               trueleadcheck.push(
               wraapobjcheck[i].leadvar
                    );
              }  
                
          }
        if(trueleadcheck.length==0){
           component.set("v.informessage", true);  
        }
        else{   
            component.set("v.informessage", false);
            j$("#modaltest").show(); 
        }
        
      
     },
    
    
    canclemailmodal : function(component, event, helper) {
      var j$=jQuery.noConflict();
      j$("#modaltest").hide(); 
        
        component.find("subject").set("v.value",'');
       component.find("body").set("v.value",'');
        component.set("v.sendmailifemailnotempty", false);
         component.set("v.sendemailifbodynotempty", false);
        
    },
    
    
    canclconverleadlmodal: function(component, event, helper) {
        var j$=jQuery.noConflict();
        j$("#convrtlid").hide(); 
    },
    
    
    cancloppdetailslmodal: function(component, event, helper) {
       var j$=jQuery.noConflict();
       j$("#oppdetailsmodal").hide(); 
    },
    
    
    details : function(component, event, helper) {
        var listtidd = event.getSource().get("v.title");
        var action=component.get("c.leaddetaidonclickk");  
        action.setParams({
           
            "listleadid":listtidd,
           
         })
          
         action.setCallback(this, function(response) {
           var state = response.getState();
           if (state === "SUCCESS") {
             component.set("v.leaddetails", response.getReturnValue());
           }
        });
        
        $A.enqueueAction(action);
         var j$=jQuery.noConflict();
         j$("#oppdetailsmodal").show();
  
    },
    
     histtaskdetils : function(component, event, helper) {
        var taskhistyid = event.getSource().get("v.title");
         var action=component.get("c.histaskdetilscontroller");  
        
        action.setParams({
           
            "taskhistyidd":taskhistyid,
           
         }) 
         
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            component.set("v.histrytaskdetails", response.getReturnValue());
             
            }
        });
        

        $A.enqueueAction(action);
     
         
          var j$=jQuery.noConflict();
           j$("#showeventwindodetails").hide();
         j$("#showtaskwindodetails").show();
         
         
        
    },
    
   
    histeventdetils : function(component, event, helper) {
         var eventhistyid = event.getSource().get("v.title");
         var action=component.get("c.hiseventtdetilscontroller");  
        
        action.setParams({
           
            "eventhistyidd":eventhistyid,
           
         }) 
         
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            component.set("v.histryeventdetails", response.getReturnValue());
             
            }
        });
        

        $A.enqueueAction(action);
     
         
          var j$=jQuery.noConflict();
         j$("#showtaskwindodetails").hide();
        
          j$("#showeventwindodetails").show();
         
        
    },
    
    
    pasthistry : function(component, event, helper) {
        var j$=jQuery.noConflict();
        j$("#tab-scoped-1").hide(); 
        j$("#tab-scoped-2").show(); 
        j$("#showtaskwindodetails").hide();
        j$("#showeventwindodetails").hide();
        j$("#tab-scoped-1__itemss").removeClass("slds-active");
        j$("#tab-scoped-2__itemss").addClass("slds-active");
         
    },
    
    
     nextstp : function(component, event, helper) {
        var j$=jQuery.noConflict();
        j$("#tab-scoped-2__itemss").removeClass("slds-active");
        j$("#tab-scoped-1__itemss").addClass("slds-active");
        j$("#tab-scoped-1").show();  
        j$("#tab-scoped-2").hide();
        j$("#showtaskwindodetails").hide();
        j$("#showeventwindodetails").hide();
         
    },
    
    
    
    converrtlid : function(component, event, helper) {
         var action=component.get("c.recordleadconvrson");  
          var wraapobj3 = component.get("v.wrpvar");
          var truelead3=new Array();
        
            for(var i = 0; i < wraapobj3.length; i++){
              if(wraapobj3[i].checkkvar==true){  
               truelead3.push(
               wraapobj3[i].leadvar
                    );
              }  
                
          }
     
        if(truelead3.length==0){
           component.set("v.informessage", true);  
        }
        else{  
        action.setParams({
           
            "truelead3":truelead3,
           
         }) 
         
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
             component.set("v.informessage", false);
             component.set("v.wrpvarrled", response.getReturnValue());
            }
        });
        

        $A.enqueueAction(action);
        var j$=jQuery.noConflict();
        j$("#convrtlid").show(); 
        }
        
    },
    
    
    shoehidehistory : function(component, event, helper) {
    var j$=jQuery.noConflict();
        j$('.showactvity').hide();
        j$('.showhde').show(); 
        j$('.showactvityy').hide();
        j$('#showtabsec').hide();
        j$('#tab-scoped-1').hide();
        j$("#tab-scoped-2").hide();
        j$("#showtaskwindodetails").hide();
        j$("#showeventwindodetails").hide();
    },

    
    showactivity : function(component, event, helper) {
        var j$=jQuery.noConflict();
         j$('#showtabsec').show();
         j$("#tab-scoped-1").show();
         j$("#tab-scoped-2").hide();
         j$('.showhde').hide(); 
         j$('.showactvityy').show();
         j$("#showtaskwindodetails").hide();
         j$("#showeventwindodetails").hide();
         j$("#tab-scoped-1__itemss").addClass("slds-active");
         j$("#tab-scoped-2__itemss").removeClass("slds-active");
       
       var activtyid = event.getSource().get("v.buttonTitle");
       var action=component.get("c.getacivty");  
        action.setParams({
            "activtyid":activtyid 
         }) 
        
         action.setCallback(this, function(response){
          var state = response.getState();
            if (state === "SUCCESS") {
                 component.set("v.eventrecord", response.getReturnValue());
              
            }
        });
        $A.enqueueAction(action);
        
   
        var action=component.get("c.getaskrecord");  
        action.setParams({
            "activtyid":activtyid 
         }) 
        
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                 component.set("v.taskrecrd", response.getReturnValue());
                }
        });
        $A.enqueueAction(action);
   
      var action=component.get("c.eventhistryy");  
        action.setParams({
            "activtyid":activtyid 
         }) 
        
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.histryevent", response.getReturnValue());
                }
           });
        $A.enqueueAction(action);
        
        
        var action=component.get("c.taskhistryy");  
        action.setParams({
            "activtyid":activtyid 
         }) 
        
         action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS") {
              component.set("v.histrytask", response.getReturnValue());
             }
        });
        $A.enqueueAction(action);
        
        var action=component.get("c.callaloghistryy");  
        action.setParams({
            "activtyid":activtyid 
         }) 
        
         action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS") {
             component.set("v.histrycalllog", response.getReturnValue());
                }
        });
        $A.enqueueAction(action);
        
         var action=component.get("c.Emailtaskhistryy");  
        action.setParams({
            "activtyid":activtyid 
         }) 
        
         action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS") {
              component.set("v.histryEmail", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
     
    },
    
    histcalllogkdetils : function(component, event, helper) {
        var colaloghistyid = event.getSource().get("v.title");
         var action=component.get("c.histaskdetilscontroller");  
        
        action.setParams({
           
            "taskhistyidd":colaloghistyid,
           
         }) 
         
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            component.set("v.histrytaskdetails", response.getReturnValue());
             
            }
        });
        

        $A.enqueueAction(action);
     
         
          var j$=jQuery.noConflict();
           j$("#showeventwindodetails").hide();
         j$("#showtaskwindodetails").show();
         
         
           
    },
    
    histemaildetils : function(component, event, helper) {
         var emailhistyid = event.getSource().get("v.title");
         var action=component.get("c.histaskdetilscontroller");  
        
        action.setParams({
           
            "taskhistyidd":emailhistyid,
           
         }) 
         
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            component.set("v.histrytaskdetails", response.getReturnValue());
             
            }
        });
        

        $A.enqueueAction(action);
     
         
          var j$=jQuery.noConflict();
           j$("#showeventwindodetails").hide();
         j$("#showtaskwindodetails").show();
         
         
             
    },
    
    sndmail : function(component, event, helper) {
      var sub=component.find("subject").get("v.value"); 
      var bod=component.find("body").get("v.value"); 
       
       if(sub !=null && sub !='' && bod !=null && bod != ''){
         component.set("v.sendemailifbodynotempty", false);  
         var action=component.get("c.tosendmail");  
          var wraapobj = component.get("v.wrpvar");
          var truelead=new Array();
           //alert(truelead.lenght);
            for(var i = 0; i < wraapobj.length; i++){
              if(wraapobj[i].checkkvar==true){  
               truelead.push(
               wraapobj[i].leadvar
                    );
            }  
                
        }
    
        action.setParams({
            "truelead":truelead,
            "sub":sub,
            "bod":bod
         }) 
         
         action.setCallback(this, function(response){
            var state = response.getState();
             if (state === "ERROR") {
              component.set("v.sendmailifemailnotempty", true); 
             }
            if (state === "SUCCESS") {
            component.set("v.sucessmessagemail", true);
            window.location.reload();
            component.set("v.sendmailifemailnotempty", false); 
            }
        });
           $A.enqueueAction(action);
       }
        
        else{
             component.set("v.sendemailifbodynotempty", true);  
        }
        
        
        
      
    },
    
     searchlead : function(component,event,helper){
     var searchnme=component.find("leadname").get("v.value");   
      var action=component.get("c.searchldrececord");  
        action.setParams({
            "searchrecrd":searchnme 
         }) 
        
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.wrpvar", response.getReturnValue());
               
            }
        });
        $A.enqueueAction(action);
   
    },
    
    searchhistory : function(component,event,helper){
     var searchhis=component.find("shistory").get("v.value");   
      var action=component.get("c.searchemailhistory");  
        action.setParams({
            "searchhist":searchhis 
         }) 
        
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.emailhistory", response.getReturnValue());
               
            }
        });
        $A.enqueueAction(action);
   
    },
    
    
    
    convertleaddd : function(component, event, helper) {
        var action=component.get("c.convertleadToOpportunity");
        var wrapleadconvrson=component.get("v.wrpvarrled");
        var trueleaddconv=new Array();
        var trueleaddconvv=new Array();
        
        for(var i = 0; i < wrapleadconvrson.length; i++)
        {
            if(wrapleadconvrson[i].checkkvarlid==true)
             {
               
               trueleaddconv.push(wrapleadconvrson[i].leadvarwrap); 
              
                           
            } 
            
        else{
            wrapleadconvrson[i].leadvarwrap.Company =  wrapleadconvrson[i].leadvarwrap.Company  +'\-'+wrapleadconvrson[i].valuetoapendoppname;
            trueleaddconvv.push( wrapleadconvrson[i].leadvarwrap);   
            }
            
        }
     
        action.setParams({
            "leadlist":trueleaddconv,
             "leadlistt":trueleaddconvv });
        
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            component.set("v.sucessmessageconvert", true);
            window.location.reload();
            }
        });
        

        $A.enqueueAction(action);
   
    },
    
    
    massdelete : function(component, event, helper) {
          var action=component.get("c.deleteleadrecord");  
          var wraapobjdel = component.get("v.wrpvar");
          var trueleaddel=new Array();
        
            for(var i = 0; i < wraapobjdel.length; i++){
              if(wraapobjdel[i].checkkvar==true){  
               trueleaddel.push(
               wraapobjdel[i].leadvar
                    );
            }  
                
        }
        
        if(trueleaddel.length==0){
          component.set("v.informessage", true);  
        }
        else{ 
        action.setParams({
           
            "trueleaddel":trueleaddel
            
         }) 
         
         action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            component.set("v.sucessmessagedelete", false); 
            component.set("v.sucessmessagedelete", true); 
           window.location.reload();
            }
        });
        

        $A.enqueueAction(action);
        }
      
    },
    
   
    next: function(component, event, helper) {
        var attr1=parseInt(component.get("v.num1"));       
        var action=component.get("c.nextcont");   
        attr1=parseInt(attr1)+parseInt(10);   
        action.setParams({"offsetSize1":attr1});
        action.setCallback(this,function(res){          
        var status = res.getState();           
        if(status === "SUCCESS"){             
            component.set("v.wrpvar",res.getReturnValue());
            component.set("v.num1",attr1);
          }
        });
        $A.enqueueAction(action);        
        
        },
    
     prev: function(component, event, helper) {
        var attr1=parseInt(component.get("v.num1"));
        var action=component.get("c.previouscont");
        attr1=parseInt(attr1)-parseInt(10);
        action.setParams({"limitSize":attr1});        
        action.setCallback(this,function(response){          
        var status = response.getState();
            if(status === "SUCCESS"){
              component.set("v.wrpvar",response.getReturnValue());
              component.set("v.num1",attr1);
            }
        });       
        $A.enqueueAction(action); 
      
    },
    
     nextemailhistory: function(component, event, helper) {
        var attr2=parseInt(component.get("v.num2"));       
        var action=component.get("c.nextemailhistorycont");   
        attr2=parseInt(attr2)+parseInt(10);   
        action.setParams({"offsetSizenext":attr2});
        action.setCallback(this,function(res){          
        var status = res.getState();           
        if(status === "SUCCESS"){             
            component.set("v.emailhistory",res.getReturnValue());
            component.set("v.num2",attr2);
          }
        });
        $A.enqueueAction(action);        
        
        },
    
     prevemailhistory: function(component, event, helper) {
        var attr2=parseInt(component.get("v.num2"));
        var action=component.get("c.previousemailhistcont");
        attr2=parseInt(attr2)-parseInt(10);
        action.setParams({"limitSizepre":attr2});        
        action.setCallback(this,function(response){          
        var status = response.getState();
            if(status === "SUCCESS"){
              component.set("v.emailhistory",response.getReturnValue());
              component.set("v.num2",attr2);
            }
        });       
        $A.enqueueAction(action); 
      
    }

    
   
    
})