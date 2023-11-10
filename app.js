function talk()
{
    var know =
    {
        //LEFT//Key is the prompt recognised word from the user input
        //Right//Value is the response you get from the chat bot
        "Hello":"Hi there &#128540",
        "Who are you?":"My name is Thoko Lydia Mgidi",
        "What can you do for me":"Not much for now,just keeping you busy",
        "Ok":"You welcome",
        "Bye":"Chat later,bye for now",
        "Tell me about yourself":"I am just a smallnyana chatbot just lkeeping you busy with HTML,"
    };

    var user = document.getElementById('userBox').value;//listens for input and get typed command
    document.getElementById('chatLog').innerHTML = user + "<br>" ; //loops and renders a response to the chatlog element

    if(user in know)
    {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }
    else
    {
        document.getElementById('chatLog').innerHTML = "Sorry i don't understand <br>";
    }
}