$().ready(function () {
  $("#results").hide();

  $(function () {
    $("#installDate").datetimepicker({
      pickTime: false
    });
    $("#expirationDate").datetimepicker({
      pickTime: false
    });
  });

  $(function () {
    $("#contactNumber").mask("(999) 999-9999", {placeholder: "(___) ___-____"});
  });
    // 0: Only Numbers.
    // 9: Only Numbers but optional.
    // #: Only Numbers but recusive.
    // A: Numbers and Letters.
    // S: Only A-Z and a-z characters.

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

    var cc1 = "====$$$$=== SALES DEPT MACRO ===$$$$====\n";
    var cc2 = "* CPNI VERIFIED: " + cpniVerified + "\n";
    var cc3 = "* CALLER'S NAME: " + custName + "\n";
    var cc4 = "* PERMISSION TO RUN CREDIT CHECK: " + creditCheck + "\n";
    var cc5 = "* 1ST BILL W/ PRORATE (COD): " + firstBill + "\n";
    var cc6 = "* MONTHLY SERVICE RATE: " + monthlyService + "\n";
    var cc7 = "* DEPOSIT AMOUNT: " + depositAmount + "\n";
    var cc8 = "* INSTALL AMOUNT: " + installAmount + "\n";
    var cc9 = "* EQUIPMENT FEES: " + equipmentFees + "\n";
    var cc10 = "* CAMPAIGN/PACKAGE EXP DATE: " + expirationDate + "\n";
    var cc11 = "* INSTALLATION TYPE: " + installType + "\n";
    var cc12 = "* CTM #: " + contactNumber + "\n";
    var cc13 = "* INSTALL DATE & TIME: " + installDate + "\n";
    var cc14 = "========================================";

    $("#results").empty().text(cc1 + cc2 + cc3 + cc4 + cc5 + cc6 +
      cc7 + cc8 + cc9 + cc10 + cc11 + cc12 + cc13 + cc14);
  });

  $("#reset-btn").click(function (e) {
    e.preventDefault();
    $("input").val('');
    $("#results").hide();
  });

});
