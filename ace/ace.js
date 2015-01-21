var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

/* Returns the last line of the editor */
function getLastLine() {
    //Store cur line to go back to in memory
    var lineBeginning = editor.getSelectionRange().start.row;

    //Find the length of the editor in lines, go to the last line
    //var length = editor.session.getLength();

    //editor.gotoLine(length+1);

    //We are definitely now on the last line, get the contents of the line
    var curLine = editor.getSelectionRange().start.row;
    var codeOnLine = editor.session.getLine(curLine);

    //Go back to line started on (plus 1 accounts for enter)
    editor.gotoLine(lineBeginning+2);

    return codeOnLine;
}

function setHtml(html) {
    $("#html").html(html);
}

/* Code is an array */
function setEditor(codeArr) {
    //editor.session.insertLines(codeArr);

    for (var code in codeArr) {
        editor.insert(code + "\n");
    }
}

$(document).keypress(function(e) {
    if(e.which == 13) {
        //Enter key pressed
        var code = getLastLine();

        console.log(code);

    }
});

editor.getSession().selection.on('changeCursor', function(e) {
    //alert('hi');
});

function init() {
    var html = "<h1>Test</h1> <p>html</p>";

    setHtml(html);

    var codeArr = ["a = 5+3", "b = 5*4", "c = a*b"];

    setEditor(codeArr);
}

$(document).ready(init());
