function Question(question,answersOR,answersAND){
    this.question = question;
    this.answersOR = answersOR;
    this.answersAND = answersAND;
}
var questions = [];
questions.push(new Question("какого вида ваша животинка",["собака","кошка"],["1","2","3"]));
questions.push(new Question("какого пола ваша животинка",["м","ж"],[]));
questions.push(new Question("какого возраста ваша животинка",[],[]));
questions.push(new Question("какой породы ваша животинка",[],[]));

for (let i = 0; i < questions.length; i++) {
    const element = questions[i];
    var table = document.getElementById("table");
    
    // var row = table.insertRow(i+1);
    var row = document.createElement("tr");
    table.appendChild(row);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = element.question;

    var shortAnswers = element.answersOR;

    var form = document.createElement("form");
    cell2.appendChild(form);
    for (let j = 0; j < element.answersOR.length; j++) {
        const element1 = element.answersOR[j];
        
        var box = document.createElement("input");
        box.type="radio";
        box.value = element1;
        box.name=i;
        //TODO box.onchange();
        form.appendChild(box)
        form.appendChild(document.createTextNode(element1)); 
        form.appendChild(document.createElement("br"));   
    }


    for (let i = 0; i < element.answersAND.length; i++) {
        const element1 = element.answersAND[i];
        var div = document.createElement("div");
        cell3.appendChild(div);
        var box = document.createElement("input");
        box.type="checkbox";
        div.appendChild(box);
        div.appendChild(document.createTextNode(element1));    
    }



   










    var y = document.createElement("textarea");
    y.row = 30;
    y.cols = 50;
    y.placeholder = "your text";
    cell4.appendChild(y);
    
}


document.getElementById("demo2").innerHTML = questions[0].answersOR[1];









// function Pet(){};
// Pet.prototype.name = "name unknown";
// Pet.prototype.species = "species unknown";
// Pet.prototype.age = "age unknown";
// Pet.prototype.gender = "gender unknown";
// var pet = new Pet();
// var questions = getQuestions();
// for (let i = 1; i < questions.length; i++) {
//     const element = questions[i];
//     var table = document.getElementById("table");
//     var row = table.insertRow(i);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     cell1.innerHTML = element;
    

//     var shortAnswers = ["becouse1", "becouse2", "becouse3", "becouse4"];
//     var x = document.createElement("select");
//     for (let index = 0; index < shortAnswers.length; index++) {
//         const element = shortAnswers[index];
//         var option = document.createElement("option");
//         // var textNode = document.createTextNode(element.toString);
//         // node.appendChild(textNode);
//         option.text=element;
//         // node.nodeValue=textNode;
//         x.add(option);
//     }
//     cell2.appendChild(x);
//     var y = document.createElement("textarea");
//     y.row = 30;
//     y.cols = 50;
//     y.placeholder = "your text";
//     cell3.appendChild(y);
//     document.getElementById("demo").innerHTML = getQuestions();
// }



// petNames[0].innerHTML = "qweqwrqwe";


// function readSingleFile(e) {
//     var file = e.target.files[0];
//     if (!file) {
//       return;
//     }
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       var contents = e.target.result;
//       // Display file content
//       displayContents(contents);
//     };
//     reader.readAsText(file);
//   }
   
//   function displayContents(contents) {
//     var element = document.getElementById('file-content');
//     element.innerHTML = contents;
//   }
