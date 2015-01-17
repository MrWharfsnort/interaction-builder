$().ready(function () {
  $("#submit-btn").click(function (e) {
    e.preventDefault();
    $("#results").show();

    var cpniVerified = $("#cpniVerified").val();
    var custName = $("#custName").val().toUpperCase();
    var creditCheck = $("#creditCheck").val();
    var firstBill = $("#firstBill").val();
    var monthlyService = $("#monthlyService").val();
    var depositAmount = $("#depositAmount").val();
    var installAmount = $("#installAmount").val();
    var equipmentFees = $("#equipmentFees").val();
    var expirationDate = $("#expirationDate").val();
    var installType = $("#installType").val();
    var contactNumber = $("#contactNumber").val();
    var installDate = $("#installDate").val();

    var cc1 = "CPNI VERIFIED: " + cpniVerified;
    var cc2 = "CALLER'S NAME: " + custName;
    var cc3 = "PERMISSION TO RUN CREDIT CHECK: " + creditCheck;
    var cc4 = "1ST BILL W/ PRORATE (COD): " + firstBill;
    var cc5 = "MONTHLY SERVICE RATE: " + monthlyService;
    var cc6 = "DEPOSIT AMOUNT: " + depositAmount;
    var cc7 = "INSTALL AMOUNT: " + installAmount;
    var cc8 = "EQUIPMENT FEES: " + equipmentFees;
    var cc9 = "CAMPAIGN/PACKAGE EXP DATE: " + expirationDate;
    var cc10 = "INSTALLATION TYPE: " + installType;
    var cc11 = "CTM #: " + contactNumber;
    var cc12 = "INSTALL DATE & TIME: " + installDate;

    $("#results").empty().html(cc1 +", "+ cc2 +", "+ cc3 +", "+ cc4 +", "+ cc5 +", "+ cc6 +", "+
      cc7 +", "+ cc8 +", "+ cc9 +", "+ cc10 +", "+ cc11 +", "+ cc12);
  });

});
