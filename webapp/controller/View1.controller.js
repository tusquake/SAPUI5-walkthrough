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
                var msg = "Welcome To "+ name;
                this.getView().byId("idTxtMsg").setText(msg);

                //second exercise
                var alignment = this.getView().byId("idIpAlign").getValue();
                this.getView().byId("idTxtMsg").setTextAlign(alignment);
            }
        });
    });
