sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(Controller,MessageToast) {
    'use strict';
    
    return Controller.extend("ui5.walkthrough.App",{

        onInit : function(){
            //set the data model on the view
            var oData = {
                recipient : {
                    name : "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            //set i18n model on View
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n");
        },

        onShowHello : function() {
            //read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel.getProperty("/recipient/name");
            var sMsg = oBundle.getText("HelloMsg", [sRecipient]);


            //show a native or vanilla JS alert

            MessageToast.show(sMsg);
        }
    });
});