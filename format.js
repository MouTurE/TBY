var testTxt = "";
const colorDict = {"beyaz": "rgba(255, 255, 255, 0.6)", "mavi": "rgb(0,0,255)", "kırmızı": "rgba(255,0,0,0.6)"}
var currentColor = "";
var initialPos = 1;
var lineRate = 0;
var codeRate = 0;


function undo(){
    if (codeRate > 1) {
        initialPos -= lineRate + codeRate;
        console.log(initialPos);
        codeRate -= 2;
        lineRate = 0;
        formatText();
    }
        
    
   
}


function formatText() {
    
    const lines = testTxt.split("\n"); // Lines of text

    if (initialPos == lines.length) {
        return null;
    }

    //console.log(testTxt);
    var prompt = "" // The final result

    const indexPos = initialPos; // Starting position
    codeRate += 1;

  
    //console.log(lines[indexPos]);

    colorWord = lines[indexPos - 1].slice(6,lines[indexPos - 1].length - 2); // Gets the key word from line
    //console.log(colorWord);
    currentColor = colorDict[colorWord]; // Gets the rgb value of the color from dictionary
    

    // Iterates through text 
    for (let index = indexPos; index < lines.length; index++) 
    {
        
        const currentLine = lines[index].trim(); // Line selected to be iterated
        var colorWord = "" // Key string for color dictionary  

        //console.log(currentLine);
        
        
        // If the selected line is a color code, stop iterating
        if (currentLine.slice(0,6) + currentLine[currentLine.length - 1] == "[renk=]") {
            //console.log(currentLine);
            const paragraph = document.getElementById("storyText");
            paragraph.innerHTML = prompt;
            paragraph.style.color = currentColor;
            initialPos += 1;
            //console.log(paragraph); // TextContent of paragraph
            break;
        }else {
            prompt += currentLine + "<br>"; 
            lineRate += 1;
        }
        //console.log(currentLine);
        initialPos += 1; 
    }

}
