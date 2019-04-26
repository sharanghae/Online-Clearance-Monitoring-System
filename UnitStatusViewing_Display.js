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
			$scope.disableCbox = true;
			$http.get(_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('UnitStatusViewing')/items?$top=5000&$select=*,SendTo/Title,CopyTo/Title&$expand=SendTo,CopyTo&$filter=ID eq '" + _itemId +  "'").then(function(response){	
		    	$scope.UnitStatusViewing = response.data.value;	
		    	waitDialog.close();
			});
	
			
			
		}; //end of load()
				
				
		$scope.showEdit = function(){
	   		$window.open(_spPageContextInfo.webAbsoluteUrl + "/SitePages/UnitStatusViewing_Edit.aspx?ItemId="+ _itemId, "_self");   
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
				  
				    var clientContext = new SP.ClientContext.get_current();
				    var List = clientContext.get_web().get_lists().getByTitle('UnitStatusViewing');		
				    var ListItem = List.getItemById(_itemId);
				    
				    ListItem.deleteObject();

				    clientContext.executeQueryAsync(function() {
				        window.open(_spPageContextInfo.webAbsoluteUrl + '/Lists/UnitStatusViewing' , "_self");
		
				    },function(){
						waitDialog.close();
						alert('Deleting failed.');			
					});
				     
				  },
				  function (dismiss) {
				  }
				)
		
				
				  
			}

		
		$scope.cancelclick = function () {
		    window.open(_spPageContextInfo.webAbsoluteUrl + '/Lists/UnitStatusViewing' , "_self");
	   	};
   			
   		    
	}]); // end of angular module
	
	

})(); //end of function


