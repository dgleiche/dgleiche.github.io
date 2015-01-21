var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/ruby");
editor.readOnly = true;

var input = ace.edit("input");
input.setTheme("ace/theme/chrome");
input.getSession().setMode("ace/mode/ruby");

input.setOptions({
    maxLines: 1
});


/* Returns the last line of the editor */
function getLastLine() {

    //We are definitely now on the last line, get the contents of the line
    var curLine = input.getSelectionRange().start.row;
    var codeOnLine = input.session.getLine(curLine);

    //Go back to line started on (plus 1 accounts for enter)
    input.selectAll();
    input.removeLines();

    return codeOnLine;
}

function setHtml(html) {
    $("#html").html(html);
}

/* Code is an array */
function setEditor(codeArr) {
    //editor.session.insertLines(codeArr);

    for (var code in codeArr) {
        editor.insert(codeArr[code] + "\n");
    }
}

//TODO:: Change this to an event only for input
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

    editor.selectAll();
    editor.removeLines();

    var html = "<h1>Test</h1> <p>html</p>";

    setHtml(html);

    var codeArr = ["a = 5+3", "b = 5*4", "c = a*b"];

    setEditor(codeArr);
}

$(document).ready(init());
