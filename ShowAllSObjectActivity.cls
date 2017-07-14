/************************************************************
 
 Name: ShowAllSObjectActivity
 Type: Apex Class  
 Objective: Apex Class for fetch all activities related to sObjects
		 
 ***********************************************************/
public class ShowAllSObjectActivity {
Id sObjectname= ApexPages.currentPage().getParameters().get('Id');

public list<Task> tasklist{get;set;}
public ShowAllSobjectActivity(){

if(sObjectname !=null )
tasklist= [select id,Status,ActivityDate,Subject,Who.Name,What.Name,Description,LastModifiedDate,Owner.Name FROM Task WHERE WhatID=:sObjectname OR whoId=:sObjectname];
}
public PageReference cancel() {
PageReference ldPage = new PageReference('/'+sObjectname);
ldPage.setRedirect(true);
return ldPage;
}
}
