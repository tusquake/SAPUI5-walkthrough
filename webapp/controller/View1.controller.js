sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.project2.controller.View1", {
            onInit: function () {
                var oModel=this.getOwnerComponent().getModel("oModel");
                oModel.setProperty("/data",{});
                oModel.setProperty("/firstName","Tushar");
                oModel.setProperty("/lastName","Seth");
                oModel.setProperty("/post","Software Engineer");
                console.log(oModel.getData());

            },
            onPressSuccess: function(){
                sap.m.MessageBox.success(this.getOwnerComponent().getModel("oModel").getProperty("/firstName"));
            },
            onPressError : function(){
                sap.m.MessageBox.error(this.getOwnerComponent().getModel("oModel").getProperty("/lastName"));
            },
            // onPress :function(){
            //     var name = this.getView().byId("idIpTxtname").getValue();
            //     alert("Login Succesful✔ "+name);
            // },
            // onSubmit: function(){
            //     var name = this.getView().byId("idIpName").getValue();
            //     var msg = "Hello To "+ name;
            //     this.getView().byId("idTxtMsg").setText(msg);

            //     //Email
            //     var email = this.getView().byId("idIpEmail").getValue();
            //     var mail = "Your email is : "+ email;
            //     this.getView().byId("idTxtmail").setText(mail);

            //     //second exercise
            //     var alignment = this.getView().byId("idIpAlign").getValue();
            //     this.getView().byId("idTxtMsg").setTextAlign(alignment);

            //     //disable input fields
            //     this.getView().byId("idIpName").setEnabled(false);
            //     // this.getView().byId("idIpAlign").setEnabled(false);
            // },
            // onHideShow: function(){
            //     var txtBtn = this.getView().byId("idBtnHideShow").getText();

            //     if(txtBtn === "Hide"){
            //     this.getView().byId("idTxtMsg").setVisible(false);
            //     this.getView().byId("idLbName").setVisible(false);
            //     this.getView().byId("idIpName").setVisible(false);
            //     this.getView().byId("idLbAlign").setVisible(false);
            //     this.getView().byId("idIpAlign").setVisible(false);

            //     this.getView().byId("idBtnHideShow").setText("Show");
            //     }
            //     else{
            //     this.getView().byId("idTxtMsg").setVisible(true);
            //     this.getView().byId("idLbName").setVisible(true);
            //     this.getView().byId("idIpName").setVisible(true);
            //     this.getView().byId("idLbAlign").setVisible(true);
            //     this.getView().byId("idIpAlign").setVisible(true);

            //     this.getView().byId("idBtnHideShow").setText("Hide");
            //     }
            // }
        });
    });
