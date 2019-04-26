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
         
       .table-responsive
		{
			height: 500px;
  			overflow-y: scroll;		
  		}

	        
        
              
		
	</style>
	

     <!-- Add your JavaScript to the following file -->
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
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
	<script type="text/javascript" src="../siteassets/service/list.ops.service.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/file.service.js"></script>
	<script type="text/javascript" src="../siteassets/scripts/Clearance_New.js"></script> 
	<!--<script type="text/javascript" src="/sites/WF-PROD/EPS/siteassets/scripts/fetch.js"></script> 
	<script type="text/javascript" src="/sites/WF-PROD/EPS/siteassets/scripts/es6-promise.min.js"></script> 
	<script type="text/javascript" src="/sites/WF-PROD/EPS/siteassets/scripts/pnp.js"></script>-->

	
	
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
                    <span >Online Clearance Monitoring System - New Clearance</span>
                </h1>
            </div>
            
            
            <div class="col-xs-12" >
                <div class="form-horizontal">
                    
                                       
                    <div class="panel-group" id="accordion">
                    
                    
	                    <!--<div class="panel panel-default">
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
									<p class="control-label" id="lblStatus" ng-bind="Clearance.Status"></p>        
								</div>
								 <span class="col-xs-2"></span>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Routing 
								Status</span>
								<div class="col-xs-10"> 
									<p class="control-label" id="lblRoutingStatus" ng-bind="Clearance.RoutingStatus"></p>        
								</div>
								 <span class="col-xs-2"></span>
							</div>	
								                    

															   
						   
							</div>
						  </div>
						 </div>	-->
						  
	            <div class="panel panel-default">
				    <div class="panel-heading">
				      <h4 class="panel-title">
				        <a data-toggle="collapse" data-parent="#accordion" href="">
				        Employee Information</a>
				      </h4>
				    </div>
				    <div id="collapse3" class="panel-collapse collapse in">
				      <div class="panel-body"> 	
				      			
					       <div class="form-group">                        
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
							
							
							<div class="form-group" ng-show="false">                        
								<span class="control-label col-xs-2">Employee ID</span>
									<div class="col-xs-10"> 
										<input id="txtEmpID" type="text" ng-model ="Clearance.EmpID" class="form-control "/>   
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="EmpIDErrlbl" ng-bind="Clearance.EmpIDErr"  class="lblErr text-danger"></p>
									</div>
									
							</div>


							<div class="form-group">                        
								<span class="control-label col-xs-2">Position</span>
									<div class="col-xs-10"> 
										<input id="txtPosition" type="text"  ng-model ="Clearance.Position" class="form-control "/>   
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
										<select id="cboDivision"  style="width: 100%;" class="form-control " >                                         
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
							
							<div class="form-group">                        
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
										<input id="txtEmailAdd" ng-model ="Clearance.EmailAddress" type="text" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="EmailAddErrlbl" ng-bind="Clearance.EmailAddErr"  class="lblErr text-danger"></p>
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
										<input id="txtMobilePhone" type="text"  ng-model ="Clearance.MobilePhone" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="MobilePhoneErrlbl" ng-bind="Clearance.MobilePhoneErr"  class="lblErr text-danger"></p>
										 	</div>
							</div>
							

						</div> <!-- end of panel body -->
   					</div>	<!--end of collapse1-->				 
				</div>  <!--end of panel default-->


				<!-- <div class="panel with-nav-tabs panel-default">
					<div class="panel-heading">
						<ul class="nav nav-tabs">
							<li class="active"><a data-toggle="tab" href="#CLD_PAGE">
							Clearance Details</a></li>
							<li><a data-toggle="tab" href="#CHD_PAGE">Check 
							Details</a></li>
						</ul>
					</div>
						<div id="collapse1" class="panel-collapse collapse in">
							<div class="panel-body">
								
								<div class="tab-content">
									
									<div id="CLD_PAGE" class="tab-pane fade in active">
										<div style="overflow-y:auto;">
									 		<table class="table">
												<thead>
													<tr>
														<th style="vertical-align:top">
														Division/Unit</th>
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
												<tbody>
													<tr ng-repeat="item in divUnit"> 
													  	<td><p class="form-control-static" ng-bind="item.Division.Division" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="" style="width:150px"></p></td>											  							  			
													</tr>							
												</tbody>											
							               </table>
							           </div>
									     
										
									</div> <!-- end of CLD Page -->
									<!--
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
													<tr > 
													  	<td><p class="form-control-static" ng-bind="" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="" style="width:150px"></p></td>											  							  			
													</tr>							
												</tbody>											
							               </table>
							            </div>
							            
									</div> <!-- end of CHD Page -->
								
							<!--	</div> <!-- end of tab content -->
    				<!--	</div> <!-- end of panel body -->
   					<!--</div>	<!--end of collapse1-->				 
			<!--</div>  <!--end of panel default--> 
    			
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
								</div>
						</div>
					</div>
				</div>

    		<!--	<div id="divTH" class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="">
							Document History</a> </h4>
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
										<th style="vertical-align:top">Remarks</th>
									</tr>
								</thead>
								<tbody>
									<tr >
										<td>
											<p class="form-control-static" ng-bind="" style="width:150px"></p>
										</td>
										<td>
											<p class="form-control-static" ng-bind="" style="width:150px"></p>
										</td>
										<td>
											<p class="form-control-static" ng-bind="" style="width:150px"></p>
										</td>
										<td>
											<p class="form-control-static" ng-bind="" style="width:150px"></p>
										</td>
										<td>
											<p class="form-control-static" ng-bind="" style="width:150px"></p>
										</td>

									</tr>
								</tbody>
							</table>
						</div>
					
			   </div>	<!-- end of panel -->	
    
    
    
			     </div>			     
				
              </div>
            </div><!--xs 12 -->
        </div> <!--class row -->
    </div>  <!--Master Form -->
   
    <div class="col-xs-12">
		                      
             <div class="form-group btn-control-margin" >
                <div class="col-xs col-xs-offset-3  text-right">
                	<button id="btnSubmit"  type="button" ng-click="submitForm()" class="btn btn-primary" ng-disabled="disablectrl" >
					Submit</button>
					
				    <button id="btnSave"  type="button" ng-click="saveForm()" class="btn btn-primary" ng-disabled="disablectrl" >
					Save as Draft</button>
                                        
                    <button id="btnCancel" type="button" ng-click="cancelclick()" class="btn btn-default"  >
					Cancel</button>  
				    
				   <!-- <button id="btnSave" name = "btnSave" type="button" ng-click="c(form1)" class="btn btn-primary" >
					Save</button> -->
				</div>
            </div>

        
        
    </div> <!--Footer Form -->        
 	
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