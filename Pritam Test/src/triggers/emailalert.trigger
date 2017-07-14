trigger emailalert on Lead__c (after insert,after update) {
    
       Set<Id> userId = new Set<Id>();
    
    for (Lead__c lead : Trigger.new) {
        List<Team_Member__c> teamMembers = [SELECT User__c FROM Team_Member__c WHERE Team__c = :lead.Team__c];
        for( Team_Member__c t : teamMembers){ 
          userId.add(t.User__c);    
        }
        List<Follower__c> followers = [SELECT Follower__c FROM Follower__c WHERE Lead__c = :lead.Id];
        for( Follower__c f : followers){   
            userId.add(f.Follower__c);
        }
        userId.add(lead.Asignee__c);
        List<User__c> users = [SELECT Name, pritam__Email__c FROM User__c WHERE Id In :userId];
    
        if(trigger.isInsert){
            List<Messaging.SingleEmailMessage> allMails = new List<Messaging.SingleEmailMessage>();
            for(User__c user: users)
            {
               
                 User__c use =[SELECT Name,Email__c, Group__c FROM User__c WHERE Id = :lead.pritam__Asignee__c];  
                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                String[] toAddresses = user.Email__c.split(',');
                mail.setToAddresses(toAddresses);
                mail.Setsubject('  New Lead has been  successfully Created ' );
                mail.setPlainTextBody('Your Lead: ' + lead.Id +' has been Created.');
                mail.setHtmlBody('New lead:<b> ' + lead.Name +' </b>has been Created.<p>'+   
                                 'Lead Asignee:<b> ' + use.Name +' </b>.<p>'+  
                                 'Lead Stage:<b> ' + lead.pritam__Stage__c +' </b>.<p>'+ 
                                 ' Lead Stack:<b> ' + lead.pritam__Stack__c +' </b>.<p>' + 
                                 ' Lead Budget:<b> ' + lead.pritam__Hourly_Budget__c +' </b>.<p>' +
                                 'Completed By:<b> ' + lead.pritam__Completed_By__c +' </b>.<p>' +  
                                 'To view your lead <a href=https://na1.salesforce.com/'+lead.Id+'>click here.</a>');
               allMails.add(mail);
                
            }
            Messaging.sendEmail(allMails);
            
        }
        
         if(trigger.isUpdate && lead.Stage__c != 'Closed'){
         List<Messaging.SingleEmailMessage> allMails = new List<Messaging.SingleEmailMessage>();
            for(User__c user: users)
            {
                 User__c use =[SELECT Name,Email__c, Group__c FROM User__c WHERE Id = :lead.pritam__Asignee__c];  
                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                String[] toAddresses = user.Email__c.split(',');
                mail.setToAddresses(toAddresses);
                mail.Setsubject(' Lead has been successfully Updated ' );
                mail.setPlainTextBody('Your Lead: ' + lead.Id +' has been Updated.');

                mail.setHtmlBody(' Lead:<b> ' + lead.Name +' </b>has been Updated.<p>'+  
                                 
                                 'Lead Asignee:<b> ' + use.Name +' </b>.<p>'+  
                                 'Lead Stage:<b> ' + lead.pritam__Stage__c +' </b>.<p>'+ 
                                 ' Lead Stack:<b> ' + lead.pritam__Stack__c +' </b>.<p>' + 
                                 ' Lead Budget:<b> ' + lead.pritam__Hourly_Budget__c +' </b>.<p>' +
                                 'Completed By:<b> ' + lead.pritam__Completed_By__c +' </b>.<p>' +  
                                 'To view your lead <a href=https://na1.salesforce.com/'+lead.Id+'>click here.</a>');
             allMails.add(mail);
                  
    }
              Messaging.sendEmail(allMails);
             
}
      if(trigger.isUpdate && lead.Stage__c == 'Closed'){
           List<Messaging.SingleEmailMessage> allMails = new List<Messaging.SingleEmailMessage>();
         for(User__c user: users)
            {
                 User__c use =[SELECT Name,Email__c, Group__c FROM User__c WHERE Id = :lead.pritam__Asignee__c];  
                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                String[] toAddresses = user.Email__c.split(',');
                mail.setToAddresses(toAddresses);
                mail.Setsubject(' Lead has been successfully Updated ' );
                mail.setPlainTextBody('Your Lead: ' + lead.Id +' has been Updated.');

                mail.setHtmlBody('Lead:<b> ' + lead.Name +' </b>has been Updated.<p>'+  
                                 
                                 'Lead Asignee:<b> ' + use.Name +' </b>.<p>'+  
                                 'Lead Stage:<b> ' + lead.pritam__Stage__c +' </b>.<p>'+ 
                                 ' Lead Stack:<b> ' + lead.pritam__Stack__c +' </b>.<p>' + 
                                 ' Lead Budget:<b> ' + lead.pritam__Hourly_Budget__c +' </b>.<p>' +
                                 'Completed By:<b> ' + lead.pritam__Completed_By__c +' </b>.<p>' +    
                                 
                                 'New Project for this lead has been also created.<p>'+
                                 'To view your Project <a href=https://na1.salesforce.com/'+Project__c.Id+'>click here.</a>');
             
                  allMails.add(mail);
            }
           Messaging.sendEmail(allMails);
         
     }
    }
    
    
    
    }