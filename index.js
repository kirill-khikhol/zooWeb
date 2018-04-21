var questions = ["question1", "question2", "question3"];
for (let i = 0; i < questions.length; i++) {
    const element = questions[i];
    var table = document.getElementById("table");
    var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = element;
    

    var shortAnswers = ["becouse1", "becouse2", "becouse3", "becouse4"];
    var x = document.createElement("select");
    for (let index = 0; index < shortAnswers.length; index++) {
        const element = shortAnswers[index];
        var option = document.createElement("option");
        // var textNode = document.createTextNode(element.toString);
        // node.appendChild(textNode);
        option.text=element;
        // node.nodeValue=textNode;
        x.add(option);
    }
    cell2.appendChild(x);
    var y = document.createElement("textarea");
    y.row = 30;
    y.cols = 100;
    y.placeholder = "your text";
    cell3.appendChild(y);
}

function getQuestions(){

}