var count=0;
var initialform=document.getElementById("initialform");
var finalform = document.getElementById("response-form");
var fav= '<i class="fas fa-heart fa-15x" onclick="heart(id)" id="0"></i>';
var upvote = '<div class="col-md-1 ubtn"  onclick="Upvote(id)"><i class="fas fa-arrow-up"></i> ';
var downvote = '<div class="col-md-1 dbtn"  onclick="Downvote(id)"><i class="fas fa-arrow-down"></i> ';
var ubtn = document.getElementsByClassName("ubtn");
var dbtn = document.getElementsByClassName("dbtn");
var questions=[
    

]

function addQues(){
    document.getElementsByClassName("responses")[0].setAttribute("hidden","true");
    var sub= document.getElementById("subject");
    var question = document.getElementById("des");
    if(sub.value == "" || question.value==""){
        window.alert("Please Enter a valid Question and Subject");
    }
    else{
    var curr = 
        {
            id:count,
            subject: sub.value,
            question: question.value,
            responses:[],
            upvotes: 0,
            downvotes: 0
        }
    
    questions.push(curr);
    
    var quesdiv= document.createElement("div");
    quesdiv.setAttribute("class","onequestion");
    quesdiv.setAttribute("onclick","displayQues(id)");
    quesdiv.setAttribute("id",count);
    var subject = document.createElement("h1");
    var description =document.createElement("p");
    var innerdiv =document.createElement("div")
    innerdiv.setAttribute("class","row");
    innerdiv.innerHTML=innerdiv.innerHTML+" "+upvote+ questions[count].upvotes+" </div>";
    innerdiv.innerHTML=innerdiv.innerHTML+" "+downvote+questions[count].downvotes+" </div>";

    description.innerHTML=question.value;
    subject.innerHTML=sub.value;

    quesdiv.appendChild(subject);
    quesdiv.appendChild(description);
    quesdiv.appendChild(innerdiv);
    
   
    
   

  
    document.getElementsByClassName("questions")[0].appendChild(quesdiv);

    sub.value="";
    question.value="";
    ubtn[count].setAttribute("id",count);
    dbtn[count].setAttribute("id",count);
    count++;
   
}

    
    
    

}

function displayQues(id){
    //displayques
    //responses

   var quest= document.getElementsByClassName("displayques")[0];
   quest.innerHTML="";
   var h= document.createElement("h4");
   var p = document.createElement("p");
   h.innerHTML=questions[id].subject;
   p.innerHTML=questions[id].question;
   quest.appendChild(h);
   quest.appendChild(p);
   var resp= document.getElementsByClassName("responses")[0];
   resp.innerHTML="";
   
   
   for(var i=0;i<questions[id].responses.length;i++){
       var div = document.createElement("div");
       var h4 = document.createElement("h4");
       var p = document.createElement("p");
       h4.innerHTML=questions[id].responses[i].name;
       p.innerHTML=questions[id].responses[i].answer;
       div.appendChild(h4);
       div.appendChild(p);
       div.setAttribute("class","oneres");
       resp.appendChild(div);

   }
   initialform.setAttribute("hidden","true");
   finalform.removeAttribute("hidden");
   var btn = document.getElementsByClassName("responsesubmit")[0];
   btn.setAttribute("id",id);
   document.getElementsByClassName("resolve")[0].setAttribute("id",id);
   


}

