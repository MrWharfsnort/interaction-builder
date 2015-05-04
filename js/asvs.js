$(function () {
  $("#submit-btn").click(function (e) {
    e.preventDefault();
    $("#results").show();

    var cpniVerified = $("#cpniVerified").val();
    var callerName = $("#callerName").val().toUpperCase();
    var aeaPlan = $("#aeaPlan").val();
    var csEducate = $("#csEducate").val();
    var salesQuestion = $("#salesQuestion").val();
    var mentionPhone = $("#mentionPhone").val();
    var summarizeDate = $("#summarizeDate").val();
    var dispositionCall = $("#dispositionCall").val();
    var askforEmail = $("#askforEmail").val();

    var cc1 = "CPNI VERIFIED: " + cpniVerified;
    var cc2 = "CALLER'S FULL NAME: " + callerName;
    var cc3 = "AEA/REASSURANCE: " + aeaPlan;
    var cc4 = "CS AND EDUCATE: " + csEducate;
    var cc5 = "SALES QUESTION: " + salesQuestion;
    var cc6 = "MENTION PHONE: " + mentionPhone;
    var cc7 = "SUMMARIZE/DUE DATE & AMT: " + summarizeDate;
    var cc8 = "DISPOSITION CALL: " + dispositionCall;
    var cc9 = "ASK FOR EMAIL ADDRESS: " + askforEmail;

    $("#results").empty().html(cc1 +", "+ cc2 +", "+ cc3 +", "+ cc4 +", "+ cc5 +", "+
    cc6 +", "+ cc7 +", "+ cc8 +", "+ cc9);
  });

});