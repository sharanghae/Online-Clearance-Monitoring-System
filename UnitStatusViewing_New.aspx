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
	<!--<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> -->
	<script type="text/javascript" src="../siteassets/service/new/angularApp.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/http.base.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/common.service.js"></script>	
	<script type="text/javascript" src="../siteassets/service/list.ops.service.js"></script>
	<script type="text/javascript" src="../siteassets/service/new/file.service.js"></script>
	<script type="text/javascript" src="../siteassets/scripts/UnitStatusViewing_New.js"></script> 
	
	
	
	
	
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
                    <span >Unit Status Viewing Maintenance</span>
                </h1>
            </div>
            
            
            <div class="col-xs-12" >
                <div class="form-horizontal">
                    
                                       
                    <div class="panel-group" id="accordion">
                    
                    
	                    <div class="panel panel-default">
						    <div id="collapse1" class="panel-collapse collapse in">
							<div class="panel-body">
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Clearance 
								Unit</span>
									<div class="col-xs-10"> 
										<select id="cboClearanceUnit" ng-model="UnitStatusViewing.ClearanceUnit" style="width: 100%;"  class="form-control " ng-options="item.Unit as item.Unit for item in UnitLookup">                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="ClearanceUnitErrlbl" ng-bind="UnitStatusViewing.ClearanceUnitErr"  class="lblErr text-danger"></p>
									</div>
							</div>
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Related 
								Unit</span>
									<div class="col-xs-10"> 
										<select id="cboRelatedUnit" ng-model="UnitStatusViewing.RelatedUnit" style="width: 100%;"  class="form-control " ng-options="item.Unit as item.Unit for item in UnitLookup">                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="RelatedUnitErrlbl" ng-bind="UnitStatusViewing.RelatedUnitErr"  class="lblErr text-danger"></p>
									</div>
							</div>
								                    
							<div class="form-group">                        
								<span class="control-label col-xs-2">
								Notification</span>
									<div class="col-xs-10"> 
										<div class="checkbox">
											<label>
											<input class="form-check-input" type="checkbox" ng-disabled="disableCbox" ng-model="UnitStatusViewing.Notification"/>    
											</label>
										</div>
									</div>	
							</div>
   
							</div>
						  </div>
						 </div>	
						  
	            <div class="panel panel-default" ng-show="UnitStatusViewing.Notification">
				    <div class="panel-heading">
				      <h4 class="panel-title">
				        <a data-toggle="collapse" data-parent="#accordion" href="">
				        Recipients</a>
				      </h4>
				    </div>
				    <div id="collapse3" class="panel-collapse collapse in">
				      <div class="panel-body"> 	
				      			
					       <div class="form-group">                        
								<span class="control-label col-xs-2">Send To</span>
									<div class="col-xs-10"> 
										<select id="cboSendTo"  style="width: 100%;" class="form-control">                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="SendToErrlbl" ng-bind="UnitStatusViewing.SendToErr"  class="lblErr text-danger"></p>
									</div>		
							</div>
							
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Send Copy 
								To</span>
									<div class="col-xs-10"> 
										<select id="cboSendCopyTo"  style="width: 100%;" class="form-control">                                                                                         
										</select>  
									</div>	
								<span class="col-xs-2"></span>
									<div class="col-xs-10">                      
										<p id="CopyToErrlbl" ng-bind="UnitStatusViewing.CopyToErr"  class="lblErr text-danger"></p>
									</div>	
							</div>

              
  					  </div> <!-- end of panel body -->
   					</div>	<!--end of collapse3-->				 
				</div>  <!--end of panel default-->
    
    			<div class="panel panel-default" ng-show="UnitStatusViewing.Notification">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="">
						        Details
						    </a>
						</h4>
					</div>
					<div id="collapse1" class="panel-collapse collapse in">
						<div class="panel-body">
							
							<div class="form-group">                        
								<span class="control-label col-xs-2">Subject</span>
									<div class="col-xs-10"> 
										<input id="txtSubject" type="text"  ng-model ="UnitStatusViewing.Subject" class="form-control " />   
									</div>	
										<span class="col-xs-2"></span>
											<div class="col-xs-10">                      
										   		<p id="SubjectErrlbl" ng-bind="UnitStatusViewing.SubjectErr"  class="lblErr text-danger" > </p>
										 	</div>
							</div>
									
							<div class="form-group">                        
								<span class="control-label col-xs-2">Body</span>
							    	<div class="col-xs-10"> 						                            
							        	<textarea id="txtBody" rows="3" class="form-control" ng-model="UnitStatusViewing.Body"></textarea>	
							        </div>
							        <span class="col-xs-2"></span>
										<div class="col-xs-10">                      
									   		<p style="color: red; font-style: italic"> 
											Note: [EmployeeName] has been 
											cleared from [Div/Unit] </p>
									 	</div>
							        <span class="col-xs-2"></span>
										<div class="col-xs-10">                      
									   		<p id="BodyErrlbl" ng-bind="UnitStatusViewing.BodyErr"  class="lblErr text-danger"></p>
									 	</div>
							</div>

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