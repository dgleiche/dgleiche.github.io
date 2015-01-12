var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

/* Returns the last line of the editor */
function getLastLine() {
    //Find the length of the editor in lines, go to the last line
    var length = editor.session.getLength();

    editor.gotoLine(length+1);

    //We are definitely now on the last line, get the contents of the line
    var curLine = editor.getSelectionRange().start.row;
    var codeOnLine = editor.session.getLine(curLine);

    return codeOnLine;
}

function setHtml(html) {
    $("#html").html(html);
}

$(document).keypress(function(e) {
    if(e.which == 13) {
        //Enter key pressed
        var code = getLastLine();

        console.log(code);

        //result = jorddanFuns(code)

        //code, resul
    }
});

$(document).ready(function() {
    var html = "<h1>Test</h1> <p>html</p>";

    setHtml(html);
});
