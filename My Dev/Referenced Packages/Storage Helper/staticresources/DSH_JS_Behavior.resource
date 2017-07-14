describe("GIVEN a user is viewing the StorageRecycleJobPage", function(){
	beforeEach(function() {
		document.body.innerHTML += '<div id="maxRecordsError" style="display:none;"><font style="color:red">The max value for this field is 50,000.</font></div><br/>' + 
		                            '<div id="emailError" style="display:none;"><font style="color:red">This is not a valid email address.</font></div><br/>' + 
		                            '<div id="newSettingNameError" style="display:none;"><font style="color:red">A Storage Recycle Job already exists with this name.</font></div>' + 
		                            '<div id="NewSettingObjectError" style="display:none;"><font style="color:red">This is a required Field.</font></div>' + 
		                            '<div id="editSettingNameError" style="display:none;"><font style="color:red">A Storage Recycle Job already exists with this name.</font></div>' + 
		                            '<div id="EditSettingObjectError" style="display:none;"><font style="color:red">This is a required Field.</font></div>' + 
		                            '<div id="NewCriteriaFieldError" style="display:none;"><font style="color:red">This is a required Field.</font></div>' + 
		                            '<div id="NewCriteriaOperError" style="display:none;"><font style="color:red">This is a required Field.</font></div>' + 
		                            '<div id="EditCriteriaFieldError" style="display:none;"><font style="color:red">This is a required Field.</font></div>' + 
		                            '<div id="EditCriteriaOperError" style="display:none;"><font style="color:red">This is a required Field.</font></div>' + 
		                            '<div id="incrementError" style="display:none;"><font style="color:red">This is a required Field.</font></div>' +
		                            '<div id="nextRunError" style="display:none;"><font style="color:red">This is a required Field.</font></div>' +
		                            '<div class="slds-card" style="background:White" id="settingInfo"></div>' + 
		                            '<div class="slds-card" style="background:White; display:none" id="criterion"></div>' +
		                            '<div class="slds-card" style="background:White; display:none" id="backupSettings"></div>' +
		                            '<div id="recordPreview" style="display:none;"></div>' + 
		                            '<li id="infoTab" class="slds-tabs--scoped__item slds-text-heading--label slds-active" title="Setting Information" role="presentation" style="display:none"></li>' + 
		                            '<li id="criteriaTab" class="slds-tabs--scoped__item slds-text-heading--label" title="Criterion" role="presentation" style="display:none"></li>' + 
		                            '<li id="backupTab" class="slds-tabs--scoped__item slds-text-heading--label" title="Backup" role="presentation" style="display:none"></li>' + 
		                            '<div id="manualRun" style="display:none;"></div>' + 
		                            '<div id="editSetting" style="display:none"></div>' + 
		                            '<div id="settingConfig" style="display:none;"></div>' + 
		                            '<div id="newSetting" style="display:none"></div>' + 
		                            '<div id="editCriterion" style="display:none"></div>' + 
		                            '<div id="newCriterion" style="display:none"></div>' + 
		                            '<div id="editSchedule" style="display:none"></div>' +
		                            '<div id="activateSetting" style="display:none"></div>' +
		                            '<div id="backupConfig" style="display:none"></div>' +
		                            '<div id="helpScreen" style="display:none"></div>' +
		                            '<div id="errorTag"></div>' +
		                            '<div id="loading" style="display:none"></div>' + 
		                            '<div id="newFieldSelection" style="display:none"><div>' +
		                            '<div id="newFKSelection" style="display:none"></div>' +
		                            '<div id="editFieldSelection" style="display:none"><div>' +
		                            '<div id="editFKSelection" style="display:none"></div>' +
		                            '<div id="deletionWarning" style="display:none"></div>' +
		                            '<div id="backupDownload" style="display:none"></div>' +
		                            '<div id="cascadeDeleteBackup" style="display:none"></div>' +
		                            '<div id="cascadeDeleteObjectList" style="display:none"></div>' +
		                            '<div id="newCriteriaVariableError" style="display:none"></div>' +
		                            '<div id="editCriteriaVariableError" style="display:none"></div>' +
		                            '<div id="recordInfo" style="display:none"></div>' +
		                            '<table style="display:none">' + 
    		                            '<thead>' + 
    		                              '<tr>' + 
                                      	'<th>Name</th>' + 
                                      '</tr>' + 
                                    '</thead>' + 
                                    '<tbody>' + 
                                    	'<tr class="slds-hint-parent" id="s_1">' + 
                                      	'<td>test1</td>' + 
                                      '</tr>' + 
                                      '<tr class="slds-hint-parent" id="s_2">' + 
                                        '<td>test2</td>' + 
                                      '</tr>' + 
                                     '</tbody>' + 
                                '</table>'; 
	});
			
	afterEach(function() {
		document.getElementById('NewSettingObjectError').style.display = "none";
		document.getElementById('EditSettingObjectError').style.display = "none";
		document.getElementById('errorTag').style.display = "none";
		localStorage.clear();
	});
	
	describe("WHEN a setting is selected", function(){
		
		it("THEN the slds-is-selected style should be added to the selected setting.", function(){
            
      processSelectedSetting("1", "", "");
            
			expect(document.getElementById('s_1').className).toBe("slds-hint-parent slds-is-selected");
			expect(document.getElementById('s_2').className).toBe("slds-hint-parent");
			
			processSelectedSetting("2", "", "");
			
			expect(document.getElementById('s_2').className).toBe("slds-hint-parent slds-is-selected");
			expect(document.getElementById('s_1').className).toBe("slds-hint-parent");
		
		});

	});
	
	describe("WHEN the isValidEmail function is called", function(){
		
		it("THEN the function should return true if the email is valid, or false if not valid.", function(){
			expect(isValidEmail("test")).toBe(false);
			expect(isValidEmail("test@test")).toBe(false);
			expect(isValidEmail("test.test.test")).toBe(false);
			
			expect(isValidEmail("test@test.com")).toBe(true);
			expect(isValidEmail("test.test@test.com")).toBe(true);
			expect(isValidEmail("test123@test.com")).toBe(true);
		});

	});
	
	describe("WHEN the isBlank function is called", function(){
		
		it("THEN the function should return true if the value is blank, or false if not blank.", function(){
			expect(isBlank("0")).toBe(false);
			expect(isBlank(" test ")).toBe(false);
			expect(isBlank("test.test.test")).toBe(false);
			
			expect(isBlank("")).toBe(true);
			expect(isBlank(" ")).toBe(true);
			expect(isBlank(null)).toBe(true);
		});

	});
	
	describe("WHEN the isGreaterThanMaxLimit function is called", function(){
		
		it("THEN the function should return true if the value is greater than 50000 (max limit for queries), or false if less than 50000.", function(){
			expect(isGreaterThanMaxLimit(1)).toBe(false);
			expect(isGreaterThanMaxLimit(50000)).toBe(false);
			
			expect(isGreaterThanMaxLimit(50001)).toBe(true);
			expect(isGreaterThanMaxLimit(99999)).toBe(true);
		});

	});
	
	describe("WHEN the showSettingInfo function is called and the criterion tab was previously selected", function(){
	
		beforeEach( function() {
			document.getElementById('criterion').style.display = "block";
    		document.getElementById("criteriaTab").className = "slds-tabs--scoped__item slds-text-heading--label slds-active";
		});
		
		it("THEN the setting info pane should be displayed, and setting info tab selected.", function(){
			showSettingInfo();
			
			expect(document.getElementById('settingInfo').style.display).toBe("block");
			expect(document.getElementById('criterion').style.display).toBe("none");
			expect(document.getElementById('recordPreview').style.display).toBe("none");
			expect(document.getElementById('backupSettings').style.display).toBe("none");
			expect(document.getElementById("backupTab").className).toBe("slds-tabs--scoped__item slds-text-heading--label");
			expect(document.getElementById("infoTab").className).toBe("slds-tabs--scoped__item slds-text-heading--label slds-active");
			expect(document.getElementById("criteriaTab").className).toBe("slds-tabs--scoped__item slds-text-heading--label");
		});

	});
	
	describe("WHEN the showCriterion function is called and the setting info tab was previously selected", function(){
	
		beforeEach( function() {
			document.getElementById('settingInfo').style.display = "block";
    		document.getElementById("infoTab").className = "slds-tabs--scoped__item slds-text-heading--label slds-active";
		});
		
		it("THEN the criterion pane should be displayed, and criterion tab selected.", function(){
			showCriterion();
			
			expect(document.getElementById('criterion').style.display).toBe("block");
			expect(document.getElementById('settingInfo').style.display).toBe("none");
			expect(document.getElementById('recordPreview').style.display).toBe("none");
			expect(document.getElementById('backupSettings').style.display).toBe("none");
			expect(document.getElementById("backupTab").className).toBe("slds-tabs--scoped__item slds-text-heading--label");
			expect(document.getElementById("criteriaTab").className).toBe("slds-tabs--scoped__item slds-text-heading--label slds-active");
			expect(document.getElementById("infoTab").className).toBe("slds-tabs--scoped__item slds-text-heading--label");
		});

	});
	
	describe("WHEN the showBackup function is called and the setting info tab was previously selected", function(){
	
		beforeEach( function() {
			document.getElementById('settingInfo').style.display = "block";
    		document.getElementById("infoTab").className = "slds-tabs--scoped__item slds-text-heading--label slds-active";
		});
		
		it("THEN the backup pane should be displayed, and backup tab selected.", function(){
			showBackup();
			
			expect(document.getElementById('criterion').style.display).toBe("none");
			expect(document.getElementById('settingInfo').style.display).toBe("none");
			expect(document.getElementById('recordPreview').style.display).toBe("none");
			expect(document.getElementById('backupSettings').style.display).toBe("block");
			expect(document.getElementById("backupTab").className).toBe("slds-tabs--scoped__item slds-text-heading--label slds-active");
			expect(document.getElementById("infoTab").className).toBe("slds-tabs--scoped__item slds-text-heading--label");
			expect(document.getElementById("criteriaTab").className).toBe("slds-tabs--scoped__item slds-text-heading--label");
		});

	});
	
	describe("WHEN the hideSettingConfig function is called and the setting config modal is currently displaying with errors", function(){
	
		beforeEach( function() {
			document.getElementById('settingConfig').style.display = "block";
	    	document.getElementById('maxRecordsError').style.display = "block";
	    	document.getElementById('emailError').style.display = "block";
		});
		
		it("THEN setting config modal and errors should be hidden.", function(){
			hideSettingConfig();
			
			expect(document.getElementById('settingConfig').style.display).toBe("none");
			expect(document.getElementById('settingConfig').style.display).toBe("none");
			expect(document.getElementById('settingConfig').style.display).toBe("none");
		});

	});
	
	describe("WHEN the edit setting modal is displayed and the user clicks the edit criterion button", function(){
	
		beforeEach( function() {
			document.getElementById('settingInfo').style.display = "block";
			document.getElementById("infoTab").className = "slds-tabs--scoped__item slds-text-heading--label";
			document.getElementById('criterion').style.display = "none";
    		document.getElementById("infoTab").className = "slds-tabs--scoped__item slds-text-heading--label slds-active";
			document.getElementById('editSetting').style.display = "block";
		});
		
		it("THEN the edit setting modal should be hidden and the criterion tab should be selected and displayed.", function(){
			showCriterion();
			
			expect(document.getElementById('editSetting').style.display).toBe("none");
			expect(document.getElementById('infoTab').className).toBe("slds-tabs--scoped__item slds-text-heading--label");
			expect(document.getElementById('criterion').style.display).toBe("block");
			expect(document.getElementById('criteriaTab').className).toBe("slds-tabs--scoped__item slds-text-heading--label slds-active");
		});

	});
	
	describe("WHEN the user tries to save a schedule that is not a future date.", function(){
	
		beforeEach( function() {
			showEditSchedule();
		});
		
		it("THEN the schedule modal should not be hidden, and error message should display.", function(){
			hideEditSchedule('error');
			
			expect(document.getElementById('editSchedule').style.display).toBe("block");
			expect(document.getElementById('nextRunError').innerHTML).toBe('<font style="color:red">error</font>');
		});

	});
	
	describe("WHEN the user encounteres an error, and error text should be displayed.", function(){
	
		beforeEach( function() {
			showEditSchedule();
		});
		
		it("THEN the correct error tag should be rendered and error message displayed.", function(){
			showError('test error text', 'errorTag');
			
			expect(document.getElementById('errorTag').style.display).toBe("block");
			expect(document.getElementById('errorTag').innerHTML).toBe('<font style="color:red">test error text</font>');
		});

	});
	
	describe("WHEN the user is done editing a backup config and clicks the save method (which calls the displayActivationConfigAfterBackupConfig function).", function(){
	
		beforeEach( function() {
			showBackupConfig();
		});
		
		it("THEN the backup modal should be hidden, and activation modal shown.", function(){
			displayActivationConfigAfterBackupConfig();
			
			expect(document.getElementById('activateSetting').style.display).toBe("block");
			expect(document.getElementById('backupConfig').style.display).toBe("none");
		});

	});
			
	describe("WHEN a non relationship field is selected when creating a criteria.", function(){
		
		it("THEN the fk field select list should be hiden, and field list should be the correct size.", function(){
			setFildSelectListSize('new', 0);
			
			expect(document.getElementById('newFieldSelection').className).toBe("slds-size--1-of-1");
			expect(document.getElementById('newFKSelection').style.display).toBe("none");
		});

	});
	
	describe("WHEN a relationship field is selected when creating a criteria.", function(){
		
		it("THEN the fk field select list should be shown, and field list should be the correct size.", function(){
			setFildSelectListSize('new', 10);
			
			expect(document.getElementById('newFieldSelection').className).toBe("slds-size--1-of-2");
			expect(document.getElementById('newFKSelection').style.display).toBe("block");
		});

	});
	
	describe("WHEN a non relationship field is selected when editing a criteria.", function(){
		
		it("THEN the fk field select list should be hiden, and field list should be the correct size.", function(){
			setFildSelectListSize('edit', 0);
			
			expect(document.getElementById('editFieldSelection').className).toBe("slds-size--1-of-1");
			expect(document.getElementById('editFKSelection').style.display).toBe("none");
		});

	});
	
	describe("WHEN a relationship field is selected when editing a criteria.", function(){
		
		it("THEN the fk field select list should be shown, and field list should be the correct size.", function(){
			setFildSelectListSize('edit', 10);
			
			expect(document.getElementById('editFieldSelection').className).toBe("slds-size--1-of-2");
			expect(document.getElementById('editFKSelection').style.display).toBe("block");
		});

	});
	
	describe("WHEN the user is viewing the deletion warning message and clicks the view backup files button.", function(){
	
		beforeEach( function() {
			showDeletionWarning();
		});
		
		it("THEN the deletion warning message should be hiden, and backup popup displayed.", function(){
			showBackupDownload();
			
			expect(document.getElementById('backupDownload').style.display).toBe("block");
			expect(document.getElementById('deletionWarning').style.display).toBe("none");
		});

	});
	
	describe("WHEN the user is viewing the backup config modal and clicks the link to edit child object backups.", function(){
		
		it("THEN the child object backup modal should display.", function(){
			showBackupChildObjects();
			
			expect(document.getElementById('cascadeDeleteObjectList').style.display).toBe("block");
			expect(document.getElementById('cascadeDeleteBackup').style.display).toBe("none");
			expect(document.getElementById('backupConfig').style.display).toBe("none");
		});

	});
	
	describe("WHEN the user is viewing the child object backup config modal and clicks the link to select fields to backup.", function(){
		
		it("THEN the backup field backup modal should display.", function(){
			showChildBackupModal();
			
			expect(document.getElementById('cascadeDeleteBackup').style.display).toBe("block");
			expect(document.getElementById('cascadeDeleteObjectList').style.display).toBe("none");
		});

	});
	
	describe("WHEN the user is viewing the child field backup config modal and clicks to close it.", function(){
		
		beforeEach( function() {
			showChildBackupModal();
		});
		
		it("THEN the backup field backup modal should hiden.", function(){
			hideChildBackupModal();
			
			expect(document.getElementById('cascadeDeleteBackup').style.display).toBe("none");
			expect(document.getElementById('cascadeDeleteObjectList').style.display).toBe("block");
		});

	});
	
	describe("WHEN the user is viewing the object backup config modal and clicks to close it.", function(){
		
		beforeEach( function() {
			showBackupChildObjects();
		});
		
		it("THEN the child object backup modal should hiden.", function(){
			hideBackupChildObjects();
			
			expect(document.getElementById('cascadeDeleteObjectList').style.display).toBe("none");
		});

	});
	
	describe("WHEN the user is editing a filter and selects a LAST_N_UNIT condition and does not populate a number", function(){
		
		it("THEN an error message should be displayed.", function(){
			showEditCriteriaVariableError();
			
			expect(document.getElementById('editCriteriaVariableError').style.display).toBe("block");
		});

	});
	
	describe("WHEN the user is editing a filter and selects a LAST_N_UNIT condition and does populate a number", function(){
		
		beforeEach( function() {
			document.getElementById('editCriteriaVariableError').style.display = 'block';
		})
		
		it("THEN an error message should not be displayed.", function(){
			hideEditCriteriaVariableError();
			
			expect(document.getElementById('editCriteriaVariableError').style.display).toBe("none");
		});

	});
	
	describe("WHEN the user is creating a filter and selects a LAST_N_UNIT condition and does not populate a number", function(){
		
		it("THEN an error message should be displayed.", function(){
			showNewCriteriaVariableError();
			
			expect(document.getElementById('newCriteriaVariableError').style.display).toBe("block");
		});

	});
	
	describe("WHEN the user is creating a filter and selects a LAST_N_UNIT condition and does populate a number", function(){
		
		beforeEach( function() {
			document.getElementById('newCriteriaVariableError').style.display = 'block';
		})
		
		it("THEN an error message should not be displayed.", function(){
			hideNewCriteriaVariableError();
			
			expect(document.getElementById('newCriteriaVariableError').style.display).toBe("none");
		});

	});
	
	describe("WHEN any of the show/hide functions are called", function(){
		
		it("THEN the corresponding item should be shown/hidden.", function(){
			showEditObjectError();
			expect(document.getElementById('EditSettingObjectError').style.display).toBe("block");
			showNewObjectError();
			expect(document.getElementById('NewSettingObjectError').style.display).toBe("block");
			showManualRun();
			expect(document.getElementById('manualRun').style.display).toBe("block");
			showSettingEdit();
			expect(document.getElementById('editSetting').style.display).toBe("block");
			showSettingConfig();
			expect(document.getElementById('settingConfig').style.display).toBe("block");
			showRecordPreview();
			expect(document.getElementById('recordPreview').style.display).toBe("block");
			showMaxRecordsError();
			expect(document.getElementById('maxRecordsError').style.display).toBe("block");
			showEmailError();
			expect(document.getElementById('emailError').style.display).toBe("block");
			showNewSetting();
			expect(document.getElementById('newSetting').style.display).toBe("block");
			showNewCriteriaFieldError();
			expect(document.getElementById('NewCriteriaFieldError').style.display).toBe("block");
			showNewCriteriaOperError();
			expect(document.getElementById('NewCriteriaOperError').style.display).toBe("block");
			showEditCriteriaFieldError();
			expect(document.getElementById('EditCriteriaFieldError').style.display).toBe("block");
			showEditCriteriaOperError();
			expect(document.getElementById('EditCriteriaOperError').style.display).toBe("block");
			showEditCriterion();
			expect(document.getElementById('editCriterion').style.display).toBe("block");
			showNewCriterion();
			expect(document.getElementById('newCriterion').style.display).toBe("block");
			showEditSchedule();
			expect(document.getElementById('editSchedule').style.display).toBe("block");
			showSettingActivation(true);
			expect(document.getElementById('activateSetting').style.display).toBe("block");
			showBackupConfig();
			expect(document.getElementById('backupConfig').style.display).toBe("block");
			showIncrementError();
			expect(document.getElementById('incrementError').style.display).toBe("block");
			showNextRunError();
			expect(document.getElementById('nextRunError').style.display).toBe("block");
			showHelpScreen();
			expect(document.getElementById('helpScreen').style.display).toBe("block");
			showBackupDownload();
			expect(document.getElementById('backupDownload').style.display).toBe("block");
			showDeletionWarning();
			expect(document.getElementById('deletionWarning').style.display).toBe("block");
			
			
			
			hideNewCriterion();
			expect(document.getElementById('newCriterion').style.display).toBe("none");
			hideEditCriterion();
			expect(document.getElementById('editCriterion').style.display).toBe("none");
			hideManualRun();
			expect(document.getElementById('manualRun').style.display).toBe("none");
			hideEditSchedule('');
			expect(document.getElementById('editSchedule').style.display).toBe("none");
			hideHelpScreen();
			expect(document.getElementById('helpScreen').style.display).toBe("none");
			
			hideAllModals();
			expect(document.getElementById('newSetting').style.display).toBe("none");
		    expect(document.getElementById('newCriterion').style.display).toBe("none");
		    expect(document.getElementById('manualRun').style.display).toBe("none");
		    expect(document.getElementById('editCriterion').style.display).toBe("none");
		    expect(document.getElementById('editSetting').style.display).toBe("none");
		    expect(document.getElementById('settingConfig').style.display).toBe("none");
		    expect(document.getElementById('recordPreview').style.display).toBe("none");
		    expect(document.getElementById('editSchedule').style.display).toBe("none");
		    expect(document.getElementById('EditCriteriaFieldError').style.display).toBe("none");
		    expect(document.getElementById('EditCriteriaOperError').style.display).toBe("none");
		    expect(document.getElementById('NewCriteriaFieldError').style.display).toBe("none");
		    expect(document.getElementById('NewCriteriaOperError').style.display).toBe("none");
		    expect(document.getElementById('maxRecordsError').style.display).toBe("none");
		    expect(document.getElementById('emailError').style.display).toBe("none");
		    expect(document.getElementById('activateSetting').style.display).toBe("none");
		    expect(document.getElementById('incrementError').style.display).toBe("none");
			expect(document.getElementById('nextRunError').style.display).toBe("none");
			expect(document.getElementById('helpScreen').style.display).toBe("none");
			expect(document.getElementById('backupConfig').style.display).toBe("none");
			expect(document.getElementById('deletionWarning').style.display).toBe("none");
			expect(document.getElementById('backupDownload').style.display).toBe("none");
		});

	});

	describe("WHEN the user clicks on a archive record name link.", function(){
		
		it("THEN the archive record information modal should be displated.", function(){
			showArchiveRecordInfo();
			
			expect(document.getElementById('recordInfo').style.display).toBe("block");
		});

	});

	describe("WHEN the user clicks out of the arhive record info modal.", function(){
		
		it("THEN the archive record information modal should be hiden.", function(){
			hideArchiveRecordInfo();
			
			expect(document.getElementById('recordInfo').style.display).toBe("none");
		});

	});

	describe("WHEN the user is viewing the child object backup config modal and clicks the link to select fields to backup.", function(){
		
		it("THEN the backup field backup modal should display.", function(){
			showChildBackupModal();
			
			expect(document.getElementById('cascadeDeleteBackup').style.display).toBe("block");
			expect(document.getElementById('cascadeDeleteObjectList').style.display).toBe("none");
		});

	});

	describe("WHEN the user enters search term that equals a record name that was arcived", function(){
		
		it("THEN the record that meet the serch terms should be returned.", function(){
			var backupBody = 'id,name,description,createdDate\n';

			backupBody += '0,Test Record 0,this is a test description,today\n';
			backupBody += '1,Test Record 1,something different than the rest,today\n';
			backupBody += '2,Test Record 2,this is a test description,today\n';
			backupBody += '3,Test Record 3,this is a test description,today\n';
			backupBody += '4,Test Record 4,this is a test description,today\n';
			backupBody += '5,Test Record 5,this is a test description,today\n';
			backupBody += '6,Test Record 6,this is a test description,today\n';
			backupBody += '6,Test Record 7,this is a test description,today\n';
			backupBody = btoa(backupBody);

			var archiveRecordList = [];
			archiveRecordList = buildRecordFoundInBackup(backupBody, 'Test Record 1', 'name')
			
			expect(archiveRecordList[0]).toBe('id&&&1');
			expect(archiveRecordList[1]).toBe('name&&&Test Record 1');
			expect(archiveRecordList[2]).toBe('description&&&something different than the rest');
			expect(archiveRecordList[3]).toBe('createdDate&&&today');
		});

	});

	describe("WHEN the user enters search term that equals a record that contains new line characters", function(){
		
		it("THEN the record that meet the serch terms should be returned.", function(){
			var backupBody = 'id,name,description,createdDate\n';

			backupBody += '0,Test Record 0,this is a test description,today\n';
			backupBody += '1,Test Record 1,"something different \n than, the \n rest",today\n';
			backupBody += '2,Test Record 2,this is a test description,today\n';
			backupBody += '3,Test Record 3,this is a test description,today\n';
			backupBody += '4,Test Record 4,this is a test description,today\n';
			backupBody += '5,Test Record 5,this is a test description,today\n';
			backupBody += '6,Test Record 6,this is a test description,today\n';
			backupBody += '6,Test Record 7,this is a test description,today\n';
			backupBody = btoa(backupBody);

			var archiveRecordList = [];
			archiveRecordList = buildRecordFoundInBackup(backupBody, 'Test Record 1', 'name')
			
			expect(archiveRecordList[0]).toBe('id&&&1');
			expect(archiveRecordList[1]).toBe('name&&&Test Record 1');
			expect(archiveRecordList[2]).toBe('description&&&something different \n than, the \n rest');
			expect(archiveRecordList[3]).toBe('createdDate&&&today');
		});

	});
	
});