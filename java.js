var task=[];
var strikearray=[1,1,1,1,1]; //1 indicates no strike for task....//
window.onload=function(){    //on reload..all the tasks are displayed according to the date...// 
  tasktodisplay();
}
// to retrieve the stored data for particular date... 
function tasktodisplay()
{
    task=[];
    var retrieve=[];
    var strike_ret=[];
    var v=localStorage.getItem(elementdate);
    //parse to break the string elements in array... 
    retrieve=JSON.parse(v);
    var v=localStorage.getItem(s);
    strike_ret=JSON.parse(v);
    if(strike_ret)
    {
       strikearray=strike_ret;
    }
    while(taskUL.firstChild){
        taskUL.removeChild(taskUL.firstChild);
     }
    for(i=0;i<retrieve.length;i++)
    {
      addelement(retrieve[i],strikearray[i]);
    }
}
// while adding new task...to call the  addelement function....  
function addtasks()
{
 var inputvalue=document.getElementById("mytext").value;
 addelement(inputvalue,1);
}
// creation of listelement and adding text to input value.... 
function addelement(inputvalue,strikeee)
{
  	var ul=document.getElementById("taskUL");
  	if(ul.children.length<5)
  	{
      switch(ul.children.length)
        {
          case 0:document.getElementById("mytext").placeholder="only four more tasks are allowed";break;
          case 1:document.getElementById("mytext").placeholder="only three more tasks are allowed";break;
          case 2:document.getElementById("mytext").placeholder="only two more tasks are allowed";break;
          case 3:document.getElementById("mytext").placeholder="only one more tasks are allowed";break;
          case 4:document.getElementById("mytext").placeholder="no more tasks are allowed";break;
        }     
  	  //creating the dynamic elements
      var li= document.createElement("li");
      li.setAttribute("class","dli");
      // li.setAttribute("id","dll"); 
      li.id="id"+(task.length+1);
      //var inputvalue=document.getElementById("mytext").value;
      var t=document.createElement("LABEL");
      t.innerHTML= inputvalue;
      t.id="txt"+(task.length+1);
      t.style.color="#696969";
      //creating checkbox...
      var checkbox = document.createElement("img");
      checkbox.src="chck.jpg.jpg";
      checkbox.id="cd"+(task.length+1);
      checkbox.style.marginTop= "-2.6px";
      checkbox.style.width="18px";
      checkbox.style.height= "18px";
      checkbox.style.float="left";
      checkbox.style.visibility='visible';
      // checkbox.setAttribute("id","cd"+i);
      checkbox.onclick=strike;  //calling the strike function
      // creating tick element...
      var tickbtn=document.createElement("img");
      tickbtn.class="tkbtn";
      tickbtn.id="tick"+(task.length+1);
      tickbtn.src="tick.jpg.png";
      tickbtn.style.width="18px";
      tickbtn.style.height= "16px";
      tickbtn.style.marginLeft="-29px";
      tickbtn.style.visibility='hidden';
      tickbtn.onclick=strike;
      tickbtn.style.float='left';
      tickbtn.style.marginTop="-2px";
      //creating the delete icon
      var deletebtn=document.createElement("img");
      deletebtn.class="dbutton";
      deletebtn.id="del"+(task.length+1);
      deletebtn.src="dele.jpg.jpg";
      deletebtn.style.width="18px";
      deletebtn.style.height= "18px";
      deletebtn.addEventListener("click",remove);
      deletebtn.style.display="none";
      li.onmouseover=function() 
      {
        if(deletebtn.style.display==="none" && editbtn.style.display==="none")
          {
            deletebtn.style.display="block";
            editbtn.style.display="block";
            li.style.borderLeft="dotted 2px lightgray";
           }
      };
      li.onmouseout=function()
      {
        deletebtn.style.display="none";
        editbtn.style.display="none";
        li.style.borderLeft="none";
      }
      //span.........
      var span=document.createElement("input");
      span.setAttribute("type","text");
      span.id="span"+(task.length+1);
      span.value=inputvalue;
      span.style.visibility="hidden";
      //creating the edit icon
      var editbtn=document.createElement("img");
      editbtn.class="dbutton";
      editbtn.id="del"+(task.length+1);
      editbtn.src="edit.jpg.jpg";
      editbtn.style.width="18px";
      editbtn.style.height= "18px";
      editbtn.style.display="none";
      editbtn.onclick=edit;
      /*appending*/
      li.appendChild(checkbox);
      li.appendChild(tickbtn);
      li.appendChild(t);
      li.appendChild(span);
      li.appendChild(deletebtn);
      li.appendChild(editbtn);
      if(inputvalue === "")
      {
        alert("you didnt enter the text");
      }
      else
      {
        task.push(inputvalue);
        // storing in localstorage....
        var b=JSON.stringify(task);
        localStorage.setItem(elementdate,b);
        if(strikeee == 0)
        {
          tickbtn.style.visibility="visible";
          checkbox.style.visibility="hidden";
          t.style.textDecoration="line-through";
        }
        else
        {
         tickbtn.style.visibility="hidden";
         checkbox.style.visibility="visible";
         t.style.textDecoration="none";
        }
        document.getElementById("taskUL").appendChild(li);
        document.getElementById("mytext").value="";
      }
    }    //if closing here.....
    else
      {
        alert("only five are allowed");
        document.getElementById("mytext").value="";
      }
    //to strike the done work
    function strike()
    {
    	if(tickbtn.style.visibility==='hidden')
    	{
        var a=task.indexOf(inputvalue);
        strikearray[a]=0;
        var b=JSON.stringify(strikearray);
        localStorage.setItem(s,b);
        checkbox.style.visibility="hidden";
        tickbtn.style.visibility="visible";
        // tickbtn.style.marginLeft= "30px";
        t.style.textDecoration='line-through';
      }
    	else
    	{
        var a=task.indexOf(inputvalue);
        strikearray[a]=1;
        var b=JSON.stringify(strikearray);
        localStorage.setItem(s,b);
        checkbox.style.visibility='visible';
        tickbtn.style.visibility="hidden";
        checkbox.checked=false;
    		t.style.textDecoration='none';
    	}
    }
    //remove function
    function remove()
    {
      var a=task.indexOf(inputvalue);
      task.splice(a,1);
      var b=JSON.stringify(task);
      localStorage.setItem(elementdate,b);
      strikearray.splice(a,1);
      var ab = JSON.stringify(strikearray);
      localStorage.setItem(s, ab);
      this.parentNode.remove();
      switch(ul.children.length)
      {
        case 1:document.getElementById("mytext").placeholder="only four more tasks are allowed";break;
        case 2:document.getElementById("mytext").placeholder="only three more tasks are allowed";break;
        case 3:document.getElementById("mytext").placeholder="only two more tasks are allowed";break;
        case 4:document.getElementById("mytext").placeholder="only one more tasks are allowed";break;
        case 0:document.getElementById("mytext").placeholder="only five more tasks are allowed";break;
      }

    }
    //edit function...//
    function edit()
    {
      li.style.borderTop="thin solid #334D00";
      span.setAttribute("style","visible");
      span.style.border="none";
      span.style.outline="none";
      t.innerHTML="";
      span.focus();
      span.onchange= function ()
      {
        var a=task.indexOf(inputvalue);
        t.innerHTML=span.value;
        task[a]=span.value;
        var b=JSON.stringify(task);
        localStorage.setItem(elementdate,b);
        span.style.visibility="hidden";
        li.style.borderTop="thin solid white";
            
      }
    }
}
