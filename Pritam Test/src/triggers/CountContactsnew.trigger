trigger CountContactsnew on Contact (after insert,after delete, after Undelete,after update) {
    List<id> acclistid = new List<id>();
    if(Trigger.isInsert || Trigger.isUndelete){
        for(Contact con : Trigger.new){
            acclistid.add(con.accountid);    
        }      
    }
    if(Trigger.isDelete){
        for(Contact con :Trigger.old){
            acclistid.add(con.accountid);     
        }    
    }
    if(Trigger.isUpdate){
        for(Contact con :Trigger.old){
            acclistid.add(con.accountid);
        }
        
    }
    List<Account> acclist = new List<Account>();
    for(Account acc : [select Contact_Recs__c ,(select id from Contacts)from Account where id =: acclistid]){
        acc.Contact_Recs__c = acc.Contacts.size();
        acclist.add(acc);     
    }
    try{
        update acclist;
    }Catch(Exception e){
        system.debug('Exception :'+e.getMessage());
    }
    
}