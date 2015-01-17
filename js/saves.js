$().ready(function () {

  $("#submit-btn").click(function (e) {
    e.preventDefault();
    $("#results").show();

    var cpniVerified = $("#cpniVerified").val();
    var callerName = $("#callerName").val().toUpperCase();
    var discoReason = $("#discoReason").val().toUpperCase();
    var customerSaved = $("#customerSaved").val();
    var curBalance = $("#curBalance").val();
    var nextRate = $("#nextRate").val();
    var fwdAddress = $("#fwdAddress").val();
    var cableMovers = $("#cableMovers").val();
    var custRepack = $("#custRepack").val();
    var discoDate = $("#discoDate").val();
    var saveMethod = $("#saveMethod").val();

    var cc1 = "CPNI: " + cpniVerified;
    var cc2 = "CALLER'S FULL NAME: " + callerName;
    var cc3 = "REASON FOR DISCO: " + discoReason;
    var cc4 = "WAS CUSTOMER SAVED?: " + customerSaved;
    var cc5 = "CURRENT MONTHLY BALANCE: " + curBalance;
    var cc6 = "NEXT MONTHLY RATE: " + nextRate;
    var cc7 = "FORWARDING ADDRESS: " + fwdAddress;
    var cc8 = "CABLE MOVERS: " + cableMovers;
    var cc9 = "DISCONECT DATE: " + discoDate;
    var cc10 = "SAVE METHOD: " + saveMethod;

    $("#results").empty().html(cc1 +", "+ cc2 +", "+ cc3 +", "+ cc4 +", "+
    cc5 +", "+ cc6 +", "+ cc7 +", "+ cc8 +", "+ cc9 +", "+ cc10);
  });

});