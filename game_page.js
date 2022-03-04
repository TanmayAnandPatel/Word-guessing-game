player1_name =localStorage.getItem("player1_name");
player2_name =localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name +":";
document.getElementById("player2_name").innerHTML=player2_name +":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn:" + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn:" + player2_name;

function send() {
    get_word =document.getElementById("word").value;
    word =get_word.toLowerCase();
    charAt1 =word.charAt(1);
    lengthBy2 =Math.floor(word.length/2);
    charAt2 =word.charAt(lengthBy2);
    length2 =word.length-1;
    charAt3 =word.charAt(length2);
    remove_charAt1 =word.replace(charAt1,"_");
    remove_charAt2 =remove_charAt1.replace(charAt2,"_");
    remove_charAt3 =remove_charAt2.replace(charAt3,"_");
    question ="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
    input_box ="<br>answer:<input type='text' id='input_checkbox'>";
    button ="<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
    row =question+input_box+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn ="player_1";
answer_turn ="player_2";

function check() {
    var get_answer =document.getElementById("input_checkbox").value;
    answer =get_answer.toLowerCase();

    if (answer ==word) {
        if (answer_turn =="player_1") {
            player1_score =player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        } 
        else {
            player2_score =player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (question_turn =="player_1") {
        question_turn ="player_2";
        document.getElementById("player_question").innerHTML="Question turn:"+player2_name;
    } 
    else {
        question_turn ="player_1";
        document.getElementById("player_question").innerHTML="Question turn:"+player1_name;
    }

    if (answer_turn =="player_1") {
        answer_turn ="player_2";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player2_name;
    } 
    else {
        answer_turn ="player_1";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player1_name;
    }
    document.getElementById("output").innerHTML="";
}