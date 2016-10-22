var elementContainer = $("#generated-element-container")

$("#make-red-element").click(function() {  
  var newElement = $("<div>Hi!</div>")
  newElement.css({background: "red"})
  
  elementContainer.append(newElement)
})