sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.ui5.training.fragments.controller.Main", {
        onInit() {
        },

        onAddItem: function (){
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);
            },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
                var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
                var oMobileLabel = this.getView().byId("idLblPhone");
                var oMobileInput = this.getView().byId("idInputPhone");
                var oCardLabel = this.getView().byId("idLblCard");
                var oCardInput = this.getView().byId("idInputCard");
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var mopMsg = oTextBundle.getText("modeMsg");

                MessageToast.show(mopMsg + sSelectedKey);

                if (sSelectedKey === "GCASH"){
                    // show the mobile field
                    oMobileLabel.setVisible(true);
                    oMobileInput.setVisible(true);
                    oCardLabel.setVisible(false);
                    oCardInput.setVisible(false);
                } else if (sSelectedKey === "CC"){
                    oCardLabel.setVisible(true);
                    oCardInput.setVisible(true);
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);
                } else {
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);
                    oCardLabel.setVisible(false);
                    oCardInput.setVisible(false);
                }
        },

        onPressCheckout: function (){
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();
                var oInputLNameValue = this.getView().byId("idInptLName").getValue();

                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var bMsg = oTextBundle.getText("blankMsg");
                var coMsg = oTextBundle.getText("coMsg");

                // Check if first name is blank
                if (oInputFNameValue === ""){
                    sap.m.MessageToast.show(bMsg); 
                } else if (oInputLNameValue === ""){
                    sap.m.MessageToast.show(bMsg); 
                } else {
                  sap.m.MessageToast.show(coMsg);  
                }
            },
    });
});