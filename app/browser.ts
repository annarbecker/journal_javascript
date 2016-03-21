/// <reference path="journal-classes-interfaces.ts" />
/// <reference path="page.ts" />

var journal = [];

$(document).ready(function(){
  $("#newEntry").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    if(body.length < 501 && title.length < 21) {
      var newEntry = new Journal.Entry(title, body);
      $("#title").val('');
      $("#body").val('');
      journal.push(newEntry);
      console.log(journal);
      Page.refreshJournal();
    } else {
      alert("Please be less verbose!");
    }
  });
});
