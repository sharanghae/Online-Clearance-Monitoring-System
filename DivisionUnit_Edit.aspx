<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head>
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
<meta name="WebPartPageExpansion" content="full" />
 of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">

	<!-- Add your CSS styles to the following file -->
    
	
	<link rel="Stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
	<link rel="Stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
	<link rel="Stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/css/bootstrap-datepicker.css" />
	<link rel="Stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css"  />
	
	<link rel="Stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.1.0/min/dropzone.min.css"  />
	<link rel="stylesheet" type="text/css" href="/sites/wf-prod/AM/siteassets/css/sweetalert2.css" /> 
	<style type="text/css">
	
	    .modal-body {
              max-height: calc(100vh - 210px);
              overflow-y: auto;              
              
        }
        .modal-dialog {
           width: 1200px;
        }
		
		
		.h-divider{
		 margin-top:5px;
		 margin-bottom:5px;
		 height:1px;
		 width:100%;
		 border-top:1px solid gray;
		}
		.form-horizontal .control-label{
		  text-align:left!important;
		}
		
		.label-inline {margin-top:40px}

		.select2-dropdown--above {
		    border: 1px solid DodgerBlue !important;;
		    border-bottom: none !important;	 
			
		}


		.select2-dropdown--below{
		    border: 1px solid DodgerBlue !important;;
		    border-top: none !important;	 
			
		}

		span.select2-selection--single[aria-expanded=true] {
		    border-color: DodgerBlue !important;   
		}
        
		span.select2-selection.select2-selection--multiple{
			height: auto !important;
		}

		.ms-breadcrumb-box { display:none; }
		
		
		.dz-success-mark { display:none; }
		.dz-error-mark { display:none; }
        .dz-progress { display:none; }
        /*.upper {margin-top: -56px} */
        

        #dropzone {
             cursor: pointer;
             text-decoration:underline;
             min-height:120px;             
             text-align: center;            
             border-style:dotted; 
             border-width: 2px;
             
         }
         .lblErr { display:none;}
         .table-scroll { 
        	 overflow-x: scroll; }  
         
      .table-responsive
		{
			height: auto;
  			overflow-y: scroll;		
  		}
        
        
              
		
	</style>
	

     <!-- Add your JavaScript to the following file -->
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
    <!--<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>-->
    <script type="text/javascript" src="/_layouts/15/sp.requestexecutor.js"></script>  
    <script type="text/javascript" src="/_layouts/15/sp.userprofiles.js"></script>    
    <script type="text/javascript" src="/_layouts/15/sp.ui.dialog.js"></script>
    <script type="text/javascript" src="/_layouts/15/ScriptResx.ashx?name=sp.res&culture=en-us"></script>
    <script type="text/javascript" src="/_layouts/15/sp.init.js"></script>
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/js/bootstrap-datepicker.min.js"></script>	
	
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>		
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.1.0/min/dropzone.min.js"></script>
	<script type="text/javascript" src="/sites/wf-prod/AM/siteassets/scripts/sweetalert2.min.js"></script>
	<!--<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> -->
	<script type="text/javascript" src="../siteassets/service/new/angularApp.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/http.base.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/common.service.js"></script>
	<script type="text/javascript" src="../siteassets/service/display/display.util.service.js"></script>	
	<script type="text/javascript" src="../siteassets/service/new/file.service.js"></script>
	<script type="text/javascript" src="../siteassets/service/list.ops.service.js"></script>
	<script type="text/javascript" src="../siteassets/scripts/DivisionUnit_Edit.js"></script> 
	
	
	
	
	
	<!--<script type="text/javascript" src="utils.js"></script> -->   
	
	
	<!--<script type="text/javascript" src="../Scripts/App.js"></script> -->


