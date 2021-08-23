// this is the 1st question that is asked when the wepage loads and will display a prompt that when answer will give a reponse.
//this is the variable used to display prompt on webpage and interact with the html
document.getElementById("editor")
//the prompt that displays when the user loads the webpage they will be asked this question
//you have to type the answer exactly how you see it
var editor = prompt('before we start which text editor sounds the best? just want to see which one you will pick your choices are Visual Studio, Brackets, or Sublime Text.');
//if condition is met this will be its first response
//if Visual Studio was the answer
if(editor=='Visual Studio'){
    alert('Yeah that one is my favorite to well played');
}
//if Brackets was the answer
else if(editor=='Brackets'){
    alert('Its okay but not that great yet to me but Im pretty sure it will be eventually.');
}
//if Sublime Text was the answer
else if(editor=='Sublime Text'){
    alert('You have very expensive taste but is well worth it though.');
}
//if none of the conditions were met
else{
    alert('I guess you didnt read the prompt at all did you.');
}
//this funciton when pressing the button will act about the same when you first load the intial webpage prompt
//the function for the 2nd question
function nextQuestion() {
    // the variable used for this function
    document.getElementById(choice)
    //when button is pressed this is what will pop up and then user can submit there answer
    //you also have to type this one out exactly how you see it
    var choice= prompt('So now that you have read what all the text editors can do which one do you like: Visual Studio, Brackets, Sublime Text');
    
    //if the answer to the 2nd question was viusal studio this is what the response would be
    if(choice== 'Visual Studio'){
        alert('Still picking the best one right good job.');  
    }
    //if the answer to the 2nd question was brackets then this is what the response would be
    else if(choice== 'Brackets'){
        alert('Well if thats what you like i wont stop you.');
    }
    //if the answer to the 2nd question was answered with sublime text then this is what the response would be
    else if(choice== 'Sublime Text'){
        alert('Still have expensive taste but it will probably pay off for you though.');
    }
    //if conditons for the 2nd question were not met this is the response that will be displayed
    else{
        alert('Still dont like reading.');
    }
   
}