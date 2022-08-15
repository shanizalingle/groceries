window.addEventListener("load", function(event){
  event.preventDefault();
  const groceryForm = document.getElementById("grocery-form");
  groceryForm.addEventListener("submit", handleSubmission);

  const sentenceForm = document.getElementById("sentence-form");
  sentenceForm.addEventListener("submit", handleSentenceSubmission);

});

function handleSubmission(event){
  event.preventDefault();
  
  //get the items (not blank) from inputs and put them into an array
  const userSelections = document.querySelectorAll("input[name=grocery-item]:checked");
  const userSelectionsArray = Array.from(userSelections);
  
  const userSelectionsValues = [];
  userSelectionsArray.forEach(function(element){
    userSelectionsValues.push(element.value);
  });

  userSelectionsArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });

  //sort array alphabetically
  const sortedArray = userSelectionsValues.sort();

  console.log(sortedArray);
  sortedArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element);
    document.body.append(paragraph);
  });

  const groceryDiv = document.getElementById("grocery-form");
  groceryDiv.className = "hidden";  
  //all uppercase the array (into a new one)
  //put the new array into a UL
}