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
            onRegister: function(){
                // alert("Tussu");
                var empId = this.getView().byId("idIpEmpId").getValue();
                var empName = this.getView().byId("idIpEmpName").getValue();
                var empDesig = this.getView().byId("idIpEmpDesig").getValue();
                var empSkill = this.getView().byId("idIpEmpSkill").getValue();
                var empEmail = this.getView().byId("idIpEmpEmail").getValue();
                var empPhone = this.getView().byId("idIpEmpPhone").getValue();
                // console.log(empId);
                // this.getOwnerComponent().getModel().setProperty("/empid",empId);

                // Validation for Employee Id

                if(empId === ""){
                    this.getView().byId("idIpEmpId").setValueState("Error");
                    this.getView().byId("idIpEmpId").setValueStateText("Employee ID is mandatory please fill it");
                }
                else{
                    this.getView().byId("idIpEmpId").setValueState("None");
                    var empIdRegExp = /^[0-9]+$/;
                    if(!empId.match(empIdRegExp)|| empId.length !== 8){
                            this.getView().byId("idIpEmpId").setValueState("Error");
                            this.getView().byId("idIpEmpId").setValueStateText("Employee ID should be only digits of length 8");
                    }
                }
                // Validation for Employee Name

                if(empName === ""){
                    this.getView().byId("idIpEmpName").setValueState("Error");
                    this.getView().byId("idIpEmpName").setValueStateText("Employee Name is mandatory please fill it");
                }
                else{
                    this.getView().byId("idIpEmpName").setValueState("None");
                    var empNameRegExp = /^[a-zA-Z ]+$/;
                    if(!empName.match(empNameRegExp)){
                            this.getView().byId("idIpEmpName").setValueState("Error");
                            this.getView().byId("idIpEmpName").setValueStateText("Employee Name should be only be alphabets of length 20");
                    }
                }
                // Validation for Employee Designation

                if(empDesig === ""){
                    this.getView().byId("idIpEmpDesig").setValueState("Error");
                    this.getView().byId("idIpEmpDesig").setValueStateText("Employee Designation is mandatory please fill it");
                }
                else{
                    this.getView().byId("idIpEmpDesig").setValueState("None");
                    var empDesigRegExp = /^[a-zA-Z ]+$/;
                    if(!empDesig.match(empDesigRegExp)){
                            this.getView().byId("idIpEmpDesig").setValueState("Error");
                            this.getView().byId("idIpEmpDesig").setValueStateText("Employee Designation should be only be alphabets");
                    }
                }
                // Validation for Employee Skills

                if(empSkill === ""){
                    this.getView().byId("idIpEmpSkill").setValueState("Error");
                    this.getView().byId("idIpEmpSkill").setValueStateText("Employee Skill is mandatory please fill it");
                }
                else{
                    this.getView().byId("idIpEmpSkill").setValueState("None");
                    var empSkillRegExp = /^[a-zA-Z0-9 ]+$/;
                    if(!empSkill.match(empSkillRegExp)){
                            this.getView().byId("idIpEmpSkill").setValueState("Error");
                            this.getView().byId("idIpEmpSkill").setValueStateText("Employee Skill should be only be alphabets");
                    }
                }
                // Validation for Employee Email

                if(empEmail === ""){
                    this.getView().byId("idIpEmpEmail").setValueState("Error");
                    this.getView().byId("idIpEmpEmail").setValueStateText("Employee Email is mandatory please fill it");
                }
                else{
                    this.getView().byId("idIpEmpEmail").setValueState("None");
                    var empEmailRegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if(!empEmail.match(empEmailRegExp)){
                            this.getView().byId("idIpEmpEmail").setValueState("Error");
                            this.getView().byId("idIpEmpEmail").setValueStateText("Employee Email should follow email format");
                    }
                }
                // Validation for Employee Phone

                if(empPhone === ""){
                    this.getView().byId("idIpEmpPhone").setValueState("Error");
                    this.getView().byId("idIpEmpPhone").setValueStateText("Employee Phone number is mandatory please fill it");
                }
                else{
                    this.getView().byId("idIpEmpPhone").setValueState("None");
                    var empPhoneRegExp = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
                    if(!empPhone.match(empPhoneRegExp)){
                            this.getView().byId("idIpEmpPhone").setValueState("Error");
                            this.getView().byId("idIpEmpPhone").setValueStateText("Employee Phone number should be of indian format");
                    }
                }


            }
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
