var waitDialog;
var _employee = "Employee";
var _levels = "Levels";
var _movement = "Movement";
var _division = "Division";
var LookupStatus = "Status";
var _myDropzone;
var _clearance = "Clearance";
var secretkey ="wacky1974";
var lvl;
var fullName;
var ErrRequired = [];
var _clearanceDetails = "Clearance_Details";
var _name ="";
var _bank ="Banks";
//var newDivSubj;
//var newUnitSubj;
function showMsgModal(title,text,type){
      swal({
			title: title,
			text: text ,							  
			type: type,
			allowOutsideClick:false,
			showCancelButton: false,
			showConfirmButton: false
						  
			})
   }

   
   
function showMsgRedirect(title,text,type){
      swal({
			title: title,
			text: text ,
			timer: 4000,
			type: type,
			allowOutsideClick:false
			}).then(
				function () {
					$('.btn').css('pointer-events', 'none'); 
					window.open(_spPageContextInfo.webAbsoluteUrl , "_self");
					},
					
					// handling the promise rejection
				function (dismiss) {
							$('.btn').css('pointer-events', 'none'); 
							if (dismiss === 'timer') {
							window.open(_spPageContextInfo.webAbsoluteUrl , "_self");
												}
							  		}
					)
   }
   function showMsgOk(title,text,type){
      swal({
			title: title,
			text: text ,
			timer: 4000,
			type: type,
			allowOutsideClick:false
			}).then(
				
					function () {
								   
						},
					
					// handling the promise rejection
					function (dismiss) {
						if (dismiss === 'timer') {
									  
							}
						}
					)
   }  
   
