var elementContainer = $("#generated-element-container")

$("#make-red-element").click(function() {  
  var newElement = $("<div>Hi!</div>")
  newElement.css({background: "red"})
  
  elementContainer.append(newElement)
})

$("#make-blue-element").click(function() {  
  var newElement = $("<div>Hi!</div>")
  newElement.css({background: "red"})

  elementContainer.append(newElement)
})

$("#make-green-element").click(function() {  
  var newElement = $("<div>I love grass and trees!</div>")
  newElement.css({background: "blue"})      elementContainer.append(newElement)
})