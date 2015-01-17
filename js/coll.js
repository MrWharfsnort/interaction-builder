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

    var cc1 = "TIME OF CALL: " + callTime;
    var cc2 = "CPNI VERIFIED(?): " + cpniVerified;
    var cc3 = "CALLERS FULL NAME: " + callerName;
    var cc4 = "PIN VERIFIED(?): " + pinVerified;
    var cc5 = "PPIO/MAIL/PHONE: " + payMethod;
    var cc6 = "ARRG/PAST DUE: " + pastDue;
    var cc7 = "ARRG/CURRENT: " + currentDue;
    var cc8 = "STATUS: " + acctStatus;
    var cc9 = "BILL DUE DATE: " + billDate;
    var cc10 = "OFFER PYMT OVER PHONE: " + payOverPhone;
    var cc11 = "PYMT RECEIVED: " + payReceived;
    var cc12 = "OFFER EZ-PAY/AUTO DR: " + ezPay;
    var cc13 = "NOTE COLL SCREEN: " + collScreen;
    var cc14 = "OFFER FURTHER ASSISTANCE: " + offerAssist;

    $("#results").empty().html(cc1 +", "+ cc2 +", "+ cc3 +", "+ cc4 +", "+ cc5 +", "+
      cc6 +", "+ cc7 +", "+ cc8 +", "+ cc9 +", "+ cc10 +", "+ cc11 +", "+ cc12 +", "+
      cc13 +"<br />"+ cc14);
  });
});