(function () {
		
		angular.module("app")
        .controller('Ctrl',["$q","$http", "$scope", "$filter", "$window", "$timeout", "utilsvc", "listservice", "filesvc", "displaysvc", function ($q, $http, $scope, $filter, $window, $timeout, utilsvc, listservice, filesvc, displaysvc) {

		$scope.ClearanceHistory = { '__metadata': {'type': 'SP.Data.Clearance_x005f_HistoryListItem'}, Title:"",Date:"",UpdatedBy:"",Status:"",RoutingStatus:"",Remarks:""};
		
		$scope.ClearanceDetails = { '__metadata': {'type': 'SP.Data.Clearance_x005f_DetailsListItem'}, Title:"",Division:"",Unit:"",Cost:"",UnitClearanceSubStatus:"",ClearingOfficer:"",Clearance_Status:""};
		$scope.ClearanceHeader = { '__metadata': {'type': 'SP.Data.ClearanceListItem'}, Title:"", Request_x0020_No:"<div></div>", AdministeringOfficerId:"",ClearanceStatusId:"",ClearanceRoutingStatusId:"",NameId:"",EmployeeName:"",EmployeeIDNo:"",Position:"",Division:"",Level:"",Movement:"",DateHired:"",DateSeperated:"",Email:"",Reference:"",EmailAddress:"",Telephone:"",MobilePhone:"",Remarks:"",FolderName:""};
		$scope.CancelClearance = { '__metadata': {'type': 'SP.Data.ClearanceListItem'}, ClearanceStatusId:"",ClearanceRoutingStatusId:""};
		$scope.CancelClearanceDetails = { '__metadata': {'type': 'SP.Data.Clearance_x005f_DetailsListItem'}, ClearanceStatus:""};
		$scope.TempHeader = { '__metadata': {'type': 'SP.Data.ClearanceListItem'}, AdministeringOfficerId:"",Position:"",Division:"",Level:"",Movement:"",DateHired:"",DateSeperated:"",Reference:"",EmailAddress:"",Telephone:"",MobilePhone:"",Remarks:"",FolderName:""};
		$scope.SavedHeader = { '__metadata': {'type': 'SP.Data.ClearanceListItem'}, AdministeringOfficerId:"",NameId:"",EmployeeName:"",EmployeeIDNo:"",Position:"",Division:"",Level:"",Movement:"",DateHired:"",DateSeperated:"",Email:"",Reference:"",EmailAddress:"",Telephone:"",MobilePhone:"",Remarks:"",FolderName:""};
		$scope.Clearance = { 
			ClearanceNo: "", 
			ApplicationDate: "",
			AdminOfficer: "",
			Status: "", 
			RoutingStatus: "",
			EmpName: "",
			EmpNameErr: "",
			EmpID: "",
			EmpIDErr: "",
			Position: "",
			PositionErr: "",
			Division: "",
			DivisionErr: "",
			Level: "",
			LevelErr: "",
			Movement: "",
			MovementErr: "",
			DateHired: "",
			DateHiredErr: "",
			DateSeparated: "",
			DateSeparatedErr: "",
			Email: "",
			EmailErr: "",
			EmailAddress: "",
			EmailAddressErr: "",
			Folder: "",
			Telephone: "",
			TelephoneErr: "",
			MobilePhone: "",
			MobilePhoneErr: "",
			Remarks: ""
			
		}	
		
		$scope.SendBackDetails = { 
			Remarks: "",
			RemarksErr: "",
			Date: ""	
		}
		
		$scope.Check = { 
			CheckNo: "",
			CheckNoErr: "",
			BankErr: "",
			CheckDateErr: "",
			Payee: "",
			PayeeErr: "",
			DocumentNo: "",
			DocumentNoErr: ""	
		}
		

		load();
		function load(){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
			_site = _spPageContextInfo.siteAbsoluteUrl; //rootsite
           	_web = _spPageContextInfo.webAbsoluteUrl; //subsite
           	_webRelativeURL = _spPageContextInfo.webServerRelativeUrl; 
			//alert(displaysvc.GetUrlParameter("param"));
			
			$('.datetimepicker').datepicker({ autoclose: true, todayHighlight: true });
			
			$(function(){
                Dropzone.autoDiscover = false;
                _myDropzone = new Dropzone(".myDrz", {
                    url: "file/post",
                    autoProcessQueue: false,
                    uploadMultiple: true,
                    autoQueue: true,
                    addRemoveLinks: true,
                    init: function() {
					      this.on("addedfile", 
					          function(file) {
					            /*
					            if (_myDropzone.files.length!=0) {
					               $('#DropzoneErrlbl').hide();		               
					             } */
					             
					             
					      });
					      this.on("removedfile", 
					          function(file) {
					            /* 
					            if (_myDropzone.files.length===0) {
					               $('#DropzoneErrlbl').show();
					            } */
					      });
				   }
                })
            });

			var initRequestor = [{ id: _spPageContextInfo.userId, text: _spPageContextInfo.userDisplayName }];
			$scope.userId = _spPageContextInfo.userId;

			var param = CryptoJS.AES.decrypt(displaysvc.GetUrlParameter("param"), secretkey);
			var type = displaysvc.GetUrlParameter("type");
			_id = param.toString(CryptoJS.enc.Utf8);
			_clearanceID = displaysvc.GetUrlParameter("param");
			
			$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance')/items?$top=5000&$select=*,AdministeringOfficer/Title,AdministeringOfficer/EMail&$expand=AdministeringOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
				$scope.Clearance = response.data.value;
				
				$.each($scope.Clearance[0].AdministeringOfficer, function(index,item){
					$scope.Clearance.AdminOfficer = item.Title;
					$scope.Clearance.AdminOfficerEmail = item.EMail;
				});
				
				$.each(response.data.value, function(index, item){
					utilsvc.LookupStatusId("Clearance Status", item.ClearanceStatusId, LookupStatus).then(function(results){ 
						$scope.Clearance.MainStatus = results.data.d.results[0].Description;
						$scope.statId = results.data.d.results[0].ID;
						if(type == 'edit'){
							if ($scope.Clearance.MainStatus == "For Clearance Completion") {
								$scope.isDraft = true;
								$scope.readonly = false;
							} 
							
						
						/*for CR	if ($scope.Clearance.MainStatus == "Accountability Completion" || $scope.Clearance.MainStatus == "Accountability Completion-Sent Back" || $scope.Clearance.MainStatus == "HR Head/OIC Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AMAO/Title,AMAO/EMail&$expand=ClearingOfficer,AMAO&$filter=Title eq '" + _id.replace(/\"/g,'') + "' and UnitStatus eq 'Unit Cleared'&$orderby=Unit'").then(function(response){	
									$scope.ClearanceDetailsTable = response.data.value;
									
									$scope.isSaveEdit = true;
									$scope.isSendback = true;
									$scope.readonly = true;
									
								});
							} 

					*/		
							if ($scope.Clearance.MainStatus == "Accountability Completion") {
								$scope.isSaveEdit = true;
								$scope.readonly = true;
							}
							if ($scope.Clearance.MainStatus != "For Clearance Completion" && $scope.Clearance.MainStatus != "Accountability Completion"){
								$scope.isSaveEdit = true;
								$scope.readonly = true;
							}
						}
						
						if(type == 'approval'){
							if ($scope.Clearance.MainStatus == "HR Head/OIC Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AMAO/Title,AMAO/EMail&$expand=ClearingOfficer,AMAO&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
									$scope.ClearanceDetailsTable = response.data.value;
									$scope.isOIC = true;
									$scope.isClearanceDetails = true;
									$scope.readonly = true;
								});
							}
							
							if ($scope.Clearance.MainStatus == "Payroll Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AMAO/Title,AMAO/EMail&$expand=ClearingOfficer,AMAO&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
									$scope.ClearanceDetailsTable = response.data.value;
									$scope.isSendback = true;
									$scope.isPayroll = true;
									$scope.readonly = true;						
								});	
							}
							
							if ($scope.Clearance.MainStatus == "Finance AP Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AMAO/Title,AMAO/EMail&$expand=ClearingOfficer,AMAO&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
									$scope.ClearanceDetailsTable = response.data.value;
									
									$scope.isFinance = true;
									$scope.isClearanceDetails = true;
									$scope.readonly = true;						
								});
							} 
							
							if ($scope.Clearance.MainStatus == "Treasury Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AMAO/Title,AMAO/EMail&$expand=ClearingOfficer,AMAO&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
									$scope.ClearanceDetailsTable = response.data.value;
									
									$scope.isTreasury = true;
									$scope.isClearanceDetails = true;
									$scope.readonly = true;						
								});
							}
							
							if ($scope.Clearance.MainStatus == "HR Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AMAO/Title,AMAO/EMail&$expand=ClearingOfficer,AMAO&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
									$scope.ClearanceDetailsTable = response.data.value;
									
									$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Check_Details')/items?&$filter=Title eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
										$scope.CheckDetails = response.data.value;
											utilsvc.PopulateLookUp($("#cboBank"), _web, _bank , "", "Bank", "Bank", "Bank", false, $("#BankErrlbl"), 0);
											
											$scope.isHRComp = true;
											$scope.isClearanceDetails = true;
											$scope.readonly = true;	
									});					
								});
							}
							
							if ($scope.Clearance.MainStatus == "Check Release") {
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AMAO/Title,AMAO/EMail&$expand=ClearingOfficer,AMAO&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
									$scope.ClearanceDetailsTable = response.data.value;
									
									$scope.isCheckRelease = true;
									$scope.isCheckDetails = true;
									$scope.readonly = true;	
									
									$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Check_Details')/items?&$filter=Title eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
										$scope.CheckDetails = response.data.value;
	
									});				
								});
							} 

						}
	
							utilsvc.LookupStatusId("Clearance Routing Status", item.ClearanceRoutingStatusId, LookupStatus).then(function(results){ 
								$scope.Clearance.MainRoutingStatus = results.data.d.results[0].Description;
								$scope.routeStatId = results.data.d.results[0].ID;
							});
					});
					
					_ClearanceNo = item.Title;
					$scope.Clearance.itemid = item.ID;
					$scope.Clearance.ClearanceNo = item.Title;
					$scope.Clearance.EmpName = item.EmployeeIDNo + " " + "|" + " " + item.EmployeeName;
					$scope.Clearance.ApplicationDate = $filter('date')(item.ApplicationDate, 'MM/dd/yyyy');
					//$scope.Clearance.EmpName = item.EmployeeName;
					$scope.Clearance.EmpID = item.EmployeeIDNo;
					$scope.Clearance.Position = item.Position;
					//$scope.Clearance.Division = item.Division;
					$scope.Clearance.Level = item.Level;
					//$scope.Clearance.Movement = item.Movement;
					$scope.Clearance.DateHired = $filter('date')(item.DateHired, 'MM/dd/yyyy');
					$('#DateHired').val($scope.Clearance.DateHired);
					$scope.Clearance.DateSeparated = $filter('date')(item.DateSeperated, 'MM/dd/yyyy');
					$('#DateSeparated').val($scope.Clearance.DateSeparated);
					$scope.Clearance.Email = item.Email;
					$scope.Clearance.Telephone = item.Telephone;
					$scope.Clearance.MobilePhone = item.MobilePhone;
					$scope.Clearance.Reference = item.Reference;
					$scope.Clearance.EmailAddress = item.EmailAddress;
					$scope.Clearance.Remarks = item.Remarks;
					$scope.Clearance.Folder = item.FolderName;
					
					$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$select=*&$filter=Employee_x0020_ID eq '" + $scope.Clearance.EmpID +  "'").then(function(response){	
						$scope.Employees = response.data.value;
						
						if($scope.Employees.length > 0){
							var initName = [{ id: $scope.Employees[0].Employee_x0020_ID, text: $scope.Employees[0].calcDesc }];
							utilsvc.PopulateNameLookUp($("#cboName"), _site, _employee , initName, "Employee_x0020_ID", "calcDesc", "calcDesc", false, $("#EmpNameErrlbl"), 3);
							$scope.lname = $scope.Employees[0].Family_x0020_Name;
							$scope.fname = $scope.Employees[0].Given_x0020_Name;
							fullName = $scope.Employees[0].Given_x0020_Name + " " + $scope.Employees[0].Family_x0020_Name;
							_divisionHeadEmail = $scope.Employees[0].DivisionHead_Email;
							_immediateSuperiorEmail = $scope.Employees[0].ImmediateSuperior_Email;
							if(_divisionHeadEmail){
								var e = ResolvebyEmail(_divisionHeadEmail);
								   	if (e){
								   		$scope.DivisionHeadSelectedId = e.Id;
							       		$scope.DivisionHeadSelectedEmail = e.Email;
									}
							}
							if(_immediateSuperiorEmail){
								var f = ResolvebyEmail(_immediateSuperiorEmail);
									if (f){
							      		$scope.ImmediateSuperiorSelectedId = f.Id;
							      		$scope.ImmediateSuperiorSelectedEmail = f.Email;
									}
							}
							
							
							utilsvc.LookupStatusValue("Clearance Status", 'For Clearance Completion', LookupStatus).then(function(results){ 
								$scope.draft = results.data.d.results[0].Description;
								$scope.draftId = results.data.d.results[0].ID;
								
								utilsvc.LookupStatusValue("Clearance Status", 'Cancelled', LookupStatus).then(function(results){ 
									$scope.cancelled = results.data.d.results[0].Description;
									$scope.cancelledId = results.data.d.results[0].ID;
	
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance')/items?$top=5000&$select=*,AdministeringOfficer/Title&$expand=AdministeringOfficer&$filter=EmployeeIDNo eq '" + $scope.Employees[0].Employee_x0020_ID +  "' and ClearanceStatusId ne '" + $scope.draftId + "' and ClearanceStatusId ne '" + $scope.cancelledId + "'").then(function(response){	
											$scope.checkEmp = response.data.value;
										});
								});

							});



						} else {
							utilsvc.PopulateNameLookUp($("#cboName"), _site, _employee , "", "Employee_x0020_ID", "calcDesc", "calcDesc", false, $("#EmpNameErrlbl"), 3);
						}
						if(item.Level != null){
							var initLevel = [{ id: item.Level, text: item.Level }];
							utilsvc.PopulateLookUp($("#cboLevel"), _web, _levels , initLevel, "LevelDescription", "LevelDescription", "LevelDescription", false, $("#LevelErrlbl"), 0);			
						} else {
							utilsvc.PopulateLookUp($("#cboLevel"), _web, _levels , "", "LevelDescription", "LevelDescription", "LevelDescription", false, $("#LevelErrlbl"), 0);
						}	
						
						if(item.Email != null){
							var initEmail = [{ id: item.Email, text: item.Email}];
							utilsvc.PopulateNameLookUp($("#cboEmail"), _site, _employee , initEmail , "Email", "Email", "Email", false, $("#EmailErrlbl"), 3);
						} else {
							utilsvc.PopulateNameLookUp($("#cboEmail"), _site, _employee , initEmail , "Email", "Email", "Email", false, $("#EmailErrlbl"), 3);
						}
						
						if(item.Division != null){
							var initDivision = [{ id: item.Division, text: item.Division }];
							utilsvc.PopulateLookUp($("#cboDivision"), _web, _division , initDivision , "Division", "Division", "Division", false, $("#DivisionErrlbl"), 0);
						} else {
							utilsvc.PopulateLookUp($("#cboDivision"), _web, _division , "" , "Division", "Division", "Division", false, $("#DivisionErrlbl"), 0);
						}
						
						if(item.Movement != null){
							var initMovement = [{ id: item.Movement, text: item.Movement}];
							utilsvc.PopulateLookUp($("#cboMovement"), _web, _movement , initMovement, "Movement", "Movement", "Movement", false, $("#MovementErrlbl"), 0);
						} else {
							utilsvc.PopulateLookUp($("#cboMovement"), _web, _movement , "", "Movement", "Movement", "Movement", false, $("#MovementErrlbl"), 0);
						}	
							
						waitDialog.close();
						//load attachments
						
					/*	var attach = [];
						
						$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/GetFolderByServerRelativeUrl('" + _spPageContextInfo.webServerRelativeUrl + "/Attachments/" + item.FolderName +"')/Files?$top=5000").then(function(response){	
						    attach.push(response.data.value);
						    
						    $http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AMAO/Title,AMAO/EMail&$expand=ClearingOfficer,AMAO&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
								$scope.ClearDet = response.data.value;
								var ctr = $scope.ClearDet.length;
								$.each($scope.ClearDet, function(index, item){
									$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/GetFolderByServerRelativeUrl('" + _spPageContextInfo.webServerRelativeUrl + "/Attachments/" + item.FolderName +"')/Files?$top=5000").then(function(response){	
									    $.each(response.data.value, function(index,item){
									    	attach[0].push(item); 
									    	ctr = ctr - 1;
										  	if(ctr == 0){
										  		$scope.Attachments = attach[0];
										  	}
										});
									});
								});
							}); */
						$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/GetFolderByServerRelativeUrl('" + _spPageContextInfo.webServerRelativeUrl + "/Attachments/" + item.FolderName +"')/Files?$top=5000&$select*,Author/Id&$expand=Author").then(function(response){	
							$scope.Attachments = response.data.value;
 
						}).catch(function(data){
						  alert(data.data["odata.error"].message.value);
						 		      
						});  
						
					});		
					 
					
					$('#cboName').change(function (e) {
				
						$("#cboEmail").empty();
						$("#cboDivision").empty();
						
						waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
		
						$timeout(function () {
							$scope.EmployeeID = $('#cboName option:selected').val();
							
							$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$select=*&$filter=Employee_x0020_ID eq '" + $scope.EmployeeID +  "' and CompanyCode eq 1000").then(function(response){	
								$scope.Employee = response.data.value;				
									
									_divisionHeadEmail = $scope.Employee[0].DivisionHead_Email;
									//_immediateSuperior = $scope.Employee[0].ImmediateSuperior_Name;
									_immediateSuperiorEmail = $scope.Employee[0].ImmediateSuperior_Email;
									
									$scope.lname = $scope.Employee[0].Family_x0020_Name;
									$scope.fname = $scope.Employee[0].Given_x0020_Name

									utilsvc.LookupStatusValue("Clearance Status", 'Completed', LookupStatus).then(function(results){ 
										$scope.complete = results.data.d.results[0].Description;
										$scope.completeId = results.data.d.results[0].ID;
									});
																			
									$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance')/items?$top=5000&$select=*,AdministeringOfficer/Title&$expand=AdministeringOfficer&$filter=EmployeeIDNo eq '" + $scope.Employee[0].Employee_x0020_ID +  "'").then(function(response){	
										$scope.checkEmp = response.data.value;
										//var _name ="";
										var ctr = 0;
										
									//	if($scope.checkEmp.length < 1){
											_EmployeeEmail = $scope.Employee[0].Email;
									
											if(_EmployeeEmail){
												var d = ResolvebyEmail(_EmployeeEmail);
													if (d){
														if(_divisionHeadEmail){
															var e = ResolvebyEmail(_divisionHeadEmail);
												          	if (!e){
												          		waitDialog.close();
												          		showMsgRedirect("","Division Head email not found in 365 site users list! Please contact you administrator to update employee DB","warning");
												          	    //alert('Division Head email not found in 365 site users list! Please update ');
												          	    return;
												          	} else {
												          		$scope.DivisionHeadSelectedId = e.Id;
												          		$scope.DivisionHeadSelectedEmail = e.Email;
												          		
												          		if(_immediateSuperiorEmail){
																	var f = ResolvebyEmail(_immediateSuperiorEmail);
														          	if (!f){
														          		waitDialog.close();
														          		showMsgRedirect("","Immediate Superior email not found in 365 site users list! Please contact you administrator to update employee DB","warning");
														          	    //alert('Immediate Superior email not found in 365 site users list!');
														          	    return;
														          	} else {
														          		$scope.ImmediateSuperiorSelectedId = f.Id;
														          		$scope.ImmediateSuperiorSelectedEmail = f.Email;
														          		$('#EmailErrlbl').hide();
														          		var initEmail = [{ id: $scope.Employee[0].Email, text: $scope.Employee[0].Email }];
																		utilsvc.PopulateNameLookUp($("#cboEmail"), _site, _employee , initEmail , "Email", "Email", "Email", false, $("#EmailErrlbl"), 0);
																		$scope.Clearance.Email = $scope.Employee[0].Email;						
																		var initDivision = [{ id: $scope.Employee[0].Division, text: $scope.Employee[0].Division }];
																		utilsvc.PopulateLookUp($("#cboDivision"), _web, _division , initDivision , "Division", "Division", "Division", false, $("#DivisionErrlbl"), 0);
																		if($scope.Employee[0].JobLevel != null || $scope.Employee[0].JobLevel != undefined){
																			$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Levels')/items?$top=5000&$filter=Level eq '" + $scope.Employee[0].JobLevel +  "'").then(function(response){	
																				$scope.level = response.data.value;
																				if($scope.level.length > 0){
																					var initLevel = [{ id: $scope.level[0].LevelDescription, text: $scope.level[0].LevelDescription}];
																					utilsvc.PopulateLookUp($("#cboLevel"), _web, _levels , initLevel , "LevelDescription", "LevelDescription", "LevelDescription", false, $("#LevelErrlbl"), 0);
																				}
																			});
																		}
																		$scope.Clearance.Division= $scope.Employee[0].Division;
																		$scope.Clearance.EmpID = $scope.Employee[0].Employee_x0020_ID;
																		fullName = $scope.Employee[0].Given_x0020_Name + " " + $scope.Employee[0].Family_x0020_Name;
														          	}
														        }
												          	}
												        }
															
									          		} else {
														waitDialog.close();
														showMsgRedirect("","Employee email not found in 365 site users list! Please contact you administrator to update employee DB","warning");
										          	  	//alert('Requestor email not found in 365 site users list!');
										          	   	return;
													}
												}
									/*	} else {
											if($scope.checkEmp[0].EmployeeIDNo != '' && $scope.checkEmp[0].ClearanceStatus  != $scope.completeId){
												ErrRequired.push('EmpName'); 
												$('#EmpNameErrlbl').show(); 
												$scope.Clearance.EmpNameErr = "Cannot Proceed," + " " + $scope.fname + " " + $scope.lname + " has existing clearance record";
												$scope.Clearance.EmpID = "";
												showMsgOk("","Cannot Proceed," + " " + $scope.fname + " " + $scope.lname + " has existing clearance record","error");
											}	
											$.each($scope.checkEmp[0].AdministeringOfficer, function(index,item){
												if (ctr < 1)
													_name += item.Title  
												else
													_name += "," + item.Title 
											});
										} */
										waitDialog.close();														
									});							
								
								if ($scope.Employee[0].Email){
								  $('#EmailErrlbl').hide();  
								}
								
								if ($scope.Employee[0].Division){
								  $('#DivisionErrlbl').hide();  
								}
		
								if ($scope.Employee[0].Employee_x0020_ID){
								  $('#EmpIDErrlbl').hide();  
								}
		
								
							});
						});	  	
					});	

					
				});//end of each
				
				 
					
					
				$scope.ShowAttachment = function(filename) {
					window.open(window.location.origin + filename , "_blank");
				}
	
					//load transaction history
				$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_History')/items?$select=UpdatedBy/Title,*&$expand=UpdatedBy&$filter=Title eq '" + $scope.Clearance.ClearanceNo + "'&$top=20&$orderby=Created desc").then(function(response){	
					$scope.TransHistory = response.data.value;
				}).catch(function(data){
					alert(data.data["odata.error"].message.value);
						//waitDialog.close();		      
				});
				
				$scope.UnitStatus = "Unit Uncleared - Send Back";
				$scope.UnitRoutingStatus = "For Clearing Completion";
				
				utilsvc.LookupStatusValue("Unit Status", $scope.UnitStatus, LookupStatus).then(function(results){ 
					$scope.UnitSendBack = results.data.d.results[0].Description;
				}); 
					
				utilsvc.LookupStatusValue("Unit Routing Status", $scope.UnitRoutingStatus, LookupStatus).then(function(results){ 
					$scope.UnitRoutingSendBack = results.data.d.results[0].Description;
				});
					
				$scope.DivisionStatus = "Accountability Completion";
				$scope.DivisionRoutingStatus = "For Clearing Division Completion";
			                
			    utilsvc.LookupStatusValue("Clearance Status", $scope.DivisionStatus, LookupStatus).then(function(results){ 
					$scope.DivPayrollStatus = results.data.d.results[0].Description;
				});
							
				utilsvc.LookupStatusValue("Clearance Routing Status", $scope.DivisionRoutingStatus, LookupStatus).then(function(results){ 
					$scope.DivPayrollRoutingStatus = results.data.d.results[0].Description;
				});
					
				
				$scope.PayrollClearanceStatus = "Accountability Completion-Sent Back";
				$scope.PayrollDivisionRoutingStatus = "For Clearing Division Completion";
			                
			    utilsvc.LookupStatusValue("Clearance Status", $scope.PayrollClearanceStatus, LookupStatus).then(function(results){ 
					$scope.MainPayrollStatus = results.data.d.results[0].Description;
					$scope.MainPayrollStatusId = results.data.d.results[0].ID;
				});
							
				utilsvc.LookupStatusValue("Clearance Routing Status", $scope.PayrollDivisionRoutingStatus, LookupStatus).then(function(results){ 
					$scope.MainPayrollRoutingStatus = results.data.d.results[0].Description;
					$scope.MainPayrollRoutingStatusId = results.data.d.results[0].ID;
				});
				
				$scope.PayrollCompletion = "Payroll Completion";
				$scope.PayrollCompletionRoutingStatus = "For Payroll Completion";
			                
			    utilsvc.LookupStatusValue("Clearance Status", $scope.PayrollCompletion, LookupStatus).then(function(results){ 
					$scope.MainPayrollCompletion = results.data.d.results[0].Description;
					$scope.MainPayrollCompletionId = results.data.d.results[0].ID;
				});
							
				utilsvc.LookupStatusValue("Clearance Routing Status", $scope.PayrollCompletionRoutingStatus, LookupStatus).then(function(results){ 
					$scope.MainPayrollCompletionRoutingStatus = results.data.d.results[0].Description;
					$scope.MainPayrollCompletionRoutingStatusId = results.data.d.results[0].ID;
				});


	
			waitDialog.close();	
			}); //end of 1st http get
			
				$('#txtCheckNo').change(function(e){
					if($('#txtCheckNo').val() != null){ $('#CheckNoErrlbl').hide(); }
				});
				
				$('#cboBank').change(function(e){
					if($('#cboBank option:selected').val() != null){ $('#BankErrlbl').hide(); }
				});
				
				$('#CheckDate').change(function(e){
					if($('#CheckDate').val().length != 0){
						$('#CheckDateErrlbl').hide();
					} else {
						$('#CheckDateErrlbl').show();
						$scope.Clearance.CheckDateErr = "Please fill out this field"
					}
					
				});
				
				$('#txtPayee').change(function(e){
					if($('#txtPayee').val() != null){ $('#PayeeErrlbl').hide(); }
				});
				
				$('#txtDocumentNo').change(function(e){
					if($('#txtDocumentNo').val() != null){ $('#DocumentNoErrlbl').hide(); }
				});	
						

			
			if($('#cboDivision').text != null){ $('#DivisionErrlbl').hide(); }


			$('#cboName').change(function(e){
				if($('#cboName option:selected').val() != null){ $('#EmpNameErrlbl').hide();} 
			});
				
			$('#txtPosition').change(function(e){
				if($('#txtPosition').val() != null){ $('#PositionErrlbl').hide(); }
			});
			
			$('#txtEmpID').change(function(e){
				if($('#txtEmpID').val() != null){ $('#EmpIDErrlbl').hide(); }
			});

				
			$('#cboDivision').change(function(e){
				if($('#cboDivision option:selected').val() != null){ $('#DivisionErrlbl').hide(); }
			});

			$('#cboLevel').change(function(e){
				if($('#cboLevel option:selected').val() != null){ 
					$('#LevelErrlbl').hide(); 
				}
			});

			$('#cboMovement').change(function(e){
				if($('#cboMovement option:selected').val() != null){ $('#MovementErrlbl').hide(); }
			});
				
			$('#cboEmail').change(function(e){
				if($('#cboEmail option:selected').val() != null){ $('#EmailErrlbl').hide(); }
			});
				
			$('#txtReference').change(function(e){
				if($('#cboEmail').val() != null){ $('#ReferenceErrlbl').hide(); }
			});
				
			$('#txtEmailAdd').change(function(e){
				if($('#txtEmailAdd').val() != null){ $('#EmailAddErrlbl').hide(); }
			});
				
			$('#txtTelephone').change(function(e){
				if($('#txtTelephone').val() != null){ $('#TelephoneErrlbl').hide(); }
			});
				
			$('#txtMobilePhone').change(function(e){
				if($('#txtMobilePhone').val() != null){ $('#MobilePhoneErrlbl').hide(); }
			});
				
			$('#DateHired').change(function(e){
				if($('#DateHired').val().length != 0){
					$('#DateHiredErrlbl').hide();
				} else {
					$('#DateHiredErrlbl').show();
					$scope.Clearance.DateHiredErr = "Please fill out this field"
				}
				
			});
					
			$('#DateSeparated').change(function(e){
				if($('#DateSeparated').val().length != 0){	
				   var isDateValid = checkdate();
				   	if(isDateValid == "late"){
				   		$('#DateSeparatedErrlbl').show();
				    	$scope.Clearance.DateSeparatedErr = "Date Separated must be later than Date Hired";
				    	ErrRequired.push('DateSeparated');
				    } else if(isDateValid == "equal"){
				    	$('#DateSeparatedErrlbl').show();
				    	$scope.Clearance.DateSeparatedErr = "Date Separated is equal to Date Hired";
				    	ErrRequired.push('DateSeparated');
				    } else {
				      	$('#DateSeparatedErrlbl').hide();	
				    }
				        
				} 
				/* else {
					$('#DateSeperatedErrlbl').show();
					$scope.Clearance.DateSeperatedErr = "Please fill out this field"
				} */
								        
			}); 

		}; //end of load()
		
		
		function validateForm(ErrRequired){
				    //var validate = validateAllDetails();
		    ErrRequired = ErrRequired || [];
			
		/*	if ($scope.Clearance.MainStatus == "For Clearance Completion") {
				if(!$('#cboName').val()){ ErrRequired.push('EmpName'); $('#EmpNameErrlbl').show(); $scope.Clearance.EmpNameErr = "Please fill out this field";} 
					
				if($scope.checkEmp.length > 0){
					ErrRequired.push('EmpNames'); 
					$('#EmpNameErrlbl').show(); 
					$scope.Clearance.EmpNameErr = "Cannot Proceed," + " " + $scope.fname + " " + $scope.lname + " has existing clearance record";
				}
			} */

				//if(!$('#txtEmpID').val()){ ErrRequired.push('EmpID'); $('#EmpIDErrlbl').show(); $scope.Clearance.EmpIDErr = "Please fill out this field";}
				if(!$('#txtPosition').val()){ ErrRequired.push('Position'); $('#PositionErrlbl').show(); $scope.Clearance.PositionErr = "Please fill out this field";}
				if(!$('#cboDivision').val()){ ErrRequired.push('Division'); $('#DivisionErrlbl').show(); $scope.Clearance.DivisionErr = "Please fill out this field";}
				if(!$('#cboLevel').val()){ ErrRequired.push('Level'); $('#LevelErrlbl').show(); $scope.Clearance.LevelErr = "Please fill out this field";}
				if(!$('#cboMovement').val()){ ErrRequired.push('Movement'); $('#MovementErrlbl').show(); $scope.Clearance.MovementErr = "Please fill out this field";}
				if(!$('#cboEmail').val()){ ErrRequired.push('Email'); $('#EmailErrlbl').show(); $scope.Clearance.EmailErr = "Please fill out this field";}			
				if(!$('#txtReference').val()){ ErrRequired.push('Reference'); $('#ReferenceErrlbl').show(); $scope.Clearance.ReferenceErr = "Please fill out this field";}					
				if(!$('#txtEmailAdd').val()){ ErrRequired.push('EmailAdd'); $('#EmailAddressErrlbl').show(); $scope.Clearance.EmailAddressErr = "Please fill out this field";}
				if(!$('#txtTelephone').val()){ ErrRequired.push('Telephone'); $('#TelephoneErrlbl').show(); $scope.Clearance.TelephoneErr = "Please fill out this field";}
				if(!$('#txtMobilePhone').val()){ ErrRequired.push('MobilePhone'); $('#MobilePhoneErrlbl').show(); $scope.Clearance.MobilePhoneErr = "Please fill out this field";}
	
			
				if(!$('#DateHired').val()){
					ErrRequired.push('DateHired');
				    $('#DateHiredErrlbl').show();
				    $scope.Clearance.DateHiredErr = "Please fill out this field";
				} 
				    
				if(!$('#DateSeparated').val()){
					ErrRequired.push('DateSeparated');
				    $('#DateSeparatedErrlbl').show();
				    $scope.Clearance.DateSeparatedErr = "Please fill out this field";
				} else {
					var isDateValid = checkdate();
					    if(isDateValid == "late"){
							$('#DateSeparatedErrlbl').show();
						   	$scope.Clearance.DateSeparatedErr = "Date Separated must be later than Date Hired";
						   	ErrRequired.push('DateSeparated');
						} else if(isDateValid == "equal"){
						  	$('#DateSeparatedErrlbl').show();
						   	$scope.Clearance.DateSeparatedErr = "Date Separated is equal to Date Hired";
						   	ErrRequired.push('DateSeparated');
						} else {
						   	$('#DateSeparatedErrlbl').hide();	
						}
				} 
				
				if($scope.Clearance.MainStatus == "HR Completion"){
					if(!$('#txtCheckNo').val()){ ErrRequired.push('CheckNo'); $('#CheckNoErrlbl').show(); $scope.Check.CheckNoErr = "Please fill out this field";}
					if(!$('#cboBank').val()){ ErrRequired.push('Bank'); $('#BankErrlbl').show(); $scope.Check.BankErr = "Please fill out this field";}
					if(!$('#txtPayee').val()){ ErrRequired.push('Payee'); $('#PayeeErrlbl').show(); $scope.Check.PayeeErr = "Please fill out this field";}
					if(!$('#txtDocumentNo').val()){ ErrRequired.push('DocumentNo'); $('#DocumentNoErrlbl').show(); $scope.Check.DocumentNoErr = "Please fill out this field";}
					
					if(!$('#CheckDate').val()){
						ErrRequired.push('CheckDate');
					    $('#CheckDateErrlbl').show();
					    $scope.Check.CheckDateErr = "Please fill out this field";
					}
				}
				
			return ErrRequired;
			    
		}; //end of validateform()
			      
		$scope.removeAttachments = function(_index,relativeURL) {
        	var sure = window.confirm("Are you sure you want to delete this file? \n\n NOTE: This file will be deleted immediately even without saving the record.");
        		if (sure) {
                  //_deletedAttachments.push(relativeURL);
                	var folderurl = _webRelativeURL  + "/Attachments/"+$scope.Clearance.Folder;
                		if ($scope.Attachments.length < 2) {
	                		filesvc.DeleteFiles(folderurl).then(function(results){
		              			$(results).each(function (index,item) {
			 						if (item.status == "200") {
			 							listservice.Update($scope.Clearance.itemid,$scope.Clearance.Folder,_clearance);
			             				$scope.Attachments.splice(index, 1);
			             			}
		              			});	   				
	                  		});
                  		} else {
							filesvc.DeleteFiles(relativeURL).then(function(results){
								$(results).each(function (index,item) {
									if (item.status == "200") 
										$scope.Attachments.splice(_index, 1);
								});	   				
							});
                  		}
               }
        };
		
		function checkdate(){
		    var DateHired = $('#DateHired').val();
		    DateHired = new Date(Date.parse(DateHired.replace(/-/g,' ')));
		    
		    var DateSeparated = $('#DateSeparated ').val();	    
		    DateSeparated = new Date(Date.parse(DateSeparated.replace(/-/g,' ')));

		    if(DateSeparated < DateHired){
				return "late";
			} else if(DateSeparated.getTime() === DateHired.getTime()){
				return "equal";
			} else {
				return "true";
			}
		}; // end of checkdate()
		
		$scope.submitForm = function(){
			$scope.Status = "Accountability Completion";
		   	$scope.RoutingStatus = "For Clearing Division Completion";
		   	
		   	$scope.divStatus = "Accountability Completion";
			$scope.divRoutingStatus = "For Clearing Division Completion";
			$scope.unitStatus = "Accountability Completion";
			$scope.unitRoutingStatus = "For Clearing Completion";

	        var ErrRequired = [];
	                
	        utilsvc.LookupStatusValue("Clearance Status", $scope.Status, LookupStatus).then(function(results){ 
				$scope.Clearance.Status = results.data.d.results[0].Description;
				$scope.Clearance.ClearanceStatusId = results.data.d.results[0].ID;
			});
					
			utilsvc.LookupStatusValue("Clearance Routing Status", $scope.RoutingStatus, LookupStatus).then(function(results){ 
				$scope.Clearance.RoutingStatus = results.data.d.results[0].Description;
				$scope.Clearance.ClearanceRoutingStatusId = results.data.d.results[0].ID;
			});
			
			utilsvc.LookupStatusValue("Division Status", $scope.divStatus, LookupStatus).then(function(results){ 
				$scope.Clearance.DivisionStatus = results.data.d.results[0].Description;
				$scope.Clearance.DivisionStatusId = results.data.d.results[0].ID;
			});
			
			utilsvc.LookupStatusValue("Division Routing Status", $scope.divRoutingStatus, LookupStatus).then(function(results){ 
				$scope.Clearance.DivisionRoutingStatus = results.data.d.results[0].Description;
				$scope.Clearance.DivisionRoutingStatusId = results.data.d.results[0].ID
			});                
			
			utilsvc.LookupStatusValue("Unit Status", $scope.unitStatus, LookupStatus).then(function(results){ 
				$scope.Clearance.UnitStatus = results.data.d.results[0].Description;
				$scope.Clearance.UnitStatusId = results.data.d.results[0].ID
			});
					
			utilsvc.LookupStatusValue("Unit Routing Status", $scope.unitRoutingStatus, LookupStatus).then(function(results){ 
				$scope.Clearance.UnitRoutingStatus = results.data.d.results[0].Description;
				$scope.Clearance.UnitRoutingStatusId = results.data.d.results[0].ID
			});

					                	
			ErrRequired = validateForm(ErrRequired);
				if (ErrRequired.length == 0) {
				//confirmation
					//alert($('#cboLevel option:selected').val());
					$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('LevelGroup')/items?$top=5000&$filter=substringof('" + $('#cboLevel option:selected').val() + "',LevelGroup)").then(function(response){	
						$scope.lvlGrp = response.data.value;
							$scope.modalTable = [];
						    $.each($scope.lvlGrp, function(index,item){
						        $http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Division_Unit')/items?$select=*,Division/Division,Unit_Item/Unit,ClearingOfficer/Id,ClearingOfficer/EMail,AlternateOfficer/Id,EscalationOfficer/Id&$expand=Division,Unit_Item,ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=Level eq '" + item.ID + "'&$orderby=Unit_Item/Unit").then(function(response){	
									$scope.divUnitModal = response.data.value;
									if($scope.divUnitModal.length > 0){
										$.each($scope.divUnitModal, function(index, item){
											$scope.modalTable.push(item);
										});
										$("#modalConfirmation").modal('show');	
									}

								});
							});
					});
					
				} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null)
						$('#' + panelID + ".collapse").collapse('show');
						$('#' + ErrRequired[0]).focus()
						showMsgOk("","Please check form for error messages","error");
				}
		}; //end of submitform()
		
		$scope.SubmitConfirmation = function(){
			_email = $('#cboEmail option:selected').text();
			$pnp.sp.web.ensureUser(_email).then(function(result){
				if(result){
					createRequestNo('ocms counter', 'Permanent', function(ret) {
						if (ret != null && ret != undefined && ret != '') 
							submitEditItems($scope.Clearance.itemid, ret);										
					});
				} else
					showMsgOk("","Employee email not found in 365 site users list!","error");
			});
		}
		
		$scope.saveSentback = function(){
			var ErrRequired = [];
					                	
			ErrRequired = validateForm(ErrRequired);
				if (ErrRequired.length == 0) {
				//confirmation
					utilsvc.YesNoConfirmation('','Are you sure you want to save this request?', function(yes){
						if(yes){
							_email = $('#cboEmail option:selected').text();	
								if($scope.Clearance.Status != 'Completed'){
									$pnp.sp.web.ensureUser(_email).then(function(result){
										if(result){
											SaveSentBack($scope.Clearance.itemid, $scope.Clearance.ClearanceNo);
										} else
											showMsgOk("","Requestor email not found in 365 site users list!","error");
					
									});
								} else
									showMsgOk("","Clearance status is already completed!","info");
						}	
					});						
				} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null) {
							$('#' + panelID + ".collapse").collapse('show');
							$('#' + ErrRequired[0]).focus()
							showMsgOk("","Please check form for error messages","error");
						}
				}
        };
		
		$scope.saveForm = function(){
			//var ErrRequired = [];
					               	
			//ErrRequired = validateForm(ErrRequired);
			//	if (ErrRequired.length == 0) {
				//confirmation
				if($('#cboEmail option:selected').text()){
					utilsvc.YesNoConfirmation('','Are you sure you want to save this request?', function(yes){
						if(yes){
							_email = $('#cboEmail option:selected').text();
							$pnp.sp.web.ensureUser(_email).then(function(result){
								if(result){
									SaveEditItems($scope.Clearance.itemid);
								} else
									showMsgOk("","Employee email not found in 365 site users list!","error");
			
							});
	
						/*	utilsvc.EnsureUser(_email.split('@')[0], function(bool,email){
								if(bool)
									SaveEditItems($scope.Clearance.itemid);																									
								else 
									showMsgOk("","Requestor email not found in 365 site users list!","error");
							}); */
						}	
					});
				} else {
					utilsvc.YesNoConfirmation('','Are you sure you want to save this request?', function(yes){
						if(yes){
							SaveEditItems($scope.Clearance.itemid);
						}	
					});
				}							
			/*	} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null)
						$('#' + panelID + ".collapse").collapse('show');
						$('#' + ErrRequired[0]).focus()
						showMsgOk("","Please check form for error messages","error");
				} */
        };

	
		function SaveEditItems(_id) {
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Clearance...', 'Please wait while the request is in progress...', 150, 330);
			_itemId = CryptoJS.AES.encrypt(JSON.stringify(_id),secretkey);
			$scope.Clearance.ApplicationDate = new Date();
			$scope.Clearance.AdministeringOfficer = {'results': [_spPageContextInfo.userId * 1]};	
			//alert(JSON.stringify($scope.Clearance.AdministeringOfficer));
			
			//$scope.ClearanceHeader.Title = $scope.Clearance.ClearanceNo;
			//$scope.ClearanceHeader.Request_x0020_No = ('<a href="' + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _itemId + '">' + $scope.Clearance.ClearanceNo + '</a>');
			//$scope.ClearanceHeader.ApplicationDate = $scope.Clearance.ApplicationDate;
			$scope.SavedHeader.AdministeringOfficerId = {'results': [_spPageContextInfo.userId * 1]};	
			//$scope.ClearanceHeader.ClearanceStatusId = $scope.Clearance.ClearanceStatusId;
			//$scope.ClearanceHeader.ClearanceRoutingStatusId = $scope.Clearance.ClearanceRoutingStatusId;
			$scope.SavedHeader.NameId = _spPageContextInfo.userId * 1;	
			$scope.SavedHeader.EmployeeName = fullName;	
			$scope.SavedHeader.EmployeeIDNo = $scope.Clearance.EmpID;
			$scope.SavedHeader.Position = $scope.Clearance.Position;
			$scope.SavedHeader.Division = $('#cboDivision option:selected').val();
			$scope.SavedHeader.Level = $('#cboLevel option:selected').val();
			$scope.SavedHeader.Movement = $('#cboMovement option:selected').val();
			$scope.SavedHeader.DateHired = $scope.momentformat($('#DateHired').val());
			$scope.SavedHeader.DateSeperated = $scope.momentformat($('#DateSeparated').val());
			$scope.SavedHeader.Email = $('#cboEmail option:selected').text();
			$scope.SavedHeader.Reference = $scope.Clearance.Reference;
			$scope.SavedHeader.EmailAddress = $scope.Clearance.EmailAddress;
			$scope.SavedHeader.Telephone = $scope.Clearance.Telephone;
			$scope.SavedHeader.MobilePhone = $scope.Clearance.MobilePhone;
			$scope.SavedHeader.Remarks = $scope.Clearance.Remarks;
			
			$scope.SavedHeader.FolderName = $scope.Clearance.Folder;
			
			if ($scope.SavedHeader.FolderName == '')
			$scope.SavedHeader.FolderName = utilsvc.CreateFolderName();
				
			listservice.Update(_id, $scope.SavedHeader,_clearance).then(function(results){
				//alert(JSON.stringify(results));
				waitDialog.close();
				//save documents
				if(_myDropzone.files.length > 0){				
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							waitDialog.close();
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.SavedHeader.FolderName).then(function(result){
								waitDialog.close();
							});
					     }
				}
				//end save documents
				waitDialog.close();
				_msg = "Request has been saved."
				utilsvc.RedirectNdMsg("",_msg);
			}).catch(function(data){
                waitDialog.close();
                alert("Error on Saving Clearance. Invalid JSON data. \n\n" + JSON.stringify(data));
            });
		}

		function createRequestNo(listname, code ,callback){
			var num=1;
			var data = [];
			var clientContext = new SP.ClientContext.get_current();
			var oList = clientContext.get_web().get_lists().getByTitle(listname);        
			var camlQuery = new SP.CamlQuery();
			camlQuery.set_viewXml("<View><Query><Where><Eq><FieldRef Name='Title' /><Value Type='Text'>" +  code + "</Value></Eq></Where></Query></View>");
			var ListItems = oList.getItems(camlQuery);        
			clientContext.load(ListItems,'Include(ID,SerialNumber,Month_x0020_Number)');        
			clientContext.executeQueryAsync(
			function(){ 
				ListItemsEnum  = ListItems.getEnumerator();   
				while (ListItemsEnum.moveNext()) {
					var ListItem = ListItemsEnum.get_current();      
					data.push({SerialNumber:ListItem.get_item('SerialNumber'),Month:ListItem.get_item('Month_x0020_Number')});
				}  
				
				//start
				var today = new Date();
				mm = data[0].Month; //January is 0!
				if (code != 'Draft') {
					if (utilsvc.SameMonth(mm)) {
						num = data[0].SerialNumber+1;
						ListItem.set_item('SerialNumber',num);
					}
					else {
						ListItem.set_item('SerialNumber',num);	
						ListItem.set_item('Month_x0020_Number',today.getMonth()+1);
					}
				}
				else {
					num = data[0].SerialNumber+1;
					ListItem.set_item('SerialNumber',num);
				}
				
		        ListItem.update();
		
		        clientContext.load(oList);
		        clientContext.executeQueryAsync(function(){
			        if (data.length > 0) {
					    if (code != 'Draft') {
					    	var pad = "0000";
					    	_RequestNo = moment().format('YYYYMM') + '-' + utilsvc.padDigits(num,4);
				  			callback(_RequestNo);
				  		}
				  		else {
							_RequestNo = num.toString();				  		
							callback(_RequestNo);
				  		}
				  	}
					else
						callback('');
		        }, function(sender, args){
		            alert('Failed to create request number. \n\n Click ok and try to submit again.');
		        });
			}, //on fail
			function(){ 
				alert("createRequestNo failed to execute");
			}); 
		};
		
		
		function SaveSentBack(_id, reqno) {
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Clearance...', 'Please wait while the request is in progress...', 150, 330);
			_itemId = CryptoJS.AES.encrypt(JSON.stringify(reqno),secretkey);
			//$scope.Clearance.ClearanceNo = reqno;
			//$scope.Clearance.ApplicationDate = new Date();
			//$scope.Clearance.AdministeringOfficer = {'results': [_spPageContextInfo.userId]};	
			//alert(JSON.stringify($scope.Clearance.AdministeringOfficer));
			
			//$scope.ClearanceHeader.Title = reqno;
			//$scope.ClearanceHeader.Request_x0020_No = ('<a href="' + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _itemId + '">' + $scope.Clearance.ClearanceNo + '</a>');
			//$scope.ClearanceHeader.ApplicationDate = $scope.Clearance.ApplicationDate;
			$scope.TempHeader.AdministeringOfficerId = {'results': [_spPageContextInfo.userId * 1]};	
			//$scope.ClearanceHeader.ClearanceStatusId = $scope.Clearance.ClearanceStatusId;
			//$scope.ClearanceHeader.ClearanceRoutingStatusId = $scope.Clearance.ClearanceRoutingStatusId;
			//$scope.ClearanceHeader.NameId = _spPageContextInfo.userId;	
			//$scope.ClearanceHeader.EmployeeName = fullName;	
			//$scope.ClearanceHeader.EmployeeIDNo = $scope.Clearance.EmpID;
			$scope.TempHeader.Position = $scope.Clearance.Position;
			$scope.TempHeader.Division = $('#cboDivision option:selected').val();
			$scope.TempHeader.Level = $('#cboLevel option:selected').val();
			$scope.TempHeader.Movement = $('#cboMovement option:selected').val();
			$scope.TempHeader.DateHired = $scope.momentformat($('#DateHired').val());
			$scope.TempHeader.DateSeperated = $scope.momentformat($('#DateSeparated').val());
			//$scope.ClearanceHeader.Email = $('#cboEmail option:selected').text();
			$scope.TempHeader.Reference = $scope.Clearance.Reference;
			$scope.TempHeader.EmailAddress = $scope.Clearance.EmailAddress;
			$scope.TempHeader.Telephone = $scope.Clearance.Telephone;
			$scope.TempHeader.MobilePhone = $scope.Clearance.MobilePhone;
			$scope.TempHeader.Remarks = $scope.Clearance.Remarks;
			$scope.TempHeader.FolderName = $scope.Clearance.Folder;
			
	
			listservice.Update(_id, $scope.TempHeader,_clearance).then(function(results){
				//alert(JSON.stringify(results));
				//waitDialog.close();
				//createClearanceDetails($scope.ClearanceHeader.Level);
				//save documents
				if(_myDropzone.files.length > 0){
					waitDialog.close();
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							//waitDialog.close();
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.TempHeader.FolderName).then(function(result){
								waitDialog.close();
								_msg = "Request has been saved."
								utilsvc.RedirectNdMsg("",_msg);
							});
					     }
				} else {
					waitDialog.close();
					_msg = "Request has been saved."
					utilsvc.RedirectNdMsg("",_msg);
				}
				//end save documents
				SaveTran(reqno, "draft");				
				//waitDialog.close();
			}).catch(function(data){
               waitDialog.close();
               alert("Error on Saving Clearance. Invalid JSON data. \n\n" + JSON.stringify(data));
            });
		}


		function submitEditItems(_id, reqno) {
			
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Clearance...', 'Please wait while the request is in progress...', 150, 330);
			_itemId = CryptoJS.AES.encrypt(JSON.stringify(reqno),secretkey);
			$scope.Clearance.ClearanceNo = reqno;
			$scope.Clearance.ApplicationDate = new Date();
			$scope.Clearance.AdministeringOfficer = {'results': [_spPageContextInfo.userId * 1]};	
			//alert(JSON.stringify($scope.Clearance.AdministeringOfficer));
			
			$scope.ClearanceHeader.Title = reqno;
			$scope.ClearanceHeader.Request_x0020_No = ('<a href="' + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _itemId + '">' + $scope.Clearance.ClearanceNo + '</a>');
			$scope.ClearanceHeader.ApplicationDate = $scope.Clearance.ApplicationDate;
			$scope.ClearanceHeader.AdministeringOfficerId = {'results': [_spPageContextInfo.userId * 1]};	
			$scope.ClearanceHeader.ClearanceStatusId = $scope.Clearance.ClearanceStatusId;
			$scope.ClearanceHeader.ClearanceRoutingStatusId = $scope.Clearance.ClearanceRoutingStatusId;
			$scope.ClearanceHeader.NameId = _spPageContextInfo.userId * 1;	
			$scope.ClearanceHeader.EmployeeName = fullName;	
			$scope.ClearanceHeader.EmployeeIDNo = $scope.Clearance.EmpID;
			$scope.ClearanceHeader.Position = $scope.Clearance.Position;
			$scope.ClearanceHeader.Division = $('#cboDivision option:selected').val();
			$scope.ClearanceHeader.Level = $('#cboLevel option:selected').val();
			$scope.ClearanceHeader.Movement = $('#cboMovement option:selected').val();
			$scope.ClearanceHeader.DateHired = $filter('date')($('#DateHired').val(), 'MM/dd/yyyy');
			$scope.ClearanceHeader.DateSeperated = $filter('date')($('#DateSeparated').val(), 'MM/dd/yyyy');
			$scope.ClearanceHeader.Email = $('#cboEmail option:selected').text();
			$scope.ClearanceHeader.Reference = $scope.Clearance.Reference;
			$scope.ClearanceHeader.EmailAddress = $scope.Clearance.EmailAddress;
			$scope.ClearanceHeader.Telephone = $scope.Clearance.Telephone;
			$scope.ClearanceHeader.MobilePhone = $scope.Clearance.MobilePhone;
			$scope.ClearanceHeader.Remarks = $scope.Clearance.Remarks;
			$scope.ClearanceHeader.FolderName = $scope.Clearance.Folder;
			
	
			listservice.Update(_id, $scope.ClearanceHeader,_clearance).then(function(results){
				//alert(JSON.stringify(results));
				//waitDialog.close();
				//createClearanceDetails($scope.ClearanceHeader.Level);
				//save documents
				if(_myDropzone.files.length > 0){
				waitDialog.close();
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.ClearanceHeader.FolderName).then(function(result){
								waitDialog.close();
								createClearanceDetails($scope.modalTable);
							});
					     }
				} else {
					waitDialog.close();
					createClearanceDetails($scope.modalTable);
						//waitDialog.close();
				}

				//end save documents
				SaveTran(_RequestNo, "submit");				
				//waitDialog.close();
				//_msg = "Request has been saved."
				//utilsvc.RedirectNdMsg("",_msg);
			}).catch(function(data){
               waitDialog.close();
               alert("Error on Saving Clearance. Invalid JSON data. \n\n" + JSON.stringify(data));
            });
		}
		
		function createClearanceDetails(arr){
		var clientContext = new SP.ClientContext.get_current();
		var CDList = clientContext.get_web().get_lists().getByTitle('Clearance_Details');
		var _itemCreateInfo = new SP.ListItemCreationInformation();
		//$scope.CDListItem =
		$scope.UnitStat = [{
					value2: false,
					Description: "-",
					ID: ""
				}]
		$scope.NotesDetails = [{
					value2: false,
					Description: "",
					ID: ""
				}]

			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Sending email notification...', 'Please wait while request is in progress...', 150, 1024);
		 			var urlValue = new SP.FieldUrlValue();					
					$.each(arr, function(index, item){					
						
						$scope.CDListItem = CDList.addItem(_itemCreateInfo);
						
						$scope.CDListItem.set_item('Title', _RequestNo);
						$scope.CDListItem.set_item('Cost', '');
						$scope.CDListItem.set_item('Clearance_Status', $scope.Clearance.Status);
						$scope.CDListItem.set_item('EmployeeName', fullName);
						$scope.CDListItem.set_item('DateHired', $scope.ClearanceHeader.DateHired);
						$scope.CDListItem.set_item('DateSeparated', $scope.ClearanceHeader.DateSeperated);
						urlValue.set_url(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _itemId);
						urlValue.set_description(_RequestNo);
						$scope.CDListItem.set_item('ClearanceLink',urlValue);
						
						if(item.Unit_Item != null || item.Unit_Item != undefined) {
							if(item.Division.Division == 'Home Division'){
								$scope.CDListItem.set_item('ClearingOfficer', $scope.ImmediateSuperiorSelectedId * 1);
							} else {
								$scope.CDListItem.set_item('ClearingOfficer', item.ClearingOfficerId * 1);
							}
								$scope.CDListItem.set_item('AlternateOfficer', item.AlternateOfficerId * 1);
								$scope.CDListItem.set_item('EscalationOfficer', item.EscalationOfficerId * 1);
								$scope.CDListItem.set_item('AMAO', item.AMAOId * 1);
								$scope.CDListItem.set_item('UnitClearanceSubStatus', JSON.stringify($scope.UnitStat));
								$scope.CDListItem.set_item('Notes', JSON.stringify($scope.NotesDetails));
								$scope.CDListItem.set_item('Division', item.Division.Division);
								$scope.CDListItem.set_item('Unit', item.Unit_Item.Unit);
								$scope.CDListItem.set_item('UnitStatus', $scope.Clearance.UnitStatus);
								$scope.CDListItem.set_item('UnitRoutingStatus', $scope.Clearance.UnitRoutingStatus);
								$scope.CDListItem.set_item('NoOfTimesNotify', item.NoOfTImesNotify);
								$scope.CDListItem.set_item('ProcessingDays', item.ProcessingDays);
								$scope.CDListItem.set_item('MovementType', $('#cboMovement option:selected').val());
								$scope.CDListItem.set_item('ClearanceSubmitted', (new Date()).toISOString());
								$scope.CDListItem.set_item('DateReceivedByClearingOfficer', (new Date()).toISOString());

						} else {
							if(item.Division.Division == 'Home Division'){
								$scope.CDListItem.set_item('ClearingOfficer', $scope.DivisionHeadSelectedId * 1);
							} else {
								$scope.CDListItem.set_item('ClearingOfficer', item.ClearingOfficerId * 1);
							}
								$scope.CDListItem.set_item('AMAO', item.AMAOId * 1);
								$scope.CDListItem.set_item('Division', item.Division.Division);
								$scope.CDListItem.set_item('Unit', '');
								$scope.CDListItem.set_item('DivisionStatus', $scope.Clearance.DivisionStatus);
								$scope.CDListItem.set_item('DivisionRoutingStatus', $scope.Clearance.DivisionRoutingStatus);
								$scope.CDListItem.set_item('AlternateOfficer', item.AlternateOfficerId * 1);
								$scope.CDListItem.set_item('EscalationOfficer', item.EscalationOfficerId * 1);
								$scope.CDListItem.set_item('NoOfTimesNotify', item.NoOfTImesNotify);
								$scope.CDListItem.set_item('ProcessingDays', item.ProcessingDays);	
								$scope.CDListItem.set_item('MovementType', $('#cboMovement option:selected').val());
								$scope.CDListItem.set_item('ClearanceSubmitted', (new Date()).toISOString());
								$scope.CDListItem.set_item('DateReceivedByClearingOfficer', (new Date()).toISOString());
						}		
						
						$scope.CDListItem.set_item('FolderName', utilsvc.CreateFolderName());
			
						$scope.CDListItem.update();
		
					});//end of each
					
					clientContext.load($scope.CDListItem);
					clientContext.executeQueryAsync(function(){ 
						//waitDialog.close();
						$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,ClearingOfficer/EMail&$expand=ClearingOfficer&$filter=Title eq '" + _RequestNo + "'").then(function(response){	
							$scope.CDetails = response.data.value;
							var CDList = clientContext.get_web().get_lists().getByTitle('Clearance_Details');
							var urlValue = new SP.FieldUrlValue();	
								$.each($scope.CDetails, function(index, item){
									
										if(item.Unit != null || item.Unit != undefined) {
											$scope.CDListItem = CDList.getItemById(item.ID);
											urlValue.set_url(_spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey));
									    	urlValue.set_description(item.Unit);
									    	$scope.CDListItem.set_item('UnitLink',urlValue); 
										} else {
											$scope.CDListItem = CDList.getItemById(item.ID);
											urlValue.set_url(_spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey));
									    	urlValue.set_description(item.Division);
									    	$scope.CDListItem.set_item('DivisionLink',urlValue);
										}									   		
									$scope.CDListItem.update();
								});		
										clientContext.executeQueryAsync(function(){
											//waitDialog.close();	 
											bla();	
										},function(){
											waitDialog.close();
											alert('Save failed (2)');			
										});

								
						});

						
					},
					function(){ 
						alert('error'); 
					});
										
			function bla() {	
						var newDivSubj;	
						var divEmail_Body;		
						var promises= [];
                        var promise;
						var newUnitSubj;	
						var unitEmail_Body;
						var divTitle = []; 
						var unitTitle = [];
						
						$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
							                      
							$scope.EmailNotif = response.data.value;	
								
							$.each($scope.EmailNotif, function(index, item){
								if(item.Control_x0020_Code == 'NewDiv'){
									divEmail_Body = item.Message_x0020_Body;
									newDivSubj = item.Subject;
									var mapObj = {
										ClearanceNo: $scope.Clearance.ClearanceNo,
										EmpLastName: $scope.lname,
										EmpFirstName: $scope.fname
									};
									
									newDivSubj = newDivSubj.replace(/ClearanceNo|EmpLastName|EmpFirstName/gi, function(matched){
									  return mapObj[matched];
									});	
								}

								if(item.Control_x0020_Code == 'NewUnit'){
									unitEmail_Body = item.Message_x0020_Body				 
									newUnitSubj = item.Subject;
									var mapObj = {
										ClearanceNo: $scope.Clearance.ClearanceNo,
										EmpLastName: $scope.lname,
										EmpFirstName: $scope.fname
									};
									newUnitSubj = newUnitSubj.replace(/ClearanceNo|EmpLastName|EmpFirstName/gi, function(matched){
									  return mapObj[matched];
									});
								}
							});	//end of $each email notif
								$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/EMail&$expand=ClearingOfficer&$filter=Title eq '" + _RequestNo + "'").then(function(response){	
									$scope.ClearanceDetail = response.data.value;	
										var clientContext = new SP.ClientContext.get_current();
										var THList = clientContext.get_web().get_lists().getByTitle('ClearanceDetails_History');
										var _itemCreateInfo = new SP.ListItemCreationInformation();
										
									$.each($scope.ClearanceDetail, function (index, item){
										$scope.THListItem = THList.addItem(_itemCreateInfo);
										var c = 0;
										if(item.Unit == null || item.Unit == undefined){
											$.each($scope.ClearanceDetail, function (index, item2){	
												if(item2.Division == item.Division){
													c++;
												}
											});
											
											if(c < 2){
												_divId = CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey);
												_divBody = divEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + _divId + "'> Link </a>";
												var divEmail_To = [];
												var divEmail_Cc = [];

												divEmail_To.push(item.ClearingOfficer.EMail)
												promise = sendEmail(_spPageContextInfo.userEmail, divEmail_To, divEmail_Cc, _divBody, newDivSubj);
												promises.push(promise);
											}
											$scope.THListItem.set_item('Title', item.ID);
											$scope.THListItem.set_item('DivisionStatus', $scope.Clearance.DivisionStatus);
											$scope.THListItem.set_item('DivisionRoutingStatus', $scope.Clearance.DivisionRoutingStatus);
											
										} else {
											$scope.THListItem.set_item('Title', item.ID);
											$scope.THListItem.set_item('UnitStatus', $scope.Clearance.UnitStatus);
											$scope.THListItem.set_item('UnitRoutingStatus', $scope.Clearance.UnitRoutingStatus);
											
											_unitId = CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey);
											_unitBody = unitEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + _unitId + "'> Link </a>";												
											var unitEmail_To = [];
											var unitEmail_Cc = [];

											unitEmail_To.push(item.ClearingOfficer.EMail)
											promise = sendEmail(_spPageContextInfo.userEmail, unitEmail_To, unitEmail_Cc, _unitBody, newUnitSubj);	
											promises.push(promise);
										}
										$scope.THListItem.set_item('ClearanceNo', _RequestNo);
										$scope.THListItem.set_item('Date', (new Date()).toISOString());
										$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
										$scope.THListItem.update();
									});
									
									clientContext.load($scope.THListItem);
									clientContext.executeQueryAsync(function(){
										
									},
									function(){ 
										//silent alert('error'); 
									}); 
								}); //end of clearance details	
								    $q.all(promises).then(function(){	
										$("#modalConfirmation").modal('hide'); 
										waitDialog.close();
										_msg = "Request has been submitted."
										utilsvc.RedirectNdMsg("",_msg);	
									});                          		
						}); //end of emailnotif
						
					
			}	
			//waitDialog.close();
		}
		
		$scope.CancelClickConfirmation = function() {  
		 	$("#modalConfirmation").modal('hide');   
		 }
		
		
		
		function SaveTran(reqno, type)
        {
			//save transaction
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			
			$scope.THListItem.set_item('Title', reqno);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			if(type == "submit"){
				$scope.THListItem.set_item('Status', $scope.Clearance.Status);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.RoutingStatus);
			} else {
				$scope.THListItem.set_item('Status', $scope.Clearance.MainStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.MainRoutingStatus);
			}
			$scope.THListItem.set_item('Remarks', "");
							
			$scope.THListItem.update();
			clientContext.load($scope.THListItem);
			clientContext.executeQueryAsync(function(){ 
				//silent alert('saved'); 
			},
			function(){ 
				//silent alert('error'); 
			});
			//transaction end
        }

		$scope.SaveDocument = function(files,foldername){	        	
			var deffered = $q.defer();
            var i = 0;
            var serverRelativeUrlToFolder = "/sites/FMSDev/ocms/Attachments/" + foldername;
            if (files.length > 0) {
                filesvc.CreateFolder(serverRelativeUrlToFolder).then(function (results) {
	                $.when.apply($, files.map(function (item) {
	                    return $scope.UploadDocument(item, serverRelativeUrlToFolder).then(function (result) {
	                        i++;
	                        //waitDialog.close();
	                        waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Uploading... ', 'Processing ' + files[i - 1].name + '</br>' + i + ' of ' + files.length + ' file(s)</br>Please wait while request is in progress...', 200, 1024);
	                    });
	                })).then(function () {
	                    deffered.resolve("success");
	                    waitDialog.close();
	                });
				}).catch(function (fallback) {
				    deffered.reject(fallback);
				    waitDialog.close();
				});
            } else {
                deffered.resolve("success");
                waitDialog.close();
            };
            return deffered.promise;
            waitDialog.close();
	        		        	
        };
		
		$scope.UploadDocument = function(file,serverRelativeUrlToFolder)
		{	
			var deferred = $q.defer();
			filesvc.GetFileBuffer(file).then(function(data)
			{
				debugger;
				filesvc.FileUpload(data, file.name,serverRelativeUrlToFolder).then(function(result){
					deferred.resolve(result);
					waitDialog.close();
				});
			})
			.catch(function (err) {
				deferred.reject(err);
				waitDialog.close();
			}); 
			return deferred.promise;
			waitDialog.close();
		};
		
		$scope.cancelRequest = function(){
			_CH = "Clearance_History";
			$scope.Status = "Cancelled";
			
			utilsvc.YesNoConfirmation('','Are you sure you want to cancel this request?', function(ret){
				if (ret) {
					utilsvc.LookupStatusValue("Clearance Status", $scope.Status, LookupStatus).then(function(results){ 
						$scope.Clearance.Status = results.data.d.results[0].Description;
						$scope.Clearance.ClearanceStatusId = results.data.d.results[0].ID;
						
						utilsvc.LookupStatusValue("Clearance Routing Status", $scope.Status, LookupStatus).then(function(results){ 
							$scope.Clearance.RoutingStatus = results.data.d.results[0].Description;
							$scope.Clearance.ClearanceRoutingStatusId = results.data.d.results[0].ID;
								
							$scope.CancelClearance.ClearanceStatusId = $scope.Clearance.ClearanceStatusId;
							$scope.CancelClearance.ClearanceRoutingStatusId = $scope.Clearance.ClearanceRoutingStatusId;
							
							listservice.Update($scope.Clearance.itemid, $scope.CancelClearance,_clearance).then(function(results){
								var clientContext = new SP.ClientContext.get_current();
								var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
								var _itemCreateInfo = new SP.ListItemCreationInformation();
								$scope.THListItem = THList.addItem(_itemCreateInfo);
								
								$scope.THListItem.set_item('Title', _ClearanceNo);
								$scope.THListItem.set_item('Date', $filter('date')(new Date(), 'MM/dd/yyyy'));
								$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
								$scope.THListItem.set_item('Status', $scope.Clearance.Status);
								$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.RoutingStatus);
								$scope.THListItem.set_item('Remarks', "");
												
								$scope.THListItem.update();
								clientContext.load($scope.THListItem);
								clientContext.executeQueryAsync(function(){ 
									$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*&$filter=Title eq '" + _ClearanceNo + "'").then(function(response){	
										$scope.ClearanceDetails = response.data.value;
										
										var clientContext = new SP.ClientContext.get_current();
										var List = clientContext.get_web().get_lists().getByTitle('Clearance_Details');									    

										$.each($scope.ClearanceDetails, function(index, item){
											$scope.oListItem = List.getItemById(item.ID);
											$scope.oListItem.set_item("Clearance_Status", $scope.Clearance.Status);
											$scope.oListItem.update();
										}); //end of each
										
										clientContext.executeQueryAsync(function(){ 
											showMsgRedirect('',"Request has been cancelled.","success");
										});
									});	//end of clearance details			
														
								},
								function(){ 
									//silent alert('error'); 
								});							
							});					
						});
					});
				}
			});
		}
		
		// OIC APPROVAL
		$scope.submitByOIC = function(type){
		
			var ErrRequired = [];
			
			if(type == 'submit'){
				$scope.oicStatus = "Payroll Completion";
			   	$scope.oicRoutingStatus = "For Payroll Completion";
		                
		        utilsvc.LookupStatusValue("Clearance Status", $scope.oicStatus, LookupStatus).then(function(results){ 
					$scope.Clearance.oicStatus = results.data.d.results[0].Description;
					$scope.Clearance.oicClearanceStatusId = results.data.d.results[0].ID;
					
					utilsvc.LookupStatusValue("Clearance Routing Status", $scope.oicRoutingStatus, LookupStatus).then(function(results){ 
						$scope.Clearance.oicRoutingStatus = results.data.d.results[0].Description;
						$scope.Clearance.oicClearanceRoutingStatusId = results.data.d.results[0].ID;
					});
				});
						
				
			}
					                	
			ErrRequired = validateForm(ErrRequired);
				if (ErrRequired.length == 0) {
				//confirmation
					if(type == 'submit'){
						utilsvc.YesNoConfirmation('','Are you sure you want to approve this clearance?', function(yes){
							if(yes){ 
								submitOicEditItems(type);																									
							}	
						});	
					} else {
						utilsvc.YesNoConfirmation('','Are you sure you want to save this clearance?', function(yes){
							if(yes){ 
								submitOicEditItems(type);																									
							}	
						});
					}					
				} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null)
						$('#' + panelID + ".collapse").collapse('show');
						$('#' + ErrRequired[0]).focus()
						showMsgOk("","Please check form for error messages","error");
				}

		}
						
		function submitOicEditItems(type){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
						
			clientContext = new SP.ClientContext.get_current();
			
			var oList = clientContext.get_web().get_lists().getByTitle('Clearance');
		
		    var oListItem = oList.getItemById($scope.Clearance.itemid);
		    
		    oListItem.set_item('Position', $scope.Clearance.Position);
		    oListItem.set_item('Division', $('#cboDivision option:selected').val());
		    oListItem.set_item('Level', $('#cboLevel option:selected').val());
			oListItem.set_item('Movement', $('#cboMovement option:selected').val());
			oListItem.set_item('DateHired', $filter('date')($('#DateHired').val(), 'MM/dd/yyyy'));
			oListItem.set_item('DateSeperated', $filter('date')($('#DateSeparated').val(), 'MM/dd/yyyy'));
			
			oListItem.set_item('Reference', $scope.Clearance.Reference);
			oListItem.set_item('EmailAddress', $scope.Clearance.EmailAddress);
			oListItem.set_item('Telephone', $scope.Clearance.Telephone);
			oListItem.set_item('MobilePhone', $scope.Clearance.MobilePhone);
			oListItem.set_item('Remarks', $scope.Clearance.Remarks);
			
			if(type == 'submit'){
				oListItem.set_item('ClearanceStatus', $scope.Clearance.oicClearanceStatusId);	
			   	oListItem.set_item('ClearanceRoutingStatus', $scope.Clearance.oicClearanceRoutingStatusId);
			}	

			oListItem.update();
			
			clientContext.executeQueryAsync(function() {
				
				if(_myDropzone.files.length > 0){
				waitDialog.close();
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							//waitDialog.close();
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.Clearance.Folder).then(function(result){
								waitDialog.close();
							});
					     }
				}
				
				SaveIocTran(type);
				//waitDialog.close();
			});

		}
		
		function SaveIocTran(type)
        {
			//save IOC transaction
			var oicEmail_Body;
			var oicSubj;
			
			_oicId = CryptoJS.AES.encrypt(JSON.stringify(_ClearanceNo),secretkey);
			
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			
			$scope.THListItem.set_item('Title', _ClearanceNo);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			$scope.THListItem.set_item('Remarks', "");
			
			if(type == 'submit'){
				$scope.THListItem.set_item('Status', $scope.Clearance.oicStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.oicRoutingStatus);
			} else {
				$scope.THListItem.set_item('Status', $scope.Clearance.MainStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.MainRoutingStatus);
			}			
						
			$scope.THListItem.update();
			clientContext.load($scope.THListItem);
			clientContext.executeQueryAsync(function(){ 
				waitDialog.close()
				if(type == 'submit'){
					waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Sending email notification...', 'Please wait while request is in progress...', 150, 1024);
	
					$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
						$scope.EmailNotif = response.data.value;
	
						$.each($scope.EmailNotif, function(index, item){
							if(item.Control_x0020_Code == 'Payroll'){
								oicEmail_Body = item.Message_x0020_Body;
								oicSubj = item.Subject;
								
								var mapObj = {
									ClearanceNo: $scope.Clearance.ClearanceNo,
									EmpLastName: $scope.lname,
									EmpFirstName: $scope.fname
								};
														
								oicSubj = oicSubj.replace(/ClearanceNo|EmpLastName|EmpFirstName/gi, function(matched){
									return mapObj[matched];
								});			
							}
						});
						
							var oic_To = [];
							var oic_Cc = [];
							var oic_Bcc = [];
							
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
								$scope.StageApprover = response.data.value;
										
								$.each($scope.StageApprover, function(index, item){
									if(item.StageCode.Title == 'Payroll'){
										if(item.Role.Title == 'Sent to Approver'){
											oic_To.push(item.Name.EMail);
										}	
										if(item.Role.Title == 'Copy to Approver'){
											oic_Cc.push(item.Name.EMail);
										}
												
										if(item.Role.Title == 'Blind to Approver'){
											oic_Bcc.push(item.Name.EMail);
										}	
									}
								});

								_oicEmail_Body = oicEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _oicId + "'> Link </a>";
		
								sendEmailWithBcc(_spPageContextInfo.userEmail, oic_To, oic_Cc, oic_Bcc, _oicEmail_Body, oicSubj);							
								waitDialog.close();
								showMsgRedirect("","Clearance approved and has been sent to Payroll Department","success");
								//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _oicId , "_self");
							});
					});
				} else {
					waitDialog.close();
						showMsgRedirect("","Clearance Saved","success");
						//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _oicId , "_self");
				}
			},
			function(){ 
				//silent alert('error'); 
			});
			//transaction end
			
        } //END OF OIC APPROVAL
		
		// FINANCE APPROVAL
		
		$scope.submitByFinance = function(type){
		
			var ErrRequired = [];
			
			if(type == 'submit'){
				$scope.financeStatus = "Treasury Completion";
			   	$scope.financeRoutingStatus = "For Treasury Completion";
		                
		        utilsvc.LookupStatusValue("Clearance Status", $scope.financeStatus, LookupStatus).then(function(results){ 
					$scope.Clearance.financeStatus = results.data.d.results[0].Description;
					$scope.Clearance.financeClearanceStatusId = results.data.d.results[0].ID;
					
					utilsvc.LookupStatusValue("Clearance Routing Status", $scope.financeRoutingStatus, LookupStatus).then(function(results){ 
						$scope.Clearance.financeRoutingStatus = results.data.d.results[0].Description;
						$scope.Clearance.financeClearanceRoutingStatusId = results.data.d.results[0].ID;
					});
				});
						
				
			}
					                	
			ErrRequired = validateForm(ErrRequired);
				if (ErrRequired.length == 0) {
				//confirmation
					if(type == 'submit'){
						utilsvc.YesNoConfirmation('','Are you sure you want to approve this clearance?', function(yes){
							if(yes){ 
								submitFinanceEditItems(type);																									
							}	
						});	
					} else {
						utilsvc.YesNoConfirmation('','Are you sure you want to save this clearance?', function(yes){
							if(yes){ 
								submitFinanceEditItems(type);																									
							}	
						});
					}					
				} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null)
						$('#' + panelID + ".collapse").collapse('show');
						$('#' + ErrRequired[0]).focus()
						showMsgOk("","Please check form for error messages","error");
				}

		}

		function submitFinanceEditItems(type){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
						
			clientContext = new SP.ClientContext.get_current();
			
			var oList = clientContext.get_web().get_lists().getByTitle('Clearance');
		
		    var oListItem = oList.getItemById($scope.Clearance.itemid);
		    
		    oListItem.set_item('Position', $scope.Clearance.Position);
		    oListItem.set_item('Division', $('#cboDivision option:selected').val());
		    oListItem.set_item('Level', $('#cboLevel option:selected').val());
			oListItem.set_item('Movement', $('#cboMovement option:selected').val());
			oListItem.set_item('DateHired', $filter('date')($('#DateHired').val(), 'MM/dd/yyyy'));
			oListItem.set_item('DateSeperated', $filter('date')($('#DateSeparated').val(), 'MM/dd/yyyy'));
			
			oListItem.set_item('Reference', $scope.Clearance.Reference);
			oListItem.set_item('EmailAddress', $scope.Clearance.EmailAddress);
			oListItem.set_item('Telephone', $scope.Clearance.Telephone);
			oListItem.set_item('MobilePhone', $scope.Clearance.MobilePhone);
			oListItem.set_item('Remarks', $scope.Clearance.Remarks);
			
			if(type == 'submit'){
				oListItem.set_item('ClearanceStatus', $scope.Clearance.financeClearanceStatusId);	
			   	oListItem.set_item('ClearanceRoutingStatus', $scope.Clearance.financeClearanceRoutingStatusId);
			}	

			oListItem.update();
			
			clientContext.executeQueryAsync(function() {
				if(_myDropzone.files.length > 0){
					waitDialog.close();
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.Clearance.Folder).then(function(result){
								waitDialog.close();
							});
					     }
				}
				
				SaveFinanceTran(type);
				
			});

		}

		
		function SaveFinanceTran(type)
        {
			//save Finance transaction
			var financeEmail_Body;
			var financeSubj;
			
			_financeId = CryptoJS.AES.encrypt(JSON.stringify(_ClearanceNo),secretkey);
			
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			
			$scope.THListItem.set_item('Title', _ClearanceNo);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			$scope.THListItem.set_item('Remarks', "");
			
			if(type == 'submit'){
				$scope.THListItem.set_item('Status', $scope.Clearance.financeStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.financeRoutingStatus);
			} else {
				$scope.THListItem.set_item('Status', $scope.Clearance.MainStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.MainRoutingStatus);
			}			
						
			$scope.THListItem.update();
			clientContext.load($scope.THListItem);
			clientContext.executeQueryAsync(function(){ 
				waitDialog.close();
				if(type == 'submit'){
					waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Sending email notification...', 'Please wait while request is in progress...', 150, 1024);
	
					$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
						$scope.EmailNotif = response.data.value;
	
						$.each($scope.EmailNotif, function(index, item){
							if(item.Control_x0020_Code == 'Treasury'){
								financeEmail_Body = item.Message_x0020_Body;
								financeSubj = item.Subject;		
							}
						});
						
							var finance_To = [];
							var finance_Cc = [];
							var finance_Bcc = [];
							
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
								$scope.StageApprover = response.data.value;
										
								$.each($scope.StageApprover, function(index, item){
									if(item.StageCode.Title == 'Treasury'){
										if(item.Role.Title == 'Sent to Approver'){
											finance_To.push(item.Name.EMail);
										}	
										if(item.Role.Title == 'Copy to Approver'){
											finance_Cc.push(item.Name.EMail);
										}
												
										if(item.Role.Title == 'Blind to Approver'){
											finance_Bcc.push(item.Name.EMail);
										}	
									}
								});

								_financeEmail_Body = financeEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _financeId + "'> Link </a>";
		
								sendEmailWithBcc(_spPageContextInfo.userEmail, finance_To, finance_Cc, finance_Bcc, _financeEmail_Body, financeSubj);							
								waitDialog.close();
								showMsgRedirect("","Clearance Approved and has been sent to Treasury Department","success");
								//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _financeId , "_self");
							});
					});
				} else {
					waitDialog.close();
						showMsgRedirect("","Clearance Saved","success");
						//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _financeId , "_self");
				}
			},
			function(){ 
				//silent alert('error'); 
			});
			//transaction end
			
        }
		
		
		// FINANCE SENDBACK
		
		$scope.sendBackClearance = function(){
	 		$scope.SendBackDetails.Date = $scope.momentformat(new Date());
	 		
	 		utilsvc.YesNoConfirmation('','Are you sure you want to send back clearance', function(yes){
				if(yes){
					showRemarksModal()
				}
			});
			
		}
		
		function showRemarksModal() {  	
			
			$("#modalSendBackLog").modal('show');
		}

		$scope.validateSendBackClearance = function(){
			var ErrRequired = [];
				
			if(!$scope.SendBackDetails.Remarks){  
				ErrRequired.push(1);
				$('#RemarksErrlbl').show();
				$scope.SendBackDetails.RemarksErr = "Please fill out this field";
			}
			
			if(ErrRequired.length <= 0){
				$scope.SendBackDetails.RemarksErr = "";
				$("#modalSendBackLog").modal('hide');
				saveSendBackClearance();
			} else {
				showMsgOk("","Please check form for error messages","error");
			}
					
		}
		
		
		function saveSendBackClearance(){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);			

			var clientContext = new SP.ClientContext.get_current();
			var List = clientContext.get_web().get_lists().getByTitle('Clearance');		
			
		    $scope.oListItem = List.getItemById($scope.Clearance.itemid);	
		   	$scope.oListItem.set_item('ClearanceStatus', $scope.MainPayrollCompletionId);	
		   	$scope.oListItem.set_item('ClearanceRoutingStatus', $scope.MainPayrollCompletionRoutingStatusId);		   	
		    $scope.oListItem.update();
		    
		    clientContext.executeQueryAsync(function(){ 
				waitDialog.close();
				saveSendBackClearanceHistory();
			},function(){ 
				//silent alert('error');
			}); 
			
		}
		
		
		function saveSendBackClearanceHistory(){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Sending email notification...', 'Please wait while request is in progress...', 150, 1024);
			
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			var SBClearanceEmail_Body;
			var SBClearanceSubj;
			var promises= [];
            var promise;
				
				$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
					$scope.EmailNotif = response.data.value;
					
						$.each($scope.EmailNotif, function(index, item){
							if(item.Control_x0020_Code == 'FinanceSendBack'){
								SBClearanceEmail_Body = item.Message_x0020_Body;
								SBClearanceSubj = item.Subject;
							
								var mapObj = {
									ClearanceNo: $scope.Clearance.ClearanceNo,
									EmpLastName: $scope.lname,
									EmpFirstName: $scope.fname
								};
										
								SBClearanceSubj = SBClearanceSubj.replace(/ClearanceNo|EmpLastName|EmpFirstName/gi, function(matched){
								  return mapObj[matched];
								});			
							}
						});
								
						
							$scope.SBHistoryListItem = THList.addItem(_itemCreateInfo);
							$scope.SBHistoryListItem.set_item('Title', _ClearanceNo);
							$scope.SBHistoryListItem.set_item('Status', $scope.MainPayrollCompletion);
							$scope.SBHistoryListItem.set_item('RoutingStatus', $scope.MainPayrollCompletionRoutingStatus);
							$scope.SBHistoryListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
							$scope.SBHistoryListItem.set_item('Date', (new Date()).toISOString());
							$scope.SBHistoryListItem.set_item('Remarks', $scope.SendBackDetails.Remarks);
							$scope.SBHistoryListItem.update();
							
							var SBClearance_To = [];
							var SBClearance_Cc = [];
							var SBClearance_Bcc = [];
							
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
								$scope.StageApprover = response.data.value;
										
								$.each($scope.StageApprover, function(index, item){
									if(item.StageCode.Title == 'Payroll'){
										if(item.Role.Title == 'Sent to Approver'){
											SBClearance_To.push(item.Name.EMail);
										}	
										if(item.Role.Title == 'Copy to Approver'){
											SBClearance_Cc.push(item.Name.EMail);
										}
												
										if(item.Role.Title == 'Blind to Approver'){
											SBClearance_Bcc.push(item.Name.EMail);
										}	
									}
								});

								_SBClearanceId = CryptoJS.AES.encrypt(JSON.stringify(_ClearanceNo),secretkey);
								_SBClearanceEmail_Body = SBClearanceEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _SBClearanceId + "'> Link </a>";
								sendEmailWithBcc(_spPageContextInfo.userEmail, SBClearance_To, SBClearance_Cc, SBClearance_Bcc, _SBClearanceEmail_Body, SBClearanceSubj);
							});
						clientContext.load($scope.SBHistoryListItem);
						clientContext.executeQueryAsync(function(){	
								
								waitDialog.close();
								showMsgRedirect("","Clearance was Sent Back","success");	
								//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _SBClearanceId , "_self");
							
							
						},function(){ 
							//silent alert('error'); 
						});	
									
				}); //end of emailnotif
		}

		// END OF FINANCE SENDBACK

		// END OF FINANCE APPROVAL
		
		// START OF TREASURY APPROVAL
		$scope.submitByTreasury = function(type){
		
			var ErrRequired = [];
			
			if(type == 'submit'){
				$scope.treasuryStatus = "HR Completion";
			   	$scope.treasuryRoutingStatus = "For HR Completion";
		                
		        utilsvc.LookupStatusValue("Clearance Status", $scope.treasuryStatus, LookupStatus).then(function(results){ 
					$scope.Clearance.treasuryStatus = results.data.d.results[0].Description;
					$scope.Clearance.treasuryClearanceStatusId = results.data.d.results[0].ID;
				
					utilsvc.LookupStatusValue("Clearance Routing Status", $scope.treasuryRoutingStatus, LookupStatus).then(function(results){ 
						$scope.Clearance.treasuryRoutingStatus = results.data.d.results[0].Description;
						$scope.Clearance.treasuryClearanceRoutingStatusId = results.data.d.results[0].ID;
					});	
				});
						
				
			}
					                	
			ErrRequired = validateForm(ErrRequired);
				if (ErrRequired.length == 0) {
				//confirmation
					if(type == 'submit'){
						utilsvc.YesNoConfirmation('','Are you sure you want to approve this clearance?', function(yes){
							if(yes){ 
								submitTreasuryEditItems(type);																									
							}	
						});	
					} else {
						utilsvc.YesNoConfirmation('','Are you sure you want to save this clearance?', function(yes){
							if(yes){ 
								submitTreasuryEditItems(type);																									
							}	
						});
					}					
				} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null)
						$('#' + panelID + ".collapse").collapse('show');
						$('#' + ErrRequired[0]).focus()
						showMsgOk("","Please check form for error messages","error");
				}

		}
						
		function submitTreasuryEditItems(type){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
						
			clientContext = new SP.ClientContext.get_current();
			
			var oList = clientContext.get_web().get_lists().getByTitle('Clearance');
		
		    var oListItem = oList.getItemById($scope.Clearance.itemid);
		    
		    oListItem.set_item('Position', $scope.Clearance.Position);
		    oListItem.set_item('Division', $('#cboDivision option:selected').val());
		    oListItem.set_item('Level', $('#cboLevel option:selected').val());
			oListItem.set_item('Movement', $('#cboMovement option:selected').val());
			oListItem.set_item('DateHired', $filter('date')($('#DateHired').val(), 'MM/dd/yyyy'));
			oListItem.set_item('DateSeperated', $filter('date')($('#DateSeparated').val(), 'MM/dd/yyyy'));
			
			oListItem.set_item('Reference', $scope.Clearance.Reference);
			oListItem.set_item('EmailAddress', $scope.Clearance.EmailAddress);
			oListItem.set_item('Telephone', $scope.Clearance.Telephone);
			oListItem.set_item('MobilePhone', $scope.Clearance.MobilePhone);
			oListItem.set_item('Remarks', $scope.Clearance.Remarks);
			
			if(type == 'submit'){
				oListItem.set_item('ClearanceStatus', $scope.Clearance.treasuryClearanceStatusId);	
			   	oListItem.set_item('ClearanceRoutingStatus', $scope.Clearance.treasuryClearanceRoutingStatusId);
			}	

			oListItem.update();
			
			clientContext.executeQueryAsync(function() {
				waitDialog.close();
				if(_myDropzone.files.length > 0){
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.Clearance.Folder).then(function(result){
								waitDialog.close();
							});
					     }
				}
				
				SaveTreasuryTran(type);
				//waitDialog.close();
			});

		}
		
		function SaveTreasuryTran(type)
        {
			//save treasury transaction
			var treasuryEmail_Body;
			var treasurySubj;
			
			_treasuryId = CryptoJS.AES.encrypt(JSON.stringify(_ClearanceNo),secretkey);
			
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			
			$scope.THListItem.set_item('Title', _ClearanceNo);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			$scope.THListItem.set_item('Remarks', "");
			
			if(type == 'submit'){
				$scope.THListItem.set_item('Status', $scope.Clearance.treasuryStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.treasuryRoutingStatus);
			} else {
				$scope.THListItem.set_item('Status', $scope.Clearance.MainStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.MainRoutingStatus);
			}			
						
			$scope.THListItem.update();
			clientContext.load($scope.THListItem);
			clientContext.executeQueryAsync(function(){ 
				waitDialog.close();
				if(type == 'submit'){
					waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Sending email notification...', 'Please wait while request is in progress...', 150, 1024);
	
					$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
						$scope.EmailNotif = response.data.value;
	
						$.each($scope.EmailNotif, function(index, item){
							if(item.Control_x0020_Code == 'Quit'){
								treasuryEmail_Body = item.Message_x0020_Body;
								treasurySubj= item.Subject;	
							}
						});
						
							var treasury_To = [];
							var treasury_Cc = [];
							var treasury_Bcc = [];
							
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
								$scope.StageApprover = response.data.value;
										
								$.each($scope.StageApprover, function(index, item){
									if(item.StageCode.Title == 'Quit'){
										if(item.Role.Title == 'Sent to Approver'){
											treasury_To.push(item.Name.EMail);
										}	
										if(item.Role.Title == 'Copy to Approver'){
											treasury_Cc.push(item.Name.EMail);
										}
												
										if(item.Role.Title == 'Blind to Approver'){
											treasury_Bcc.push(item.Name.EMail);
										}	
									}
								});

								_treasuryEmail_Body = treasuryEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _treasuryId + "'> Link </a>";
		
								sendEmailWithBcc(_spPageContextInfo.userEmail, treasury_To, treasury_Cc, treasury_Bcc, _treasuryEmail_Body, treasurySubj);							
								waitDialog.close();
								showMsgRedirect("","Clearance approved and has been sent for HR Completion","success");
								//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _treasuryId , "_self");
							});
					});
				} else {
					waitDialog.close();
						showMsgRedirect("","Clearance Saved","success");
						//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _treasuryId , "_self");
				}
			},
			function(){ 
				//silent alert('error'); 
			});
			//transaction end
			
        }
        
        // END OF TREASURY APPROVAL
		
		// START OF HR COMPLETION APPROVAL
		$scope.submitByHRComp = function(type){
		
			var ErrRequired = [];
			
			if(type == 'submit'){
				$scope.HRCompStatus = "Check Release";
			   	$scope.HRCompRoutingStatus = "For Check Release";
		                
		        utilsvc.LookupStatusValue("Clearance Status", $scope.HRCompStatus, LookupStatus).then(function(results){ 
					$scope.Clearance.HRCompStatus = results.data.d.results[0].Description;
					$scope.Clearance.HRCompClearanceStatusId = results.data.d.results[0].ID;
					
					utilsvc.LookupStatusValue("Clearance Routing Status", $scope.HRCompRoutingStatus, LookupStatus).then(function(results){ 
						$scope.Clearance.HRCompRoutingStatus = results.data.d.results[0].Description;
						$scope.Clearance.HRCompClearanceRoutingStatusId = results.data.d.results[0].ID;
					});
				});
						
				
			}
					                	
			ErrRequired = validateForm(ErrRequired);
				if (ErrRequired.length == 0) {
				//confirmation
					if(type == 'submit'){
						utilsvc.YesNoConfirmation('','Are you sure you want to approve this clearance?', function(yes){
							if(yes){ 
								submitHRCompEditItems(type);																									
							}	
						});	
					} else {
						utilsvc.YesNoConfirmation('','Are you sure you want to save this clearance?', function(yes){
							if(yes){ 
								submitHRCompEditItems(type);																									
							}	
						});
					}					
				} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null)
						$('#' + panelID + ".collapse").collapse('show');
						$('#' + ErrRequired[0]).focus()
						showMsgOk("","Please check form for error messages","error");
				}

		}
						
		function submitHRCompEditItems(type){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
						
			clientContext = new SP.ClientContext.get_current();
			
			var oList = clientContext.get_web().get_lists().getByTitle('Clearance');
		
		    var oListItem = oList.getItemById($scope.Clearance.itemid);
		    
		    oListItem.set_item('Position', $scope.Clearance.Position);
		    oListItem.set_item('Division', $('#cboDivision option:selected').val());
		    oListItem.set_item('Level', $('#cboLevel option:selected').val());
			oListItem.set_item('Movement', $('#cboMovement option:selected').val());
			oListItem.set_item('DateHired', $filter('date')($('#DateHired').val(), 'MM/dd/yyyy'));
			oListItem.set_item('DateSeperated', $filter('date')($('#DateSeparated').val(), 'MM/dd/yyyy'));
			
			oListItem.set_item('Reference', $scope.Clearance.Reference);
			oListItem.set_item('EmailAddress', $scope.Clearance.EmailAddress);
			oListItem.set_item('Telephone', $scope.Clearance.Telephone);
			oListItem.set_item('MobilePhone', $scope.Clearance.MobilePhone);
			oListItem.set_item('Remarks', $scope.Clearance.Remarks);
			
			if(type == 'submit'){
				oListItem.set_item('ClearanceStatus', $scope.Clearance.HRCompClearanceStatusId);	
			   	oListItem.set_item('ClearanceRoutingStatus', $scope.Clearance.HRCompClearanceRoutingStatusId);
			}	

			oListItem.update();
			
			clientContext.executeQueryAsync(function() {
				if(_myDropzone.files.length > 0){
					waitDialog.close();
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.Clearance.Folder).then(function(result){
								waitDialog.close();
							});
					     }
				}
				
				
				$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$filter=Title eq '" + _ClearanceNo + "'").then(function(response){	
					$scope.CD = response.data.value;
					
					clientContext = new SP.ClientContext.get_current();
					var oList = clientContext.get_web().get_lists().getByTitle('Clearance_Details');
					
					$.each($scope.CD, function(index,item){
						var oListItem = oList.getItemById(item.ID);
						oListItem.set_item('QuitClaimSubmittedDate', (new Date()).toISOString());
						oListItem.update();
					});
											
					clientContext.executeQueryAsync(function() {	
						var CList = clientContext.get_web().get_lists().getByTitle('Check_Details');
						var _itemCreateInfo = new SP.ListItemCreationInformation();
						var CListItem = CList.addItem(_itemCreateInfo);
								
						CListItem.set_item('Title', _ClearanceNo);
						CListItem.set_item('CheckNo', $scope.Check.CheckNo);
						CListItem.set_item('Bank', $('#cboBank option:selected').val());
						CListItem.set_item('Date', $scope.momentformat($('#CheckDate').val()));
						CListItem.set_item('Payee', $scope.Check.Payee);
						CListItem.set_item('DocumentNo', $scope.Check.DocumentNo);
												
						CListItem.update();
								
						clientContext.load(CListItem);	
						clientContext.executeQueryAsync(function() {			
							SaveHRCompTran(type);
						});
					});
				});
					
			});

		}
		
		function SaveHRCompTran(type)
        {
			//save HR COMPLETION transaction
			var HRCompEmail_Body;
			var HRCompSubj;
			
			_HRCompId = CryptoJS.AES.encrypt(JSON.stringify(_ClearanceNo),secretkey);
			
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			
			$scope.THListItem.set_item('Title', _ClearanceNo);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			$scope.THListItem.set_item('Remarks', "");
			
			if(type == 'submit'){
				$scope.THListItem.set_item('Status', $scope.Clearance.HRCompStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.HRCompRoutingStatus);
			} else {
				$scope.THListItem.set_item('Status', $scope.Clearance.MainStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.MainRoutingStatus);
			}			
						
			$scope.THListItem.update();
			clientContext.load($scope.THListItem);
			
			clientContext.executeQueryAsync(function(){ 
				waitDialog.close();
				if(type == 'submit'){
					waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Sending email notification...', 'Please wait while request is in progress...', 150, 1024);
	
					$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
						$scope.EmailNotif = response.data.value;
	
						$.each($scope.EmailNotif, function(index, item){
							if(item.Control_x0020_Code == 'Check'){
								HRCompEmail_Body = item.Message_x0020_Body;
								HRCompSubj= item.Subject;	
							}
						});
						
							var HRComp_To = [];
							var HRComp_Cc = [];
							var HRComp_Bcc = [];
							
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
								$scope.StageApprover = response.data.value;
										
								$.each($scope.StageApprover, function(index, item){
									if(item.StageCode.Title == 'Check'){
										if(item.Role.Title == 'Sent to Approver'){
											HRComp_To.push(item.Name.EMail);
										}	
										if(item.Role.Title == 'Copy to Approver'){
											HRComp_Cc.push(item.Name.EMail);
										}
									}
								}); 
								
								HRComp_To.push($scope.Clearance.Email); //employee
								HRComp_Cc.push($scope.Clearance.AdminOfficerEmail); //creator

								_HRCompEmail_Body = HRCompEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _HRCompId+ "'> Link </a>";
		
								sendEmail(_spPageContextInfo.userEmail, HRComp_To, HRComp_Cc, _HRCompEmail_Body, HRCompSubj);							
								waitDialog.close();
								showMsgRedirect("","Clearance approved and has been tag as quit claim completed","success");
								//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _HRCompId , "_self");
							});
					});
				} else {
					waitDialog.close();
						showMsgRedirect("","Clearance Saved","success");
						//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _HRCompId , "_self");
				}
			},
			function(){ 
				//silent alert('error'); 
			});
			//transaction end
			
        }
        
        // END OF HR COMPLETION APPROVAL

		
		// START OF HR Administering officer APPROVAL
		$scope.submitByCheckRelease = function(type){
		
			var ErrRequired = [];
			
			if(type == 'submit'){
				$scope.CheckRelStatus = "Completed";
			   	$scope.CheckRelRoutingStatus = "Clearance Completed";
		                
		        utilsvc.LookupStatusValue("Clearance Status", $scope.CheckRelStatus, LookupStatus).then(function(results){ 
					$scope.Clearance.CheckRelStatus = results.data.d.results[0].Description;
					$scope.Clearance.CheckRelClearanceStatusId = results.data.d.results[0].ID;
					
					utilsvc.LookupStatusValue("Clearance Routing Status", $scope.CheckRelRoutingStatus, LookupStatus).then(function(results){ 
						$scope.Clearance.CheckRelRoutingStatus = results.data.d.results[0].Description;
						$scope.Clearance.CheckRelClearanceRoutingStatusId = results.data.d.results[0].ID;
					});
				});
						
				
			}
					                	
			ErrRequired = validateForm(ErrRequired);
				if (ErrRequired.length == 0) {
				//confirmation
					if(type == 'submit'){
						utilsvc.YesNoConfirmation('','Are you sure you want to tagged clearance as check claimed?', function(yes){
							if(yes){ 
								submitCheckRelEditItems(type);																									
							}	
						});	
					} else {
						utilsvc.YesNoConfirmation('','Are you sure you want to save this clearance?', function(yes){
							if(yes){ 
								submitCheckRelEditItems(type);																									
							}	
						});
					}					
				} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null)
						$('#' + panelID + ".collapse").collapse('show');
						$('#' + ErrRequired[0]).focus()
						showMsgOk("","Please check form for error messages","error");
				}

		}
						
		function submitCheckRelEditItems(type){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
						
			clientContext = new SP.ClientContext.get_current();
			
			var oList = clientContext.get_web().get_lists().getByTitle('Clearance');
		
		    var oListItem = oList.getItemById($scope.Clearance.itemid);
		    
		    oListItem.set_item('Position', $scope.Clearance.Position);
		    oListItem.set_item('Division', $('#cboDivision option:selected').val());
		    oListItem.set_item('Level', $('#cboLevel option:selected').val());
			oListItem.set_item('Movement', $('#cboMovement option:selected').val());
			oListItem.set_item('DateHired', $filter('date')($('#DateHired').val(), 'MM/dd/yyyy'));
			oListItem.set_item('DateSeperated', $filter('date')($('#DateSeparated').val(), 'MM/dd/yyyy'));
			
			oListItem.set_item('Reference', $scope.Clearance.Reference);
			oListItem.set_item('EmailAddress', $scope.Clearance.EmailAddress);
			oListItem.set_item('Telephone', $scope.Clearance.Telephone);
			oListItem.set_item('MobilePhone', $scope.Clearance.MobilePhone);
			oListItem.set_item('Remarks', $scope.Clearance.Remarks);
			
			if(type == 'submit'){
				oListItem.set_item('DateCompleted', (new Date()).toISOString());
				oListItem.set_item('ClearanceStatus', $scope.Clearance.CheckRelClearanceStatusId);	
			   	oListItem.set_item('ClearanceRoutingStatus', $scope.Clearance.CheckRelClearanceRoutingStatusId);
			}	

			oListItem.update();
			
			clientContext.executeQueryAsync(function() {
				waitDialog.close();
				if(_myDropzone.files.length > 0){
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.Clearance.Folder).then(function(result){
								waitDialog.close();
							});
					     }
				}
				
				SaveCheckRelTran(type);
				//waitDialog.close();
			});

		}
		
		function SaveCheckRelTran(type)
        {
			//save HR admin officer COMPLETION transaction
			var CheckRelEmail_Body;
			var CheckRelSubj;
			
			_CheckRelId = CryptoJS.AES.encrypt(JSON.stringify(_ClearanceNo),secretkey);
			
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			
			$scope.THListItem.set_item('Title', _ClearanceNo);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			$scope.THListItem.set_item('Remarks', "");
			
			if(type == 'submit'){
				$scope.THListItem.set_item('Status', $scope.Clearance.CheckRelStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.CheckRelRoutingStatus);
			} else {
				$scope.THListItem.set_item('Status', $scope.Clearance.MainStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.MainRoutingStatus);
			}			
						
			$scope.THListItem.update();
			clientContext.load($scope.THListItem);
			clientContext.executeQueryAsync(function(){ 
				waitDialog.close();
				$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*&$filter=Title eq '" + _ClearanceNo + "'").then(function(response){	
					$scope.allDetails = response.data.value;
					var clientContext = new SP.ClientContext.get_current();
					var THList = clientContext.get_web().get_lists().getByTitle('Clearance_Details');
					var _itemCreateInfo = new SP.ListItemCreationInformation();
					
					$.each($scope.allDetails, function(index, item){
						$scope.allDetailsListItem = THList.getItemById(item.ID);
						$scope.allDetailsListItem.set_item('DateCompleted', (new Date()).toISOString());
						$scope.allDetailsListItem.update();
					});
					
				
					clientContext.load($scope.THListItem);
					clientContext.executeQueryAsync(function(){ 
						if(type == 'submit'){
							waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Sending email notification...', 'Please wait while request is in progress...', 150, 1024);
			
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
								$scope.EmailNotif = response.data.value;
			
								$.each($scope.EmailNotif, function(index, item){
									if(item.Control_x0020_Code == 'Clr'){
										CheckRelEmail_Body = item.Message_x0020_Body;
										CheckRelSubj= item.Subject;	
									}
								});
								
									var CheckRel_To = [];
									var CheckRel_Cc = [];
		
									
										
										CheckRel_To.push($scope.Clearance.Email); //employee
										CheckRel_To.push($scope.Clearance.AdminOfficerEmail); //creator
		
										_CheckRelEmail_Body = CheckRelEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _CheckRelId + "'> Link </a>";
				
										sendEmail(_spPageContextInfo.userEmail, CheckRel_To, CheckRel_Cc, _CheckRelEmail_Body, CheckRelSubj);							
										waitDialog.close();
										showMsgRedirect("","Clearance approved and has been tag as completed","success");
										//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _CheckRelId , "_self");
							});
						} else {
							waitDialog.close();
								showMsgRedirect("","Clearance Saved","success");
								//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _CheckRelId , "_self");
						}
					},
					function(){ 
						//silent alert('error'); 
					});
				
				});
			},
			function(){ 
				//silent alert('error'); 
			});
			//transaction end
			
        }
        
        // END OF HR Administering officer APPROVAL

		
		
		//PAYROLL APPROVAL
		
		$scope.submitByPayroll = function(type){
		
			var ErrRequired = [];
			
			if(type == 'submit'){
				$scope.payrollStatus = "Finance AP Completion";
			   	$scope.payrollRoutingStatus = "For Finance AP Completion";
		                
		        utilsvc.LookupStatusValue("Clearance Status", $scope.payrollStatus, LookupStatus).then(function(results){ 
					$scope.Clearance.payrollStatus = results.data.d.results[0].Description;
					$scope.Clearance.payrollClearanceStatusId = results.data.d.results[0].ID;
					
					utilsvc.LookupStatusValue("Clearance Routing Status", $scope.payrollRoutingStatus, LookupStatus).then(function(results){ 
						$scope.Clearance.payrollRoutingStatus = results.data.d.results[0].Description;
						$scope.Clearance.payrollClearanceRoutingStatusId = results.data.d.results[0].ID;
					});
				});
						
				
			}
					                	
			ErrRequired = validateForm(ErrRequired);
				if (ErrRequired.length == 0) {
				//confirmation
					if(type == 'submit'){
						utilsvc.YesNoConfirmation('','Are you sure you want to approve this clearance?', function(yes){
							if(yes){ 
								submitPayrollEditItems(type);																									
							}	
						});	
					} else {
						utilsvc.YesNoConfirmation('','Are you sure you want to save this clearance?', function(yes){
							if(yes){ 
								submitPayrollEditItems(type);																									
							}	
						});
					}					
				} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null)
						$('#' + panelID + ".collapse").collapse('show');
						$('#' + ErrRequired[0]).focus()
						showMsgOk("","Please check form for error messages","error");
				}

		}
		
		function submitPayrollEditItems(type){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
						
			clientContext = new SP.ClientContext.get_current();
			
			var oList = clientContext.get_web().get_lists().getByTitle('Clearance');
		
		    var oListItem = oList.getItemById($scope.Clearance.itemid);
		    
		    oListItem.set_item('Position', $scope.Clearance.Position);
		    oListItem.set_item('Division', $('#cboDivision option:selected').val());
		    oListItem.set_item('Level', $('#cboLevel option:selected').val());
			oListItem.set_item('Movement', $('#cboMovement option:selected').val());
			oListItem.set_item('DateHired', $filter('date')($('#DateHired').val(), 'MM/dd/yyyy'));
			oListItem.set_item('DateSeperated', $filter('date')($('#DateSeparated').val(), 'MM/dd/yyyy'));
			
			oListItem.set_item('Reference', $scope.Clearance.Reference);
			oListItem.set_item('EmailAddress', $scope.Clearance.EmailAddress);
			oListItem.set_item('Telephone', $scope.Clearance.Telephone);
			oListItem.set_item('MobilePhone', $scope.Clearance.MobilePhone);
			oListItem.set_item('Remarks', $scope.Clearance.Remarks);
			
			if(type == 'submit'){
				oListItem.set_item('ClearanceStatus', $scope.Clearance.payrollClearanceStatusId);	
			   	oListItem.set_item('ClearanceRoutingStatus', $scope.Clearance.payrollClearanceRoutingStatusId);
			}	

			oListItem.update();
			
			clientContext.executeQueryAsync(function() {
				waitDialog.close();
				if(_myDropzone.files.length > 0){
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.Clearance.Folder).then(function(result){
								waitDialog.close();
							});
					     }
				}
				
				SavePayrollTran(type);
				//waitDialog.close();
			});

		}
		
		function SavePayrollTran(type)
        {
			//save IOC transaction
			var payrollEmail_Body;
			var payrollSubj;
			
			_payrollId = CryptoJS.AES.encrypt(JSON.stringify(_ClearanceNo),secretkey);
			
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			
			$scope.THListItem.set_item('Title', _ClearanceNo);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			$scope.THListItem.set_item('Remarks', "");
			
			if(type == 'submit'){
				$scope.THListItem.set_item('Status', $scope.Clearance.payrollStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.payrollRoutingStatus);
			} else {
				$scope.THListItem.set_item('Status', $scope.Clearance.MainStatus);
				$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.MainRoutingStatus);
			}			
						
			$scope.THListItem.update();
			clientContext.load($scope.THListItem);
			clientContext.executeQueryAsync(function(){ 
				waitDialog.close();
				if(type == 'submit'){
					waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Sending email notification...', 'Please wait while request is in progress...', 150, 1024);
	
					$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
						$scope.EmailNotif = response.data.value;
	
						$.each($scope.EmailNotif, function(index, item){
							if(item.Control_x0020_Code == 'Finance'){
								payrollEmail_Body = item.Message_x0020_Body;
								payrollSubj = item.Subject;	
							}
						});
						
							var payroll_To = [];
							var payroll_Cc = [];
							var payroll_Bcc = [];
							
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
								$scope.StageApprover = response.data.value;
										
								$.each($scope.StageApprover, function(index, item){
									if(item.StageCode.Title == 'Finance'){
										if(item.Role.Title == 'Sent to Approver'){
											payroll_To.push(item.Name.EMail);
										}	
										if(item.Role.Title == 'Copy to Approver'){
											payroll_Cc.push(item.Name.EMail);
										}
												
										if(item.Role.Title == 'Blind to Approver'){
											payroll_Bcc.push(item.Name.EMail);
										}	
									}
								});

								_payrollEmail_Body = payrollEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _payrollId + "'> Link </a>";
		
								sendEmailWithBcc(_spPageContextInfo.userEmail, payroll_To, payroll_Cc, payroll_Bcc, _payrollEmail_Body, payrollSubj);							
								waitDialog.close();
								showMsgRedirect("","Clearance approved and has been sent to Finance AP Department","success");
								//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _payrollId , "_self");
							});
					});
				} else {
					waitDialog.close();
						showMsgRedirect("","Clearance Saved","success");
						//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _payrollId , "_self");
				}
			},
			function(){ 
				//silent alert('error'); 
			});
			//transaction end
			
        } //END OF PAYROLL APPROVAL

		
		// PAYROLL APPROVAL SENDBACK
		$scope.SelectAllGridDetails = function(items, control) {
	 		$.each(items, function(index, item){
	 			if(item.Unit != null)
	 			item.Select = control;
	 		})
	 	}
	 	
	 	// SEND BACK UNIT (PAYROLL)
	 	$scope.sendBackUnit = function(){
	 		$scope.SendBackDetails.Date = $scope.momentformat(new Date());
	 		$scope.test = []; //uncleared unit
			$scope.SendBack = [];
			$scope.noSelected = [];
			$.each($scope.ClearanceDetailsTable, function(index, item){
				if(item.Unit != null ){
					if(item.UnitStatus != 'Unit Cleared'){
						$scope.test.push(item);		
					}
					if($scope.test.length <= 0){
						if(item.Select == true){
							$scope.SendBack.push(item);	
						} 
					} else {
						showMsgOk("","All units should be clear first","info");
					}
				}				
			});

			if($scope.SendBack.length <= 0){
				showMsgOk("","Please select unit to send back","info");
			} else {
				utilsvc.YesNoConfirmation('','Are you sure you want to send back cleared unit/s?', function(yes){
					if(yes){
						showRemarksModal()
					}
				});
			}
		}
		
		function showRemarksModal() {  	
			
			$("#modalSendBackLog").modal('show');
		}

		
		$scope.validateSendBack = function(){
			var ErrRequired = [];
				
			if(!$scope.SendBackDetails.Remarks){  
				ErrRequired.push(1);
				$('#RemarksErrlbl').show();
				$scope.SendBackDetails.RemarksErr = "Please fill out this field";
			}
			
			if(ErrRequired.length <= 0){
				$scope.SendBackDetails.RemarksErr = "";
				$("#modalSendBackLog").modal('hide');
				saveSendBack();
			} else {
				showMsgOk("","Please check form for error messages","error");
			}
					
		}
		
		function saveSendBack(){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);

			var clientContext = new SP.ClientContext.get_current();
			var DivSendBack = [];
			var newDivSendBack;
			var oList = clientContext.get_web().get_lists().getByTitle('Clearance_Details');
			var oListItem;
			$.each($scope.SendBack, function (index, item){
			
			    oListItem = oList.getItemById(item.ID);	
				oListItem.set_item('Clearance_Status', $scope.UnitSendBack);
			    oListItem.set_item('UnitStatus', $scope.UnitSendBack);
			    oListItem.set_item('UnitRoutingStatus', $scope.UnitRoutingSendBack);
				oListItem.set_item('SendBackTimes', item.SendBackTimes + 1);
				
				oListItem.update();
			});
			

			clientContext.executeQueryAsync(function() {
				$.each($scope.SendBack, function (index, item){
					DivSendBack.push(item.Division)	
				});

				newDivSendBack = removeDuplicates(DivSendBack);
				
				$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*&$filter=Unit eq null and Title eq '" + _ClearanceNo + "'").then(function(response){	
					$scope.AllDiv = response.data.value;
					
					var clientContext = new SP.ClientContext.get_current();
					var List = clientContext.get_web().get_lists().getByTitle('Clearance_Details');
	 				var ListItem;
	 				
					$.each($scope.AllDiv, function (index,item){
						$.each(newDivSendBack, function (index,item2){
							if(item2 == item.Division){
								ListItem = oList.getItemById(item.ID);	
								ListItem.set_item('Clearance_Status', $scope.DivPayrollStatus);
							    ListItem.set_item('DivisionStatus', $scope.DivPayrollStatus);
							    ListItem.set_item('DivisionRoutingStatus', $scope.DivPayrollRoutingStatus);
							    ListItem.update();
							}
							
						});
						
					})
					clientContext.executeQueryAsync(function() {
						savePayrollHeaderStatus();
					});
				});	
				
			});
		}
		
		function savePayrollHeaderStatus(){
			

			var clientContext = new SP.ClientContext.get_current();
			var List = clientContext.get_web().get_lists().getByTitle('Clearance');		
			
		    $scope.oListItem = List.getItemById($scope.Clearance[0].ID);	
		   	$scope.oListItem.set_item('ClearanceStatus', $scope.MainPayrollStatusId);	
		   	$scope.oListItem.set_item('ClearanceRoutingStatus', $scope.MainPayrollRoutingStatusId);		   	
		    $scope.oListItem.update();
		    
		    clientContext.executeQueryAsync(function(){ 
				waitDialog.close();
				saveSendBackHistory();
			},function(){ 
				//silent alert('error');
			}); 
			
		}
		
		function saveSendBackHistory(){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Sending email notification...', 'Please wait while request is in progress...', 150, 1024);
			
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('ClearanceDetails_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			var unclrUnitEmail_Body;
			var unclrUnitSubj;
			var unclrUnit_To = [];
			var unclrUnit_Cc = [];
			var promises= [];
            var promise;
	
				$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
					$scope.EmailNotif = response.data.value;
					
						$.each($scope.EmailNotif, function(index, item){
							if(item.Control_x0020_Code == 'PayrollSendBack'){
								unclrUnitEmail_Body = item.Message_x0020_Body;
								unclrUnitSubj = item.Subject;
							
								var mapObj = {
									ClearanceNo: $scope.Clearance.ClearanceNo,
									EmpLastName: $scope.lname,
									EmpFirstName: $scope.fname
								};
										
								unclrUnitSubj = unclrUnitSubj.replace(/ClearanceNo|EmpLastName|EmpFirstName/gi, function(matched){
								  return mapObj[matched];
								});			
							}
						});
						
						
						
						$.each($scope.SendBack, function (index, item){
							$scope.SBHistoryListItem = THList.addItem(_itemCreateInfo);
							$scope.SBHistoryListItem.set_item('Title', item.ID);
							$scope.SBHistoryListItem.set_item('UnitStatus', $scope.UnitSendBack);
							$scope.SBHistoryListItem.set_item('UnitRoutingStatus', $scope.UnitRoutingSendBack);
							$scope.SBHistoryListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
							$scope.SBHistoryListItem.set_item('Date', (new Date()).toISOString());
							$scope.SBHistoryListItem.set_item('ClearanceNo', $scope.Clearance.ClearanceNo);
							$scope.SBHistoryListItem.set_item('Remarks', $scope.SendBackDetails.Remarks);
							$scope.SBHistoryListItem.update();
							
							unclrUnit_Cc.push($scope.Clearance.AdminOfficerEmail); //creator
							unclrUnit_Cc.push($scope.Clearance.Email); //employee
							unclrUnit_To.push(item.ClearingOfficer.EMail);	
							unclrUnit_Cc.push(item.AMAO.EMail);
							
							_unitId = CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey);
							_unclrUnitEmail_Body = unclrUnitEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + _unitId + "'> Link </a>";
							promise = sendEmail(_spPageContextInfo.userEmail, unclrUnit_To, unclrUnit_Cc, _unclrUnitEmail_Body, unclrUnitSubj);
						});	
						
						clientContext.load($scope.SBHistoryListItem);
						clientContext.executeQueryAsync(function(){	
							$q.all(promises).then(function(){	
								waitDialog.close();
								showMsgRedirect("","Unit was Sent Back","success");	
								//$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _clearanceID , "_self");
							});
							
						},function(){ 
							//silent alert('error'); 
						});	
									
				}); //end of emailnotif
		}

		
		function removeDuplicates(num) {
		  var x,
		      len=num.length,
		      out=[],
		      obj={};
		 
		  for (x=0; x<len; x++) {
		    obj[num[x]]=0;
		  }
		  for (x in obj) {
		    out.push(x);
		  }
		  return out;
		}
		
		$scope.CancelClickSendBack = function() {  
		 	$scope.SendBackDetails.Remarks = "";
		 	$("#modalSendBackLog").modal('hide');   
		 }
		// END OF PAYROLL APPROVAL
		
		function sendEmailWithBcc(from, to, cc, bcc, body, subject) {
		    //Get the relative url of the site
		    //webServerRelativeUrl;
		    var dfd = jQuery.Deferred();
		
		    var siteurl = _spPageContextInfo.webServerRelativeUrl;
		    var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
		    $.ajax({
		        contentType: 'application/json',
		        url: urlTemplate,
		        type: "POST",
		        data: JSON.stringify({
		            'properties': {
		                '__metadata': {
		                    'type': 'SP.Utilities.EmailProperties'
		                },
		                'From': from,
		                'To': { 
		                	'results': to
		                },
		                'CC': { 
		                	'results': cc
		                },
		                'BCC': { 
		                	'results': bcc
		                },
		                'Body': body,
		                'Subject': subject
		            }
		        }),
		        headers: {
		            "Accept": "application/json;odata=verbose",
		            "content-type": "application/json;odata=verbose",
		            "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
		        },
		        success: function(data) {
		          dfd.resolve();
		        },
		        error: function(err) {
		            waitDialog.close();
		            dfd.reject();
		            alert('Error in sending Email: ' + JSON.stringify(err));
		        }
		    });
		    return dfd.promise();  
		
		}

		function sendEmail(from, to, cc, body, subject) {
		    //Get the relative url of the site
		    //webServerRelativeUrl;
		    var dfd = jQuery.Deferred();
		
		    var siteurl = _spPageContextInfo.webServerRelativeUrl;
		    var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
		    $.ajax({
		        contentType: 'application/json',
		        url: urlTemplate,
		        type: "POST",
		        data: JSON.stringify({
		            'properties': {
		                '__metadata': {
		                    'type': 'SP.Utilities.EmailProperties'
		                },
		                'From': from,
		                'To': { 
		                	'results': to
		                },
		                'CC': { 
		                	'results': cc
		                },
		                'Body': body,
		                'Subject': subject
		            }
		        }),
		        headers: {
		            "Accept": "application/json;odata=verbose",
		            "content-type": "application/json;odata=verbose",
		            "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
		        },
		        success: function(data) {
		          dfd.resolve();
		        },
		        error: function(err) {
		            waitDialog.close();
		            dfd.reject();
		            alert('Error in sending Email: ' + JSON.stringify(err));
		        }
		    });
		    return dfd.promise();  
		
		}
		
		function ResolvebyEmail(email)    
		    {   var _data;
			    $.ajax({
			        async: false,
			        url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/siteusers?$top=5000&$filter=Email eq '" + email + "'",
			        method: "GET",
			        headers: { "Accept": "application/json; odata=verbose" },
			        success: function (data) {
			            _data = data.d.results;
			           // alert('ajax');
			        },
			        error: function (data) {
			            
			             alert(data.responseText);  
			        }
			    });
			    if (_data.length >  0){	       
			       return _data[0];
			           
				}
		    
		    };

		
		$scope.momentformat=function(dt){   
			if(dt){
				return moment( new Date(dt)).format("MM/DD/YYYY");
		    }
		}
		
		$scope.cancelclick = function () {
		    window.open(_spPageContextInfo.webAbsoluteUrl , "_self");
	   	};
   	
		$scope.openDivUnit = function (item) {   
			var divUnitID = CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey); 
			$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title&$expand=ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=ID eq '" + item.ID + "'").then(function(response){
				$scope.ClearanceUnit = response.data.value;
				
				if(_spPageContextInfo.userDisplayName == $scope.ClearanceUnit[0].ClearingOfficer.Title || _spPageContextInfo.userDisplayName == $scope.ClearanceUnit[0].AlternateOfficer.Title || _spPageContextInfo.userDisplayName == $scope.ClearanceUnit[0].EscalationOfficer.Title){
					$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + divUnitID , "_blank");	
				} else {
					showMsgOk("","Unauthorized person","warning");
				}
			});          
		   	    
		};
		


	}]); // end of angular module
	
	

})(); //end of function


