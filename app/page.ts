module Page {
  export var refreshJournal = function():void {
    $("#journalEntries").empty();
    for(var blog of journal) {
      $("#journalEntries").prepend("<div class='panel panel-info'><div class='panel-heading'>" +
                        "<h3 class='panel-title'>" + blog.title +
                        "</h3></div><div class='panel-body'>" + blog.body +
                        "<br>Words: " + blog.getWordCount() + "<br>Date: " +
                         moment(blog.date).fromNow() + "</div></div>");
    }
  }

}
