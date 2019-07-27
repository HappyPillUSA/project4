/* Project 3/3 PIXEL ART MAKER
 * Ana Grijalba*/


// Select color input - it will be within the scope or the MakeGridf().
// Select size input - same as above.

// Variables declarations
const pickSize = document.querySelector("#sizePicker");
const grid = document.querySelector("#pixelCanvas");

console.log("JQ library instaled on HTML '<head></head>'.");
console.log("File.js is one line before '</body>'.");

// When size is submitted by the user, call makeGrid()
document.querySelector('input[type="submit"]').addEventListener('click', onSubmit);
function onSubmit(event) {
    //console.log("Making Grid");
    //Prevent page from relaoding.
    event.preventDefault();
    makeGrid();
    //console.log("Making User Input Grid");

}

function makeGrid() {
    // reset table.
    $("#pixelCanvas").empty();
    //use current User input, whenever submit button is clicked.
    const height = $("#inputHeight").val();
    const width = $("#inputWidth").val();
  
    //console.log("Current grid size " + height + "h x", +width + "w");

    //Nestle 'For loop'to construct the empty canvas Jq & append method.
    // outher loop makes a row of cells.
    for (let n = 1; n <= height; ++n) {
        $("#pixelCanvas").append("<tr></tr>");
        // inner loop  adds a cell after every row
        for (let m = 1; m <= width; ++m) {
            // appending tds (colmns per each row).
            $("tr:last").append("<td></td>");
            //Function to color capturing Jq style bind to "click".
            $("td").click(function addColor() {
                let color = $("#colorPicker").val();
                //console.log("User 'click' one cell to color");
                let paintcell = color;
                // HTML element <td> that is binding to the AddColor() 
                // one "click" paints the cell, two clicks reset color cell.
                $(this).attr("bgcolor", paintcell);
                $("td").dblclick(function removeColor() {
                    $(this).attr("bgcolor", "#C0C0C0");

                });

            });

        }

    }

}









