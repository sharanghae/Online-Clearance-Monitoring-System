var waitDialog;
var _employee = "Employee";
var _levels = "Levels";
var _movement = "Movement";
var _division = "Division";
var LookupStatus = "Status";
var _myDropzone;
var _clearance = "Clearance";
var _clearanceDetails = "Clearance_Details";
var secretkey ="wacky1974";
var lvl;
var fullName;
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
        .controller('Ctrl',["$q","$http", "$scope", "$filter", "$window", "$timeout", "utilsvc", "listservice", "filesvc", function ($q, $http, $scope, $filter, $window, $timeout, utilsvc, listservice, filesvc) {
		
		//$scope.ClearanceDetails = { '__metadata': {'type': 'SP.Data.Clearance_x005f_DetailsListItem'}, Title:"",Division:"",Unit:"",Cost:"",UnitClearanceSubStatus:"",ClearingOfficer:"",Clearance_Status:"",DivisionStatusId:"",DivisionRoutingStatusId:"",UnitStatusId:"",UnitRoutingStatusId:""};
		$scope.ClearanceHeader = { '__metadata': {'type': 'SP.Data.ClearanceListItem'}, Title:"", Request_x0020_No:"<div></div>", AdministeringOfficerId:"",ClearanceStatusId:"",ClearanceRoutingStatusId:"",NameId:"",EmployeeName:"",EmployeeIDNo:"",Position:"",Division:"",Level:"",Movement:"",DateHired:"",DateSeperated:"",Email:"",Reference:"",EmailAddress:"",Telephone:"",MobilePhone:"",Remarks:"",FolderName:""};
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
		
		

		load();
		function load(){
			$scope.lvlGrp= '';
			$scope.divUnit= [];

			$scope.currentDate = new Date();
			_site = _spPageContextInfo.siteAbsoluteUrl; //rootsite
           	_web = _spPageContextInfo.webAbsoluteUrl; //subsite
           	_listEndPoint = '/_api/web/lists';
			
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
            
			utilsvc.LookupStatusValue("Clearance Status", 'Completed', LookupStatus).then(function(results){ 
				$scope.complete = results.data.d.results[0].Description;
				$scope.completeId = results.data.d.results[0].ID;
			});
			utilsvc.LookupStatusValue("Clearance Status", 'Cancelled', LookupStatus).then(function(results){ 
				$scope.cancelled = results.data.d.results[0].Description;
				$scope.cancelledId = results.data.d.results[0].ID;
			});

			
			utilsvc.PopulateNameLookUp($("#cboName"), _site, _employee , "", "Employee_x0020_ID", "calcDesc", "calcDesc", false, $("#EmpNameErrlbl"), 3);
			utilsvc.PopulateNameLookUp($("#cboEmail"), _site, _employee , "", "Email", "Email", "Email", false, $("#EmailErrlbl"), 3);
			utilsvc.PopulateLookUp($("#cboDivision"), _web, _division , "", "Division", "Division", "Division", false, $("#DivisionErrlbl"), 0);
			utilsvc.PopulateLookUp($("#cboLevel"), _web, _levels , "", "LevelDescription", "LevelDescription", "LevelDescription", false, $("#LevelErrlbl"), 0);
			utilsvc.PopulateLookUp($("#cboMovement"), _web, _movement , "", "Movement", "Movement", "Movement", false, $("#MovementErrlbl"), 0);
						
			$('#cboName').change(function (e) {
				
				$("#cboEmail").empty();
				$("#cboDivision").empty();
				
				waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);

				$timeout(function () {
					$scope.EmployeeID = $('#cboName option:selected').val();
					
					$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$select=*&$filter=Employee_x0020_ID eq '" + $scope.EmployeeID +  "' and CompanyCode eq 1000").then(function(response){	
						$scope.Employee = response.data.value;				
						//var options = [{ id: '', text: $scope.Employee[0].Email }];
						//utilsvc.PeoplePicker($('#cboEmail'),options,$('#EmailErrlbl'));
						//_divisionHead = $scope.Employee[0].Division_x0020_Head;
						_divisionHeadEmail = $scope.Employee[0].DivisionHead_Email;
						//_immediateSuperior = $scope.Employee[0].ImmediateSuperior_Name;
						_immediateSuperiorEmail = $scope.Employee[0].ImmediateSuperior_Email;
						
						
						
						$scope.lname = $scope.Employee[0].Family_x0020_Name;
						$scope.fname = $scope.Employee[0].Given_x0020_Name
												
											
							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Clearance')/items?$top=5000&$select=*,AdministeringOfficer/Title&$expand=AdministeringOfficer&$filter=EmployeeIDNo eq '" + $scope.Employee[0].Employee_x0020_ID +  "' and ClearanceStatus ne " + $scope.cancelledId + "").then(function(response){	
								$scope.checkEmp = response.data.value;
								
								//$scope.clearanceNo = $scope.checkEmp[0].Title;
								var _name ="";
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
				if($('#txtReference').val() != null){ $('#ReferenceErrlbl').hide(); }
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
			$scope.saveForm = function(){
				$scope.Status = "For Clearance Completion";
		    	$scope.RoutingStatus = "New";
	            //var ErrRequired = [];
    
	                utilsvc.LookupStatusValue("Clearance Status", $scope.Status, LookupStatus).then(function(results){ 
						$scope.Clearance.Status = results.data.d.results[0].Description;
						$scope.Clearance.ClearanceStatusId = results.data.d.results[0].ID;
					});
					
					utilsvc.LookupStatusValue("Clearance Routing Status", $scope.RoutingStatus, LookupStatus).then(function(results){ 
						$scope.Clearance.RoutingStatus = results.data.d.results[0].Description;
						$scope.Clearance.ClearanceRoutingStatusId = results.data.d.results[0].ID;
					});


	                $scope.Clearance.EmpNameErr = "";
				    $scope.Clearance.EmpIDErr = "";
				    $scope.Clearance.PositionErr = "";
				    $scope.Clearance.DivisionErr = "";
				    $scope.Clearance.LevelErr = "";
				    $scope.Clearance.MovementErr = "";
				    $scope.Clearance.EmailErr = "";		
					$scope.Clearance.ReferenceErr = "";					
					$scope.Clearance.EmailAddErr = "";
					$scope.Clearance.TelephoneErr = "";
					$scope.Clearance.MobilePhoneErr = "";
					$scope.Clearance.DateHiredErr = "";
				    $scope.Clearance.DateSeparatedErr = "";

				    
					//ErrRequired = validateForm(ErrRequired);
					//if (ErrRequired.length == 0) {
						//confirmation
						if($('#cboEmail option:selected').text()){
							utilsvc.YesNoConfirmation('','Are you sure you want to save this request?', function(yes){
								if(yes){
										_email = $('#cboEmail option:selected').text();
										
										$pnp.sp.web.ensureUser(_email).then(function(result){
											if(result){
												createRequestNo('ocms counter', 'Draft', function(ret) {
													if (ret != null && ret != undefined && ret != '') 
														saveItems(ret);															
												});
											} else
												showMsgOk("","Employee email not found in 365 site users list!","error");
	
										});
									/*	utilsvc.EnsureUser(_email.split('@')[0], function(bool){
											if(bool){
												createRequestNo('ocms counter', 'Draft', function(ret) {
													if (ret != null && ret != undefined && ret != '') 
														saveItems(ret);	
														waitDialog.close();
														_msg = "Request has been saved."
														utilsvc.RedirectNdMsg("",_msg);
														
												});
											} else
												showMsgOk("","Requestor email not found in 365 site users list!","error");
										}); */
								}	
							});	
						} else {
							utilsvc.YesNoConfirmation('','Are you sure you want to save this request?', function(yes){
								if(yes){
									createRequestNo('ocms counter', 'Draft', function(ret) {
										if (ret != null && ret != undefined && ret != '') 
											saveItems(ret);	
										});
								}
							});
						}						
				/*	} else {
						var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
							if(panelID != null)
							$('#' + panelID + ".collapse").collapse('show');
							$('#' + ErrRequired[0]).focus()
							showMsgOk("","Please check form for error messages","error");
					}*/
			}; //end of saveform()
				
		
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

							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('LevelGroup')/items?$top=5000&$filter=substringof('" + $('#cboLevel option:selected').val() + "',LevelGroup)").then(function(response){	
								$scope.lvlGrp = response.data.value;
								$scope.modalTable = [];
								
								if($scope.lvlGrp.length > 0){
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
								} else {
									showMsgOk("","There's no generated division unit for this level","warning");	
								}
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
								$("#modalConfirmation").modal('hide');
								saveItems(ret);										
						});
					} else
						showMsgOk("","Requestor email not found in 365 site users list!","error");

				});
					
			/*	utilsvc.EnsureUser(_email.split('@')[0], function(bool,email){
					if(bool){
						_email = email;
						createRequestNo('ocms counter', 'Permanent', function(ret) {
							if (ret != null && ret != undefined && ret != '') 
								saveItems(ret);																									
							});
					} else {
						showMsgOk("","Requestor email not found in 365 site users list!","error");
					}
				}); */
			}
		
			function validateForm(ErrRequired){
				    //var validate = validateAllDetails();
				    ErrRequired = ErrRequired || [];
				
				    if(!$('#cboName').val()){ ErrRequired.push('EmpName'); $('#EmpNameErrlbl').show(); $scope.Clearance.EmpNameErr = "Please fill out this field";}
				    if(!$('#txtEmpID').val()){ ErrRequired.push('EmpID'); $('#EmpIDErrlbl').show(); $scope.Clearance.EmpIDErr = "Please fill out this field";}
				    if(!$('#txtPosition').val()){ ErrRequired.push('Position'); $('#PositionErrlbl').show(); $scope.Clearance.PositionErr = "Please fill out this field";}
				    if(!$('#cboDivision').val()){ ErrRequired.push('Division'); $('#DivisionErrlbl').show(); $scope.Clearance.DivisionErr = "Please fill out this field";}
				    if(!$('#cboLevel').val()){ ErrRequired.push('Level'); $('#LevelErrlbl').show(); $scope.Clearance.LevelErr = "Please fill out this field";}
				    if(!$('#cboMovement').val()){ ErrRequired.push('Movement'); $('#MovementErrlbl').show(); $scope.Clearance.MovementErr = "Please fill out this field";}
				    if(!$('#cboEmail').val()){ ErrRequired.push('Email'); $('#EmailErrlbl').show(); $scope.Clearance.EmailErr = "Please fill out this field";}			
					if(!$('#txtReference').val()){ ErrRequired.push('Reference'); $('#ReferenceErrlbl').show(); $scope.Clearance.ReferenceErr = "Please fill out this field";}					
					if(!$('#txtEmailAdd').val()){ ErrRequired.push('EmailAdd'); $('#EmailAddErrlbl').show(); $scope.Clearance.EmailAddErr = "Please fill out this field";}
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
				
			    return ErrRequired;
			    
			}; //end of validateform()
				

     	
     	
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
		
		
		//create req no.
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

		
		
		function saveItems(_id) {
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Clearance...', 'Please wait while the request is in progress...', 150, 1024);
			_itemId = CryptoJS.AES.encrypt(JSON.stringify(_id),secretkey);
			$scope.Clearance.ClearanceNo = _id
			$scope.Clearance.ApplicationDate = new Date();
			$scope.Clearance.AdministeringOfficer = {'results': [_spPageContextInfo.userId * 1]};	
			//alert(JSON.stringify($scope.Clearance.AdministeringOfficer));
			
			$scope.ClearanceHeader.Title = _id;
			$scope.ClearanceHeader.Request_x0020_No = ('<a href="' + _spPageContextInfo.webAbsoluteUrl + "/SitePages/Clearance_Display.aspx?param=" + _itemId + '">' + $scope.Clearance.ClearanceNo + '</a>');
			$scope.ClearanceHeader.ApplicationDate = $scope.Clearance.ApplicationDate;
			$scope.ClearanceHeader.AdministeringOfficerId = { 'results': [_spPageContextInfo.userId * 1] };	
			$scope.ClearanceHeader.ClearanceStatusId = $scope.Clearance.ClearanceStatusId;
			$scope.ClearanceHeader.ClearanceRoutingStatusId = $scope.Clearance.ClearanceRoutingStatusId;
			$scope.ClearanceHeader.NameId = _spPageContextInfo.userId * 1;	
			$scope.ClearanceHeader.EmployeeName = fullName;	
			$scope.ClearanceHeader.EmployeeIDNo = $scope.Clearance.EmpID;
			$scope.ClearanceHeader.Position = $scope.Clearance.Position;
			$scope.ClearanceHeader.Division = $('#cboDivision option:selected').val();
			$scope.ClearanceHeader.Level = $('#cboLevel option:selected').val();
			$scope.ClearanceHeader.Movement = $('#cboMovement option:selected').val();
			$scope.ClearanceHeader.DateHired = $scope.momentformat($('#DateHired').val());
			$scope.ClearanceHeader.DateSeperated = $scope.momentformat($('#DateSeparated').val());
			$scope.ClearanceHeader.Email = $('#cboEmail option:selected').text();
			$scope.ClearanceHeader.Reference = $scope.Clearance.Reference;
			$scope.ClearanceHeader.EmailAddress = $scope.Clearance.EmailAddress;
			$scope.ClearanceHeader.Telephone = $scope.Clearance.Telephone;
			$scope.ClearanceHeader.MobilePhone = $scope.Clearance.MobilePhone;
			$scope.ClearanceHeader.Remarks = $scope.Clearance.Remarks;
			
			$scope.Clearance.Folder = utilsvc.CreateFolderName();
			$scope.ClearanceHeader.FolderName = $scope.Clearance.Folder;
	
			listservice.Insert($scope.ClearanceHeader,_clearance).then(function(results){

				
			/*	if($scope.Clearance.Status != "For Clearance Completion"){
					waitDialog.close();
					createClearanceDetails($scope.modalTable);
					//waitDialog.close();
				} */

				//save documents
				
				
				if(_myDropzone.files.length > 0){
				waitDialog.close();				
					var _files = _myDropzone.files;	
						if(_files.length > 0){
							waitDialog= SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving Attachment...', 'Please wait while request is in progress...', 150, 1024);															
							$scope.SaveDocument(_myDropzone.files,$scope.Clearance.Folder).then(function(result){
								waitDialog.close();
								if($scope.Clearance.Status != "For Clearance Completion"){
									waitDialog.close();
									createClearanceDetails($scope.modalTable);
									//waitDialog.close();
								} else {
									waitDialog.close();
									_msg = "Request has been saved."
									utilsvc.RedirectNdMsg("",_msg);
								}
							});
					     }
				} else {
					if($scope.Clearance.Status != "For Clearance Completion"){
						waitDialog.close();
						createClearanceDetails($scope.modalTable);
						//waitDialog.close();
					} else {
						waitDialog.close();
						_msg = "Request has been saved."
						utilsvc.RedirectNdMsg("",_msg);
					}
				}
				//end save documents
				SaveTran(_RequestNo);
				//waitDialog.close();
			}).catch(function(data){
                waitDialog.close();
                alert("Error on Saving Clearance. Invalid JSON data. \n\n" + JSON.stringify(data));
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
            }
            else {
                deffered.resolve("success");
                waitDialog.close();
            };
              
            return deffered.promise;
            waitDialog.close()	
               		        	
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
		
		
		function SaveTran(reqno)
        {
			//save transaction
			var clientContext = new SP.ClientContext.get_current();
			var THList = clientContext.get_web().get_lists().getByTitle('Clearance_History');
			var _itemCreateInfo = new SP.ListItemCreationInformation();
			$scope.THListItem = THList.addItem(_itemCreateInfo);
			
			$scope.THListItem.set_item('Title', reqno);
			$scope.THListItem.set_item('Date', (new Date()).toISOString());
			$scope.THListItem.set_item('UpdatedBy', _spPageContextInfo.userId * 1);
			$scope.THListItem.set_item('Status', $scope.Clearance.Status);
			$scope.THListItem.set_item('RoutingStatus', $scope.Clearance.RoutingStatus);
			$scope.THListItem.set_item('Remarks', "");
						
			$scope.THListItem.update();
			clientContext.load($scope.THListItem);
			clientContext.executeQueryAsync(function(){ 
				//silent alert('saved'); 
				//waitDialog.close();
			},
			function(){ 
				//silent alert('error'); 
			});
			//transaction end
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
									$scope.ClearanceDetails = response.data.value;	
										var clientContext = new SP.ClientContext.get_current();
										var THList = clientContext.get_web().get_lists().getByTitle('ClearanceDetails_History');
										var _itemCreateInfo = new SP.ListItemCreationInformation();
										
									$.each($scope.ClearanceDetails, function (index, item){
										$scope.THListItem = THList.addItem(_itemCreateInfo);
										var c = 0;
										if(item.Unit == null || item.Unit == undefined){
											$.each($scope.ClearanceDetails, function (index, item2){	
												if(item2.Division == item.Division){
													c++;
												}
											});
											
											if(c < 2){
												_divId = CryptoJS.AES.encrypt(JSON.stringify(item.ID),secretkey);
												_divBody = divEmail_Body + ">" + "<a href='" + _spPageContextInfo.webAbsoluteUrl + "/SitePages/ClearanceDivUnit_Display.aspx?param=" + _divId + "'> Link </a>";
												var divEmail_To = [];
												divEmail_To.push(item.ClearingOfficer.EMail)
												promise = sendEmail(_spPageContextInfo.userEmail, divEmail_To, _divBody, newDivSubj);
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
											unitEmail_To.push(item.ClearingOfficer.EMail)
											promise = sendEmail(_spPageContextInfo.userEmail, unitEmail_To, _unitBody, newUnitSubj);	
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

			
		$scope.cancelclick = function () {
		    window.open(_spPageContextInfo.webAbsoluteUrl , "_self");
	   	};
   	
		function sendEmail(from, to, body, subject) {
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
		                // 'CC': {
		                 //   'results': cc
		                //},
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
		
		$scope.ArraytoString = function(array){
		   if (!array) {
		     return "";   }
		   //array = JSON.parse(array);   
		   var newArray = $.map( array, function(value, index) {  
			    		      return [value];
		     	           });
		
		   var result =  newArray.join(" | "); 
		   return result;
		 }


	}]); // end of angular module
	
	

})(); //end of function