function addResponse(id){

   var response = document.getElementsByClassName("responses")[0];
   
   var div = document.createElement("div");
   div.setAttribute("class","oneres");
   var h4=document.createElement("h4");
   var p=document.createElement("p");
   var name= document.getElementById("name");
   var soln =document.getElementById("comment");
   if(name.value=="" || soln.value == ""){
       window.alert("Please enter a Valid Response");
   }
   else{
       response.removeAttribute('hidden');
   h4.innerHTML=name.value;
   p.innerHTML=soln.value;
   div.appendChild(h4);
   div.appendChild(p);
   response.appendChild(div);
     curr = {
        name:name.value,
        comment:soln.value,
        upvotes:0,
        downvotes:0
    }
   
    questions[id].responses.push(curr);
}
name.value="";
soln.value="";

}
function resolve(id){
    count--;
    questions.splice(id,1);
    for(var j=parseInt(id)+1;j<questions.length;j++){

        questions[j].id=j;
    }
    initialform.removeAttribute("hidden");
    finalform.setAttribute("hidden","true");
   var contain= document.getElementsByClassName("questions")[0];
   contain.innerHTML="";
    for(var i=0;i<questions.length;i++){

    var quesdiv= document.createElement("div");
    quesdiv.setAttribute("class","onequestion");
    quesdiv.setAttribute("onclick","displayQues(id)");
    quesdiv.setAttribute("id",i);
    var subject=document.createElement("h1");
   subject.innerHTML=questions[i].subject;
    var question= document.createElement("p");
    question.innerHTML=questions[i].question;
    var innerdiv =document.createElement("div")
    innerdiv.setAttribute("class","row");
    innerdiv.innerHTML=innerdiv.innerHTML+" "+upvote+ questions[i].upvotes+" </div>";
    innerdiv.innerHTML=innerdiv.innerHTML+" "+downvote+questions[i].downvotes+" </div>";
    quesdiv.appendChild(subject);
    quesdiv.appendChild(question);
    quesdiv.appendChild(innerdiv);
    contain.appendChild(quesdiv);
    ubtn[i].setAttribute("id",i);
    dbtn[i].setAttribute("id",i);




    }
}
function search(event){

    
    
   var val=document.getElementsByClassName("searchbar")[0];
   var result = questions.filter((q)=>q.subject.includes(val.value));
 
   var div = document.getElementsByClassName("questions")[0];
   div.innerHTML="";
   for(var i=0;i<result.length;i++){
    var quesdiv= document.createElement("div");
    quesdiv.setAttribute("class","onequestion");
    quesdiv.setAttribute("onclick","displayQues(id)");
    quesdiv.setAttribute("id",result[i].id);
    var subject=document.createElement("h1");
    var ans=result[i].subject;

    if(val.value!=""){
        var x = result[i].subject.indexOf(val.value);
         ans= result[i].subject.slice(0,x)+"<span style='background-color: yellow'>"+val.value+"</span>"+result[i].subject.slice(x+val.value.length,result[i].subject.length);
     

    }

   subject.innerHTML=ans;
    var question= document.createElement("p");
    question.innerHTML=result[i].question;
    var innerdiv =document.createElement("div");
    innerdiv.setAttribute("class","row");
    innerdiv.innerHTML=innerdiv.innerHTML+" "+upvote+ result[i].upvotes+" </div>";
    innerdiv.innerHTML=innerdiv.innerHTML+" "+downvote+result[i].downvotes+" </div>";
    quesdiv.appendChild(subject);
    quesdiv.appendChild(question);
    if(val.value==""){
    quesdiv.appendChild(innerdiv);
    }
    div.appendChild(quesdiv);
    if(val.value==""){
    ubtn[i].setAttribute("id",i);
    dbtn[i].setAttribute("id",i);
    }

   }
   
   
}
function heart(id){
    
    var btn=document.getElementsByTagName("i")[id];
    if(btn.style.color=="pink"){
        btn.style.color="grey";
    }
    else{
        btn.style.color="pink";
    }

}
function Upvote(id){
    questions[id].upvotes+=1;
    questions.sort((a,b)=>
    {
    return b.upvotes-a.upvotes;
    }
    )
    for(var i=0;i<questions.length;i++)
    {
        questions[i].id=i;
    }
    
    var contain= document.getElementsByClassName("questions")[0];
   contain.innerHTML="";
    for(var i=0;i<questions.length;i++){

    var quesdiv= document.createElement("div");
    quesdiv.setAttribute("class","onequestion");
    quesdiv.setAttribute("onclick","displayQues(id)");
    quesdiv.setAttribute("id",i);
    var subject=document.createElement("h1");
   subject.innerHTML=questions[i].subject;
    var question= document.createElement("p");
    question.innerHTML=questions[i].question;

    var innerdiv =document.createElement("div")
    innerdiv.setAttribute("class","row");
    innerdiv.innerHTML=innerdiv.innerHTML+" "+upvote+ questions[i].upvotes+" </div>";
    innerdiv.innerHTML=innerdiv.innerHTML+" "+downvote+questions[i].downvotes+" </div>";

    quesdiv.appendChild(subject);
    quesdiv.appendChild(question);
    quesdiv.appendChild(innerdiv);
    contain.appendChild(quesdiv);

    ubtn[i].setAttribute("id",i);
    dbtn[i].setAttribute("id",i);



    }
  

   
   
}
function Downvote(id){
    questions[id].downvotes+=1;

    var contain= document.getElementsByClassName("questions")[0];
   contain.innerHTML="";
    for(var i=0;i<questions.length;i++){

    var quesdiv= document.createElement("div");
    quesdiv.setAttribute("class","onequestion");
    quesdiv.setAttribute("onclick","displayQues(id)");
    quesdiv.setAttribute("id",i);
    var subject=document.createElement("h1");
   subject.innerHTML=questions[i].subject;
    var question= document.createElement("p");
    question.innerHTML=questions[i].question;

    var innerdiv =document.createElement("div")
    innerdiv.setAttribute("class","row");
    innerdiv.innerHTML=innerdiv.innerHTML+" "+upvote+ questions[i].upvotes+" </div>";
    innerdiv.innerHTML=innerdiv.innerHTML+" "+downvote+questions[i].downvotes+" </div>";

    quesdiv.appendChild(subject);
    quesdiv.appendChild(question);
    quesdiv.appendChild(innerdiv);
    contain.appendChild(quesdiv);

    ubtn[i].setAttribute("id",i);
    dbtn[i].setAttribute("id",i);



    }
  

   
   
}
function newQuestionForm (){
    initialform.removeAttribute("hidden");
    finalform.setAttribute("hidden","true");

}