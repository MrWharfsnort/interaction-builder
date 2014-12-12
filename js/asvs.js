$().ready(function () {
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

    var cc1 = "* ====== ACCOUNT SERVICES MACRO ====== \n";
    var cc2 = "* CPNI: " + cpniVerified + "\n";
    var cc3 = "* CALLER'S FULL NAME: " + callerName + "\n";
    var cc4 = "* AEA/REASSURANCE: " + aeaPlan + "\n";
    var cc5 = "* CS AND EDUCATE: " + csEducate + "\n";
    var cc6 = "* SALES QUESTION: " + salesQuestion + "\n";
    var cc7 = "* MENTION PHONE: " + mentionPhone + "\n";
    var cc8 = "* SUMMARIZE/DUE DATE & AMT: " + summarizeDate + "\n";
    var cc9 = "* DISPOSITION CALL: " + dispositionCall + "\n";
    var cc10 = "* ASK FOR EMAIL ADDRESS: " + askforEmail + "\n";
    var cc11 = "* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";

    $("#results").empty().text(cc1 + cc2 + cc3 + cc4 + cc5 + cc6 +
      cc7 + cc8 + cc9 + cc10 + cc11);
  });

});