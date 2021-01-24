var count=0;
var questions=[
    {
        id:0,
    subject:"Web Dev",
    des:"What is Dev?",
    responses:[
        {
        name:"aryan",
        answer:"Harbans Kaure"


    }
]
}
]

function addQues(){
    var sub= document.getElementById("subject");
    var question = document.getElementById("des");
    var curr = [
        {
            id:count,
            subject: sub.value,
            question: question.value,
            responses:[

            ]
        }
    ]
    questions.push(curr);
    count++;
    var quesdiv= document.createElement("div");
    var subject = document.createElement("h1");
    var description =document.createElement("p");
    description.innerHTML=question.value;
    subject.innerHTML=sub.value;
    quesdiv.appendChild(subject);
    quesdiv.appendChild(description);
    sub.value="";
    question.value="";
    

    
    
    

}