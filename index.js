var questions = ["question1", "question2", "question3"];
document.getElementById("question").innerHTML = questions[1];
var shortAnswers = ["becouse1", "becouse2", "becouse3", "becouse4"];
for (let index = 0; index < shortAnswers.length; index++) {
    const element = shortAnswers[index];
    var option = document.createElement("option");
    // var textNode = document.createTextNode(element.toString);
    // node.appendChild(textNode);
    option.text=element;
    // node.nodeValue=textNode;
    var x = document.getElementById("answerVariants");
    x.add(option);

}