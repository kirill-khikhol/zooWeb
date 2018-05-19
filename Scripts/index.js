// When the user scrolls the page, execute myFunction 
window.onscroll = myFunction1;

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction1() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function Question(question, answersOR, answersAND) {
    this.question = question;
    this.answersOR = answersOR;
    this.answersAND = answersAND;
    this.isAnswered = false;
}
function Answer(question, answersOR, answersAND, note) {
    this.question = question;
    this.answersOR = answersOR;
    this.answersAND = answersAND;
    this.note = note;
}
var questions = [];
questions.push(new Question("Какого вида ваш питомец?", ["собака", "кошка"], ["в квартире", "в вольере на улице", "у Вас дома", "была подобрана на улице"]));
questions.push(new Question("Порода собаки (если метис, укажите размеры)", [], []));
questions.push(new Question("Какого пола ваш питомец?", [], []));
questions.push(new Question("Какого возраста ваш питомец?", [], []));
questions.push(new Question("Вкаком возрасте ваш питомец попал к вам?", [], []));
questions.push(new Question("Какого возраста вы начали выходить гулять?", [], []));
questions.push(new Question("Где родился ваш питомец?", ["в квартире", "в вольере на улице", "у Вас дома", "была подобрана на улице"], []));
questions.push(new Question("Где сейчас проживает ваш питомец?", [], ["город", "загород", "дом", "квартира", "будка/вольер"]));
questions.push(new Question("Сколько раз в день гуляет на улице?", [1, 2, 3, ">3"], []));
questions.push(new Question("Какова длительность одной прогулки (в среднем)", [], []));
questions.push(new Question("Как часто гуляете на поводке?", ["всегда", "часто", "иногда", "никогда"], []));
questions.push(new Question("Как часто играет с собаками?", ["всегда", "часто", "иногда", "никогда"], []));
questions.push(new Question("Какие курсы дрессировки на собачьей площадке прошла?", [], []));
questions.push(new Question("Занималась ли с инструктором по дрессировке или хендлером индивидуально?", [], []));
questions.push(new Question("Другие занятия, связанные с работой собаки?", [], []));
questions.push(new Question("Какого возраста ваш питомец?", [], ["охота", "дрессировка", "выставки", "спорт"]));
questions.push(new Question("Болела ли Ваша собака? Если да, то чем?", ["Да", "Нет"], []));
questions.push(new Question("Какими врожденными или хроническими заболеваниями страдает сейчас?", [], []));
questions.push(new Question("Были ли у Вас собаки раньше? (если да, то расскажите о них – порода, сколько лет прожили, чем были примечательны)", ["Да", "Нет"], []));
questions.push(new Question("Считаете ли Вы собаку членом своей семьи?", ["Да", "Нет"], []));
questions.push(new Question("Отмечаете ли ее день рождения?", ["Да", "Нет"], []));
questions.push(new Question("Чем Вы кормите собаку?", [], ["сухим кормом", "консервы для собак", "натуральной пищей"]));
questions.push(new Question("Сколько человек в Вашей семье?", [1, 2, 3, 4, 5, 6, ">6"], []));
questions.push(new Question("Есть ли в доме другие животные (если да, то какие)", ["Да", "Нет"], []));
questions.push(new Question("Есть ли в семье дети младше 6 лет?", ["Да", "Нет"], []))
questions.push(new Question("Сколько человек в Вашей семье принимают участие в заботе о собаке?", [1, 2, 3, 4, 5, 6, ">6"], []))
questions.push(new Question("Сколько из них гуляет с собакой?", [1, 2, 3, 4, 5, 6, ">6"], []))
questions.push(new Question("Кого из членов семьи по Вашему мнению собака считает своим хозяином?", [], []))
questions.push(new Question("Какого возраста ваш питомец?", [], []))

for (let i = 0; i < questions.length; i++) {
    var but = document.createElement("button");
    document.getElementById("containerForButtons").appendChild(but);
    but.innerHTML = i + 1;
    but.onclick = showQquestionCardByButton;
    but.classList.add("qNumber");
}
var confirmBtn = document.getElementById("confirm");
confirmBtn.onclick = saveToAnswers;

//anketa
var answers = [];
questions.forEach(element => {
    answers.push(new Answer);
});

showQuestionCard(0);
function showQquestionCardByButton() {
    var i = this.innerHTML - 1;
    showQuestionCard(i);
}

function updateButtons() {
    var array = document.getElementsByClassName("qNumber");
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (questions[element.innerHTML - 1].isAnswered) {

            element.style = "background-color: red";
        }
    }
}
function nextQuestion() {
    var quest = document.getElementById("questionField");
    var index = parseInt(quest.title);
    if (index == (questions.length - 1)) {
        showQuestionCard(0);
    } else if (index < (questions.length - 1)) {
        showQuestionCard(++index);
    }
}


