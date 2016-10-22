
var elementContainer = $("#generated-element-container")

$("#make-red-element").click(function() {  
  console.log("here")
  var newElement = makeNewElement({color: "red"})
  
  elementContainer.append(newElement)
})
  
function makeNewElement(css){
  var newElement = $("<div>")
  newElement.css(css)
  
  return newElement
}