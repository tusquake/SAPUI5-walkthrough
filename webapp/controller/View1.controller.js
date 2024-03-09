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

            },
            onPress: function(){
                alert("Hello Tussu")
            },
            onSubmit: function(){
                var name = this.getView().byId("idIpName").getValue();
                var msg = "Hello To "+ name;
                this.getView().byId("idTxtMsg").setText(msg);

                //Email
                var email = this.getView().byId("idIpEmail").getValue();
                var mail = "Your email is : "+ email;
                this.getView().byId("idTxtmail").setText(mail);

                //second exercise
                var alignment = this.getView().byId("idIpAlign").getValue();
                this.getView().byId("idTxtMsg").setTextAlign(alignment);

                //disable input fields
                this.getView().byId("idIpName").setEnabled(false);
                // this.getView().byId("idIpAlign").setEnabled(false);
            }
        });
    });
