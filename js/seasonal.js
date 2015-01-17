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

    var cc1 = "CPNI VERIFIED: " + cpniVerified;
    var cc2 = "CALLER'S FULL NAME: " + callerName;
    var cc3 = "ADD/REM SEASONAL: " + addRemSeasonal;
    var cc4 = "QUALIFIED FOR SEASONAL?: " + seasonalQualified;
    var cc5 = "SEASONAL DURATION: " + seasonalDuration;
    var cc6 = "SEASONAL START DATE: " + seasonalStart;
    var cc7 = "SEASONAL END DATE: " + seasonalEnd;
    var cc8 = "REGULAR MONTHLY RATE: " + regularRate;
    var cc9 = "SEASONAL MONTHLY RATE: " + monthlyRate;
    var cc10 = "NEXT QUALIFIED SEASONAL HOLD: " + nextHold;
    var cc11 = "FORWARDING ADDRESS: " + forwardingAddress;
    var cc12 = "REASON FOR SEASONAL: " + reasonForHold;

    $("#results").empty().html(cc1 +", "+ cc2 +", "+ cc3 +", "+ cc4 +", "+ cc5 +", "+
    cc6 +", "+ cc7 +", "+ cc8 +", "+ cc9 +", "+ cc10 +", "+ cc11 +", "+ cc12);
  });

});