</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">	 
	<div class="page" ng-app="app"  ng-controller="Ctrl">         	
    <ng-form name = "form1" novalidate >
  
      <div class="col-xs-12 upper" > <!--start of master -->
        <div class="row" >
            <div class="col-xs-12">
                <h1 class="h3 pull-left">                    
                    <span >Division Unit Maintenance - Edit</span>
                </h1>
            </div>
            
            
            <div class="col-xs-12" >
                <div class="form-horizontal">
                    
                                       
                    <div class="panel-group" id="accordion">
                    
                    
	                    <div class="panel panel-default">
		                    <div class="panel-heading">
						      <h4 class="panel-title">
						        <a data-toggle="collapse" data-parent="#accordion" href="">
						        Division</a>
						      </h4>
						    </div>

						    <div id="collapse1" class="panel-collapse collapse in">
							<div class="panel-body">
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Name</span>
									<div class="col-xs-10"> 
										<select ng-model="DivUnit[0].DivisionId" style="width: 100%;" class="form-control " ng-options="item.Id as item.Division for item in DivisionLookup">                                                                                         
										</select>						  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="NameErrlbl" ng-bind="DivUnit.NameErr"  class="lblErr text-danger"></p>
									</div>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">
								Abbreviation</span>
									<div class="col-xs-10"> 
										<input id="txtAbb" type="text" ng-model="DivUnit[0].DivisionAbb" class="form-control " /> 						  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="AbbrvErrlbl" ng-bind="DivUnit.AbbrvErr"  class="lblErr text-danger"></p>
									</div>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Description</span>
									<div class="col-xs-10"> 
										<input id="txtDivDesc" type="text" ng-model="DivUnit[0].Description" class="form-control " /> 						  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="DivDescErrlbl" ng-bind="DivUnit.DescriptionErr"  class="lblErr text-danger"></p>
									</div>
							</div>

							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Levels</span>
									<div class="col-xs-10"> 
										<select id="cboLevel" multiple ng-model="DivUnit.Level" style="width: 100%;" ng-options="item.LevelDescription as item.LevelDescription for item in LevelLookup" class="chosen form-control " >                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="LevelErrlbl" ng-bind="DivUnit.LevelErr"  class="lblErr text-danger"></p>
									</div>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">AM/AO</span>
									<div class="col-xs-10"> 
										<select id="cboDivAMAO" style="width: 100%;"  class="form-control " >                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="DivAMAOErrlbl" ng-bind="DivUnit.DivAMAOErr"  class="lblErr text-danger"></p>
									</div>
							</div>
	                       
							</div>
						  </div>
						 </div>	
						  
	            <div class="panel panel-default">
				    <div class="panel-heading">
				      <h4 class="panel-title">
				        <a data-toggle="collapse" data-parent="#accordion" href="">
				        Approvers</a>
				      </h4>
				    </div>
				    <div id="collapse3" class="panel-collapse collapse in">
				      <div class="panel-body"> 	
				      			
					       <div class="form-group">                        
								<span class="control-label col-xs-2">Division 
								Clearing Officer</span>
									<div class="col-xs-10"> 
										<select id="cboDivClearOfficer"  style="width: 100%;" class="form-control">                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="DivClearOfficerErrlbl" ng-bind="DivUnit.DivClearOfficerErr"  class="lblErr text-danger"></p>
									</div>		
							</div>
							
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Alternate 
								Clearing Officer</span>
									<div class="col-xs-10"> 
										<select id="cboDivAlterOfficer"  style="width: 100%;" class="form-control">                                                                                         
										</select>  
									</div>
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="DivAlterOfficerErrlbl" ng-bind="DivUnit.DivAlterOfficerErr"  class="lblErr text-danger"></p>
									</div>			
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Escalation 
								Clearing Officer</span>
									<div class="col-xs-10"> 
										<select id="cboDivEscalOfficer"  style="width: 100%;" class="form-control">                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="DivEscalOfficerErrlbl" ng-bind="DivUnit.DivEscalOfficerErr"  class="lblErr text-danger"></p>
									</div>		
							</div>

              
  					  </div> <!-- end of panel body -->
   					</div>	<!--end of collapse3-->				 
				</div>  <!--end of panel default-->
    
    			<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="">
						        Notification and Escalation
						    </a>
						</h4>
					</div>
					<div id="collapse1" class="panel-collapse collapse in">
						<div class="panel-body">
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">No. of 
								Times to Notify (Before Escalation)</span>
									<div class="col-xs-10"> 
										<input type="text" maxlength="255" ng-model="DivUnit[0].NoOfTImesNotify" min="0" class="txtcurr form-control "/>   
									</div>	
									<span class="col-xs-2"></span>
										<div class="col-xs-10">                      
											<p id="" ng-bind="" class="lblErr text-danger"></p>
										 </div>
							</div>
									
							<div class="form-group">                        
								<span class="control-label col-xs-2">Processing 
								Days</span>
									<div class="col-xs-10"> 
										<input type="text" maxlength="255" ng-model="DivUnit[0].ProcessingDays" min="0" class="txtcurr form-control "/>   
									</div>	
									<span class="col-xs-2"></span>
										<div class="col-xs-10">                      
											<p id="" ng-bind="" class="lblErr text-danger"></p>
										 </div>
							</div>

						</div> <!-- end of panel body -->
   					</div>	<!--end of collapse1-->				 
				</div>  <!--end of panel default-->
				
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="">
						        Unit Information
						    </a>
						</h4>
					</div>
					<div id="collapse1" class="panel-collapse collapse in">
						<div class="panel-body">
							<div class="table-responsive">
							<table class="table">
							  	<thead>
									<tr>
									  <th><input type="checkbox" ng-model="Units.DetailsSelect" ng-change="SelectAllGridDetails(Units,Units.DetailsSelect)" class="form-check-input"/></th>
									  <th>Unit</th>
									  <th>Item Name</th>
									  <th>Description</th>
	                                  <th>AM/AO</th>  
	                                  <th>Unit Clearing Officer</th>
									  <th>Alternate Clearing Officer</th>
	                                  <th>Escalation Clearing Officer</th>
	                                  <th>No. of Times to Notify (Before 
										Escalation)</th>
	                                  <th>Processing Days</th> 
									</tr>
							  	</thead>
						  		<tbody>
								  	<tr ng-repeat="item in Units"> 
								  	  <td><input ng-model="item.Select" class="form-check-input" type="checkbox" /></td>
									  <td><input id="txtUnit" type="text"  maxlength="255" ng-model="DivUnit[0].DivisionAbb" class="form-control" style="width: 250px;" readonly/><p id="UnitErrlbl" class="text-danger" ng-bind="item.UnitErr"></p></td>
									  <td><input id="txtItemName" type="text"  maxlength="255" ng-model="item.ItemName" class="form-control" style="width: 250px;" ng-change="validateGridItems(item,'','ItemName',Units)"/><p id="ItemNameErrlbl" class="text-danger" ng-bind="item.ItemNameErr"></p></td>
									  <td><input id="txtUnitDesc" type="text"  maxlength="255" ng-model="item.Description" class="form-control" style="width: 250px;" ng-change="validateGridItems(item,'','Description',Units)"/><p id="UnitDescErrlbl" class="text-danger" ng-bind="item.DescriptionErr"></p></td>
									  <td><select class="cboUnitAMAO" style="width: 250px;"></select><p id="UnitAMAOErrlbl" class="text-danger" ng-bind="item.AMAOIdErr"></p></td>							  
									  <td><select class="cboUnitClearingOfficer" style="width: 250px;"></select><p id="UnitClearingOfficerErrlbl" class="text-danger" ng-bind="item.ClearingOfficerIdErr"></p></td>
									  <td><select class="cboUnitAlternateOfficer" style="width: 250px;"></select><p id="UnitAlternateOfficerErrlbl" class="text-danger" ng-bind="item.AlternateOfficerIdErr"></p></td>
									  <td><select class="cboUnitEscalationOfficer" style="width: 250px;"></select><p id="UnitEscalationOfficerErrlbl" class="text-danger" ng-bind="item.EscalationOfficerIdErr"></p></td>
									  <td><input type="text" ng-model ="item.NoOfTImesNotify" maxlength="255" min="0" style="width: 250px;" class="txtcurr form-control"/></td>
									  <td><input id="txtProcessDays" type="text" maxlength="255" min="0" ng-model ="item.ProcessingDays" style="width: 250px;" class="txtcurr form-control"/></td>										  	   
								  	</tr>							
								</tbody>											
				             </table>
				             <p class="text-danger" ng-bind="Units.ErrMsg" ng-show="Units.ErrMsg != ''"></p>

				            </div>
				            
				            <table class="table">    
								<tr>  
									<td style="width: 150px;" ><a href="" ng-click="addingItemstoUnit()"><i class="fa fa-plus"></i>
									&nbsp;Add Item</a>				                                
				                    </td>
				                    <td style="width: 150px;" ng-show="CheckifSelectedinGrid(Units)==true">
				                      <a href="" ng-click="RemoveAllItemDetails(Units)"><i class="fa fa-remove"></i>
										&nbsp;Delete Item(s)</a>
				                    </td>	
								  <td class="text-right"></td>	 							       
								</tr>  
							</table>

						</div> <!-- end of panel body -->
   					</div>	<!--end of collapse1-->				 
				</div>  <!--end of panel default-->


			     </div>			     
				
              </div>
            </div><!--xs 12 -->
        </div> <!--class row -->
    </div>  <!--Master Form -->
   
    <div class="col-xs-12">
		                      
             <div class="form-group btn-control-margin" >
                <div class="col-xs col-xs-offset-3  text-right">
				    <button id="btnSave"  type="button" ng-click="saveForm()" class="btn btn-primary" ng-disabled="disablectrl" >
					Save</button>
                                        
                    <button id="btnCancel" type="button" ng-click="cancelclick()" class="btn btn-default"  >
					Cancel</button>  
				    
				   <!-- <button id="btnSave" name = "btnSave" type="button" ng-click="c(form1)" class="btn btn-primary" >
					Save</button> -->
				</div>
            </div>

        
        
    </div> <!--Footer Form -->        
 
</ng-form> 
</div>
</asp:Content>