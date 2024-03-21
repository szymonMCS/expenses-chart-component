var sectionsAmount = document.querySelectorAll(".chart-section").length;

for(var i = 0; i < sectionsAmount; i++){
  document.querySelectorAll(".chart-section")[i].addEventListener("mouseover", function(){
    var theClass = this.className;
    var className = "";
    for (var j = 0; j < 3; j++){
      className += theClass[j];
    }
    animation(className);
  });
}


function updateDivHeight() {

  var sum = 0;

  for (var i = 1; i < 8; i++){
    var paragraph = document.getElementById(i + "value");
    var value = parseFloat(paragraph.innerText.replace("$", ""));
    sum += value;
  } 

  for (var i = 1; i < 8; i++){
    var paragraph = document.getElementById(i + "value");
    var div = document.getElementById(i + "day");
    var value = parseFloat(paragraph.innerText.replace("$", ""));
    var height = (value/sum) * 175 * 3;
    div.style.height = height + "px";
  }
}

updateDivHeight();





function animation(className){
  
  var selectedColumn = document.querySelector("." + className);

  console.log(selectedColumn);

  selectedColumn.addEventListener("mouseover", function() {

    var children = selectedColumn.children;
    console.log(children.length);
    children[0].classList.add("info-color");
    children[1].classList.add("mouseover");
    //selectedColumn.classList.add("chart-info");
  })

  selectedColumn.addEventListener("mouseout", function() {

    var children = selectedColumn.children;
    children[0].classList.remove("info-color");
    children[1].classList.remove("mouseover");   
  })
}