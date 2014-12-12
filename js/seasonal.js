// $$$$ - SEASONAL MACRO - $$$$
// * CPNI : Y/N
// * CALLER'S FULL NAME : JOHN SMITH
// * ADD/REM SEASONAL : ADD/REM
// * QUALIFIED FOR SEASONAL? : Y/N
// * SEASONAL DURATION : 6MO
// * SEASONAL START DATE: 11/11/11
// * SEASONAL END DATE : 11/11/11
// * REGULAR MONTHLY RATE : $10
// * SEASONAL MONTHLY RATE : $45
// * NEXT QUALIFIED SEASONAL HOLD: 11/11/11
// * FORWARDING ADDRESS: Y/N
// * REASON FOR SEASONAL HOLD/REM: 
// * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$().ready(function () {
  $("#submit-btn").click(function (e) {
    e.preventDefault();
    $("#results").show();

    var cpniVerified = $("#cpniVerified").val();
    var callerName = $("#callerName").val().toUpperCase();
    var addRemSeasonal = $("#addRemSeasonal").val();
    var seasonalQualified = $("#seasonalQualified").val();
    var seasonalDuration = $("#seasonalDuration").val();
    var seasonalStart = $("#seasonalStart").val();
    var seasonalEnd = $("#seasonalEnd").val();
    var regularRate = $("#regularRate").val();
    var monthlyRate = $("#monthlyRate").val();
    var nextHold = $("#nextHold").val();
    var forwardingAddress = $("#forwardingAddress").val();
    var reasonForHold = $("#reasonForHold").val().toUpperCase();

    var cc1 = "* -- $$$$ - SEASONAL MACRO - $$$$ --\n";
    var cc2 = "* CPNI VERIFIED: " + cpniVerified + "\n";
    var cc3 = "* CALLER'S FULL NAME: " + callerName + "\n";
    var cc4 = "* ADD/REM SEASONAL: " + addRemSeasonal + "\n";
    var cc5 = "* QUALIFIED FOR SEASONAL?: " + seasonalQualified + "\n";
    var cc6 = "* SEASONAL DURATION: " + seasonalDuration + "\n";
    var cc7 = "* SEASONAL START DATE: " + seasonalStart + "\n";
    var cc8 = "* SEASONAL END DATE: " + seasonalEnd + "\n";
    var cc9 = "* REGULAR MONTHLY RATE: " + regularRate + "\n";
    var cc10 = "* SEASONAL MONTHLY RATE: " + monthlyRate + "\n";
    var cc11 = "* NEXT QUALIFIED SEASONAL HOLD: " + nextHold + "\n";
    var cc12 = "* FORWARDING ADDRESS: " + forwardingAddress + "\n";
    var cc13 = "* REASON FOR SEASONAL: " + reasonForHold + "\n";
    var cc14 = "* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";

    $("#results").empty().text(cc1 + cc2 + cc3 + cc4 + cc5 + cc6 +
      cc7 + cc8 + cc9 + cc10 + cc11 + cc12 + cc13 + cc14);
  });

});