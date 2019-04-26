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
var SendToEmail = "";
var SendToID = "";
var SendToTitle = "";
var CopyToEmail = "";
var CopyToID = "";
var CopyToTitle = "";


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
		
		$scope.UnitStatusViewing = { 
			ClearanceUnit: "",	
			ClearanceUnitErr: "",
			RelatedUnit: "",
			RelatedUnitErr: "",	
			Notification: "",	
			SendToErr: "",
			SendCopyToErr: "",
			Subject: "",
			SubjectErr: "",
			Body: "",
			BodyErr: "",
			CopyToErr: ""
		}	
		
		

		load();
		function load(){
			_site = _spPageContextInfo.siteAbsoluteUrl; //rootsite
           	_web = _spPageContextInfo.webAbsoluteUrl; //subsite
           	_listEndPoint = '/_api/web/lists';


			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);

			$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Unit_Item')/items").then(function(response){	
			   	$scope.UnitLookup = response.data.value;
				waitDialog.close();
			});	
			
			$scope.UnitStatusViewing.Body = 'has been cleared from';		
				
			utilsvc.PopulateLookUp($("#cboSendTo"), _site, _employee , "", "Id", "calcDesc", "calcDesc", false, $("#SendToErrlbl"), 3);
			utilsvc.PopulateLookUp($("#cboSendCopyTo"), _site, _employee , "", "Id", "calcDesc", "calcDesc", false, $("#SendCopyToErrlbl"), 3);
			
			$('#cboClearanceUnit').change(function(e){
				if($('#cboClearanceUnit option:selected').val() != null){ 
					$('#ClearanceUnitErrlbl').hide();
				} 
			});
			
			$('#cboRelatedUnit').change(function(e){
				if($('#cboRelatedUnit option:selected').val() != null){ $('#RelatedUnitErrlbl').hide();} 
			});

			$('#cboSendTo').change(function(e){
				if($('#cboSendTo option:selected').val() != null){ 
					$('#SendToErrlbl').hide();
				} 
			});
				
			$('#txtSubject').change(function(e){
				if($('#txtSubject').val() != null || $('#txtSubject').val() != ""){ 
					$('#SubjectErrlbl').hide();
				} 
			});
				
			$('#txtBody').change(function(e){
				if($('#txtBody').val() != null || $('#txtBody').val() != ""){ 
					$('#BodyErrlbl').hide();
				} 
			});
			

		}; //end of load()
				
		$scope.saveForm = function () {
		var d, e;
			var ErrRequired = [];

			if($scope.UnitStatusViewing.ClearanceUnit == ""){ 
				ErrRequired.push('ClearanceUnit'); 
				$('#ClearanceUnitErrlbl').show(); 
				$scope.UnitStatusViewing.ClearanceUnitErr = "Please fill out this field";
			} else {
				$scope.UnitStatusViewing.ClearanceUnitErr = "";				
			}
			
			if($scope.UnitStatusViewing.RelatedUnit == ""){ 
				ErrRequired.push('RelatedUnit'); 
				$('#RelatedUnitErrlbl').show(); 
				$scope.UnitStatusViewing.RelatedUnitErr = "Please fill out this field";
			} else {
				$scope.UnitStatusViewing.RelatedUnitErr = "";
			}
						
			if($scope.UnitStatusViewing.Notification){ 
				if(!$('#cboSendTo').val()){ 
					ErrRequired.push('SendTo'); 
					$('#SendToErrlbl').show(); 
					$scope.UnitStatusViewing.SendToErr = "Please fill out this field";
				} else {
					$scope.UnitStatusViewing.SendToErr = "";
				}
				if($scope.UnitStatusViewing.Subject == "" || $scope.UnitStatusViewing.Subject == undefined ){ 
					ErrRequired.push('Subject'); 
					$('#SubjectErrlbl').show(); 
					$scope.UnitStatusViewing.SubjectErr = "Please fill out this field";
				} else {
					$scope.UnitStatusViewing.SubjectErr = "";
				}

				
				if($scope.UnitStatusViewing.Body == "" || $scope.UnitStatusViewing.Body == undefined ){ 
					ErrRequired.push('Body'); 
					$('#BodyErrlbl').show(); 
					$scope.UnitStatusViewing.BodyErr = "Please fill out this field";
				} else {
					$scope.UnitStatusViewing.BodyErr = "";
				}

			
			}
			
			if($scope.UnitStatusViewing.ClearanceUnit != "" && $scope.UnitStatusViewing.RelatedUnit != ""){
				if($scope.UnitStatusViewing.ClearanceUnit == $scope.UnitStatusViewing.RelatedUnit){
					ErrRequired.push('Duplicate'); 
					$('#ClearanceUnitErrlbl').show(); 
					$('#RelatedUnitErrlbl').show(); 
					$scope.UnitStatusViewing.ClearanceUnitErr = "Clearance Unit and Related Unit should be different from each other";
					$scope.UnitStatusViewing.RelatedUnitErr = "Clearance Unit and Related Unit should be different from each other";
				} else {
					$scope.UnitStatusViewing.ClearanceUnitErr = "";
					$scope.UnitStatusViewing.RelatedUnitErr = "";
				}
			}

				$http.get(_spPageContextInfo.siteAbsoluteUrl+  "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Id eq " + $("#cboSendTo").val() + "").then(function(response){	
					$scope.SendTo = response.data.value; 
					
					$.each($scope.SendTo, function(index, item){	
						SendToEmail = item.Email;
						
						if (item.Email){	             
				          	d = ResolvebyEmail(item.Email);
					          	if(!d){
					          		waitDialog.close();
					          		ErrRequired.push('SendTo'); 
									$('#SendToErrlbl').show();
					          		$scope.UnitStatusViewing.SendToErr = 'Send To email not found in 365 site users list!';
					          		return;
					          	} else {
					          		$scope.UnitStatusViewing.SendToErr = '';
					          	}
				          	 SendToID = d.Id;
				          	 SendToTitle = d.Title;
 	  
			          	 }
	
			        });
			        
			        if($("#cboSendCopyTo").val() != null){
						$http.get(_spPageContextInfo.siteAbsoluteUrl+  "/_api/web/lists/getbytitle('Employee')/items?$top=5000&$filter=Id eq " + $("#cboSendCopyTo").val() + "").then(function(response){	
							$scope.CopyTo = response.data.value;
												
							$.each($scope.CopyTo, function(index, item){	
								CopyToEmail = item.Email;
										
								if (item.Email){	             
						          	e = ResolvebyEmail(item.Email);
							          	if(!e){
							          		waitDialog.close();
							          		ErrRequired.push('CopyTo'); 
											$('#CopyToErrlbl').show();
							          		$scope.UnitStatusViewing.CopyToErr = 'Copy To email not found in 365 site users list!';		             
							          		return;
							          	} else {
							          		$scope.UnitStatusViewing.CopyToErr = '';	
							          	}
									         
							          	 CopyToID = e.Id;
							          	 CopyToTitle = e.Title;
										          	 
											 
										 if (ErrRequired.length == 0) {
											//alert(CopyToID);
											//alert(SendToID);
											$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('UnitStatusViewing')/items?$top=5000&$select=*&$filter=ClearanceUnit eq '" + $scope.UnitStatusViewing.ClearanceUnit +  "' and RelatedUnit eq '" + $scope.UnitStatusViewing.RelatedUnit + "'").then(function(response){	
						    					$scope.checkUnit = response.data.value;
						    					if($scope.checkUnit.length <= 0){
						    						save();
						    					} else {
						    						showMsgOk("", "This Unit Status Viewing already exist","warning");
						    					}
						    				}); 										 
						    			 } else {
										 	showMsgOk("","Please check form for error messages","error");
										 }         	 
					          	 }
							});
						
						});
					} else {
					 	if (ErrRequired.length == 0) {
							//alert(CopyToID);
							//alert(SendToID);
							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('UnitStatusViewing')/items?$top=5000&$select=*&$filter=ClearanceUnit eq '" + $scope.UnitStatusViewing.ClearanceUnit +  "' and RelatedUnit eq '" + $scope.UnitStatusViewing.RelatedUnit + "'").then(function(response){	
		    					$scope.checkUnit = response.data.value;
		    					if($scope.checkUnit.length <= 0){
		    						save();
		    					} else {
		    						showMsgOk("", "This Unit Status Viewing already exist","warning");
		    					}
		    				}); 	
						} else {
							showMsgOk("","Please check form for error messages","error");
						}   
					}
	
			    });
			    
			    				
		};
		
			
		function save(){
		  waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);

			var clientContext = new SP.ClientContext.get_current();
			var itemCreateInfo = new SP.ListItemCreationInformation();		
			var UnitStatViewList = clientContext.get_web().get_lists().getByTitle('UnitStatusViewing');	
		
	        var UnitStatView_listitem = UnitStatViewList.addItem(itemCreateInfo);
	         			
	        UnitStatView_listitem.set_item('ClearanceUnit', $scope.UnitStatusViewing.ClearanceUnit);
	       	UnitStatView_listitem.set_item('RelatedUnit', $scope.UnitStatusViewing.RelatedUnit);
			UnitStatView_listitem.set_item('Notification', $scope.UnitStatusViewing.Notification);
			UnitStatView_listitem.set_item('SendTo', SendToID * 1); //DITO AKO NATAPOS
			UnitStatView_listitem.set_item('CopyTo', CopyToID * 1);
			UnitStatView_listitem.set_item('SendTo_Id', $("#cboSendTo").val()); 
			UnitStatView_listitem.set_item('CopyTo_Id', $("#cboSendCopyTo").val());
			UnitStatView_listitem.set_item('Subject', $scope.UnitStatusViewing.Subject);
			UnitStatView_listitem.set_item('MessageBody', $scope.UnitStatusViewing.Body);

			UnitStatView_listitem.update();
			clientContext.load(UnitStatView_listitem);
			clientContext.executeQueryAsync(function() {
				_itemId = UnitStatView_listitem.get_item('ID');	
				  
			   var urlValue = new SP.FieldUrlValue();
                urlValue.set_url(_spPageContextInfo.webAbsoluteUrl + "/SitePages/UnitStatusViewing_Display.aspx?ItemId="+_itemId);
                urlValue.set_description($scope.UnitStatusViewing.ClearanceUnit);
               
			   UnitStatView_listitem.set_item('Name',urlValue);  
			   		
		       UnitStatView_listitem.update();
		       //clientContext.load(Client_listitem);
		       clientContext.executeQueryAsync(function(){
		       waitDialog.close();
		       showMsgRedirect("","Unit status viewing saved","success");
			   },function(){
						waitDialog.close();
						alert('Save to Clients failed (2)');			
			   });

			},function(){
				waitDialog.close();
				alert('Saving failed');			
			});
		}
			
		$scope.cancelclick = function () {
		    window.open(_spPageContextInfo.webAbsoluteUrl + '/Lists/UnitStatusViewing' , "_self");
	   	};
   			
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
    
	}]); // end of angular module
	
	

})(); //end of function


