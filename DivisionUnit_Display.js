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
        .controller('Ctrl',["$q","$http", "$scope", "$filter", "$window", "$timeout", "utilsvc", "listservice", "filesvc", "displaysvc", function ($q, $http, $scope, $filter, $window, $timeout, utilsvc, listservice, filesvc, displaysvc) {
		

		load();
		function load(){
			_site = _spPageContextInfo.siteAbsoluteUrl; //rootsite
           	_web = _spPageContextInfo.webAbsoluteUrl; //subsite
           	_listEndPoint = '/_api/web/lists';
			_itemId = displaysvc.GetUrlParameter("ItemId");

			waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading...', 'Please wait while request is in progress...', 150, 800);
			
			$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Division_Unit')/items?$select=*,Level/LevelGroup,Division/Division,Unit_Item/Unit,AMAO/Title,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title&$expand=AMAO,Division,Unit_Item,ClearingOfficer,AlternateOfficer,EscalationOfficer,Level&$filter=ID eq '" + _itemId + "'").then(function(response){	
				$scope.divUnit = response.data.value;
				$scope.Level = $scope.divUnit[0].Level.LevelGroup.split('|');
					$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Division_Unit')/items?$select=*,Division/Division,Unit_Item/Unit,ClearingOfficer/Title,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title,AMAO/Title&$expand=AMAO,Division,Unit_Item,ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=LevelId eq " + $scope.divUnit[0].LevelId ).then(function(response){	
						$scope.LevelDivUnit = response.data.value;
					   	
					   	if($scope.LevelDivUnit.length > 1){
							$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Division_Unit')/items?$select=*,Division/Division,Unit_Item/Unit,ClearingOfficer/Title,ClearingOfficer/Title,AlternateOfficer/Title,EscalationOfficer/Title,AMAO/Title&$expand=AMAO,Division,Unit_Item,ClearingOfficer,AlternateOfficer,EscalationOfficer&$filter=Unit_Item ne null and LevelId eq '" + $scope.divUnit[0].LevelId + "' and Division/Division eq '" + $scope.divUnit[0].Division.Division + "'").then(function(response){	
								$scope.Units = response.data.value;
						    	
							});
							
						} //NOT YET APPLY IN NONREG
						waitDialog.close();
					});
					waitDialog.close();
			});
	
			
			
		}; //end of load()
				
				
		$scope.showEdit = function(){
	   		$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/DivisionUnit_Edit.aspx?ItemId="+ _itemId, "_self");   
	    }
	    
		$scope.deleteItem = function (){
			swal({
		 		  title: '',
				  text: "Are you sure you want to remove this item(s)",
				  type: 'question',
				  showCancelButton: true,
				  allowOutsideClick:false,
				  confirmButtonText: 'Yes',
				  cancelButtonText: 'No',
				  confirmButtonClass: 'btn btn-default'
				  
				  }).then(
				  function () {
				  	clientContext = new SP.ClientContext.get_current();
				  			
				  //	var List = clientContext.get_web().get_lists().getByTitle('Division');
				//	var ListItem = List.getItemById($scope.divUnit[0].DivisionId);  
					 var List; 
					 var ListItem;  
			   		//ListItem.deleteObject();
			   		
			   		List = clientContext.get_web().get_lists().getByTitle('Division_Unit');
			   		$.each($scope.LevelDivUnit, function(index,item){
				    	ListItem = List.getItemById(item.ID);
				    	ListItem.deleteObject();
				    });	
				    
					/*List = clientContext.get_web().get_lists().getByTitle('Unit_Item'); 			
					$.each($scope.Units , function(index, item){
				       if (item.ID != undefined) { 						  
				   		 ListItem = List.getItemById(item.Unit_ItemId);                          
				   		 ListItem.deleteObject();
				   	    }	 
					});
						
				    
				    //ListItem.deleteObject();
				   			
				 	List = clientContext.get_web().get_lists().getByTitle('LevelGroup');		
				    ListItem = List.getItemById($scope.divUnit[0].LevelId);
				    
				    ListItem.deleteObject();*/
				 
				    clientContext.executeQueryAsync(function(){
				    	showMsgRedirect("","Division Unit deleted","success");
					},function(){
						alert('Save to Child lists failed (1)');		
					})
					     
				  },
				  function (dismiss) {
				  }
				)	  
		}

		
		$scope.cancelclick = function () {
		    window.open(_spPageContextInfo.webAbsoluteUrl + '/Lists/Division_Unit' , "_self");
	   	};
   			
   		    
	}]); // end of angular module
	
	

})(); //end of function