function showQuestionCard(ind) {
    var el = questions[ind];
    var quest = document.getElementById("questionField");
    quest.innerHTML = el.question;
    quest.title = ind;
    var answ = document.getElementById("answersRow");
    answ.innerHTML = null;
    var a = 2;
    if (el.answersOR.length != 0) {
        a++;
    }
    if (el.answersAND.length != 0) {
        a++;
    }
    var b = 100 / a;
    if (el.answersOR.length != 0) {
        var td = document.createElement("td");
        answ.appendChild(td);
        for (let j = 0; j < el.answersOR.length; j++) {
            const element = el.answersOR[j];
            var box = document.createElement("input");
            box.type = "radio";
            box.classList.add("radio_" + ind);
            box.value = j;
            box.name = ind;
            td.appendChild(box);
            td.appendChild(document.createTextNode(element));
            td.appendChild(document.createElement("br"));
            td.style = "width:" + b + "%";
        }
        if (questions[ind].isAnswered==true) {
            var e = answers[ind].answersOR;
                document.getElementsByClassName("radio_" + ind)[e].checked=true;
        }
    }
    if (el.answersAND.length != 0) {
        var td = document.createElement("td");
        answ.appendChild(td);
        for (let j = 0; j < el.answersAND.length; j++) {
            const element = el.answersAND[j];
            var box = document.createElement("input");
            box.id = "and" + ind + "/" + j
            box.type = "checkbox";
            box.classList.add("checkBox_" + ind);
            td.appendChild(box);
            td.appendChild(document.createTextNode(element));
            td.appendChild(document.createElement("br"));
            td.style = "width:" + b + "%";
        }
        if (questions[ind].isAnswered == true) {
            var e = answers[ind].answersAND;
            for (let j = 0; j < e.length; j++) {
                const element = e[j];
                document.getElementById("and" + ind + "/" + j).checked = true;
            }
        }
    }
    var td = document.createElement("td");
    answ.appendChild(td);
    var y = document.createElement("textarea");
    y.id = "note_" + ind;
    y.placeholder = "Другое";
    td.appendChild(y);
    b *= 2;
    y.rows = 4;
    td.style = "width:" + b + "%";
    if (questions[ind].isAnswered) {
        var e = answers[ind].note;
        document.getElementById("note_" + ind).innerText=e;
    }
}

function saveToAnswers() {
    var quest = document.getElementById("questionField");
    var index = quest.title;
    var answersOR;
    var answersAND = [];
    var note;
    var z = document.getElementsByClassName("radio_" + index);
    for (let i = 0; i < z.length; i++) {
        const element = z[i];
        if (element.checked) {
            answersOR = i;
        }
    }

    var zz = document.getElementsByClassName("checkBox_" + index);
    for (let i = 0; i < zz.length; i++) {
        const element = zz[i];
        if (element.checked) {
            answersAND.push(i);
        }
    }

    var zzz = document.getElementById("note_" + index);
    note = zzz.value;


    var ans = new Answer(index, answersOR, answersAND, note);
    answers[index] = ans;
    questions[index].isAnswered = true;
    createAnswersTable();
    index++;
    updateButtons();
    nextQuestion();
}

function createAnswersTable() {
    var a;
    if (a = document.getElementById("answersTable")) {
        a.remove();
    }
    var aTable = document.createElement("table");
    document.getElementById("chechAnswers").appendChild(aTable);
    aTable.id = "answersTable";
    var tr = document.createElement("tr");
    aTable.appendChild(tr);

    var th = document.createElement("th");
    tr.appendChild(th);
    th.appendChild(document.createTextNode("Question"));
    th = document.createElement("th");
    tr.appendChild(th);
    th.appendChild(document.createTextNode("ORanswer"));
    th = document.createElement("th");
    tr.appendChild(th);
    th.appendChild(document.createTextNode("ANDanswer"));
    th = document.createElement("th");
    tr.appendChild(th);
    th.appendChild(document.createTextNode("Note"));

    for (let i = 0; i < answers.length; i++) {
        const element = answers[i];
        tr = document.createElement("tr");
        aTable.appendChild(tr);
        for (let j = 0; j < 4; j++) {
            var cell = tr.insertCell(j);
            switch (j) {
                case 0:
                    cell.appendChild(document.createTextNode(questions[i].question));
                    break;
                case 1:
                    cell.appendChild(document.createTextNode(questions[i].answersOR[element.answersOR]));
                    break;
                case 2:
                    if (element.answersAND != null) {
                        for (let k = 0; k < element.answersAND.length; k++) {
                            if (k != 0) {
                                cell.appendChild(document.createTextNode(", "));
                            }
                            const el = element.answersAND[k];
                            cell.appendChild(document.createTextNode(questions[i].answersAND[el]));
                        }
                    }
                    break;
                case 3:
                    cell.appendChild(document.createTextNode(answers[i].note));
                    break;
                default:
                    break;
            }
        }

    }


}

