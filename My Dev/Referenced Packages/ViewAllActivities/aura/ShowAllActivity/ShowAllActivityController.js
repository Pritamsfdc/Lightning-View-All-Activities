({
    doInit : function(component, event, helper) {
        var pageSize = component.get("v.TaskpageSize");
        
        var action = component.get("c.ShowAllSobjectActivityList");
        action.setParams({
            "sObjectname": component.get("v.recordId")
        });
        action.setCallback(this, function(response) {
            component.set("v.tasklist", response.getReturnValue());
            
            component.set("v.TasktotalSize", component.get("v.tasklist").length);
            component.set("v.Taskstart",0);
            component.set("v.Taskend",pageSize-1);
            
            var Paginationtasklist = [];
            for(var i=0; i< pageSize; i++)
            {
                 if(component.get("v.tasklist").length> i)
                Paginationtasklist.push(response.getReturnValue()[i]);    
            }
            
            component.set('v.Paginationtasklist', Paginationtasklist);
        });
        $A.enqueueAction(action);
        var action1 = component.get("c.ShowAllEventList");
        action1.setParams({
            "sObjectname": component.get("v.recordId")
        });
        action1.setCallback(this, function(response) {
            component.set("v.eventlist", response.getReturnValue());
            component.set("v.EventtotalSize", component.get("v.eventlist").length);
            component.set("v.Eventstart",0);
            component.set("v.Eventend",pageSize-1);
            
            var Paginationeventlist = [];
            for(var i=0; i< pageSize; i++)
            {	
                if(component.get("v.eventlist").length> i)
                Paginationeventlist.push(response.getReturnValue()[i]);    
            }
            
            component.set('v.Paginationeventlist', Paginationeventlist);
        });
        $A.enqueueAction(action1);
    },
    next : function(component, event, helper) 
    {
        var accountList = component.get("v.tasklist");
        var end = component.get("v.Taskend");
        var start = component.get("v.Taskstart");
        var pageSize = component.get("v.TaskpageSize");
        var paginationList = [];
        
        var counter = 0;
        for(var i=end+1; i<end+pageSize+1; i++)
        {
            if(accountList.length > i)
            {
                
                paginationList.push(accountList[i]);
                
            }
            counter ++ ;
        }
        start = start + counter;
        end = end + counter;
        
        component.set("v.Taskstart",start);
        component.set("v.Taskend",end);
        
        component.set('v.Paginationtasklist', paginationList);
    },
    previous : function(component, event, helper) 
    {
        var tasklist = component.get("v.tasklist");
        var end = component.get("v.Taskend");
        var start = component.get("v.Taskstart");
        var pageSize = component.get("v.TaskpageSize");
        var Paginationtasklist = [];
        
        var counter = 0;
        for(var i= start-pageSize; i < start ; i++)
        {
            if(i > -1)
            {
                Paginationtasklist.push(tasklist[i]);
                counter ++;
            }
            else
            {
                start++;
            }
        }
        start = start - counter;
        end = end - counter;
        
        component.set("v.Taskstart",start);
        component.set("v.Taskend",end);
        
        component.set('v.Paginationtasklist', Paginationtasklist);
    },
    Eventnext : function(component, event, helper) 
    {
        var accountList = component.get("v.eventlist");
        var end = component.get("v.Eventend");
        var start = component.get("v.Eventstart");
        var pageSize = component.get("v.TaskpageSize");
        var paginationList = [];
        
        var counter = 0;
        for(var i=end+1; i<end+pageSize+1; i++)
        {
            if(accountList.length > i)
            {
                
                paginationList.push(accountList[i]);
                
            }
            counter ++ ;
        }
        start = start + counter;
        end = end + counter;
        
        component.set("v.Eventstart",start);
        component.set("v.Eventend",end);
        
        component.set('v.Paginationeventlist', paginationList);
    },
    Eventprevious : function(component, event, helper) 
    {
        var eventlist = component.get("v.eventlist");
        var end = component.get("v.Eventend");
        var start = component.get("v.Eventstart");
        var pageSize = component.get("v.TaskpageSize");
        var Paginationeventlist = [];
        
        var counter = 0;
        for(var i= start-pageSize; i < start ; i++)
        {
            if(i > -1)
            {
                Paginationeventlist.push(eventlist[i]);
                counter ++;
            }
            else
            {
                start++;
            }
        }
        start = start - counter;
        end = end - counter;
        
        component.set("v.Eventstart",start);
        component.set("v.Eventend",end);
        
        component.set('v.Paginationeventlist', Paginationeventlist);
    }
})