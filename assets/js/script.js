var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
button = document.querySelector("#button");


function selectTopic() {
    if (randomTopic === 'HTML') {
        alert("Let's study HTML!");
    }   else if (randomTopic === 'CSS') { 
        alert("Let's study CSS!");
    }   else if (randomTopic === 'Git') {
        alert("Let's study Git!");
    }   else if (randomTopic === 'JavaScript') {
        alert("Let's study JavaScript!");
    }   else {
        alert('Please try again!');
    }
}

button.addEventListener("click", function() {
    answer = prompt("Would you like a topic chosen for you to study? Please type 'Yes' or 'No'").toUpperCase();
    if(answer === "YES") {
        selectTopic();
        alert("If you would like another topic chosen for you, make sure to refresh the page first!");
    }
    else if(answer === "NO") {
        alert("You chose not to have a topic chosen for you.");
    }
    else {
        alert("Error, please type 'Yes' or 'No'");
    }
})



