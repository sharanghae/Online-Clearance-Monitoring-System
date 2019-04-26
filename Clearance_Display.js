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
var ErrRequired = [];
var LookupStatus = "Status";

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
		
		//$scope.ClearanceDetails = { '__metadata': {'type': 'SP.Data.ClearanceListItem'}, Title:"", Request_x0020_No:"<div></div>", AdministeringOfficerId:"",ClearanceStatusId:"",ClearanceRoutingStatusId:"",NameId:"",EmployeeIDNo:"",Position:"",Division:"",Level:"",Movement:"",DateHired:"",DateSeperated:"",Email:"",Reference:"",EmailAddress:"",Telephone:"",MobilePhone:"",Remarks:"",FolderName:""};
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
			Reference:"",
			Folder: "",
			Telephone: "",
			TelephoneErr: "",
			MobilePhone: "",
			MobilePhoneErr: "",
			Remarks: ""
			
		}	
		
		

		load();
		function load(){
			$scope.toprint = false;
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
			_site = _spPageContextInfo.siteAbsoluteUrl; //rootsite
           	_web = _spPageContextInfo.webAbsoluteUrl; //subsite
			//alert(displaysvc.GetUrlParameter("param"));
			var initRequestor = [{ id: _spPageContextInfo.userId, text: _spPageContextInfo.userDisplayName }];
			var param = CryptoJS.AES.decrypt(displaysvc.GetUrlParameter("param"), secretkey);
			_id = param.toString(CryptoJS.enc.Utf8);
			_itemId = CryptoJS.AES.encrypt(JSON.stringify(_id.replace(/"/g,'')),secretkey);
			
							
			$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance')/items?$top=5000&$select=*,AdministeringOfficer/Title&$expand=AdministeringOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
				$scope.Clearance = response.data.value;
				
				$.each($scope.Clearance[0].AdministeringOfficer, function(index,item){
					$scope.Clearance.AdminOfficer = item.Title;
				});
				
				$.each(response.data.value, function(index, item){
					utilsvc.LookupStatusId("Clearance Status", item.ClearanceStatusId, LookupStatus).then(function(results){ 
						$scope.Clearance.Status = results.data.d.results[0].Description;
						$scope.statId = results.data.d.results[0].ID;
						
						utilsvc.LookupStatusId("Clearance Routing Status", item.ClearanceRoutingStatusId, LookupStatus).then(function(results){ 
							$scope.Clearance.RoutingStatus = results.data.d.results[0].Description;
							$scope.routeStatId = results.data.d.results[0].ID;
						});
						
						if ($scope.Clearance.Status != "Cancelled" && $scope.Clearance.Status != "Completed") {
								
						// FOR CR	if ($scope.Clearance.Status == "For Clearance Completion" || $scope.Clearance.Status== "Accountability Completion" || $scope.Clearance.Status== "Accountability Completion-Sent Back" || $scope.Clearance.Status == "HR Head/OIC Completion") {
								if ($scope.Clearance.Status == "For Clearance Completion" || $scope.Clearance.Status== "Accountability Completion" || $scope.Clearance.Status== "Accountability Completion-Sent Back") {
									$scope.isNotDraft = true;
									if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
										$(".lnks.lnkEdit").show();
										$scope.noCheckDetails = true;
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
											$scope.ClearanceDetails = response.data.value;						
										});
									} else {
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ClearingOfficer/Title eq '" + _spPageContextInfo.userDisplayName + "' and Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
											$scope.ClearanceDetails = response.data.value;						
										});	
									}
								} 							
							
							if($scope.Clearance.Status == "For Clearance Completion")
								$scope.isNotDraft = false;
								
							
						
								if ($scope.Clearance.Status == "HR Head/OIC Completion") {
									$(".lnks.lnkprintData").show();
									$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
										$scope.StageApprover = response.data.value;
										
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
											$scope.ClearanceDetails = response.data.value;						
										});
										
										$.each($scope.StageApprover, function(index, item2){
											if(item2.StageCode.Title == 'HR OIC' && item2.Role.Title == 'Sent to Approver'){
												if (initRequestor[0].id == item2.Name.Id){
													
													$(".lnks.showOicApprove").show();
													$scope.isNotDraft = true;
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
	
													}
												} else {
													$scope.isNotDraft = true;
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
														$scope.noCheckDetails = true;
														
														
													} 
												}
											}
										});
									});	
								}						
								
								if ($scope.Clearance.Status == "Payroll Completion") {
									$(".lnks.lnkprintData").show();
									$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
										$scope.StageApprover = response.data.value;
										
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
											$scope.ClearanceDetails = response.data.value;						
										});
										
										$.each($scope.StageApprover, function(index, item2){
											if(item2.StageCode.Title == 'Payroll' && item2.Role.Title == 'Sent to Approver'){
												if (initRequestor[0].id == item2.Name.Id){
													
													$(".lnks.showPayrollApprove").show();
													
		
													$scope.isNotDraft = true;
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
	
													}
	
												} else {
													$scope.isNotDraft = true;
													
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
														$scope.noCheckDetails = true;
		
													} 
													
												}
											}
										});
									});	
								}
								
								
								if ($scope.Clearance.Status == "Finance AP Completion") {
									$(".lnks.lnkprintData").show();
									$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
										$scope.StageApprover = response.data.value;
										
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
											$scope.ClearanceDetails = response.data.value;						
										});
										
										$.each($scope.StageApprover, function(index, item2){
											if(item2.StageCode.Title == 'Finance' && item2.Role.Title == 'Sent to Approver'){
												if (initRequestor[0].id == item2.Name.Id){
													
													$(".lnks.showFinanceApprove").show();
													
		
													$scope.isNotDraft = true;
													
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
	
													}
	
												} else {
													$scope.isNotDraft = true;
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
														$scope.noCheckDetails = true;
													}
												}
											}
										});
									});	
								}
								
								if ($scope.Clearance.Status == "Treasury Completion") {
									$(".lnks.lnkprintData").show();
									$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
										$scope.StageApprover = response.data.value;
										
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
											$scope.ClearanceDetails = response.data.value;						
										});
										
										$.each($scope.StageApprover, function(index, item2){
											if(item2.StageCode.Title == 'Treasury' && item2.Role.Title == 'Sent to Approver'){
												if (initRequestor[0].id == item2.Name.Id){
													
													$(".lnks.showTreasuryApprove").show();
													
		
													$scope.isNotDraft = true;
													
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
	
													}
	
												} else {
													$scope.isNotDraft = true;
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
														$scope.noCheckDetails = true;
													} 
		
												}
											}
										});
									});	
								}
								
								if ($scope.Clearance.Status == "HR Completion") {
									$(".lnks.lnkprintData").show();
									$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
										$scope.StageApprover = response.data.value;
										
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
											$scope.ClearanceDetails = response.data.value;	
											$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Check_Details')/items?&$filter=Title eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
												$scope.CheckDetails = response.data.value;
											});
										});
										
										$.each($scope.StageApprover, function(index, item2){
											if(item2.StageCode.Title == 'Quit' && item2.Role.Title == 'Sent to Approver'){
												if (initRequestor[0].id == item2.Name.Id){
													
													$scope.noCheckDetails = true;
													$(".lnks.showHRCompApprove").show();
													
		
													$scope.isNotDraft = true;
													
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
	
													}
	
												} else {
													$scope.isNotDraft = true;
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
														$scope.noCheckDetails = true;
													} 		
												}
											}
										});
									});	
								}
		
		
								if ($scope.Clearance.Status == "Check Release") {
									$(".lnks.lnkprintData").show();
									$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
										$scope.StageApprover = response.data.value;
										
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
											$scope.ClearanceDetails = response.data.value;
											$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Check_Details')/items?&$filter=Title eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
												$scope.CheckDetails = response.data.value;
											});
										});
													
										$.each($scope.StageApprover, function(index, item2){
											if(item2.StageCode.Title == 'Check' && item2.Role.Title == 'Sent to Approver'){
												if (initRequestor[0].id == item2.Name.Id){
													$scope.noCheckDetails = true;
													$(".lnks.showCheckReleaseApprove").show();
													
		
													$scope.isNotDraft = true;
													
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
	
													}
	
												} else {
													$scope.isNotDraft = true;
													if (initRequestor[0].id == item.RequestorId || initRequestor[0].id == item.AuthorId){
														$(".lnks.lnkEdit").show();
														$scope.noCheckDetails = true;
													} 
		
												}
											}
										});
									});	
								}
								
							
							
							
						} else {
							if ($scope.Clearance.Status == "Completed"){
								$(".lnks.lnkprintData").show();
								$scope.isNotDraft = true;
								$scope.noCheckDetails = true;
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
									$scope.ClearanceDetails = response.data.value;	
									$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Check_Details')/items?&$filter=Title eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
										$scope.CheckDetails = response.data.value;
									});					
								});
							}
							
							//$scope.isNotDraft = true;

							$(".lnks.lnkEdit").hide();
						}
						
						// FOR CR
							
							/* 
							if ($scope.Clearance.Status == "Payroll Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
									$scope.StageApprover = response.data.value;
									
									$.each($scope.StageApprover, function(index, item2){
										if(item2.StageCode.Title == 'Payroll' && item2.Role.Title == 'Sent to Approver'){
											if (initRequestor[0].id == item2.Name.Id){
												$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
													$scope.ClearanceDetails = response.data.value;						
												});
												$(".lnks.showPayrollApprove").show();
												$(".lnks.lnkprintData").show();
	
												$scope.isNotDraft = true;
												
											} else {
												$scope.isNotDraft = true;
												
												$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ClearingOfficer/Title eq '" + _spPageContextInfo.userDisplayName + "' and Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
														$scope.ClearanceDetails = response.data.value;						
													});
																							
											}
										}
									});
								});	
							}
							
							
							if ($scope.Clearance.Status == "Finance AP Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
									$scope.StageApprover = response.data.value;
									
									$.each($scope.StageApprover, function(index, item2){
										if(item2.StageCode.Title == 'Finance' && item2.Role.Title == 'Sent to Approver'){
											if (initRequestor[0].id == item2.Name.Id){
												$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
													$scope.ClearanceDetails = response.data.value;						
												});
												$(".lnks.showFinanceApprove").show();
												$(".lnks.lnkprintData").show();
	
												$scope.isNotDraft = true;
											} else {
												$scope.isNotDraft = true;
													$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ClearingOfficer/Title eq '" + _spPageContextInfo.userDisplayName + "' and Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
														$scope.ClearanceDetails = response.data.value;						
													});
												
											}
										}
									});
								});	
							}
							
							if ($scope.Clearance.Status == "Treasury Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
									$scope.StageApprover = response.data.value;
									
									$.each($scope.StageApprover, function(index, item2){
										if(item2.StageCode.Title == 'Treasury' && item2.Role.Title == 'Sent to Approver'){
											if (initRequestor[0].id == item2.Name.Id){
												$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
													$scope.ClearanceDetails = response.data.value;						
												});
												$(".lnks.showTreasuryApprove").show();
												$(".lnks.lnkprintData").show();
	
												$scope.isNotDraft = true;
											} else {
												$scope.isNotDraft = true;
												$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ClearingOfficer/Title eq '" + _spPageContextInfo.userDisplayName + "' and Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
													$scope.ClearanceDetails = response.data.value;						
												});
												
	
											}
										}
									});
								});	
							}
							
							if ($scope.Clearance.Status == "HR Completion") {
								$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
									$scope.StageApprover = response.data.value;
									
									$.each($scope.StageApprover, function(index, item2){
										if(item2.StageCode.Title == 'Quit' && item2.Role.Title == 'Sent to Approver'){
											if (initRequestor[0].id == item2.Name.Id){
												$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
													$scope.ClearanceDetails = response.data.value;						
												});
												$(".lnks.showHRCompApprove").show();
												$(".lnks.lnkprintData").show();
	
												$scope.isNotDraft = true;
											} else {
												$scope.isNotDraft = true;
													$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ClearingOfficer/Title eq '" + _spPageContextInfo.userDisplayName + "' and Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
														$scope.ClearanceDetails = response.data.value;						
													});
												
	
											}
										}
									});
								});	
							}
	
	
							if ($scope.Clearance.Status == "Check Release") {
								$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('StageApprovers')/items?$top=5000&$select=*,StageCode/Title,Name/EMail,Name/Title,Name/Id,Role/Title&$expand=StageCode,Role,Name").then(function(response){	
									$scope.StageApprover = response.data.value;
									
									$.each($scope.StageApprover, function(index, item2){
										if(item2.StageCode.Title == 'Check' && item2.Role.Title == 'Sent to Approver'){
											if (initRequestor[0].id == item2.Name.Id){
												$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
													$scope.ClearanceDetails = response.data.value;						
												});
												$(".lnks.showCheckReleaseApprove").show();
												$(".lnks.lnkprintData").show();
	
												$scope.isNotDraft = true;
											} else {
												$scope.isNotDraft = true;
												
													$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ClearingOfficer/Title eq '" + _spPageContextInfo.userDisplayName + "' and Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
														$scope.ClearanceDetails = response.data.value;						
													});
												
	
											}
										}
									});
								});	
							}
							
							if ($scope.Clearance.Status == "Completed") {
								if (initRequestor[0].id == $scope.Clearance[0].AdministeringOfficerId){
									$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
										$scope.ClearanceDetails = response.data.value;						
									});
									$scope.isNotDraft = true;
								} else {
									$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ClearingOfficer/Title eq '" + _spPageContextInfo.userDisplayName + "' and Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
										$scope.ClearanceDetails = response.data.value;						
									});
									$scope.isNotDraft = true;
								}
							}

						
						} else {
							if ($scope.Clearance.Status == "Completed"){
								$scope.isNotDraft = true;

							}
							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ClearingOfficer/Title eq '" + _spPageContextInfo.userDisplayName + "' and Title eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
								$scope.ClearanceDetails = response.data.value;						
							});
							//$scope.isNotDraft = true;

							$(".lnks.lnkEdit").hide();
						} FOR CR */ 
					});
					
					
					
					
					_clearanceNo = item.Title;
					$scope.Clearance.ClearanceNo = item.Title;
					$scope.Clearance.ApplicationDate = $filter('date')(item.ApplicationDate, 'MM/dd/yyyy');
					$scope.Clearance.EmpName = item.EmployeeIDNo + " " + "|" + " " + item.EmployeeName;
					$scope.Clearance.Position = item.Position;
					$scope.Clearance.Division = item.Division;
					$scope.Clearance.Level = item.Level;
					$scope.Clearance.Movement = item.Movement;
					$scope.Clearance.DateHired = $filter('date')(item.DateHired, 'MM/dd/yyyy');
					$scope.Clearance.DateSeparated = $filter('date')(item.DateSeperated, 'MM/dd/yyyy');
					$scope.Clearance.Email = item.Email;
					$scope.Clearance.Telephone = item.Telephone;
					$scope.Clearance.MobilePhone = item.MobilePhone;
					$scope.Clearance.Remarks = item.Remarks;
					$scope.Clearance.EmailAddress = item.EmailAddress ;
					$scope.Clearance.Reference = item.Reference;
					  
					//load attachments
					$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/GetFolderByServerRelativeUrl('" + _spPageContextInfo.webServerRelativeUrl + "/Attachments/" + item.FolderName +"')/Files?$top=5000").then(function(response){	
					    $scope.Attachments = response.data.value;
					    //waitDialog.close();
					}).catch(function(data){
					  alert(data.data["odata.error"].message.value);
					  //waitDialog.close();		      
					});    
					
					$scope.ShowAttachment = function(filename) {
						window.open(window.location.origin + filename , "_blank");
					}
										
					//load transaction history
					$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance_History')/items?$select=UpdatedBy/Title,*&$expand=UpdatedBy&$filter=Title eq '" + $scope.Clearance.ClearanceNo + "'&$top=20&$orderby=Created desc").then(function(response){	
						$scope.TransHistory = response.data.value;
						waitDialog.close();
					}).catch(function(data){
						alert(data.data["odata.error"].message.value);
						waitDialog.close();		      
					});
					
					
							

				});//end of each
				
				
				
				
			waitDialog.close();
			}); //end of 1st http get
			
			
		
		}; //end of load()

		$scope.openDivUnit = function (item) {   
			var divUnitID = CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey); 
			$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title&$expand=ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=ID eq '" + item.ID + "'").then(function(response){
				$scope.ClearanceUnit = response.data.value;
				
				if(_spPageContextInfo.userDisplayName == $scope.ClearanceUnit[0].ClearingOfficer.Title || _spPageContextInfo.userDisplayName == $scope.ClearanceUnit[0].AlternateOfficer.Title || _spPageContextInfo.userDisplayName == $scope.ClearanceUnit[0].EscalationOfficer.Title){
					$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + divUnitID , "_self");	
				} else {
					showMsgOk("","Unauthorized person","warning");
				}
			});          
		   	    
		};
		
		$scope.ArraytoString = function(array){
		    if (!array) {
		    	return "";   
		    }
		 
		   array = JSON.parse(array);   
		   var newArray = $.map( array, function(value, index) {  
		   		return [value.Description];
		   });
		
		   var result =  newArray.join(" | "); 
		   return result;
		 }
		 
		$scope.momentformat=function(dt){   
			if(dt){
				return moment( new Date(dt)).format("MM/DD/YYYY");
		    }
		}
		
		$scope.cancelPrint = function() {  
		 	$scope.print = true;
			$scope.toprint = false;
		 }
			
		$scope.editItem = function(type) {
			$window.open(_web + "/SitePages/Clearance_Edit.aspx?type=" + type + "&param=" + _itemId  , "_self");
		}
				
		$scope.print = function() {
			$scope.print = false;
			$scope.toprint = true;
		/*	$('#CLDPrint_PAGE').addClass('active');
			$('#cldp').addClass('active');
			$('#cld').attr("aria-expanded","true");
			$('div#collapse1.panel-collapse.collapse.in').css('display','block');
			$('div.tab-content.active').css('display','block');
			$('div#CLDPrint_PAGE.tab-pane.fade.active.in').css('display','block');
			$('div.table-responsive').css('display','block');
			$('div.panel-body::before').css('display','block');*/
		}

		$scope.printPreview = function() {
			window.print();
		}
		
		
		$scope.cancelclick = function () {
		    window.open(_spPageContextInfo.webAbsoluteUrl , "_self");
	   	};
   	


	}]); // end of angular module
	
	

})(); //end of function


