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




	.panel.with-nav-tabs .panel-heading{
	    padding: 5px 5px 0 5px;
	}
	.panel.with-nav-tabs .nav-tabs{
		border-bottom: none;
	}
	.panel.with-nav-tabs .nav-justified{
		margin-bottom: -1px;
	}
	/********************************************************************/
	/*** PANEL DEFAULT ***/
	.with-nav-tabs.panel-default .nav-tabs > li > a,
	.with-nav-tabs.panel-default .nav-tabs > li > a:hover,
	.with-nav-tabs.panel-default .nav-tabs > li > a:focus {
	    color: #777;
	}
	.with-nav-tabs.panel-default .nav-tabs > .open > a,
	.with-nav-tabs.panel-default .nav-tabs > .open > a:hover,
	.with-nav-tabs.panel-default .nav-tabs > .open > a:focus,
	.with-nav-tabs.panel-default .nav-tabs > li > a:hover,
	.with-nav-tabs.panel-default .nav-tabs > li > a:focus {
	    color: #777;
		background-color: #ddd;
		border-color: transparent;
	}
	.with-nav-tabs.panel-default .nav-tabs > li.active > a,
	.with-nav-tabs.panel-default .nav-tabs > li.active > a:hover,
	.with-nav-tabs.panel-default .nav-tabs > li.active > a:focus {
		color: #555;
		background-color: #fff;
		border-color: #ddd;
		border-bottom-color: transparent;
	}
	.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu {
	    background-color: #f5f5f5;
	    border-color: #ddd;
	}
	.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > li > a {
	    color: #777;   
	}
	.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,
	.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {
	    background-color: #ddd;
	}
	.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > .active > a,
	.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,
	.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {
	    color: #fff;
	    background-color: #555;
	}
     <!-- End of Panel CSS -->
	#pageTitle{
		display: none;
	}
	.radio {
		margin-left: 20px;
	}
	
	

    .modal-body {
              max-height: calc(100vh - 210px);
              overflow-y: auto;              
              
        }
        .modal-dialog {
          /* width: 1200px; */
          width: 80%;
        }
		
		
		.text-divider{margin: 2em 0; line-height: 0; text-align: center;}
		.text-divider span{background-color: #f5f5f5; padding: 1em;}
		.text-divider:before{ content: " "; display: block; border-top: 1px solid #e3e3e3; border-bottom: 1px solid #f7f7f7;}
		
		
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
        .move-left {
		    width: auto;
		    box-shadow: none;
		  }
		.lnks {display: none;}  
		
		#dropzone {
             cursor: pointer;
             text-decoration:underline;
             min-height:120px;             
             text-align: center;            
             border-style:dotted; 
             border-width: 2px;
             
         }
         
         .table-responsive
		{
			height: 350px;
  			overflow-y: scroll;		
  		}


	
}	 
</style>
<!-- Add your JavaScript to the following file -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
    <!-- <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
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

	
	<script type="text/javascript" src="../siteassets/service/new/angularApp.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/http.base.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/common.service.js"></script>
	<script type="text/javascript" src="../siteassets/service/display/display.util.service.js"></script>	
	<script type="text/javascript" src="../siteassets/service/new/file.service.js"></script>
	<script type="text/javascript" src="../siteassets/service/list.ops.service.js"></script>
	<script type="text/javascript" src="../siteassets/scripts/ClearanceDivUnit_Display.js"></script> 
	

	<!--<script src="https://appsforoffice.microsoft.com/lib/1/hosted/Office.js" type="text/javascript"></script> -->	


			
</asp:Content>
<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">


