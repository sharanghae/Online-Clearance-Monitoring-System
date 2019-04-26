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
        
		
		.ms-breadcrumb-box { display:none; }
		
		
		.dz-success-mark { display:none; }
		.dz-error-mark { display:none; }
        .dz-progress { display:none; }
        /*.upper {margin-top: -56px} */
        

        .myDrz {
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
        
  /*   .table-responsive
		{
			height: 500px;
  			overflow-y: scroll;		
  		}*/
   
              
		
	</style>
	

     <!-- Add your JavaScript to the following file -->
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
    <!--<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script> -->
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
	<script type="text/javascript" src="../siteassets/scripts/Clearance_Edit.js"></script>
	<!--<script type="text/javascript" src="/sites/WF-PROD/EPS/siteassets/scripts/fetch.js"></script> 
	<script type="text/javascript" src="/sites/WF-PROD/EPS/siteassets/scripts/es6-promise.min.js"></script> 
	<script type="text/javascript" src="/sites/WF-PROD/EPS/siteassets/scripts/pnp.js"></script> -->

	
	
	
	
	<!--<script type="text/javascript" src="utils.js"></script> -->   
	
	
	<!--<script type="text/javascript" src="../Scripts/App.js"></script> -->


</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">	 
	<div class="page" ng-app="app"  ng-controller="Ctrl">         	
    <ng-form name = "form1" novalidate >
  
      <div class="col-xs-12 upper" > <!--start of master -->
        <div class="row" >
            <div class="col-xs-12" ng-show="isDraft">
                <h1 class="h3 pull-left">                    
                    <span >Online Clearance Monitoring System - Edit</span>
                </h1>
            </div>
            
            <div class="col-xs-12" ng-show="isSaveEdit">
                <h1 class="h3 pull-left">                    
                    <span >Online Clearance Monitoring System - Edit</span>
                </h1>
            </div>
			
			<div class="col-xs-12" ng-show="isOIC">
                <h1 class="h3 pull-left">                    
                    <span >Online Clearance Monitoring System - HR Head/OIC 
					Approval</span>
                </h1>
            </div>

			<div class="col-xs-12" ng-show="isPayroll">
                <h1 class="h3 pull-left">                    
                    <span >Online Clearance Monitoring System - Payroll Approval</span>
                </h1>
            </div>
			
			<div class="col-xs-12" ng-show="isFinance">
                <h1 class="h3 pull-left">                    
                    <span >Online Clearance Monitoring System - Finance Approval</span>
                </h1>
            </div>
            
            <div class="col-xs-12" ng-show="isTreasury">
                <h1 class="h3 pull-left">                    
                    <span >Online Clearance Monitoring System - Treasury 
					Approval</span>
                </h1>
            </div>
			
			<div class="col-xs-12" ng-show="isHRComp">
                <h1 class="h3 pull-left">                    
                    <span >Online Clearance Monitoring System - HR Completion</span>
                </h1>
            </div>
			
			<div class="col-xs-12" ng-show="isCheckRelease">
                <h1 class="h3 pull-left">                    
                    <span >Online Clearance Monitoring System - HR Administering 
					Officer Completion</span>
                </h1>
            </div>

            
            <div class="col-xs-12" >
                <div class="form-horizontal">                      
                    <div class="panel-group" id="accordion">
                    
                    
	                    <div class="panel panel-default">
						   <div class="panel-heading">
						      <h4 class="panel-title">
						        <a data-toggle="collapse" data-parent="#accordion" href="">
						        Header Information
						        </a>
						      </h4>
						    </div>
						    <div id="collapse1" class="panel-collapse collapse in">
							<div class="panel-body">
							
							
							 <div class="form-group">                        
								<span class="control-label col-xs-2">Clearance 
								Number</span>
								<div class="col-xs-10"> 
									<p class="control-label" id="lblClearanceNo" ng-bind="Clearance.ClearanceNo"></p>        
								</div>
								 <span class="col-xs-2"></span>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Application 
								Date</span>
								<div class="col-xs-10"> 
									<p class="control-label" id="lblApplicationDate" ng-bind="Clearance.ApplicationDate"></p>        
								</div>
								 <span class="col-xs-2"></span>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">
								Administering Officer</span>
								<div class="col-xs-10"> 
									<p class="control-label" id="lblAdminOfficer" ng-bind="Clearance.AdminOfficer"></p>        
								</div>
								 <span class="col-xs-2"></span>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Status</span>
								<div class="col-xs-10"> 
									<p class="control-label" id="lblStatus" ng-bind="Clearance.MainStatus"></p>        
								</div>
								 <span class="col-xs-2"></span>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Routing 
								Status</span>
								<div class="col-xs-10"> 
									<p class="control-label" id="lblRoutingStatus" ng-bind="Clearance.MainRoutingStatus"></p>        
								</div>
								 <span class="col-xs-2"></span>
							</div>	
								                    

															   
						   
							</div>
						  </div>
						 </div>	
						  
	            <div class="panel panel-default">
				    <div class="panel-heading">
				      <h4 class="panel-title">
				        <a data-toggle="collapse" data-parent="#accordion" href="">
				        Employee Information</a>
				      </h4>
				    </div>
				    <div id="collapse3" class="panel-collapse collapse in">
				      <div class="panel-body"> 	
				      	   <div class="form-group" ng-Show="readonly">
								<span class="control-label col-xs-2">
								Name</span>
								<div class="col-xs-10"> 
									<p class="control-label" id="lblEmpName" ng-bind="Clearance.EmpName"></p>        
								</div>
									<span class="col-xs-2"></span>											
							</div>
							<div class="form-group" ng-Show="readonly">
								<span class="control-label col-xs-2">
								Email</span>
								<div class="col-xs-10"> 
									<p class="control-label" id="lblEmail" ng-bind="Clearance.Email"></p>        
								</div>
								<span class="col-xs-2"></span>											
							</div>

					       <div class="form-group" ng-Show="isDraft">                        
								<span class="control-label col-xs-2"> Name</span>
									<div class="col-xs-10"> 
										<select id="cboName"  style="width: 100%;" class="form-control">                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="EmpNameErrlbl" ng-bind="Clearance.EmpNameErr"  class="lblErr text-danger"></p>
									</div>
									
							</div>
							
							<!--<div class="form-group">                        
								<span class="control-label col-xs-2">Employee ID</span>
									<div class="col-xs-10"> 
										<input id="txtEmpID" type="text" ng-model ="Clearance.EmpID" class="form-control "/>   
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="EmpIDErrlbl" ng-bind="Clearance.EmpIDErr"  class="lblErr text-danger"></p>
									</div>
									
							</div>-->

							<div class="form-group">                        
								<span class="control-label col-xs-2">Position</span>
									<div class="col-xs-10"> 
										<input id="txtPosition" type="text" ng-model ="Clearance.Position" class="form-control "/>   
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="PositionErrlbl" ng-bind="Clearance.PositionErr"  class="lblErr text-danger"></p>
									</div>
									
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">
										Division</span>
									<div class="col-xs-10"> 
										<select id="cboDivision"  style="width: 100%;" class="form-control">                                         
										</select>
   									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="DivisionErrlbl" ng-bind="Clearance.DivisionErr" class="lblErr text-danger"></p>
									</div>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Level</span>
									<div class="col-xs-10"> 
										<select id="cboLevel"  style="width: 100%;"  class="form-control " >                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="LevelErrlbl" ng-bind="Clearance.LevelErr"  class="lblErr text-danger"></p>
									</div>		
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Movement</span>
									<div class="col-xs-10"> 
										<select id="cboMovement"  style="width: 100%;"  class="form-control " >                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="MovementErrlbl" ng-bind="Clearance.MovementErr"  class="lblErr text-danger"></p>
									</div>
							</div>

							<div class="form-group">                        
								<span class="control-label col-xs-2">Date Hired</span>
									<div class="col-xs-10"> 
										<div class='input-group date datetimepicker' id='dtDateHired' >                              
											<input id="DateHired" maxlength="255" type="text" class="form-control"/>
												<span class="input-group-addon">
													<span class="glyphicon glyphicon-calendar"></span>
												</span>                                     
										</div>
											<p id="DateHiredErrlbl" ng-bind="Clearance.DateHiredErr" class="text-danger"></p>   
									</div>	
							</div>

							<div class="form-group">                        
								<span class="control-label col-xs-2">Date 
								Separated</span>
									<div class="col-xs-10"> 
										<div class='input-group date datetimepicker' id='dtDateSeparated' >                              
											<input id="DateSeparated" maxlength="255" type="text" class="form-control"/>
												<span class="input-group-addon">
													<span class="glyphicon glyphicon-calendar"></span>
												</span>                                     
										</div>
											<p id="DateSeparatedErrlbl" ng-bind="Clearance.DateSeparatedErr" class="text-danger"></p>   
									</div>	
							</div>
							
							<div class="form-group" ng-Show="isDraft">                        
								<span class="control-label col-xs-2">Email</span>
									<div class="col-xs-10"> 
										<select id="cboEmail"  style="width: 100%;" class="form-control " >                                                                                         
										</select>
   									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="EmailErrlbl" ng-bind="Clearance.EmailErr"  class="lblErr text-danger"></p>
										 	</div>
							</div>

              
  					  </div> <!-- end of panel body -->
   					</div>	<!--end of collapse3-->				 
				</div>  <!--end of panel default-->
    
    			<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="">
						        Contact Information
						    </a>
						</h4>
					</div>
					<div id="collapse1" class="panel-collapse collapse in">
						<div class="panel-body">
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Reference</span>
									<div class="col-xs-10"> 
										<input id="txtReference" type="text"  ng-model ="Clearance.Reference" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="ReferenceErrlbl" ng-bind="Clearance.ReferenceErr"  class="lblErr text-danger"></p>
										 	</div>
							</div>
									
							<div class="form-group">                        
								<span class="control-label col-xs-2">Email 
								Address</span>
									<div class="col-xs-10"> 
										<input id="txtEmailAdd" ng-model="Clearance.EmailAddress" type="text" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="EmailAddressErrlbl" ng-bind="Clearance.EmailAddressErr"  class="lblErr text-danger"></p>
										 	</div>
							</div>

							<div class="form-group">                        
								<span class="control-label col-xs-2">Telephone</span>
									<div class="col-xs-10"> 
										<input id="txtTelephone" type="text"  ng-model ="Clearance.Telephone" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="TelephoneErrlbl" ng-bind="Clearance.TelephoneErr"  class="lblErr text-danger"></p>
										 	</div>
							</div>
									
							<div class="form-group">                        
								<span class="control-label col-xs-2">Mobile 
								Phone</span>
									<div class="col-xs-10"> 
										<input id="txtMobilePhone" type="text" ng-model ="Clearance.MobilePhone" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="MobilePhoneErrlbl" ng-bind="Clearance.MobilePhoneErr"  class="lblErr text-danger"></p>
										 	</div>
							</div>
							

						</div> <!-- end of panel body -->
   					</div>	<!--end of collapse1-->				 
				</div>  <!--end of panel default-->


				<div class="panel panel-default" ng-show="isSendback">
					<div class="panel-heading">
				      <h4 class="panel-title">
				        <a data-toggle="collapse" data-parent="#accordion" >
				        Clearance Details</a>
				      </h4>
					</div>
						<div id="collapse1" class="panel-collapse collapse in">
							<div class="panel-body">
								<div class="table-responsive">
									<table class="table">
										<thead>
											<tr>
												<th style="vertical-align:top"><input ng-disabled="disableCbox" class="form-check-input" type="checkbox" ng-change="SelectAllGridDetails(ClearanceDetailsTable,sendBackDiv.DetailsSelect)"  ng-model="sendBackDiv.DetailsSelect"/></th>
												<th style="vertical-align:top">
												Division</th>
												<th style="vertical-align:top">
												Unit</th>
												<th style="vertical-align:top">
												Clearance Status</th>
												<th style="vertical-align:top">
												Cost</th>
												<th style="vertical-align:top">
												Unit Clearance Sub-Status</th>
												<th style="vertical-align:top">
												Clearing Officer</th>
											</tr>
										</thead>
										<tbody>
											<tr ng-repeat="item in ClearanceDetailsTable | orderBy:'Division'"> 
												<td ><input class="form-check-input" ng-show="item.Unit" type="checkbox" ng-model="item.Select" ng-disabled="disableCbox" /></td>
												<td><p class="form-control-static" ng-bind="item.Division" style="width:150px"></p></td>
											  	<td><a href="" ng-click="openDivUnit(item)"><p class="form-control-static" ng-bind="item.Unit" style="width:190px"></p></a></td>
											  	<td><p class="form-control-static" ng-bind="item.Clearance_Status" style="width:150px"></p></td>
											  	<td><p class="form-control-static" ng-bind="item.Cost" style="width:150px"></p></td>
											  	<td><p class="form-control-static" ng-bind="ArraytoString(item.UnitClearanceSubStatus)" style="width:150px"></p></td>
												<td><p class="form-control-static" ng-bind="item.ClearingOfficer.Title" style="width:150px"></p></td>											  							  			
											</tr>							
										</tbody>											
									</table>
								</div>
		    				</div> <!-- end of panel body -->
		   				</div>	<!--end of collapse1-->				 
					</div>  <!--end of panel default-->
					
					
					<div class="panel with-nav-tabs panel-default" ng-Show="isCheckDetails">
							<div class="panel-heading">
								<ul class="nav nav-tabs">
									<li class="active"><a data-toggle="tab" href="#CLD_PAGE">
									Clearance Details</a></li>
									<li ><a data-toggle="tab" href="#CHD_PAGE">
									Check Details</a></li>
								</ul>
							</div>
								<div id="collapse1" class="panel-collapse collapse in">
									<div class="panel-body">										
										<div class="tab-content">

											<div id="CLD_PAGE" class="tab-pane fade in active">
												<div class="table-responsive">
											 		<table class="table">
														<thead style="width: calc( 100% - 1em )">
															<tr style="display:table;
																    width:100%;
																    table-layout:fixed;">
																<th style="vertical-align:top">
																Division</th>
																<th style="vertical-align:top">
																Unit</th>
																<th style="vertical-align:top">
																Clearance Status</th>
																<th style="vertical-align:top">
																Cost</th>
																<th style="vertical-align:top">
																Unit Clearance 
																Sub-Status</th>
																<th style="vertical-align:top">
																Clearing Officer</th>
															</tr>
														</thead>
														<tbody style="display:block;
																    height:400px;
																    overflow-y:scroll;">
															<tr ng-repeat="item in ClearanceDetailsTable | orderBy:'Division'"> 
															  	<td><a href="" ng-click="openDivUnit(item)"> <p class="form-control-static" ng-bind="item.Division" style="width:190px"></p> </a></td>
															  	<td><a href="" ng-click="openDivUnit(item)"> <p class="form-control-static" ng-bind="item.Unit" style="width:180px"></p> </a></td>
															  	<td><p class="form-control-static" ng-bind="item.Clearance_Status" style="width:190px"></p></td>
															  	<td><p class="form-control-static" ng-bind="item.Cost" style="width:170px"></p></td>
															  	<td><p class="form-control-static" ng-bind="ArraytoString(item.UnitClearanceSubStatus)" style="width:200px"></p></td>
															  	<td><p class="form-control-static" ng-bind="item.ClearingOfficer.Title" style="width:150px"></p></td>											  							  			
															</tr>							
														</tbody>											
									               </table>
									           </div>
											     
												
											</div> <!--end of CLD Page -->
											
											<div id="CHD_PAGE" class="tab-pane fade">
													
												<div style="overflow-x:auto;">
											 		<table class="table">
														<thead>
															<tr>
																<th style="vertical-align:top">
																Check No.</th>
																<th style="vertical-align:top">
																Bank</th>
																<th style="vertical-align:top">
																Date</th>
																<th style="vertical-align:top">
																Payee</th>
																<th style="vertical-align:top">
																Document No.</th> 
															</tr>
														</thead>
														<tbody>
															<tr ng-repeat="item in CheckDetails"> 
															  	<td><p class="form-control-static" ng-bind="item.CheckNo" style="width:150px"></p></td>
															  	<td><p class="form-control-static" ng-bind="item.Bank" style="width:150px"></p></td>
															  	<td><p class="form-control-static" ng-bind="momentformat(item.Date)" style="width:150px"></p></td>
															  	<td><p class="form-control-static" ng-bind="item.Payee" style="width:150px"></p></td>
															  	<td><p class="form-control-static" ng-bind="item.DocumentNo" style="width:150px"></p></td>											  							  			
															</tr>							
														</tbody>											
									               </table>
									            </div>
									            
											</div> <!-- end of CHD Page -->
										
										</div> <!--end of tab content -->
		    						</div> <!-- end of panel body -->
		   						</div>	<!--end of collapse1-->				 
						</div>  <!--end of panel default-->
						
					
					<div class="panel panel-default" ng-show="isClearanceDetails">
					<div class="panel-heading">
				      <h4 class="panel-title">
				        <a data-toggle="collapse" data-parent="#accordion" >
				        Clearance Details</a>
				      </h4>
					</div>
						<div id="collapse1" class="panel-collapse collapse in">
							<div class="panel-body">
								<div class="table-responsive">
									<table class="table">
										<thead>
											<tr>
												<th style="vertical-align:top">
												Division</th>
												<th style="vertical-align:top">
												Unit</th>
												<th style="vertical-align:top">
												Clearance Status</th>
												<th style="vertical-align:top">
												Cost</th>
												<th style="vertical-align:top">
												Unit Clearance Sub-Status</th>
												<th style="vertical-align:top">
												Clearing Officer</th>
											</tr>
										</thead>
										<tbody>
											<tr ng-repeat="item in ClearanceDetailsTable | orderBy:'Division'"> 
												<td><a href="" ng-click="openDivUnit(item)"> <p class="form-control-static" ng-bind="item.Division" style="width:190px"></p> </a></td>
												<td><a href="" ng-click="openDivUnit(item)"> <p class="form-control-static" ng-bind="item.Unit" style="width:180px"></p> </a></td>
												<td><p class="form-control-static" ng-bind="item.Clearance_Status" style="width:190px"></p></td>
												<td><p class="form-control-static" ng-bind="item.Cost" style="width:170px"></p></td>
												<td><p class="form-control-static" ng-bind="ArraytoString(item.UnitClearanceSubStatus)" style="width:200px"></p></td>
												<td><p class="form-control-static" ng-bind="item.ClearingOfficer.Title" style="width:150px"></p></td>
																						  							  			
											</tr>							
										</tbody>											
									</table>
									<p class="form-control-static" style="text-align:center"><b>
														*** Nothing follows ***</b></p>

								</div>
		    				</div> <!-- end of panel body -->
		   				</div>	<!--end of collapse1-->				 
					</div>  <!--end of panel default-->

					<div class="panel panel-default" ng-show="isHRComp">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="">
						        Check Details
						    </a>
						</h4>
					</div>
					<div id="collapse1" class="panel-collapse collapse in">
						<div class="panel-body">
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Check No.</span>
									<div class="col-xs-10"> 
										<input id="txtCheckNo" type="text"  ng-model ="Check.CheckNo" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="CheckNoErrlbl" ng-bind="Check.CheckNoErr"  class="lblErr text-danger"></p>
										 	</div>
							</div>
									
							<div class="form-group">                        
								<span class="control-label col-xs-2">Bank</span>
									<div class="col-xs-10"> 
										<select id="cboBank"  style="width: 100%;"  class="form-control " >                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="BankErrlbl" ng-bind="Check.BankErr"  class="lblErr text-danger"></p>
									</div>
							</div>

							<div class="form-group">                        
								<span class="control-label col-xs-2">Date</span>
									<div class="col-xs-10"> 
										<div class='input-group date datetimepicker' id='dtCheckDate' >                              
											<input id="CheckDate" maxlength="255" type="text" class="form-control"/>
												<span class="input-group-addon">
													<span class="glyphicon glyphicon-calendar"></span>
												</span>                                     
										</div>
											<p id="CheckDateErrlbl" ng-bind="Check.CheckDateErr" class="text-danger"></p>   
									</div>	
							</div>
									
							<div class="form-group">                        
								<span class="control-label col-xs-2">Payee</span>
									<div class="col-xs-10"> 
										<input id="txtPayee" type="text" ng-model ="Check.Payee" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="PayeeErrlbl" ng-bind="Check.PayeeErr"  class="lblErr text-danger"></p>
										 	</div>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Document 
								No.</span>
									<div class="col-xs-10"> 
										<input id="txtDocumentNo" type="text" ng-model ="Check.DocumentNo" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="DocumentNoErrlbl" ng-bind="Check.DocumentNoErr"  class="lblErr text-danger"></p>
										 	</div>
							</div>

							

						</div> <!-- end of panel body -->
   					</div>	<!--end of collapse1-->				 
				</div>  <!--end of panel default-->
    			
    			<div class="panel panel-default">
					<div class="panel-heading panel-title">
						<a data-toggle="collapse" href="#divAttachments">
						Attachments
						</a>
					</div>
					<div id="divAttachments" class="panel-body collapse in">
						<div class="form-group">                        
							<span class="control-label col-xs-2">Remarks for 
							Attachments</span>
						    	<div class="col-xs-10"> 						                            
						        	<textarea id="txtRemarks" rows="3" class="form-control" ng-model="Clearance.Remarks" ></textarea>	
						        </div>
						</div>

						<div class="form-group">
							<span class="control-label col-xs-2">Attachments</span>
								<div class="col-xs-10 ">
									<p class="myDrz">
									Drag files here or click to upload</p>	
									<table class="table" >
										<tr ng-repeat="item in Attachments">
											<td style="width:50px" >
												<a href="" ng-click="ShowAttachment(item.ServerRelativeUrl)" style="display: inline-table">
													<p ng-bind="item.Name" style="display: inline-table"></p>
												</a>
												<a href="" ng-click="removeAttachments($index,item.ServerRelativeUrl)" ng-show="userId == item.Author.Id">
													<i class="fa fa-times"></i>
												</a>
											</td>				            
										</tr>
									</table>
							
								</div>
						</div>
					</div>
				</div>

    			<div id="divTH" class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="">
							Transaction History</a> </h4>
					</div>
						<div id="documentHistory" class="panel-body collapse in">
							<table class="table">
								<thead>
									<tr>
										<th style="vertical-align:top">Date</th>
										<th style="vertical-align:top">Updated 
										By</th>
										<th style="vertical-align:top">Status</th>
										<th style="vertical-align:top">Routing 
										Status</th>
									</tr>
								</thead>
								<tbody>
									<tr ng-repeat="item in TransHistory">
										<td>
											<p class="form-control-static" ng-bind="momentformat(item.Date)" style="width:150px"></p>
										</td>
										<td>
											<p class="form-control-static" ng-bind="item.UpdatedBy.Title" style="width:150px"></p>
										</td>
										<td>
											<p class="form-control-static" ng-bind="item.Status" style="width:150px"></p>
										</td>
										<td>
											<p class="form-control-static" ng-bind="item.RoutingStatus" style="width:150px"></p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					
			   </div>	<!-- end of panel-->	
    
    
    
			     </div>			     
				
              </div>
            </div><!--xs 12 -->
        </div> <!--class row -->
    </div>  <!--Master Form -->
   
    <div class="col-xs-12">
		                      
             <div class="form-group btn-control-margin" >
                <div class="col-xs col-xs-offset-3  text-right">
                				
				    <button id="btnSubmit" name="btnSubmit" type="button" ng-click="submitForm()" class="btn btn-primary" ng-Show="isDraft">
					Submit</button>
					<button id="btnSaveEdit" name="btnSubmit" type="button" ng-click="saveSentback()" class="btn btn-primary" ng-Show="isSaveEdit">
					Save</button>
				<!-- for CR	 
					<button id="btnSendBackbyHR" name = "btnSendBackbyHR" type="button" ng-click="sendBackbyHrAdmin()" class="btn btn-warning" ng-show="isSaveEdit">
					Send Back</button>
				<!-- for CR	 -->
					
					<button id="btnSave" name="btnSave" type="button" ng-click="saveForm()" class="btn btn-primary" ng-Show="isDraft" >
					Save as Draft</button>
					<button id="btnCancel1" name="btnCancel1" type="button" ng-click="cancelRequest()" class="btn btn-danger" ng-Show="isDraft">
					Cancel Request</button>
					<!--<button id="btnSaveEdit" name="btnSubmit" type="button" ng-click="submitByOIC('save')" class="btn btn-primary" ng-show="isOIC">
					Save</button>-->
					<button id="btnSubmit" name="btnSubmit" type="button" ng-click="submitByOIC('submit')" class="btn btn-primary" ng-show="isOIC">
					Submit</button>
					<!--<button id="btnSaveEdit" name="btnSubmit" type="button" ng-click="submitByPayroll('save')" class="btn btn-primary" ng-show="isPayroll">
					Save</button>-->
					<button id="btnSubmit" name="btnSubmit" type="button" ng-click="submitByPayroll('submit')" class="btn btn-primary" ng-show="isPayroll">
					Submit</button>
					<button id="btnSendBack" name ="btnSendBack" type="button" ng-click="sendBackUnit()" class="btn btn-warning" ng-show="isPayroll">
					Send Back</button>
					<button id="btnSubmit" name="btnSubmit" type="button" ng-click="submitByFinance('submit')" class="btn btn-primary" ng-show="isFinance">
					Submit</button>
					<button id="btnSendBack" name = "btnSendBack" type="button" ng-click="sendBackClearance()" class="btn btn-warning" ng-show="isFinance">
					Send Back</button>
					<!--<button id="btnSaveEdit" name="btnSubmit" type="button" ng-click="submitByTreausy('save')" class="btn btn-primary" ng-show="isTreasury">
					Save</button>-->
					<button id="btnSubmit" name="btnSubmit" type="button" ng-click="submitByTreasury('submit')" class="btn btn-primary" ng-show="isTreasury">
					Submit</button>
					<!--<button id="btnSaveEdit" name="btnSubmit" type="button" ng-click="submitByHRComp('save')" class="btn btn-primary" ng-show="isHRComp">
					Save</button>-->
					<button id="btnSubmit" name="btnSubmit" type="button" ng-click="submitByHRComp('submit')" class="btn btn-primary" ng-show="isHRComp">
					Tag Quit Claim Completed</button>
					<!--<button id="btnSaveEdit" name="btnSubmit" type="button" ng-click="submitByCheckRelease('save')" class="btn btn-primary" ng-show="isCheckRelease">
					Save</button>-->
					<button id="btnSubmit" name="btnSubmit" type="button" ng-click="submitByCheckRelease('submit')" class="btn btn-primary" ng-show="isCheckRelease">
					Check Claimed</button>
					<button id="btnClose" name="btnClose" type="button" ng-click="cancelclick()" class="btn btn-default" >
					Exit</button>					
				</div>
            </div>
  
    </div> <!--Footer Form --> 
    
	     
 	<div id="modalSendBackLog" class="modal fade">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">	
                    <button type="button" class="close text-right" ng-click="CancelClickSendBack()" aria-hidden="true">
					×</button>                
	                <h4 class="modal-title">Send Back (LOG)</h4>	                
	            </div>
				<div class="modal-body">
					<div class="form-horizontal">
									<div class="form-group">
									   <div class="col-xs-12"> 
										  Please enter your Send Back Message
									   </div>
									</div>
												
									 <div class="form-group">                        
										<span class="control-label col-xs-2">
										Date:</span>
										<div class="col-xs-10"> 
											<p class="control-label" id="lblApplicationDate" ng-bind="SendBackDetails.Date"></p>        
										</div>
										<span class="col-xs-2"></span>
									</div>
									<div class="form-group">                        
										<span class="control-label col-xs-2">
										Remarks:</span>
									    	<div class="col-xs-10"> 						                            
									        	<textarea id="txtSendBackRemarks" rows="3" class="form-control" ng-model="SendBackDetails.Remarks" ></textarea>	
									        </div>
									    <span class="col-xs-2"></span>
											<div class="col-xs-10">                      
												<p id="RemarksErrlbl" ng-bind="SendBackDetails.RemarksErr"  class="lblErr text-danger"></p>
											</div>
									</div>

									 
									 <!--details tab -->
														   
					</div> <!-- form horizontal -->
				</div>	  <!-- modal body -->
				<div class="modal-footer">	               
					<button  type="button" class="btn btn-primary"  ng-click="validateSendBack()" ng-show="isPayroll">
					OK</button>	
					<button  type="button" class="btn btn-primary"  ng-click="validateSendBackClearance()" ng-show="isFinance">
					OK</button>	                
					<button type="button" class="btn btn-default"  ng-click="CancelClickSendBack()" >
					Cancel</button>
				</div>	 
			</div>  <!--  modal content  -->  	               					 
					     
					

	    
	 </div> <!--  modal dialog  -->  
	</div> <!--  modal popup  --> 
	
	<div id="modalConfirmation" class="modal fade">
	    <div class="modal-dialog" style="width:600px">
	        <div class="modal-content">
	            <div class="modal-header">	
                                   
	                <h4 class="modal-title">You are about to submit and route 
					clearance to below division/s:</h4>	                
	            </div>
				<div class="modal-body">
					<div class="form-horizontal">
						<table class="table">
							<thead style="width: calc( 100% - 1em )">
								<tr style="display:table;width:100%;table-layout:fixed">
									<th style="vertical-align:top;">
									Division</th>
									<th style="vertical-align:top;">
									Unit</th>
								</tr>
							</thead>
							<tbody style="display:block;height:390px;overflow-y:scroll">
								<tr ng-repeat="item in modalTable | orderBy:'Division.Division'" style="display:table;width:100%;table-layout:fixed"> 
									<td><p class="form-control-static" ng-hide="item.Unit_Item.Unit" ng-bind="item.Division.Division" ></p></td>
								  	<td><p class="form-control-static" ng-bind="item.Unit_Item.Unit" ></p></td>											  							  			
								</tr>							
							</tbody>											
						</table>
									 <!--details tab -->
							   
					</div> <!-- form horizontal -->
				</div>	  <!-- modal body -->
				<div class="modal-footer">	  
					<h4 class="modal-title" style="text-align:left">Do you want 
					to continue?</h4>             
					<button  type="button" class="btn btn-primary"  ng-click="SubmitConfirmation()">
					Yes</button>	                
					<button type="button" class="btn btn-default"  ng-click="CancelClickConfirmation()" >
					No</button>
				</div>	 
			</div>  <!--  modal content  -->  	               					 
					     
					

	    
	 </div> <!--  modal dialog  -->  
	</div> <!--  modal popup  --> 
	
</ng-form> 
</div>
</asp:Content>