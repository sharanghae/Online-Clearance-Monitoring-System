var waitDialog;
var _employee = "Employee";
var _levels = "Levels";
var _movement = "Movement";
var _division = "Division";
var _unitStat = "UnitClearanceStatus";
var LookupStatus = "Status";
var _myDropzone;
var _clearance = "Clearance";
var _clearanceDet = "Clearance_Details";
var secretkey ="wacky1974";
var lvl;
var ErrRequired = [];


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
		
		$scope.Unit = { 
			UnitClearanceStatErr: "",
			UnitStatus: "",
			CostErr: ""		
		}	
		
		$scope.SendBackDetails = { 
			Remarks: "",
			RemarksErr: "",
			Date: ""	
		}	

		

		load();
		function load(){
			$scope.close = true;

			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
			_site = _spPageContextInfo.siteAbsoluteUrl; //rootsite
           	_web = _spPageContextInfo.webAbsoluteUrl; //subsite
           	_webRelativeURL = _spPageContextInfo.webServerRelativeUrl;
           	
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

			$timeout(function(){validate_curr()},0);
			$scope.editItem = false;
			$scope.disableCbox = true;
			
			$scope.userId = _spPageContextInfo.userId;

			var initRequestor = [{ id: _spPageContextInfo.userId, text: _spPageContextInfo.userDisplayName }];
			_divUnitID = displaysvc.GetUrlParameter("param");
			var param = CryptoJS.AES.decrypt(displaysvc.GetUrlParameter("param"), secretkey);
			_id = param.toString(CryptoJS.enc.Utf8);
			$scope.iocStatus = "HR Head/OIC Completion";
			$scope.iocRoutingStatus = "For HR Head/OIC completion";	
			
				$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AlternateOfficer/Title,EscalationOfficer/Title&$expand=ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=ID eq '" + _id.replace(/\"/g,'') + "'&$orderby=Unit'").then(function(response){	
					$scope.ClearanceDetails = response.data.value;
					$scope.Clearance.ClearanceNo = $scope.ClearanceDetails[0].Title;

					
					$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance')/items?$top=5000&$select=*,AdministeringOfficer/Title,AdministeringOfficer/EMail&$expand=AdministeringOfficer&$filter=Title eq '" + $scope.ClearanceDetails[0].Title + "'").then(function(response){	
						$scope.ClearanceHeader = response.data.value;
						$scope.Clearance.ID = $scope.ClearanceHeader[0].ID;
						$scope.Clearance.Remarks = $scope.ClearanceHeader[0].Remarks;
						$scope.Clearance.Folder = $scope.ClearanceHeader[0].FolderName;
						$scope.Clearance.ApplicationDate = $scope.momentformat($scope.ClearanceHeader[0].ApplicationDate);
						$scope.Clearance.EmpName = $scope.ClearanceHeader[0].EmployeeName;
						$scope.Clearance.Position = $scope.ClearanceHeader[0].Position;
						$scope.Clearance.Division = $scope.ClearanceHeader[0].Division;
						$scope.Clearance.Level = $scope.ClearanceHeader[0].Level;
						$scope.Clearance.Movement = $scope.ClearanceHeader[0].Movement;
						$scope.Clearance.DateHired = $scope.momentformat($scope.ClearanceHeader[0].DateHired);
						$scope.Clearance.DateSeparated = $scope.momentformat($scope.ClearanceHeader[0].DateSeperated);
						$scope.Clearance.Email = $scope.ClearanceHeader[0].Email;
						$scope.Clearance.Reference = $scope.ClearanceHeader[0].Reference;
						$scope.Clearance.EmailAddress = $scope.ClearanceHeader[0].EmailAddress;
						$scope.Clearance.Telephone = $scope.ClearanceHeader[0].Telephone;
						$scope.Clearance.MobilePhone = $scope.ClearanceHeader[0].MobilePhone;
						
						$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$select=*&$filter=Employee_x0020_ID eq '" + $scope.ClearanceHeader[0].EmployeeIDNo +  "'").then(function(response){	
							$scope.Employee = response.data.value;	
							$scope.lname = $scope.Employee[0].Family_x0020_Name;
							$scope.fname = $scope.Employee[0].Given_x0020_Name
						});
						
						$.each($scope.ClearanceHeader[0].AdministeringOfficer, function(index,item){
							$scope.Clearance.AdminOfficer = item.Title;
							$scope.Clearance.AdminOfficerEmail = item.EMail;
						});

						/*utilsvc.LookupStatusId("Clearance Routing Status", $scope.ClearanceHeader[0].ClearanceRoutingStatusId, LookupStatus).then(function(results){ 
							$scope.Clearance.RoutingStatus = results.data.d.results[0].Description;
							$scope.routeStatId = results.data.d.results[0].ID;
							waitDialog.close();
						});

						utilsvc.LookupStatusId("Clearance Status", $scope.ClearanceHeader[0].ClearanceStatusId, LookupStatus).then(function(results){ 
							$scope.Clearance.Status = results.data.d.results[0].Description;
							$scope.routeStatId = results.data.d.results[0].ID;
							waitDialog.close();
						}); */
						
						utilsvc.LookupStatusValue("Clearance Status", $scope.iocStatus, LookupStatus).then(function(results){ 
							$scope.Clearance.OicStatus = results.data.d.results[0].Description;
							$scope.Clearance.OicStatusId = results.data.d.results[0].ID;
						});
										
						utilsvc.LookupStatusValue("Clearance Routing Status", $scope.iocRoutingStatus, LookupStatus).then(function(results){ 
							$scope.Clearance.OicRoutingStatus = results.data.d.results[0].Description;
							$scope.Clearance.OicRoutingStatusId = results.data.d.results[0].ID;
						});
												
						$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/GetFolderByServerRelativeUrl('" + _spPageContextInfo.webServerRelativeUrl + "/Attachments/" + $scope.Clearance.Folder +"')/Files?$top=5000&$select*,Author/Id&$expand=Author").then(function(response){	
						    $scope.Attachments = response.data.value;
						    waitDialog.close();
						});
						
						$scope.ShowAttachment = function(filename) {
							window.open(window.location.origin + filename , "_blank");
						}
					});	
					
						if(_spPageContextInfo.userDisplayName == $scope.ClearanceDetails[0].ClearingOfficer.Title || _spPageContextInfo.userDisplayName == $scope.ClearanceDetails[0].AlternateOfficer.Title || _spPageContextInfo.userDisplayName == $scope.ClearanceDetails[0].EscalationOfficer.Title){
						/*	if($scope.ClearanceDetails[0].UnitStatus == "Unit Cleared" || $scope.ClearanceDetails[0].DivisionStatus == "Division Cleared"){
								$scope.showEdit = false;	
							} else {
								$scope.showEdit = true;	
							}*/
		
							if($scope.ClearanceDetails[0].Unit != null || $scope.ClearanceDetails[0].Unit != undefined){	
								$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ID eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
									$scope.ClearanceUnit = response.data.value;
									
										if($scope.ClearanceUnit[0].DetailsAccountability == "" || $scope.ClearanceUnit[0].DetailsAccountability == null){
											$scope.ClearanceUnit[0].DetailsAccountability = $scope.ClearanceUnit[0].Unit;
										}
										
										
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Status')/items?$top=5000&$select=*&$filter=Group eq 'Unit Clearance Sub Status'").then(function(response){	
								        	$scope.unitClearanceSubStatus = response.data.value;
								        	
								        	$.each($scope.unitClearanceSubStatus, function(index, item){
								        		$.each(JSON.parse($scope.ClearanceUnit[0].UnitClearanceSubStatus), function(index, item2){
								        			if(item2.ID == item.ID){
								        				item.value2 = true;
								        			}
								        		});
								        	});
								        	waitDialog.close();
									    });
										
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Status')/items?$top=5000&$select=*&$filter=Group eq 'Notes'").then(function(response){	
										   	$scope.Notes = response.data.value;
										   	$.each($scope.Notes, function(index, item){
								        		$.each(JSON.parse($scope.ClearanceUnit[0].Notes), function(index, item2){
								        			if(item2.ID == item.ID){
								        				item.value2 = true;
								        			}
								        		});
								        	});
										   	waitDialog.close();
										});
										
										$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Status')/items?$top=5000&$select=*&$filter=Group eq 'Reminders'").then(function(response){	
										   	$scope.Reminders = response.data.value;
										   	waitDialog.close();
										});
	
		
									});
								if($scope.ClearanceDetails[0].UnitStatus == "Unit Cleared")	{
									$scope.showUnit = true;	
									$scope.showEdit = false;
									$scope.showRelated = true;
								} else {					
									$scope.showUnit = true;	
									$scope.showEdit = true;
									$scope.showRelated = true;
								}
							} else {
								
								$scope.SendBackDetails.Date = $scope.momentformat(new Date());
								$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title&$expand=ClearingOfficer&$filter=ID eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
									$scope.ClearanceDiv = response.data.value;
									
									$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AMAO/Title,AMAO/EMail&$expand=ClearingOfficer,AMAO&$filter=Division eq '" + $scope.ClearanceDiv[0].Division + "' and Title eq '" + $scope.ClearanceDiv[0].Title + "'&$orderby=Unit").then(function(response){	
										$scope.ClearanceDivision = response.data.value;
									});
									
									utilsvc.LookupStatusValue("Division Status", 'Division Cleared', LookupStatus).then(function(results){ 
										$scope.DivCleared = results.data.d.results[0].Description;
										$scope.DivClearedId = results.data.d.results[0].ID;
									});
									
									
									utilsvc.LookupStatusValue("Division Routing Status", 'Division Cleared', LookupStatus).then(function(results){ 
										$scope.DivRoutingCleared = results.data.d.results[0].Description;
										$scope.DivRoutingClearedId = results.data.d.results[0].ID;
									});
									
									utilsvc.LookupStatusValue("Unit Clearance Status", 'Unit Uncleared', LookupStatus).then(function(results){ 
										$scope.UnitUncleared = results.data.d.results[0].Description;
									});
									
									utilsvc.LookupStatusValue("Unit Routing Status", 'For Clearing Completion', LookupStatus).then(function(results){ 
										$scope.UnitRoutingUncleared = results.data.d.results[0].Description;
									});

									utilsvc.LookupStatusValue("Unit Status", 'Unit Uncleared - Send Back', LookupStatus).then(function(results){ 
										$scope.UnitSendBack = results.data.d.results[0].Description;
									});
									
									$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title&$expand=ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=Division eq '" + $scope.ClearanceDiv[0].Division + "' and Title eq '" + $scope.ClearanceDiv[0].Title + "'").then(function(response){	
										$scope.checkDivStat = response.data.value;
										$scope.checkStat = []; //unit uncleared
										$.each($scope.checkDivStat, function(index, item){
											if(item.Unit != null ){
												if(item.UnitStatus != 'Unit Cleared'){
													$scope.checkStat.push(item);
												}
											} 
										});
										
										if($scope.ClearanceDetails[0].DivisionStatus == "Division Cleared")	{
											$scope.showDiv = true;	
											$scope.showEdit = false;
										} else {
											if($scope.checkDivStat.length < 2){
												$scope.showNoUnitDiv = true;
											} else {
												$scope.showUnitDiv = true;
											}
											if($scope.checkStat.length <= 0){	
												$scope.showEdit = true;
											} else {
												$scope.showEdit = false;
											}
											$scope.showDiv = true;
										}
										waitDialog.close();
										
									});

									
									waitDialog.close();
								});
							}
							
							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('ClearanceDetails_History')/items?$select=UpdatedBy/Title,*&$expand=UpdatedBy&$filter=Title eq '" + _id.replace(/\"/g,'') + "'&$top=10&$orderby=Created desc").then(function(response){	
								$scope.TransHistory = response.data.value;
								waitDialog.close();
							}).catch(function(data){
								alert(data.data["odata.error"].message.value);
								waitDialog.close();		      
							});
											
						} else {
							$scope.showEdit = false;
							showMsgRedirect("","Unauthorized person","warning");
						}
													
				waitDialog.close();
				}); //end of 1st http get	
			
		}; //end of load()
		
		$scope.openUnit = function (item) {   
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
					
			var unitID = CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey); 
			$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + unitID , "_blank");	

			/*$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title&$expand=ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=ID eq '" + item.ID + "'").then(function(response){	
				$scope.ClearanceUnit = response.data.value;
				if(_spPageContextInfo.userDisplayName == $scope.ClearanceUnit[0].ClearingOfficer.Title || _spPageContextInfo.userDisplayName == $scope.ClearanceUnit[0].AlternateOfficer.Title || _spPageContextInfo.userDisplayName == $scope.ClearanceUnit[0].EscalationOfficer.Title){
					
					$scope.showBtn = true; 
					$scope.showUnit = true;    
					$scope.showDiv = false;  	
					
					$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Status')/items?$top=5000&$select=*&$filter=Group eq 'Unit Clearance Sub Status'").then(function(response){	
					   	$scope.unitClearanceSubStatus = response.data.value;
					   	waitDialog.close();
					});
									
					$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Status')/items?$top=5000&$select=*&$filter=Group eq 'Notes'").then(function(response){	
					   	$scope.Notes = response.data.value;
					   	waitDialog.close();
					});
					
					$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Status')/items?$top=5000&$select=*&$filter=Group eq 'Reminders'").then(function(response){	
					   	$scope.Reminders = response.data.value;
					   	waitDialog.close();
					});

				} else {
					waitDialog.close();
					showMsgOk("","Unauthorized person","warning");
				}
			});
			
			$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('ClearanceDetails_History')/items?$select=UpdatedBy/Title,*&$expand=UpdatedBy&$filter=Title eq '" + item.ID + "'&$top=20&$orderby=Created").then(function(response){	
				$scope.TransHistory = response.data.value;
			}).catch(function(data){
				alert(data.data["odata.error"].message.value);
				waitDialog.close();		      
			});
			*/
			waitDialog.close();	
		};
		
		
		function showMsgRedirectBack(title,text,type){
		_itemId = CryptoJS.AES.encrypt(JSON.stringify($scope.Clearance.ClearanceNo),secretkey);
	      swal({
				title: title,
				text: text ,
				timer: 4000,
				type: type,
				allowOutsideClick:false
				}).then(
					function () {
						$('.btn').css('pointer-events', 'none'); 
						$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _itemId , "_self");
					},
						
						// handling the promise rejection
					function (dismiss) {
						$('.btn').css('pointer-events', 'none'); 
							if (dismiss === 'timer') {
								$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _itemId , "_self");
							}
					}
				)
	   	}
	   			
		$scope.momentformat=function(dt){   
			if(dt){
				return moment( new Date(dt)).format("MM/DD/YYYY");
		    }
		}
					
		$scope.edit = function() {
			$scope.close = false;
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);

			$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title&$expand=ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=ID eq '" + _id.replace(/\"/g,'') + "'").then(function(response){	
				$scope.editClearanceDetails = response.data.value;	

				utilsvc.LookupStatusValue("Unit Clearance Status", 'Unit Cleared', LookupStatus).then(function(results){ 
					$scope.UnitCleared = results.data.d.results[0].Description;
					$scope.UnitClearedId = results.data.d.results[0].ID;
					
					if($scope.editClearanceDetails[0].Unit != null){
						if($scope.editClearanceDetails[0].UnitStatus != "Unit Cleared"){	
							$scope.editItem = true;
							$scope.showEdit = false;
							$scope.disableCbox = false;
										
							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Status')/items?$top=5000&$select=*&$filter=Group eq 'Unit Clearance Status'").then(function(response){	
						       	$scope.unitStatusLookup = response.data.value;
						       	waitDialog.close();
						    });
						} else {
							$scope.editItem = false;
							$scope.showEdit = true;
							$scope.disableCbox = true;
							//showMsgOk("","Unit Cleared","info");
							waitDialog.close();
							showMsgRedirect("","Unit Cleared","info")
						}
					} else {
						if($scope.editClearanceDetails[0].DivisionStatus != "Division Cleared"){
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title&$expand=ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=Division eq '" + $scope.editClearanceDetails[0].Division + "' and Title eq '" + $scope.editClearanceDetails[0].Title + "'").then(function(response){	
								$scope.divDetails = response.data.value;
								$scope.test = []; //unit uncleared

								$.each($scope.divDetails, function(index, item){
									if(item.Unit != null ){
										if(item.UnitStatus != 'Unit Cleared'){
											$scope.test.push(item);
										}
									}

								});
								
								if($scope.test.length <= 0){
									$scope.showEdit = false;
									$scope.disableCbox = false;	
									$scope.editItem = true;
								} else {
									showMsgOk("","All units should be clear first","info");
								}
								
								waitDialog.close();
							});
						} else {
							$scope.showEdit = true;
							$scope.disableCbox = true;	
							$scope.editItem = false;
							//showMsgOk("","Division Cleared","info");
							showMsgRedirect("","Division Cleared","info");
							waitDialog.close();
						}

					}
				});
			});
						
		} 
		
		$scope.saveUnit = function(){
			var ErrRequired = [];
			$scope.UnitStat = [];
			$scope.NotesDetails = [];
			
			
			if($scope.ClearanceDetails[0].Unit != null || $scope.ClearanceDetails[0].Unit != undefined){	
				if($('#cboUnitStat').val() == '?' || $('#cboUnitStat').val() == 'undefined'){
					ErrRequired.push('UnitClearanceStatErrlbl');
					$('#UnitClearanceStatErrlbl').show(); 
					$scope.Unit.UnitClearanceStatErr = "Please fill out this field";
				} else
					$('#UnitClearanceStatErrlbl').hide();
			
				$.each($scope.unitClearanceSubStatus, function(index, item){
					var o = {
						value2: false,
						Description: "",
						ID: ""
					}
					if(item.value2 == true){
						o.Description = item.Description;
						o.ID = item.ID;
						o.value2 = item.value2;
						$scope.UnitStat.push(o);
						
						if(item.Value == 'Yes'){
							if($scope.ClearanceUnit[0].Cost == null || $scope.ClearanceUnit[0].Cost == ""){
								$scope.ClearanceUnit[0].CostRequired = true;
								ErrRequired.push('CostErrlbl');
								$('#CostErrlbl').show(); 
								$scope.Unit.CostErr = "Please fill out this field";						 			
							}
						}
					}									        		
				});
				
				$.each($scope.Notes, function(index, item){
					var o = {
						value2: false,
						Description: "",
						ID: ""
					}
					if(item.value2 == true){
						o.Description = item.Description;
						o.ID = item.ID;
						o.value2 = item.value2;
						$scope.NotesDetails.push(o);
					}									        		
				});
		
				if (ErrRequired.length == 0) {
					$scope.Unit.CostErr = "";
					$scope.Unit.UnitClearanceStatErr = "";
					
					
					
					utilsvc.YesNoConfirmation('','Please be reminded that you need to attach supporting documents. Do you want to proceed', function(yes){
						if(yes){
							saveUnitItem();
							
							if($scope.ClearanceUnit[0].UnitStatus == 'Unit Cleared'){
								$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('UnitStatusViewing')/items?$top=5000&$select=*,SendTo/Title,SendTo/EMail,CopyTo/Title,CopyTo/EMail&$expand=SendTo,CopyTo&$filter=ClearanceUnit eq '" + $scope.ClearanceDetails[0].Unit + "'").then(function(response){	
									$scope.unitStatViewing = response.data.value;
									
									var UnitStatViewing_Body;
									var UnitStatViewing_Subj;
									var sendTo = [];
									var copyTo = [];
									var promises = [];
                       				var promise;

									if($scope.unitStatViewing.length > 0){
										$.each($scope.unitStatViewing, function (index, item){
										
											UnitStatViewing_Body = $scope.lname + ',' + $scope.fname + ' ' + item.MessageBody + ' ' + $scope.ClearanceDetails[0].Unit;
											UnitStatViewing_Subj = item.Subject;
											sendTo.push(item.SendTo.EMail);
											if(item.CopyToId != null){
												copyTo.push(item.CopyTo.EMail);
											}
											promise = sendEmail(_spPageContextInfo.userEmail, sendTo, copyTo, UnitStatViewing_Body, UnitStatViewing_Subj);
											promises.push(promise);			
										});
									} else {
										waitDialog.close();
										//showMsgOk('',"Unit Cleared","success");
									}
									
									$q.all(promises).then(function(){	
										waitDialog.close();
										//showMsgOk('',"Unit Cleared","success"); 	
									}); 
								});
	
							} /*else {
								waitDialog.close();
								showMsgOk('',"Unit Uncleared","success");
							}*/
						}
					});

				} else {
					var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
						if(panelID != null)
							$('#' + panelID + ".collapse").collapse('show');
							$('#' + ErrRequired[0]).focus()
							showMsgOk("","Please check form for error messages","error");
				}
			// end of first if
			} else {
				$.each($scope.divDetails, function(index, item){
					if(item.Unit != null ){
						if(item.UnitStatus != 'Unit Cleared'){
							$scope.test.push(item);
						}
					} 
				});

				if($scope.test.length <= 0){
					$scope.showEdit = false;
					$scope.disableCbox = false;	
					$scope.editItem = true;
					
					utilsvc.YesNoConfirmation('','Are you sure you want to clear employee in this division?', function(yes){
						if(yes){
							saveUnitItem();
							waitDialog.close();
						}
					});

				} else {
					showMsgOk("","All units should be clear first","info");
				}
	
			}

		}
		
		$scope.sendBackUnit = function(){
			$scope.SendBack = [];

			$.each($scope.ClearanceDivision, function(index, item){
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
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Clearance...', 'Please wait while the request is in progress...', 150, 800);
			clientContext = new SP.ClientContext.get_current();
			
			var oList = clientContext.get_web().get_lists().getByTitle('Clearance_Details');
			var oListItem;
			$.each($scope.SendBack, function (index, item){
			
			    oListItem = oList.getItemById(item.ID);	
				oListItem.set_item('Clearance_Status', $scope.UnitSendBack);
			    oListItem.set_item('UnitStatus' ,$scope.UnitUncleared);
			    oListItem.set_item('UnitRoutingStatus', $scope.UnitRoutingUncleared);
				oListItem.set_item('SendBackTimes', item.SendBackTimes + 1);
				oListItem.set_item('RemarksofClearingOfficer', $scope.SendBackDetails.Remarks);
				
				oListItem.update();
			});
			
			oListItem = oList.getItemById($scope.ClearanceDetails[0].ID);
			oListItem.set_item('AttachmentRemarks', $scope.ClearanceDetails[0].AttachmentRemarks);
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

				saveSendBackHistory();
			});
		}
		
		function showRemarksModal() {  	
			$("#modalSendBackLog").modal('show');
		}
		
		 $scope.CancelClickSendBack = function() {  
		 	$scope.SendBackDetails.Remarks = "";
		 	$("#modalSendBackLog").modal('hide');   
		 }
		
		function saveSendBackHistory(){
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
							if(item.Control_x0020_Code == 'SendBack'){
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
							$scope.SBHistoryListItem.set_item('UnitRoutingStatus', $scope.UnitRoutingUncleared);
							$scope.SBHistoryListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
							$scope.SBHistoryListItem.set_item('Date', (new Date()).toISOString());
							$scope.SBHistoryListItem.set_item('ClearanceNo', $scope.Clearance.ClearanceNo);
							$scope.SBHistoryListItem.set_item('Remarks', $scope.SendBackDetails.Remarks);
							$scope.SBHistoryListItem.update();
							
							unclrUnit_Cc.push($scope.Clearance.AdminOfficerEmail); //creator
							unclrUnit_Cc.push($scope.Clearance.Email); //employee
							unclrUnit_Cc.push(item.AMAO.EMail); //AMAO
							unclrUnit_To.push(item.ClearingOfficer.EMail);	
							
							_unitId = CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey);
							_unclrUnitEmail_Body = unclrUnitEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + _unitId + "'> Link </a>";
							promise = sendEmail($scope.ClearanceDetails[0].ClearingOfficer.EMail, unclrUnit_To, unclrUnit_Cc, _unclrUnitEmail_Body, unclrUnitSubj);
						});	
						
						clientContext.load($scope.SBHistoryListItem);
						clientContext.executeQueryAsync(function(){	
							$q.all(promises).then(function(){	
								var clientContext = new SP.ClientContext.get_current();
								var List = clientContext.get_web().get_lists().getByTitle('Clearance');		
					
							    $scope.oListItem = List.getItemById($scope.ClearanceHeader[0].ID);	
							   	$scope.oListItem.set_item('Remarks', $scope.Clearance.Remarks);		   	
							    $scope.oListItem.update();
								clientContext.executeQueryAsync(function(){ 
									waitDialog.close();
									showMsgRedirect("","Unit was Sent Back","success");	
								});
								
							});
							
						},function(){ 
							//silent alert('error'); 
						});	
									
				}); //end of emailnotif
		}
	
		function saveUnitItem() {
			$scope.UnclearedUnit = [];
			var allUnitClrEmail_Body;
			var allUnitClrSubj;

			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Clearance...', 'Please wait while the request is in progress...', 150, 800);
			
			clientContext = new SP.ClientContext.get_current();
			
			var oList = clientContext.get_web().get_lists().getByTitle('Clearance_Details');
		
		    var oListItem = oList.getItemById($scope.ClearanceDetails[0].ID);
			
			if($scope.ClearanceDetails[0].Unit != null || $scope.ClearanceDetails[0].Unit != undefined){
			    oListItem.set_item('UnitClearanceSubStatus', JSON.stringify($scope.UnitStat));
			    oListItem.set_item('Clearance_Status', $scope.ClearanceUnit[0].UnitStatus);
			    oListItem.set_item('UnitStatus', $scope.ClearanceUnit[0].UnitStatus);
			    oListItem.set_item('UnitRoutingStatus', $scope.ClearanceUnit[0].UnitStatus);
			    oListItem.set_item('Notes', JSON.stringify($scope.NotesDetails));
			    oListItem.set_item('Cost', Number(parseFloat(Math.round($scope.ClearanceUnit[0].Cost * 100) / 100).toFixed(2)));
				oListItem.set_item('DetailsAccountability', $scope.ClearanceUnit[0].DetailsAccountability);
				oListItem.set_item('TextAreaSubStatus', $scope.ClearanceUnit[0].TextAreaSubStatus);
				if($scope.ClearanceUnit[0].UnitStatus == 'Unit Uncleared'){
					oListItem.set_item('UnclearedDate', (new Date()).toISOString());
				}	
				oListItem.set_item('AttachmentRemarks', $scope.ClearanceDetails[0].AttachmentRemarks);

		
			    oListItem.update();	
			} else {
				oListItem.set_item('Clearance_Status', $scope.DivCleared);
				oListItem.set_item('DivisionStatus', $scope.DivCleared);
			    oListItem.set_item('DivisionRoutingStatus', $scope.DivRoutingCleared);
			    oListItem.set_item('AttachmentRemarks', $scope.ClearanceDetails[0].AttachmentRemarks);

			    oListItem.update();
			}		
			
		    clientContext.executeQueryAsync(function() {
		    	if(_myDropzone.files.length > 0){
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.Clearance.Folder).then(function(result){
								waitDialog.close();
							});
					     }
				}
				if($scope.ClearanceDetails[0].Unit != null || $scope.ClearanceDetails[0].Unit != undefined){
					$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*,ClearingOfficer/Title,ClearingOfficer/EMail,AlternateOfficer/Title,EscalationOfficer/Title&$expand=ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=Division eq '" + $scope.ClearanceDetails[0].Division + "' and Title eq '" + $scope.ClearanceDetails[0].Title + "'").then(function(response){	
						$scope.unitDetails = response.data.value;
						
						$.each($scope.unitDetails, function(index, item){
							if(item.Unit != null ){
								if(item.UnitStatus != 'Unit Cleared'){
									$scope.UnclearedUnit.push(item);
								}
							} else {
								_divID = item.ID;	
								_divClearingOfficer = item.ClearingOfficer.EMail;						
							} 
						});
									
						if ($scope.UnclearedUnit.length <= 0){
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
								$scope.EmailNotif = response.data.value;

									$.each($scope.EmailNotif, function(index, item){
										if(item.Control_x0020_Code == 'AllUnitClr'){
											allUnitClrEmail_Body = item.Message_x0020_Body;
											allUnitClrSubj = item.Subject;
										
											var mapObj = {
												ClearanceNo: $scope.Clearance.ClearanceNo,
												EmpLastName: $scope.lname,
												EmpFirstName: $scope.fname
											};
													
											allUnitClrSubj = allUnitClrSubj.replace(/ClearanceNo|EmpLastName|EmpFirstName/gi, function(matched){
											  return mapObj[matched];
											});			
										}
									});
									var allUnitClr_To = [];
									var allUnitClr_Cc = [];
									_allUnitClrId = CryptoJS.AES.encrypt(JSON.stringify(_divID),secretkey);
									_allUnitClrEmail_Body = allUnitClrEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + _allUnitClrId + "'> Link </a>";
									allUnitClr_To.push(_divClearingOfficer);

									
									sendEmail($scope.ClearanceDetails[0].ClearingOfficer.EMail, allUnitClr_To, allUnitClr_Cc, _allUnitClrEmail_Body, allUnitClrSubj);
							});
						}	
					});
				} 
				//else {
				//	alert('division');
				//}
				
				waitDialog.close();
		    	saveTran();
				//alert('saved');
			})
			waitDialog.close();

		}
		
		function saveMainTranHist(){
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			
			$scope.THListItem.set_item('Title', $scope.Clearance.ClearanceNo);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			$scope.THListItem.set_item('Status', $scope.Clearance.OicStatus);
			$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.OicRoutingStatus);
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
		
		function saveTran(){
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('ClearanceDetails_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			var unclrUnitEmail_Body;
			var unclrUnitSubj;
			
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			if($scope.ClearanceDetails[0].Unit != null || $scope.ClearanceDetails[0].Unit != undefined){
				$scope.THListItem.set_item('UnitStatus', $scope.ClearanceUnit[0].UnitStatus);
				$scope.THListItem.set_item('UnitRoutingStatus', $scope.ClearanceUnit[0].UnitStatus);
				
				
				$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
					$scope.EmailNotif = response.data.value;
					
					if($scope.ClearanceUnit[0].UnitStatus == 'Unit Uncleared'){
						$.each($scope.EmailNotif, function(index, item){
							if(item.Control_x0020_Code == 'UnClrUnit'){
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
						var unclrUnit_To = [];
						var unclrUnit_Cc = [];
						_unitId = CryptoJS.AES.encrypt(JSON.stringify($scope.ClearanceDetails[0].ID),secretkey);
						_unclrUnitEmail_Body = unclrUnitEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + _unitId + "'> Link </a>";
						unclrUnit_To.push(_spPageContextInfo.userEmail);
						unclrUnit_Cc.push($scope.Clearance.Email);
						
						sendEmail($scope.ClearanceDetails[0].ClearingOfficer.EMail, unclrUnit_To, unclrUnit_Cc, _unclrUnitEmail_Body, unclrUnitSubj);
					} 
				});

			} else {
				$scope.THListItem.set_item('DivisionStatus', $scope.DivCleared);
				$scope.THListItem.set_item('DivisionRoutingStatus', $scope.DivRoutingCleared);
			}
			
			$scope.THListItem.set_item('Title', $scope.ClearanceDetails[0].ID);
			$scope.THListItem.set_item('ClearanceNo', $scope.Clearance.ClearanceNo);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			
			$scope.THListItem.update();
			
			clientContext.load($scope.THListItem);
			clientContext.executeQueryAsync(function(){	
				saveHeader();
			},function(){ 
				//silent alert('error'); 
			}); 

		}
		
		function saveHeader(){
			

			var clientContext = new SP.ClientContext.get_current();
			var List = clientContext.get_web().get_lists().getByTitle('Clearance');		

		    $scope.oListItem = List.getItemById($scope.ClearanceHeader[0].ID);	
		   	$scope.oListItem.set_item('Remarks', $scope.Clearance.Remarks);		   	
		    $scope.oListItem.update();
			
			clientContext.executeQueryAsync(function(){ 
				if($scope.ClearanceDetails[0].Unit == null || $scope.ClearanceDetails[0].Unit == undefined){
					$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$select=*&$filter=Unit eq null and Title eq'" + $scope.Clearance.ClearanceNo + "'").then(function(response){	
						$scope.ClearedDiv = response.data.value;
						
						var unclearDiv = [];
						var oicEmail_Body;
						var oicSubj;
						$.each($scope.ClearedDiv, function(index, item){
							if(item.DivisionStatus != 'Division Cleared' && item.DivisionRoutingStatus != 'Division Cleared'){
								unclearDiv.push(item.Division);
							}
						});	
						
						if(unclearDiv.length == 0){
							$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NotificationTemplates')/items").then(function(response){	
								$scope.EmailNotif = response.data.value;
								
									$.each($scope.EmailNotif, function(index, item){
										if(item.Control_x0020_Code == 'HR OIC'){
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
											if(item.StageCode.Title == 'HR OIC'){
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
										
										_oicId = CryptoJS.AES.encrypt(JSON.stringify($scope.Clearance.ClearanceNo),secretkey);
										_oicEmail_Body = oicEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _oicId + "'> Link </a>";
										oic_Cc.push($scope.Clearance.AdminOfficerEmail); 
										oic_Cc.push($scope.Clearance.Email);
		
										sendEmailWithBcc(_spPageContextInfo.userEmail, oic_To, oic_Cc, oic_Bcc, _oicEmail_Body, oicSubj);
										saveOicStatus();
									});
							});						
						} // end of unclrdiv length	
							
					});
				
					//showMsgOk('',"Division Cleared","success");
					showMsgRedirect('',"Division Cleared","success");
				} else {
					if($scope.ClearanceUnit[0].UnitStatus == 'Unit Cleared')
						showMsgRedirect('',"Unit Cleared","success");
					else
						showMsgRedirect('',"Unit Uncleared","success");
				}
				load();
				waitDialog.close();
			},function(){ 
				//silent alert('error'); 
			}); 

	
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
        
        function saveOicStatus(){
			var clientContext = new SP.ClientContext.get_current();
			var List = clientContext.get_web().get_lists().getByTitle('Clearance');		
			
		    $scope.oListItem = List.getItemById($scope.ClearanceHeader[0].ID);	
		   	$scope.oListItem.set_item('ClearanceStatus', $scope.Clearance.OicStatusId);	
		   	$scope.oListItem.set_item('ClearanceRoutingStatus', $scope.Clearance.OicRoutingStatusId);		   	
		    $scope.oListItem.update();
		    
		    clientContext.executeQueryAsync(function(){ 
				saveMainTranHist();
				waitDialog.close();
			},function(){ 
				//silent alert('error');
			}); 

		}
		
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

		
		$scope.removeAttachments = function(_index,relativeURL,foldername) {
        	var sure = window.confirm("Are you sure you want to delete this file? \n\n NOTE: This file will be deleted immediately even without saving the record.");
        		if (sure) {
                  //_deletedAttachments.push(relativeURL);
                	var folderurl = _webRelativeURL  + "/Attachments/"+ $scope.Clearance.Folder;
                		if ($scope.Attachments.length < 2) {
	                		filesvc.DeleteFiles(folderurl).then(function(results){
		              			$(results).each(function (index,item) {
			 						if (item.status == "200") {
			 							listservice.Update($scope.Clearance.ID,$scope.Clearance.Folder,_clearance);
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
		
		$scope.SelectAllGridDetails = function(items, control) {
	 		$.each(items, function(index, item){
	 			if(item.Unit != null)
	 			item.Select = control;
	 		})
	 	}

		
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

		
		function validate_curr() {
			$(".txtcurr.form-control").keypress(function (e) {
			    var keyCode = (e.which) ? e.which : e.keyCode;
			        if ((keyCode >= 48 && keyCode <= 57) || (keyCode == 8))
			            return true;
		            else if (keyCode == 46) {
		                var curVal = document.activeElement.value;
		                if (curVal != null && curVal.trim().indexOf('.') == -1)
		                    return true;
		                else
		                    return false;
		            }
		            else if (keyCode == 44) {
		                return true;
		            }
		            else
		                return false;       
    
			 }); 			         
		} 	
		
		$scope.viewUnit = function() {
			$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('UnitStatusViewing')/items?$top=5000&$select=*,SendTo/Title,SendTo/EMail,CopyTo/Title,CopyTo/EMail&$expand=SendTo,CopyTo&$filter=ClearanceUnit eq '" + $scope.ClearanceDetails[0].Unit + "'").then(function(response){	
				$scope.unitStatViewing = response.data.value;
						
				if($scope.unitStatViewing.length > 0){
					$.each($scope.unitStatViewing, function(index,item){
						$http.get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Clearance_Details')/items?$top=5000&$select=*&$filter=Title eq '" + $scope.ClearanceDetails[0].Title + "' and Unit eq '" + item.RelatedUnit + "'").then(function(response){	
							$scope.uView = response.data.value;	
							if($scope.uView.length > 0)
							showMsgOk("", $scope.uView[0].Unit + " - " + $scope.uView[0].UnitStatus,"info");	
						});
					});
				} else {
					showMsgOk("", "No units enrolled for viewing","info");
				}
			});
		};
		
		$scope.cancelclick = function () {
		    $scope.editItem = false;
			$scope.showEdit = true;
			$scope.disableCbox = true;
			$scope.close = true;
	   	};
	   	
	   	
	   	$scope.closed = function () {
		    window.open(_spPageContextInfo.webAbsoluteUrl, "_self");
	   	};
		
		$scope.numberWithCommas = function (x) {
	     if (x) {
	      x = x.toString().replace(/,/g , '')
		  var parts = x.split(".");
		  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		  return parts.join(".");
		 } else {
		   return "";
		 } 
	  }
	}]); // end of angular module
	
	

})(); //end of function