<div class="page" ng-app="app"  ng-controller="Ctrl" >         	
    <ng-form name = "form1" novalidate >
  
     <div class="col-xs-12 upper" > <!--start of master -->
        <div class="row" >
            <div class="col-xs-12">
                <h1 class="h3 pull-left">                    
                    <span ng-show="showDiv">Online Clearance Monitoring System - 
					Division</span>
                    <span ng-show="showUnit">Online Clearance Monitoring System 
					- Unit</span>
                </h1>               
            </div>
            
            
            <div class="col-xs-12" >
              <table class="table-condensed" >
            	 <tr> 
            	     <td class ="" ng-show="showUnit">
					   <a  href="" ng-click="edit()" ng-show="showEdit"><i class="fa fa-check"></i> 
						Clear this Unit &nbsp;&nbsp;</a>
						<a  href="" ng-click="viewUnit()" ng-show="showRelated"><i class="fa fa-eye"></i> 
						View Related Unit Status</a>&nbsp;&nbsp;
					 </td>	
					 <td class ="" ng-show="showDiv">
					   <a  href="" ng-click="edit()" ng-show="showEdit"><i class="fa fa-check"></i> 
						Clear this Division</a>&nbsp;&nbsp;
					 </td>	 					
				 </tr> 
               </table>
                <div class="form-horizontal">                  
                  <div class="panel-group" id="accordion"> 
                      <div class="panel panel-default">
						  <div class="panel-heading">
						      <h4 class="panel-title">
						        <a data-toggle="collapse" data-parent="#accordion" >
						        Header Information</a>
						      </h4>
						    </div>
						    <div id="collapse1" class="panel-collapse collapse in">
							<div class="panel-body">
								<div class="form-group">                        
									<span class="control-label col-xs-2">
									Clearance Number</span>
									<div class="col-xs-10"> 
										<p class="control-label" id="lblClearanceNo" ng-bind="Clearance.ClearanceNo"></p>        
									</div>
									 <span class="col-xs-2"></span>
								</div>
								
								<div class="form-group">                        
									<span class="control-label col-xs-2">
									Application Date</span>
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
								
								<div class="form-group" ng-show="showUnit">                        
									<span class="control-label col-xs-2">Unit 
									Status</span>
									<div class="col-xs-10"> 
										<p class="control-label" id="lblStatus" ng-bind="ClearanceDetails[0].UnitStatus"></p>        
									</div>
									 <span class="col-xs-2"></span>
								</div>
								
								<div class="form-group" ng-show="showUnit">                        
									<span class="control-label col-xs-2">Unit 
									Routing Status</span>
									<div class="col-xs-10"> 
										<p class="control-label" id="lblRoutingStatus" ng-bind="ClearanceDetails[0].UnitRoutingStatus"></p>        
									</div>
									 <span class="col-xs-2"></span>
								</div>
								
								<div class="form-group" ng-show="showDiv">                        
									<span class="control-label col-xs-2">
									Division Status</span>
									<div class="col-xs-10"> 
										<p class="control-label" id="lblStatus" ng-bind="ClearanceDetails[0].DivisionStatus"></p>        
									</div>
									 <span class="col-xs-2"></span>
								</div>
								
								<div class="form-group" ng-show="showDiv">                        
									<span class="control-label col-xs-2">
									Division Routing Status</span>
									<div class="col-xs-10"> 
										<p class="control-label" id="lblRoutingStatus" ng-bind="ClearanceDetails[0].DivisionRoutingStatus"></p>        
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
						      			
							       <div class="form-group">
							       		<span class="control-label col-xs-2">
										Name</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblEmpName" ng-bind="Clearance.EmpName"></p>        
											</div>
										<span class="col-xs-2"></span>											
									</div>
									
									<div class="form-group">
							       		<span class="control-label col-xs-2">
										Position</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblPosition" ng-bind="Clearance.Position"></p>        
											</div>
										<span class="col-xs-2"></span>											
									</div>
									
									<div class="form-group">
							       		<span class="control-label col-xs-2">
										Division</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblDivision" ng-bind="Clearance.Division"></p>        
											</div>
										<span class="col-xs-2"></span>											
									</div>
									
									<div class="form-group">
							       		<span class="control-label col-xs-2">
										Level</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblLevel" ng-bind="Clearance.Level"></p>        
											</div>
										<span class="col-xs-2"></span>											
									</div>
									
									<div class="form-group">
							       		<span class="control-label col-xs-2">
										Movement</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblMovement" ng-bind="Clearance.Movement"></p>        
											</div>
										<span class="col-xs-2"></span>											
									</div>
									
									<div class="form-group">
							       		<span class="control-label col-xs-2">
										Date Hired</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblDateHired" ng-bind="Clearance.DateHired"></p>        
											</div>
										<span class="col-xs-2"></span>											
									</div>

									<div class="form-group">
							       		<span class="control-label col-xs-2">
										Date Separated</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblDateSeparated" ng-bind="Clearance.DateSeparated"></p>        
											</div>
										<span class="col-xs-2"></span>											
									</div>
									
									<div class="form-group">
							       		<span class="control-label col-xs-2">
										Email</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblEmail" ng-bind="Clearance.Email"></p>        
											</div>
										<span class="col-xs-2"></span>											
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
										<span class="control-label col-xs-2">
										Reference</span>
										<div class="col-xs-10"> 
											<p class="control-label" id="lblReference" ng-bind="Clearance.Reference"></p>        
										</div>
									</div>
									
									<div class="form-group">  
										<span class="control-label col-xs-2">
										Email Address</span>
										<div class="col-xs-10"> 
											<p class="control-label" id="lblEmailAddress" ng-bind="Clearance.EmailAddress"></p>        
										</div>
									</div>
									
									<div class="form-group">  
										<span class="control-label col-xs-2">
										Telephone</span>
										<div class="col-xs-10"> 
											<p class="control-label" id="lblTelephone" ng-bind="Clearance.Telephone"></p>        
										</div>
									</div>
									
									<div class="form-group">  
										<span class="control-label col-xs-2">
										Mobile Phone</span>
										<div class="col-xs-10"> 
											<p class="control-label" id="lblMobilePhone" ng-bind="Clearance.MobilePhone"></p>        
										</div>
									</div>
									
		
								</div> <!-- end of panel body -->
		   					</div>	<!--end of collapse1-->				 
						</div>  <!--end of panel default-->
						
	
						<div class="panel panel-default" ng-show="showDiv">
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
														<th style="vertical-align:top"><input ng-disabled="disableCbox" class="form-check-input" type="checkbox" ng-change="SelectAllGridDetails(ClearanceDivision,sendBackDiv.DetailsSelect)"  ng-model="sendBackDiv.DetailsSelect"/></th>
														<th style="vertical-align:top">
														Division</th>
														<th style="vertical-align:top">
														Unit</th>
														<th style="vertical-align:top">
														Unit Status</th>
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
													<tr ng-repeat="item in ClearanceDivision | orderBy:'Division'"> 
														<td ><input class="form-check-input" ng-show="item.Unit" type="checkbox" ng-model="item.Select" ng-disabled="disableCbox"/></td>
														<td><p class="form-control-static" ng-bind="item.Division" style="width:150px"></p></td>
													  	<td><a href="" ng-click="openUnit(item)"><p class="form-control-static" ng-bind="item.Unit" style="width:180px"></p></a></td>
													  	<td><p class="form-control-static" ng-bind="item.UnitStatus" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="item.Cost" style="width:150px"></p></td>
													  	<td><p class="form-control-static" ng-bind="ArraytoString(item.UnitClearanceSubStatus)" style="width:150px"></p></td>
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
						
						<div class="panel panel-default" ng-show="showUnit">
							<div class="panel-heading">
							      <h4 class="panel-title">
							        <a data-toggle="collapse" data-parent="#accordion" >
							        Clearance Details</a>
							      </h4>
							</div>
								<div id="collapse1" class="panel-collapse collapse in">
									<div class="panel-body">
										<div class="form-group">                        
											<span class="control-label col-xs-2">
											Unit:</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblDivision" ng-bind="ClearanceUnit[0].Division"></p>        
											</div>
											 <span class="col-xs-2"></span>
										</div>
										
										<div class="form-group">                        
											<span class="control-label col-xs-2">
											Item Name:</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblUnit" ng-bind="ClearanceUnit[0].Unit"></p>        
											</div>
											 <span class="col-xs-2"></span>
										</div>
										
										<div class="form-group" ng-hide="editItem">                        
											<span class="control-label col-xs-2">
											Unit Clearance Status:</span>
											<div class="col-xs-10" > 
												<p class="control-label" id="lblUnitClearanceStat" ng-bind="ClearanceUnit[0].UnitStatus"></p>        
											</div>
											 <span class="col-xs-2"></span>
																						 
										</div>
										
										<div class="form-group" ng-show="editItem">                        
											<span class="control-label col-xs-2">
											Unit Clearance Status:</span>
											<div class="col-xs-10"> 
												<select id="cboUnitStat" style="width: 100%;" ng-model ="ClearanceUnit[0].UnitStatus" class="choseninit form-control" ng-options="item.Value as item.Value for item in unitStatusLookup">                                                                                         
												</select>  
											</div>	
											 <span class="col-xs-2"></span>
											 <div class="col-xs-10">                      
												<p id="UnitClearanceStatErrlbl" ng-bind="Unit.UnitClearanceStatErr"  class="lblErr text-danger"></p>
											</div>
		 
										</div>
										
										<div class="form-group">  
											<div style="padding-right:-10px;">                      
												<span class="control-label col-xs-2">
													Clearance Sub-Status:
												</span>	
											</div>	 
												<div class="col-xs-4">	
													<table class="table-condensed">	
															
															<tr ng-repeat="item in unitClearanceSubStatus" >
																<td>
																		<div class="checkbox">
																			<label>
																				<input class="form-check-input" type="checkbox" ng-disabled="disableCbox" ng-model="item.value2"/>
																			</label>	        
																			<label>
																				<p class="control-label" ng-bind="item.Description"></p>
																			</label>
																		</div>
																</td>	
															</tr>	
															
													</table>
												</div>
												
												<div class="col-xs-6"> 
													<div ng-hide="editItem"> 
														<p class="control-label" id="lblClearanceNo" ng-bind="ClearanceUnit[0].TextAreaSubStatus"></p>        
													</div>    
												
													<div ng-show="editItem"> 
														<textarea id="txtRemarks" rows="3" ng-model="ClearanceUnit[0].TextAreaSubStatus" class="form-control" ></textarea>        
													</div>	
												</div>										
										</div>
																				
										<div class="form-group" ng-show="false">                        
											<span class="control-label col-xs-2">
											Cost Required:</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblStatus" ng-bind="ClearanceUnit[0].CostRequired"></p>        
											</div>
											 <span class="col-xs-2"></span>
										</div>
										
										<div class="form-group" ng-hide="editItem">                        
											<span class="control-label col-xs-2">
											Cost:</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblStatus" ng-bind="ClearanceUnit[0].Cost"></p>        
											</div>
											 <span class="col-xs-2"></span>
										</div>
										
										<div class="form-group" ng-show="editItem">                        
											<span class="control-label col-xs-2">
											Cost:</span>
											<div class="col-xs-10"> 
												<input id="txtCost" type="text" maxlength="255" min="0" ng-model ="ClearanceUnit[0].Cost" class="txtcurr form-control "/>   
											</div>	
											 <span class="col-xs-2"></span>
											 <div class="col-xs-10">                      
												<p id="CostErrlbl" ng-bind="Unit.CostErr"  class="lblErr text-danger"></p>
											 </div>

										</div>

										
										<div class="form-group" ng-hide="editItem">                        
											<span class="control-label col-xs-2">
											Details of Accountability:</span>
											<div class="col-xs-10"> 
												<p class="control-label" id="lblStatus" ng-bind="ClearanceUnit[0].DetailsAccountability"></p>        
											</div>
											 <span class="col-xs-2"></span>
										</div>
										
										<div class="form-group" ng-show="editItem">                        
											<span class="control-label col-xs-2">
											Details of Accountability:</span>
											<div class="col-xs-10"> 
												<input id="txtAcctDetails" type="text" ng-model ="ClearanceUnit[0].DetailsAccountability" class="form-control "/>   
											</div>
											 <span class="col-xs-2"></span>
										</div>

																														
										<div class="form-group">                        
											<span class="control-label col-xs-2">
											Reminders:</span>
											<div class="col-xs-10"> 
												<table>
														<tr ng-repeat="item in Reminders">
															<td>
																	<p class="control-label" id="" ng-bind="item.Value"></p>        
															</td>
														</tr>
												</table>  
											</div>		 
										</div>

										<!-- <div class="form-group" ng-hide="editItem"> 
											<table>
											<tr>
												<td>
													<span class="col-md-12">
														Reminders:
													</span>		 
												</td>	
												<td>
													<table>
														<tr ng-repeat="item in Reminders">
															<td width="100%">
																<div class="col-xs-10"> 
																	<p class="control-label" id="" ng-bind="item.Value"></p>        
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
											</table>
										</div>   --> 										
										<!--<div class="form-group" ng-show="editItem">                        
											<span class="control-label col-xs-2">
											Reminders:</span>
											<div class="col-xs-10"> 
												<input id="txtReminders" type="text" ng-model ="ClearanceUnit[0].Reminders" class="form-control "/>   
											</div>
											 <span class="col-xs-2"></span>
										</div>-->

									

		    						</div> <!-- end of panel body -->
		   						</div>	<!--end of collapse1-->		
		   								 
						</div>  <!--end of panel default-->

						
						<div class="panel panel-default" ng-hide="editItem">
							<div class="panel-heading panel-title">
								<a data-toggle="collapse" href="">
								Attachments
								</a>
							</div>
							<div id="divAttachments" class="panel-body collapse in">
								<div class="form-group">                        
						        	<span class="control-label col-xs-2">
									Remarks for Attachments</span>
						            <div class="col-xs-10"> 
						            	<p class="form-control-static" ng-bind="Clearance.Remarks"></p>
						            </div>                
						        </div>

								<div class="form-group">
									<span class="control-label col-xs-2">
									Attachments</span>
										
										<div class="col-xs-10 ">
											<table>
												<tr ng-repeat="item in Attachments| orderBy:'Name'">
													<td>
														<a href="" ng-click="ShowAttachment(item.ServerRelativeUrl)">
															<p ng-bind="item.Name"></p>
														</a>
													</td>
												</tr>
											</table>
										</div>
								</div>
							</div>
						</div>
						
						<div class="panel panel-default" ng-show="editItem">
							<div class="panel-heading panel-title">
								<a data-toggle="collapse" href="">
								Attachments
								</a>
							</div>
							<div id="divAttachments" class="panel-body collapse in">
								<div class="form-group">                        
									<span class="control-label col-xs-2">Remarks 
									for attachment</span>
								    	<div class="col-xs-10"> 						                            
								        	<textarea id="txtRemarks" rows="3" class="form-control" ng-model="Clearance.Remarks" ></textarea>	
								        </div>
								</div>
		
								<div class="form-group">
									<span class="control-label col-xs-2">
									Attachments</span>
										<div class="col-xs-10 ">
											<p class="myDrz">
											Drag files here or click to upload</p>		
											
											<table class="table" >
												<tr ng-repeat="item in Attachments">
													<td style="width:50px" >
														<a href="" ng-click="ShowAttachment(item.ServerRelativeUrl)" style="display: inline-table">
															<p ng-bind="item.Name" style="display: inline-table" ></p>
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
												<th style="vertical-align:top">
												Date</th>
												<th style="vertical-align:top">
												Updated By</th>
												<th style="vertical-align:top" ng-show="showDiv">
												Division Status</th>
												<th style="vertical-align:top" ng-show="showDiv">
												Division Routing Status</th>
												<th style="vertical-align:top" ng-show="showUnit">
												Unit Status</th>
												<th style="vertical-align:top" ng-show="showUnit">
												Unit Routing Status</th>
												<th style="vertical-align:top">
												Remarks</th>
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

												<td ng-show="showDiv">
													<p class="form-control-static" ng-bind="item.DivisionStatus" style="width:150px" ></p>
												</td>
												<td ng-show="showDiv">
													<p class="form-control-static" ng-bind="item.DivisionRoutingStatus" style="width:150px" ></p>
												</td>
												<td ng-show="showUnit">
													<p class="form-control-static" ng-bind="item.UnitStatus" style="width:150px" ></p>
												</td>
												<td ng-show="showUnit">
													<p class="form-control-static" ng-bind="item.UnitRoutingStatus" style="width:150px" ></p>
												</td>
												<td>
													<p class="form-control-static" ng-bind="item.Remarks" style="width:150px"></p>
												</td>

											</tr>
										</tbody>
									</table>
								</div>
							
					   </div>	<!-- end of panel-->
						
			     </div>	<!-- accordion-->
			   </div>  		     
				
				
					
              
            </div><!--xs 12 -->
        </div> <!--class row -->
    </div>  <!--Master Form -->
   
    <div class="col-xs-12"> <!--Footer Form -->
		
       
             <div class="form-group btn-control-margin" >
                <div class="col-xs col-xs-offset-3  text-right" ng-show="showUnit">
				    
				    <button id="btnSave" name = "btnSave" type="button" ng-click="saveUnit()" class="btn btn-primary" ng-show="editItem">
					Submit</button> 

                  	<button id="btnCancel" type="button" ng-click="closed()" class="btn btn-default" ng-show="editItem">
					Cancel</button> 
					
                     
  
				    
				</div>
				
				<div class="col-xs col-xs-offset-3  text-right" ng-show="showUnitDiv">
				    
				   	<button id="btnSave" name = "btnSave" type="button" ng-click="saveUnit()" class="btn btn-primary" ng-show="editItem">
					Submit</button> 
					
					<button id="btnSave" name = "btnSave" type="button" ng-click="sendBackUnit()" class="btn btn-warning" ng-show="editItem">
					Send Back</button>
					
               		<button id="btnCancel" type="button" ng-click="closed()" class="btn btn-default" ng-show="editItem">
					Cancel</button>
					  
				    
				</div>
				
				<div class="col-xs col-xs-offset-3  text-right" ng-show="showNoUnitDiv">
				    
				   	<button id="btnSave" name = "btnSave" type="button" ng-click="saveUnit()" class="btn btn-primary" ng-show="editItem">
					Submit</button> 
					
               		<button id="btnCancel" type="button" ng-click="closed()" class="btn btn-default" ng-show="editItem">
					Cancel</button>
					  
				    
				</div>


				<div class="col-xs col-xs-offset-3  text-right" ng-show="close">
					<button id="btnCancel" type="button" ng-click="closed()" class="btn btn-default">
					Close</button> 	
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
					<button  type="button" class="btn btn-primary"  ng-click="validateSendBack()"  >
					OK</button>	                
					<button type="button" class="btn btn-default"  ng-click="CancelClickSendBack()" >
					Cancel</button>
				</div>	 
			</div>  <!--  modal content  -->  	               					 
					     
					

	    
	 </div> <!--  modal dialog  -->  
	</div> <!--  modal popup  --> 	    
   
   	
  
	
  </ng-form>  <!--  <ng-form>  -->  	
 </div>	 <!-- div controller --> 
       
    

</asp:Content>


