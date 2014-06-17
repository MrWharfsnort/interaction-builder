$(function() {

  $("#submit-btn").click(function(e) {
    e.preventDefault();
    var cpniVal = $("#cpni").val();
    var custVal = $("#custName").val();
    var creditVal = $("#creditCheck").val();
    console.log(cpniVal);
    var cc1 = "======= $$$$ - SALES DEPT MACRO - $$$$ =======";
    var cc2 = "*CPNI VERIFIED: " + cpniVal;
    var cc3 = "*CALLER'S FULL NAME: " + custVal;
    var cc4 = "*PERMISSION TO RUN CREDIT CHECK: " + creditVal; 
    $("#results").empty().text(cc1 +"\n"+ cc2 +"\n" + cc3 + "\n" + cc4);
  });

  $("#reset-btn").click(function(e) {
    $("input").val('');
    $("#results").empty();
  });

});


// ====$$$$=== SALES DEPT MACRO ===$$$$====
// *CPNI - Y/N:
// *CALLER'S FULL NAME:
// *PERMISSION TO RUN CREDIT CHECK - Y/N:
// *1ST BILL W/PRORATE (COD):
// *MONTHLY SERVICE:
// *DEPOSIT AMOUNT:
// *INSTALL AMOUNT:
// *EQUIPMENT FEES:
// *CAMPAIGN/PACKAGE EXP DATE:
// *PRO INSTALL/EXPRESS CONNECT:
// *CTM #:
// *INSTALL DATE & TIME:
// ==============================================
