var waitDialog;
var _employee = "Employee";
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
		
		$scope.ListDeleted = [];
		
		$scope.DivUnit = { 
			NameErr: "",	
			Abbrv: "",
			AbbrvErr: "",
			Description: "",
			DescriptionErr: "",
			Level: [],
			LevelErr: "",
			DivAMAOErr: "",
			DivClearOfficerErr: "",
			DivAlterOfficerErr: "",
			DivEscalOfficerErr: "",
			Notify: "",
			ProcessDays: ""	
		}	
		
		

		load();
		function load(){
			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);


			_site = _spPageContextInfo.siteAbsoluteUrl; //rootsite
           	_web = _spPageContextInfo.webAbsoluteUrl; //subsite
			_itemId = displaysvc.GetUrlParameter("ItemId");


			
			$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Division_Unit')/items?$select=*,Level/LevelGroup,Division/Division,Unit_Item/Unit&$expand=Division,Unit_Item,Level&$filter=ID eq '" + _itemId + "'").then(function(response){	
				$scope.DivUnit = response.data.value;
					$scope.DivUnit.Level = $scope.DivUnit[0].Level.LevelGroup.split(' | ');
				
				    	$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Levels')/items").then(function(response){	
							$scope.LevelLookup = response.data.value;
						   		$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/siteusers?$top=5000&$filter=Id eq " + $scope.DivUnit[0].AMAOId + "").then(function(response){	
									$scope.siteUserAMAO = response.data.value;
									$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Email eq '" + $scope.siteUserAMAO[0].Email + "'").then(function(response){	
										$scope.AMAO = response.data.value;
										var initAMAO = [{ id: $scope.AMAO[0].Employee_x0020_ID, text: $scope.AMAO[0].calcDesc }];
										utilsvc.PopulateLookUp($("#cboDivAMAO"), _site, _employee , initAMAO, "Employee_x0020_ID", "calcDesc", "calcDesc", false, $("#DivAMAOErrlbl"), 3);
										waitDialog.close();
									});
								});	
								
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/siteusers?$top=5000&$filter=Id eq " + $scope.DivUnit[0].ClearingOfficerId + "").then(function(response){	
									$scope.siteUserCO = response.data.value;
										$http.get(_spPageContextInfo.siteAbsoluteUrl+  "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Email eq '" + $scope.siteUserCO[0].Email + "'").then(function(response){	
											$scope.CO = response.data.value;
											var initCO = [{ id: $scope.CO[0].Employee_x0020_ID, text: $scope.CO[0].calcDesc }];
											utilsvc.PopulateLookUp($("#cboDivClearOfficer"), _site, _employee , initCO, "Employee_x0020_ID", "calcDesc", "calcDesc", false, $("#DivClearOfficerErrlbl"), 3);
											waitDialog.close();
										});
								});			
										
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/siteusers?$top=5000&$filter=Id eq " + $scope.DivUnit[0].AlternateOfficerId + "").then(function(response){	
									$scope.siteUserAO = response.data.value;
										$http.get(_spPageContextInfo.siteAbsoluteUrl+  "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Email eq '" + $scope.siteUserAO[0].Email + "'").then(function(response){	
											$scope.AO = response.data.value;
											var initAO = [{ id: $scope.AO[0].Employee_x0020_ID, text: $scope.AO[0].calcDesc }];
											utilsvc.PopulateLookUp($("#cboDivAlterOfficer"), _site, _employee , initAO, "Employee_x0020_ID", "calcDesc", "calcDesc", false, $("#DivAlterOfficerErrlbl"), 3);
											waitDialog.close();
										});	
								});								
								
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/siteusers?$top=5000&$filter=Id eq " + $scope.DivUnit[0].EscalationOfficerId + "").then(function(response){	
									$scope.siteUserEO = response.data.value;
										$http.get(_spPageContextInfo.siteAbsoluteUrl+  "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Email eq '" + $scope.siteUserEO[0].Email + "'").then(function(response){	
											$scope.EO = response.data.value;
											var initEO = [{ id: $scope.EO[0].Employee_x0020_ID, text: $scope.EO[0].calcDesc }];
											utilsvc.PopulateLookUp($("#cboDivEscalOfficer"), _site, _employee , initEO, "Employee_x0020_ID", "calcDesc", "calcDesc", false, $("#DivEscalOfficerErrlbl"), 3);
											waitDialog.close();
										});																	
								});	
								$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Division')/items?$top=5000&$filter=Division eq '" + $scope.DivUnit[0].Division.Division + "'").then(function(response){	
									$scope.DivisionLookup = response.data.value;
									waitDialog.close();																	
								});						
						});
					
					$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Division_Unit')/items?$select=*,Division/Division,Unit_Item/Unit,ClearingOfficer/Title,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title,AMAO/Title&$expand=AMAO,Division,Unit_Item,ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=Unit_Item ne null and LevelId eq '" + $scope.DivUnit[0].LevelId + "' and Division/Division eq '" + $scope.DivUnit[0].Division.Division + "'").then(function(response){	
						$scope.Units = response.data.value;
						var p;
						var promises = [];
						$.each($scope.Units, function(index2, item2){
						
							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/siteusers?$top=5000&$filter=Id eq " + item2.AMAOId + "").then(function(response){	
								$scope.UnitUserAMAO = response.data.value;
										$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Email eq '" + $scope.UnitUserAMAO[0].Email + "'").then(function(response){	
											$scope.unitAMAO1 = response.data.value;
										   		_initcboAMAO = [{ id: $scope.unitAMAO1[0].Employee_x0020_ID, text: $scope.unitAMAO1[0].calcDesc }];
												$timeout(function(){										
													initCboAMAO(index2, _initcboAMAO);
													waitDialog.close();
												},0);  
										});
							});	
	
							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/siteusers?$top=5000&$filter=Id eq " + item2.ClearingOfficerId + "").then(function(response){	
								$scope.UnitUserCO = response.data.value;
									$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Email eq '" + $scope.UnitUserCO[0].Email + "'").then(function(response){	
										$scope.unitCO1 = response.data.value;
											_initcboCO = [{ id: $scope.unitCO1[0].Employee_x0020_ID, text: $scope.unitCO1[0].calcDesc }];
											$timeout(function(){										
												initCboCO(index2, _initcboCO);
												waitDialog.close();
											},0);
									});									    								
							});
							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/siteusers?$top=5000&$filter=Id eq " + item2.AlternateOfficerId + "").then(function(response){	
								$scope.UnitUserAO = response.data.value;
										$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Email eq '" + $scope.UnitUserAO[0].Email + "'").then(function(response){	
											$scope.unitAO1 = response.data.value;
												$timeout(function(){										
													initCboAO(index2, [{ id: $scope.unitAO1[0].Employee_x0020_ID, text: $scope.unitAO1[0].calcDesc }]);
													waitDialog.close();
												},0);
										});									    
								
							});	

							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/siteusers?$top=5000&$filter=Id eq " + item2.EscalationOfficerId + "").then(function(response){	
								$scope.UnitUserEO = response.data.value;
										$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Email eq '" + $scope.UnitUserEO[0].Email + "'").then(function(response){	
											$scope.unitEO1 = response.data.value;
												_initcboEO = [{ id: $scope.unitEO1[0].Employee_x0020_ID, text: $scope.unitEO1[0].calcDesc }];
												$timeout(function(){										
													initCboEO(index2, _initcboEO);
													waitDialog.close();
												},0);
										});									    
							});
						});
					});

			}); 
			
						
			
			
			$('#cboLevel').change(function(e){
				if($('#cboLevel').val() != null){ $('#LevelErrlbl').hide(); }
			});

			$('#txtName').change(function(e){
				if($('#txtName').val() != null){ $('#NameErrlbl').hide(); }
			});
			
			$('#txtAbb').change(function(e){
				if($('#txtAbb').val() != null){ $('#AbbrvErrlbl').hide(); }
			});

			
			$('#txtDivDesc').change(function(e){
				if($('#txtDivDesc').val() != null){ $('#DivDescErrlbl').hide(); }
			});
			
			
			$timeout(function(){ initSelect2();validate_curr();},0);
			
		}; //end of load()
 		
 		function initSelect2()
		 {
			$('select.chosen').select2();
			//$('.select2-selection' ).css("fontSize", "");
			//$('p.lblErr').hide();
			$("select.chosen").on("select2:select.chosen", function (evt) {
			  var element = evt.params.data.element;
			  var $element = $(element);
			  
			  $element.detach();
			  $(this).append($element);
			  $(this).trigger("change");
			});
			$('span.select2-selection' ).css("height", "34px");
		 }
		 
		$scope.saveForm = function () {
			var ErrRequired = [];
			
			ErrRequired = validateForm(ErrRequired);
			if (ErrRequired.length == 0) {
				saveLvlGrp();				
			} else {
				var panelID = $('#' + ErrRequired[0]).closest("panel").attr("id");
					if(panelID != null)
						$('#' + panelID + ".collapse").collapse('show');
						$('#' + ErrRequired[0]).focus()
						showMsgOk("","Please check form for error messages","error");
					}
			
		};
		
		function saveLvlGrp() {
	        waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Saving...', 'Please wait while request is in progress...', 150, 800);
	        var d,e,f,g;
	        var divCOId;
	        var divAOId;
	        var divEOId;
	        var divAMAOId;
	        var unitCOId;
	        var unitAOId;
	        var unitEOId;
	        var unitAMAOId;  
			var clientContext = new SP.ClientContext.get_current();
			var itemCreateInfo = new SP.ListItemCreationInformation();		
			var lvlGrpList = clientContext.get_web().get_lists().getByTitle('LevelGroup');	
		
	        var lvlGrp_listitem = lvlGrpList.getItemById($scope.DivUnit[0].LevelId);
	        
	        lvlGrp_listitem.set_item('LevelGroup', $scope.ArraytoString($scope.DivUnit.Level));
	        		
			lvlGrp_listitem.update();
			clientContext.executeQueryAsync(function() { 
				_lvlGrpId = $scope.DivUnit[0].LevelId;
					_DivId = $scope.DivUnit[0].DivisionId; //Division ID
						var clientContext = new SP.ClientContext.get_current();
						var itemCreateInfo = new SP.ListItemCreationInformation();		
						var DivUnitItemList = clientContext.get_web().get_lists().getByTitle('Division_Unit');	
						var d, e, f, g;
						var DivUnit_listitem = DivUnitItemList.getItemById(_itemId);	
							$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Employee_x0020_ID eq '" + $('#cboDivClearOfficer').val() + "'").then(function(response){	
								$scope.CO = response.data.value;
									if($scope.CO[0].Email){
										d = ResolvebyEmail($scope.CO[0].Email);
								          	if(d){
								          		COId = d.Id;
								          		DivUnit_listitem.set_item('ClearingOfficer', COId * 1);
							               	} else {
												alert('Division Clearing officer\'s email not found in 365 site users list')											          		
								          	}
									}
									$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Employee_x0020_ID eq '" + $('#cboDivAlterOfficer').val() + "'").then(function(response){	
										$scope.AO = response.data.value;
											if($scope.AO[0].Email){
												e = ResolvebyEmail($scope.AO[0].Email);
										          	if(e){
										          		AOId = e.Id;
										          		DivUnit_listitem.set_item('AlternateOfficer', AOId * 1);
									               	} else {
														alert('Division Alternate officer\'s email not found in 365 site users list')											          		
										          	}
											}
											$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Employee_x0020_ID eq '" + $('#cboDivEscalOfficer').val() + "'").then(function(response){	
												$scope.EO = response.data.value;
													if($scope.EO[0].Email){
														f = ResolvebyEmail($scope.EO[0].Email);
												          	if(f){
												          		EOId = f.Id;
												          		DivUnit_listitem.set_item('EscalationOfficer', EOId * 1);
											               	} else {
																alert('Division Escalation officer\'s email not found in 365 site users list')											          		
												          	}
													}
													$http.get(_spPageContextInfo.siteAbsoluteUrl+"/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Employee_x0020_ID eq '" + $('#cboDivAMAO').val() + "'").then(function(response){	
														$scope.AMAO = response.data.value;
															if($scope.AMAO[0].Email){
																g = ResolvebyEmail($scope.AMAO[0].Email);
														          	if(g){
														          		AMAOId = g.Id;
														          		DivUnit_listitem.set_item('AMAO', AMAOId * 1);
													               	} else {
																		alert('Division AMAO officer\'s email not found in 365 site users list')											          		
														          	}
															}
															DivUnit_listitem.set_item('Level', _lvlGrpId);		
															DivUnit_listitem.set_item('Levels', $scope.ArraytoString($scope.DivUnit.Level));					
															DivUnit_listitem.set_item('DivisionAbb', $scope.DivUnit[0].DivisionAbb);
															DivUnit_listitem.set_item('NoOfTImesNotify', $scope.DivUnit[0].NoOfTImesNotify);
															DivUnit_listitem.set_item('ProcessingDays', $scope.DivUnit[0].ProcessingDays);
															DivUnit_listitem.set_item('Description', $scope.DivUnit[0].Description);
															DivUnit_listitem.update();
															
															clientContext.executeQueryAsync(function() {
														    
														    	if($scope.Units.length > 0){
																	var d,e,f,g;
																	var clientContext = new SP.ClientContext.get_current();
																	var itemCreateInfo = new SP.ListItemCreationInformation();		
																	var UnitItemList = clientContext.get_web().get_lists().getByTitle('Unit_Item'); 
																	var UnitItem_listitem;  	
																	var uitem;
																	var p;
																	var promises = [];
																	var error = [];
																	$.each($scope.Units , function(index, item){ 
																		uitem = $scope.DivUnit[0].DivisionAbb + '\\' + item.ItemName;	 
																		p = $http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Unit_Item')/items?$top=5000&$select=*&$filter=Unit eq '" + uitem + "'").then(function(response){	
																					$scope.checkUnit = response.data.value;
																						if($scope.checkUnit.length > 0){
																							_unitId = $scope.checkUnit[0].ID;
																						} else {
																								
																							UnitItem_listitem = UnitItemList.addItem(itemCreateInfo);	 
																							UnitItem_listitem.set_item('Unit', $scope.DivUnit[0].DivisionAbb + '\\' + item.ItemName);
																		        			UnitItem_listitem.update();	
																		        		}
																		       	
																			
																		});    
																		promises.push(p);
																	});  
																	$q.all(promises).then(function(){
																		clientContext.executeQueryAsync(function() {
																				
																					$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Unit_Item')/items").then(function(response){	
																						$scope.UnitItem = response.data.value;
																							var clientContext = new SP.ClientContext.get_current();
																							var itemCreateInfo = new SP.ListItemCreationInformation();		
																							var DivUnitItemList = clientContext.get_web().get_lists().getByTitle('Division_Unit');	
																							var DivUnit_listitem;
																							var urlValue = new SP.FieldUrlValue();
																								$.each($scope.UnitItem, function(index,item2){
																									$.each($scope.Units, function(index, item){
																										unit_item = $scope.DivUnit[0].DivisionAbb + '\\' + item.ItemName;
																											if(item2.Unit == unit_item){
																												if (item.ID == undefined) {  // check if new record or load record and save as new record
																										        	DivUnit_listitem = DivUnitItemList.addItem(itemCreateInfo);
																													urlValue.set_url(_spPageContextInfo.webAbsoluteUrl + "/SitePages/DivisionUnit_Display.aspx?ItemId="+ _itemId);
																					                				urlValue.set_description($scope.DivUnit[0].DivisionName);
																					                				DivUnit_listitem.set_item('Divisions',urlValue);
																										        } else {
																												    DivUnit_listitem = DivUnitItemList.getItemById(item.ID); 
																												} 
																												DivUnit_listitem.set_item('Unit_Item', item2.Id);
																												DivUnit_listitem.set_item('Level', _lvlGrpId);
																												DivUnit_listitem.set_item('Levels', $scope.ArraytoString($scope.DivUnit.Level));	
																												DivUnit_listitem.set_item('Division', _DivId);	
																												DivUnit_listitem.set_item('DivisionName', $scope.DivisionLookup[0].Division);						
																												DivUnit_listitem.set_item('DivisionAbb', $scope.DivUnit[0].DivisionAbb);
																												if(item.NoOfTImesNotify == '' || item.NoOfTImesNotify == null || item.NoOfTImesNotify == undefined){
																													DivUnit_listitem.set_item('NoOfTImesNotify', '0');
																												} else {
																													DivUnit_listitem.set_item('NoOfTImesNotify', item.NoOfTImesNotify);
																												}
																												if(item.ProcessingDays == '' || item.ProcessingDays == null || item.ProcessingDays == undefined){
																													DivUnit_listitem.set_item('ProcessingDays', '0');
																												} else {
																													DivUnit_listitem.set_item('ProcessingDays', item.ProcessingDays);
																												}
																												DivUnit_listitem.set_item('Unit_x0020_Item', item2.Unit);
																												DivUnit_listitem.set_item('Description', item.Description);
																												DivUnit_listitem.set_item('ItemName', item.ItemName);
																												
		
																												DivUnit_listitem.update();
																											}
																									});
																								});
																							clientContext.executeQueryAsync(function() {
																								
		
																								//waitDialog.close();
																								urlValue.set_url(_spPageContextInfo.webAbsoluteUrl + "/SitePages/DivisionUnit_Display.aspx?ItemId="+_DivId);
																                									urlValue.set_description($scope.DivUnit[0].DivisionName);
																                									DivUnit_listitem.set_item('Divisions',urlValue);
																									$http.get(_spPageContextInfo.webAbsoluteUrl +"/_api/web/lists/getbytitle('Division_Unit')/items?$top=5000&$select=*,Unit_Item/Unit&$expand=Unit_Item&$filter=ItemName ne null and Level eq " + _lvlGrpId + "").then(function(response){	
																										$scope.Unit = response.data.value;
																										
																										if($scope.Unit.length > 0){
																											saveOfficer($scope.Unit);
																										}
																									});	
																								
																							},function(){
																								waitDialog.close();
																								alert('Saving failed');			
																							});
																					}); 
																							
																			    },function(){
																					waitDialog.close();
																					alert('Saving failed');			
																				}); 
																		
																	});	
																}//end of if units length > 0
																else {
																	waitDialog.close();
																	window.open(_spPageContextInfo.webAbsoluteUrl + '/Lists/Division_Unit' , "_self");
																}
															},function(){
																waitDialog.close();
																alert('Saving failed');			
															});
													});
											});
									});
							});
	

			},function(){
					waitDialog.close();
					alert('Saving failed');			
			});
	
			
	 	}
		
		function saveOfficer(arr){
	 	
	 	var clientContext = new SP.ClientContext.get_current();
		var itemCreateInfo = new SP.ListItemCreationInformation();		
		var DivUnitItemList = clientContext.get_web().get_lists().getByTitle('Division_Unit');	
		var DivUnit_listitem;
	 	var promises = [];
		var p;

	 		$.each($scope.Units, function(index, item){	
	 		
		 		p = $http.get(_spPageContextInfo.siteAbsoluteUrl+  "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Employee_x0020_ID eq '" + item.ClearingOfficerId + "'").then(function(response){	
						$scope.UnitCO = response.data.value;
						$.each(arr, function(index, item2){
							unit_item = $scope.DivUnit[0].DivisionAbb + '\\' + item.ItemName;
							if(item2.Unit_Item.Unit == unit_item){
								DivUnit_listitem = DivUnitItemList.getItemById(item2.ID);	
									if($scope.UnitCO.length > 0){
										d = ResolvebyEmail($scope.UnitCO[0].Email);
											if(d){
								          		unitCOId = d.Id;
								          		DivUnit_listitem.set_item('ClearingOfficer', unitCOId * 1);
								          		DivUnit_listitem.update();
							               	} else {
												alert('Unit Clearing officer\'s email not found in 365 site users list');											          		
											}
									}
							}	
						});

					});															
				promises.push(p);	
				
				p = $http.get(_spPageContextInfo.siteAbsoluteUrl+  "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Employee_x0020_ID eq '" + item.AlternateOfficerId + "'").then(function(response){	
						$scope.UnitAO = response.data.value;
						$.each(arr, function(index, item2){
							unit_item = $scope.DivUnit[0].DivisionAbb + '\\' + item.ItemName;
							if(item2.Unit_Item.Unit == unit_item){
								DivUnit_listitem = DivUnitItemList.getItemById(item2.ID);	
									if($scope.UnitAO.length > 0){
										e = ResolvebyEmail($scope.UnitAO[0].Email);
									    	if(e){
									    		unitAOId = e.Id;	
									    		DivUnit_listitem.set_item('AlternateOfficer', unitAOId * 1);
									    		DivUnit_listitem.update();
									       	} else {
												alert(' UnitAlternate Officer\'s email not found in 365 site users list');											          		
									       	}
									}
							}	
						});

					});
				promises.push(p);
						
				p = $http.get(_spPageContextInfo.siteAbsoluteUrl+  "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Employee_x0020_ID eq '" + item.EscalationOfficerId + "'").then(function(response){	
						$scope.UnitEO = response.data.value;
						$.each(arr, function(index, item2){
							unit_item = $scope.DivUnit[0].DivisionAbb + '\\' + item.ItemName;
							if(item2.Unit_Item.Unit == unit_item){
								DivUnit_listitem = DivUnitItemList.getItemById(item2.ID);	
									if($scope.UnitEO.length > 0){
										f = ResolvebyEmail($scope.UnitEO[0].Email);
									    	if(f){
										   		unitEOId = f.Id;
									    		DivUnit_listitem.set_item('EscalationOfficer', unitEOId * 1);
									    		DivUnit_listitem.update();
									       	} else {
												alert('Unit Escalation Officer\'s email not found in 365 site users list');										          		
									       	}
									}
							}	
						});

					});	
				promises.push(p);
						
				p = $http.get(_spPageContextInfo.siteAbsoluteUrl+  "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Employee_x0020_ID eq '" + item.AMAOId + "'").then(function(response){	
						$scope.UnitAMAO = response.data.value;
						$.each(arr, function(index, item2){
							unit_item = $scope.DivUnit[0].DivisionAbb + '\\' + item.ItemName;
							if(item2.Unit_Item.Unit == unit_item){
								DivUnit_listitem = DivUnitItemList.getItemById(item2.ID);	
									if($scope.UnitAMAO.length > 0){
										g = ResolvebyEmail($scope.UnitAMAO[0].Email);
									    	if(g){
									    		unitAMAOId = g.Id;	
									    		DivUnit_listitem.set_item('AMAO', unitAMAOId * 1);	
									    		DivUnit_listitem.update();	
											} else {
												alert('Unit AMAO Officer\'s email not found in 365 site users list');											          		
											}
									}						
							}	
						});

					});
				promises.push(p); 
																		 						
			});
						

			$q.all(promises).then(function(){	
				clientContext.executeQueryAsync(function() {
					del();
					waitDialog.close();
					showMsgOk('','Division Unit saved','success');
					window.open(_spPageContextInfo.webAbsoluteUrl + '/Lists/Division_Unit' , "_self");
					//waitDialog.close();
				},function(){
					waitDialog.close();
					alert('Saving failed');			
				});
			});
													
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

		function validateForm(ErrRequired){
		
			ErrRequired = ErrRequired || [];
		
		    if($scope.DivUnit[0].Division.Division == ""){ 
				ErrRequired.push('Name'); 
				$('#NameErrlbl').show(); 
				$scope.DivUnit.NameErr = "Please fill out this field";
			} else {
				$scope.DivUnit.NameErr = "";				
			}
			
			if($scope.DivUnit[0].DivisionAbb == ""){ 
				ErrRequired.push('Abbrv'); 
				$('#AbbrvErrlbl').show(); 
				$scope.DivUnit.AbbrvErr = "Please fill out this field";
			} else {
				$scope.DivUnit.AbbrvErr = "";
			}
			
			if($scope.DivUnit[0].Description == ""){ 
				ErrRequired.push('DivDescription'); 
				$('#DivDescErrlbl').show(); 
				$scope.DivUnit.DescriptionErr = "Please fill out this field";
			} else {
				$scope.DivUnit.DescriptionErr = "";
			}
			
			if($scope.DivUnit.Level == ""){ 
				ErrRequired.push('Level '); 
				$('#LevelErrlbl').show(); 
				$scope.DivUnit.LevelErr = "Please fill out this field";
			} else {
				$scope.DivUnit.LevelErr = "";
			}

			if(!$('#cboDivAMAO').val()){ 
				ErrRequired.push('AMAO'); 
				$('#DivAMAOErrlbl').show(); 
				$scope.DivUnit.DivAMAOErr = "Please fill out this field";
			}
			
			if(!$('#cboDivClearOfficer').val()){ 
				ErrRequired.push('DivClearOfficer'); 
				$('#DivClearOfficerErrlbl').show(); 
				$scope.DivUnit.DivClearOfficerErr = "Please fill out this field";
			}
			
			if(!$('#cboDivAlterOfficer').val()){ 
				ErrRequired.push('DivAlterOfficer'); 
				$('#DivAlterOfficerErrlbl').show(); 
				$scope.DivUnit.DivAlterOfficerErr = "Please fill out this field";
			}
			
			if(!$('#cboDivEscalOfficer').val()){ 
				ErrRequired.push('DivEscalOfficer'); 
				$('#DivEscalOfficerErrlbl').show(); 
				$scope.DivUnit.DivEscalOfficerErr = "Please fill out this field";
			}

			if ($scope.Units.length > 0) {	
			    $scope.Units.Err = false;
		        $scope.validateGridItems($scope.Units,'all','ItemName,Description,AMAOId,ClearingOfficerId,AlternateOfficerId,EscalationOfficerId', $scope.Units);
		        if ($scope.Units.Err == true) {
			        ErrRequired.push(1);
		       }   
			}				
			return ErrRequired;
			    
		}; //end of validateform()

		//$scope.Units = [];	
		$scope.addingItemstoUnit = function() {
			
			$timeout(function(){
				validate_curr();
			},0);

	
			var o = {
			    Select:false,
			    Unit: $scope.DivUnit[0].DivisionAbb,
			    ItemName: "",
			    Description: "",
			    AMAOId: "",
			    ClearingOfficerId: "",
			    AlternateOfficerId: "",
			    EscalationOfficerId: "",
			    NoOfTImesNotify: "",
			    ProcessingDays: "",
			    UnitErr: "",
			    ItemNameErr: "",
			    DescriptionErr: "",
				AMAOIdErr: "",
				ClearingOfficerIdErr: "",
				AlternateOfficerIdErr: "",
				EscalationOfficerIdErr: ""
			};
		   
			 if ($scope.Units.length === 0){		
				$scope.Units = [o];
		        $scope.Units.ErrMsg = ""; 	

		    } else {  
		    	$scope.Units.Err = false;
		        $scope.validateGridItems($scope.Units,'all','ItemName,Description,AMAOId,ClearingOfficerId,AlternateOfficerId,EscalationOfficerId', $scope.Units);           

		      		if ($scope.Units.Err==false) {
						$scope.Units.push(o);   	
		           	} else {
		            	showMsgOk("Errors found in this form",'Please check form for error messages','error');		             
		            	return;
		           	}
		    }   
		     
		    $timeout(function(){
		    	initCboAMAO($scope.Units.length -1,[]);
		    	initCboCO($scope.Units.length -1,[]); 
		    	initCboAO($scope.Units.length -1,[]);
		    	initCboEO($scope.Units.length -1,[]);
		    },0);     
		 }
		 
		 function initCboAMAO(index,initvalue) {
		    var o = $('.cboUnitAMAO')[index]; 
			$(o).select2({
					data : initvalue,
					ajax: {
					url: function (params)
					    { 
				        return _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=substringof('" + params.term + "',calcDesc)"  
				        } ,
					    dataType: 'json',
					    delay: 250,
					    cache: true,		    	    
					    processResults: function (data, page) {
					      return {results:
					        $.map(data.value, function(obj) {
					            return { id: obj.Employee_x0020_ID, text: obj.calcDesc };    //replace Id to id and Title to text for select2 to accept
					        })
				      	  };		    
						}
					}		 
					,
					minimumInputLength: 3			
					}).change(function(e) {
					var i = $('.cboUnitAMAO').index(this)
			  	    $scope.Units[i].AMAOId = $(this).val();
			        $scope.Units[i].AMAOIdErr = "";
			        $scope.$apply();
					
				});
		  	$('span.select2-selection' ).css("height", "34px");
		
		 }
		 
		 function initCboCO(index,initvalue) {
		    var o = $('.cboUnitClearingOfficer')[index]; 
			$(o).select2({
					data : initvalue,
					ajax: {
					url: function (params)
					    { 
				        return _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=substringof('" + params.term + "',calcDesc)"  
				        } ,
					    dataType: 'json',
					    delay: 250,
					    cache: true,		    	    
					    processResults: function (data, page) {
					      return {results:
					        $.map(data.value, function(obj) {
					            return { id: obj.Employee_x0020_ID, text: obj.calcDesc };    //replace Id to id and Title to text for select2 to accept
					        })
				      	  };		    
						}
					}		 
					,
					minimumInputLength: 3			
					}).change(function(e) {
					var i = $('.cboUnitClearingOfficer').index(this)
			  	    $scope.Units[i].ClearingOfficerId = $(this).val();
			        $scope.Units[i].ClearingOfficerIdErr = "";
			        $scope.$apply();
					
				});
		  	$('span.select2-selection' ).css("height", "34px");
		
		 }
		 
		 function initCboAO(index,initvalue) {
		    var o = $('.cboUnitAlternateOfficer')[index]; 
			$(o).select2({
					data : initvalue,
					ajax: {
					url: function (params)
					    { 
				        return _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=substringof('" + params.term + "',calcDesc)"  
				        } ,
					    dataType: 'json',
					    delay: 250,
					    cache: true,		    	    
					    processResults: function (data, page) {
					      return {results:
					        $.map(data.value, function(obj) {
					            return { id: obj.Employee_x0020_ID, text: obj.calcDesc };    //replace Id to id and Title to text for select2 to accept
					        })
				      	  };		    
						}
					}		 
					,
					minimumInputLength: 3			
					}).change(function(e) {
					var i = $('.cboUnitAlternateOfficer').index(this)
			  	    $scope.Units[i].AlternateOfficerId = $(this).val();
			        $scope.Units[i].AlternateOfficerIdErr = "";
			        $scope.$apply();
				});
		  	$('span.select2-selection' ).css("height", "34px");
		
		 }

		 function initCboEO(index,initvalue) {
		    var o = $('.cboUnitEscalationOfficer')[index]; 
			$(o).select2({
					data : initvalue,
					ajax: {
					url: function (params)
					    { 
				        return _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=substringof('" + params.term + "',calcDesc)"  
				        } ,
					    dataType: 'json',
					    delay: 250,
					    cache: true,		    	    
					    processResults: function (data, page) {
					      return {results:
					        $.map(data.value, function(obj) {
					            return { id: obj.Employee_x0020_ID, text: obj.calcDesc };    //replace Id to id and Title to text for select2 to accept
					        })
				      	  };		    
						}
					}		 
					,
					minimumInputLength: 3			
					}).change(function(e) {
					var i = $('.cboUnitEscalationOfficer').index(this)
			  	    $scope.Units[i].EscalationOfficerId = $(this).val();
			        $scope.Units[i].EscalationOfficerIdErr = "";
			        $scope.$apply();
					
				});
		  	$('span.select2-selection' ).css("height", "34px");
		
		 }

		 function del() {
		 	clientContext = new SP.ClientContext.get_current();
		 	var List;
		 	var listitem;
			List = clientContext.get_web().get_lists().getByTitle('Division_Unit');
			
	        $.each($scope.ListDeleted, function(index, item){
			     if (item.ID != undefined) {    //Check column if existing and identify the column for a specific list           
				   listitem = List.getItemById(item.ID);                          
				   listitem.deleteObject();   // delete listitem in ListDeleted  
				 }
			});
			
			clientContext.executeQueryAsync(function(){
				var List;
			 	var listitem;
				List = clientContext.get_web().get_lists().getByTitle('Unit_Item');
				
				$.each($scope.ListDeleted, function(index, item){
				     if (item.ID != undefined) {    //Check column if existing and identify the column for a specific list           
					   listitem = List.getItemById(item.Unit_ItemId);                          
					   listitem.deleteObject();   // delete listitem in ListDeleted  
					 }
				});
				
				clientContext.executeQueryAsync(function(){
					//alert('silent');
				},function(){
				  alert('Save to Child lists failed (1)');		
				})
			},function(){
			  alert('Save to Child lists failed');		
			})

		 }

		 $scope.SelectAllGridDetails=function(items,control) {
		     $.each(items, function(index, item){
		        item.Select = control;
		     })
		 }
		
		$scope.RemoveAllItemDetails=function(items,listname) {
    
		     swal({
				  title: '',
				  text: "Are you sure you want to remove the selected item(s)",
				  type: 'question',
				  showCancelButton: true,
				  allowOutsideClick:false,
		
				  confirmButtonText: 'Yes',
				  cancelButtonText: 'No',
				  confirmButtonClass: 'btn btn-default'
				  
		  		}).then(
				  function () {

					var i=0;
				    while( i < items.length ) {
				         if (items[i].Select==true){
				             $scope.ListDeleted.push(items[i]);
				             items.splice(items.indexOf(items[i]), 1); 		             
				             i--
				         }
				         i++; 
		            }
				    $scope.$apply();
				     
				  },
				  function (dismiss) {
				  }
				)	     
		 }

		 $scope.validateGridItems = function(items,all,whatfields,array){
		   var Err=[];
		   var fields = whatfields.split(',');
		   
		   if (all != 'all'){  //check if validating from add link or control.     
		     items=[items]   
		   } 
		   $.each(items, function(index1, item){
		       $.each(fields, function(index2, field){
			        if (!item[field]) {
			          item[field + 'Err'] = "Please fill out this field";
			          Err.push(1);
			        }else {
			          item[field + 'Err'] ="";
			          if (field == "ItemName" && all=='all') {
			             if (chkDuplicate(items,"ItemName",item.ItemName)) {
			                Err.push(1);
			               item[field + 'Err'] = "Item already exists";			             
			             } 
			        
			          }
			        }
			        
		       }) 
		   })   
		   if (Err.length > 0) {
		      array.Err = true;
		   } else {
		      array.Err = false;
		   }
		 }
   		
   		function chkDuplicate(items, field, itemcheck) {
	  	   var dup = false;
	  	   var ctr=0;
	  	   $.each(items, function(index, item){
	  	     if (item[field] == itemcheck) {
	  	        ctr++;
	  	     }
	  	   
	  	   });
		   if ( ctr > 1) {  
		      dup = true;
		   }	  
		  
	  	   
	  	   return dup;
	  	
	  	}

   		
   		$scope.CheckifSelectedinGrid = function(items) {
		    var meron=false;
		    $.each(items, function(index, item){
		       if (item.Select==true) {
		         meron=true;
		         return false;         
		       }
		     })
		     return meron;   
		 }

   		function numberWithCommas(x) {
	    	if (x) {
	    		x = x.toString().replace(/,/g , '')
				var parts = x.split(".");
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		  		return parts.join(".");
		 	} else {
		  	return "";
		 	} 
	  	}
	  	
	  	function ResolvebyEmail(email){
	   		var _data;
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
		
	  	$scope.cancelclick = function () {
		    window.open(_spPageContextInfo.webAbsoluteUrl + '/Lists/Division_Unit' , "_self");
	   	};

	}]); // end of angular module
	
	

})(); //end of function



