$().ready(function () {
  $("#submit-btn").click(function (e) {
    e.preventDefault();
    $("#results").show();

    var callTime = $("#callTime").val();
    var cpniVerified = $("#cpniVerified").val();
    var callerName = $("#callerName").val().toUpperCase();
    var pinVerified = $("#pinVerified").val();
    var payMethod = $("#payMethod").val();
    var pastDue = $("#pastDue").val();
    var currentDue = $("#currentDue").val();
    var acctStatus = $("#acctStatus").val();
    var billDate = $("#billDate").val();
    var payOverPhone = $("#payOverPhone").val();
    var payReceived = $("#payReceived").val();
    var ezPay = $("#ezPay").val();
    var collScreen = $("#collScreen").val();
    var offerAssist = $("#offerAssist").val();

    var cc1 = "===$$$== COLLECTIONS DEPT MACRO ==$$$===\n";
    var cc2 = "* TIME OF CALL: " + callTime + "\n";
    var cc3 = "* CPNI VERIFIED(?): " + cpniVerified + "\n";
    var cc4 = "* CALLERS FULL NAME: " + callerName + "\n";
    var cc5 = "* PIN VERIFIED(?): " + pinVerified + "\n";
    var cc6 = "* PPIO/MAIL/PHONE: " + payMethod + "\n";
    var cc7 = "* ARRG/PAST DUE: " + pastDue + "\n";
    var cc8 = "* ARRG/CURRENT: " + currentDue + "\n";
    var cc9 = "* STATUS: " + acctStatus + "\n";
    var cc10 = "* BILL DUE DATE: " + billDate + "\n";
    var cc11 = "* OFFER PYMT OVER PHONE: " + payOverPhone + "\n";
    var cc12 = "* PYMT RECEIVED: " + payReceived + "\n";
    var cc13 = "* OFFER EZ-PAY/AUTO DR: " + ezPay + "\n";
    var cc14 = "* NOTE COLL SCREEN: " + collScreen + "\n";
    var cc15 = "* OFFER FURTHER ASSISTANCE: " + offerAssist + "\n";
    var cc16 = "============== END MACRO ===============" + "\n";

    $("#results").empty().text(cc1 + cc2 + cc3 + cc4 + cc5 + cc6 +
      cc7 + cc8 + cc9 + cc10 + cc11 + cc12 + cc13 + cc14 + cc15 + cc16);
  });

});