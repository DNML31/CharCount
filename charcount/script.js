// Go! button event handler
$("#goBtn").on("click", () => {
  $("#tableBody").empty();
  let textObj = $("#textBox").val();
  textObj = charCount(textObj);

  createRows(textObj);
});

// Clear button event handler
$("#clearBtn").on("click", () => {
  $("#textBox").val("");
  $("#tableBody").empty();
});

function createRows(object) {
  
  let chars = [];
  let counts = [];

  chars = (Object.values(object));
  counts = (Object.keys(object));

  for (let i = 0; i < chars.length; i++) {
    let newTr = $("<tr></tr>");
    let newTdChar = $("<td></td>");
    let newTdCount = $("<td></td>");

    newTdChar.text(chars[i]);
    newTdCount.text(counts[i]);
    
    newTr.append(newTdCount);
    newTr.append(newTdChar);
    
    $("#tableBody").append(newTr);
  }
};


function charCount(string) {
  let stringArray = string.split("");
  let object = {};
  console.log(stringArray);

  for (let i = 0; i < stringArray.length; i++) {

    if (stringArray[i] == " ") {
      stringArray[i] = "[space]";
      object[stringArray[i]] = 1;
    }

    if (object[stringArray[i]]) {
      object[stringArray[i]] += 1; 
    } else {
      object[stringArray[i]] = 1;
    }
  }
  return object;
};



