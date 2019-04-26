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
		
	/*	.table-responsive
		{
			height: 500px;
  			overflow-y: scroll;		
  		}*/

		.lnks {display: none;}
		
		
		
}	 
</style>

<style media="print">
   @page {
      size: auto;
      margin: 1cm;
  }

  a[href]:after {
    content: none !important;
  }
  
  #btnPrint {
	display:none;
	}
	
	#btnCancel {
	display:none;
	}

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
		
	<script type="text/javascript" src="../siteassets/service/new/angularApp.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/http.base.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/common.service.js"></script>
	<script type="text/javascript" src="../siteassets/service/display/display.util.service.js"></script>	
	<script type="text/javascript" src="../siteassets/service/new/file.service.js"></script>
	<script type="text/javascript" src="../siteassets/service/list.ops.service.js"></script>
	<script type="text/javascript" src="../siteassets/scripts/Clearance_Display.js"></script> 
	
	<!--<script src="https://appsforoffice.microsoft.com/lib/1/hosted/Office.js" type="text/javascript"></script> -->	


			
</asp:Content>
<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">


<div class="page" ng-app="app"  ng-controller="Ctrl">         	
    <ng-form name = "form1" novalidate >
  
     <div class="col-xs-12 upper" > <!--start of master -->
        <div class="row" >
            <div class="col-xs-12">
                <h1 class="h3 pull-left">                    
                    <span>Online Clearance Monitoring System - Main</span>
                </h1>               
            </div>
            
            
            <div class="col-xs-12" >
              <table class="table-condensed" >
              	
              	 <tr> 
            	     <td class ="lnks lnkEdit" ng-show="print">
					   <a href="" ng-click="editItem('edit')"><i class="fa fa-pencil-square-o"></i> 
						Edit Clearance</a>&nbsp;&nbsp;
					 </td>
		    	 	<td class ="lnks showOicApprove" ng-show="print">
					   <a href="" ng-click="editItem('approval')" ><i class="fa fa-check"></i>
					   Approve this Clearance</a>&nbsp;&nbsp;
					 </td>
            	 	<td class="lnks showPayrollApprove" ng-show="print">
					   <a href="" ng-click="editItem('approval')" ><i class="fa fa-check"></i>
					   Approve this Clearance</a>&nbsp;&nbsp;
					 </td>
            	 	<td class="lnks showFinanceApprove" ng-show="print">
					   <a href="" ng-click="editItem('approval')" ><i class="fa fa-check"></i>
					   Approve this Clearance</a>&nbsp;&nbsp;
					 </td>
					 <td class="lnks showTreasuryApprove" ng-show="print">
					   <a href="" ng-click="editItem('approval')" ><i class="fa fa-check"></i>
					   Approve this Clearance</a>&nbsp;&nbsp;
					 </td>
					 <td class="lnks showHRCompApprove" ng-show="print">
					   <a href="" ng-click="editItem('approval')" ><i class="fa fa-check"></i>
					   Complete this Clearance</a>&nbsp;&nbsp;
					 </td>
					 <td class="lnks showCheckReleaseApprove" ng-show="print" >
					   <a href="" ng-click="editItem('approval')" ><i class="fa fa-check"></i>
					   Complete this Clearance</a>&nbsp;&nbsp;
					 </td>
					 <td class="lnks lnkprintData" ng-show="print">
					   <a href="" ng-click="print()" ><i class="fa fa-print"></i>
					   Print Data</a>&nbsp;&nbsp;
					 </td>
				 </tr>
				 		 					 
               </table>
                <div class="form-horizontal">                  
                  <div class="panel-group" id="accordion"> 
                      <div class="panel panel-default" ng-show="print">
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
						 </div>
						
						
						
						<div class="panel panel-default">
						    <div class="panel-heading">
						      <h4 class="panel-title">
						        <a data-toggle="collapse" data-parent="#accordion" >
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
						
						<div class="panel panel-default" ng-show="print">
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


						<div class="panel with-nav-tabs panel-default" ng-Show="isNotDraft">
							<div class="panel-heading" ng-show="print">
								<ul class="nav nav-tabs">
									<li class="active"><a data-toggle="tab" href="#CLD_PAGE" >
									Clearance Details</a></li>
									<li ng-show="noCheckDetails"><a data-toggle="tab" href="#CHD_PAGE" >
									Check Details</a></li>
								</ul>
							</div>
								<div id="collapse1" class="panel-collapse collapse in" ng-show="print">
									<div class="panel-body">										
										<div class="tab-content">
											<div id="CLD_PAGE" class="tab-pane fade in active">
												<div class="table-responsive">
											 		<table class="table">
														<thead style="width: calc( 100% - 1em )">
															<tr style="display:table;
																    width:100%;
																    table-layout:fixed;">
																<th style="vertical-align:top;width:165px">
																Division</th>
																<th style="vertical-align:top;width:150px">
																Unit</th>
																<th style="vertical-align:top;width:170px">
																Clearance Status</th>
																<th style="vertical-align:top;width:150px">
																Cost</th>
																<th style="vertical-align:top;width:170px">
																Unit Clearance 
																Sub-Status</th>
																<th style="vertical-align:top;width:150px">
																Clearing Officer</th>
															</tr>
														</thead>
														<tbody style="display:block;
																    height:400px;
																    overflow-y:scroll;">
															<tr ng-repeat="item in ClearanceDetails | orderBy:'Division'"> 
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
																	*** Nothing 
													follows ***</b></p>		

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
		   						<div class="panel-heading" ng-show="toprint">
								<ul class="nav nav-tabs">
									<li class="active"><a data-toggle="tab" href="#CLDPrint_PAGE">
									Clearance Details</a></li>
								</ul>
							</div>
								<div id="collapse1" class="panel-collapse collapse in" ng-show="toprint">
									<div class="panel-body">										
										<div class="tab-content">
											<div id="CLDPrint_PAGE" class="tab-pane fade in active" >
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
																Unit Clearance 
																Sub-Status</th>
																<th style="vertical-align:top">
																Clearing Officer</th>
															</tr>
														</thead>
														<tbody>
															<tr ng-repeat="item in ClearanceDetails | orderBy:'Division'"> 
															  	<td style="width:120px"><p class="form-control-static" ng-bind="item.Division"></p></td>
															  	<td style="width:120px"><p class="form-control-static" ng-bind="item.Unit"></p></td>
															  	<td style="width:90px"><p class="form-control-static" ng-bind="item.Clearance_Status"></p></td>
															  	<td style="width:50px"><p class="form-control-static" ng-bind="item.Cost"></p></td>
															  	<td style="width:120px"><p class="form-control-static" ng-bind="ArraytoString(item.UnitClearanceSubStatus)"></p></td>
															  	<td style="width:80px"><p class="form-control-static" ng-bind="item.ClearingOfficer.Title"></p></td>											  							  			
															</tr>							
														</tbody>											
									               </table>
									               <p class="form-control-static" style="text-align:center;"><b>
														*** Nothing follows ***</b></p>

									           </div>
											     
												
											</div> <!--end of CLD Page -->
											
										</div> <!--end of tab content -->
		    						</div> <!-- end of panel body -->
		   						</div>	<!--end of collapse1-->				 
						</div>  <!--end of panel default-->

						
						<div class="panel panel-default" ng-show="print">
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
												<tr ng-repeat="item in Attachments">
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

						
						<div id="divTH" class="panel panel-default" ng-show="print">
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
												<th style="vertical-align:top">
												Status</th>
												<th style="vertical-align:top">
												Routing Status</th>
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
						
			     </div>	<!-- accordion-->
			   </div>  		     
				
				
					
              
            </div><!--xs 12 -->
        </div> <!--class row -->
    </div>  <!--Master Form -->
   
    <div class="col-xs-12"> <!--Footer Form -->
		
       
             <div class="form-group btn-control-margin" >
                <div class="col-xs col-xs-offset-3  text-right">
				    
					<button id="btnPrint" type="button" ng-click="printPreview()" class="btn btn-primary" ng-disabled="disablectrl" ng-show="toprint" >
					Print</button>                    
                    <button id="btnCancel" type="button" ng-click="cancelclick()" class="btn btn-default" ng-disabled="disablectrl">
					Close</button>  
					 
					<!--<button id="btnCancel" type="button" ng-click="cancelPrint()" class="btn btn-default" ng-disabled="disablectrl" ng-show="toprint" >
					Cancel</button>-->
				    
				   <!-- <button id="btnSave" name = "btnSave" type="button" ng-click="c(form1)" class="btn btn-primary" >
					Save</button> -->
				</div>
            </div>

        
        
    </div> <!--Footer Form -->  
    
	   
	  
	
  </ng-form>  <!--  <ng-form>  -->  	
 </div>	 <!-- div controller --> 
       
    

</asp:Content>


