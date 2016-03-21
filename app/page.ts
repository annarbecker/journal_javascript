module Page {
  export var refreshJournal = function():void {
    $("#journalEntries").empty();
    var counter: number = 0;
    for(var blog of journal) {
      $("#journalEntries").prepend("<div class='panel panel-info'><div class='panel-heading'>" +
                        "<h3 class='panel-title'>" + blog.title +
                        "</h3></div><div class='panel-body'>" + blog.body +
                        "<br>Words: " + blog.getWordCount() + "<br>Date: " +
                         moment(blog.date).fromNow() + "</div><div class='panel-footer panel-info'><button class='btn btn-default' id='down" + counter + "'>&CircleTimes; " + blog.voting.downVote + "</button><button class='btn btn-default' id='up" + counter + "'>&star; " + blog.voting.upVote + "</button></div></div>");
      $("#down" + counter).on("click", function(e) {
        var thisID: string = e.target.getAttribute('id');
        var thisEntry: number = parseInt(thisID.slice(4));
        //alert(thisEntry);
        journal[thisEntry].voteDown();
        Page.refreshJournal();
      });
      $("#up" + counter).on("click", function(e) {
        var thisID: string = e.target.getAttribute('id');
        var thisEntry: number = parseInt(thisID.slice(2));
        //alert(thisEntry);
        journal[thisEntry].voteUp();
        Page.refreshJournal();
      });
      counter++;
    }
  }

}
