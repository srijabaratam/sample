//to display presentdate
var d = new Date();
var y; //to get day...
switch(d.getDay())
{
  case 1: y="Mon";break;
  case 2: y="Tue";break;
  case 3: y="Wed";break;
  case 4: y="Thu";break;
  case 5: y="Fri";break;
  case 6: y="Sat";break;
  case 0: y="Sun";break;
}
var m; //to get month
switch(d.getMonth())
{
  case 0: m="Jan";break;
  case 1: m="Feb";break;
  case 2: m="Mar";break;
  case 3: m="Apr";break;
  case 4: m="May";break;
  case 5: m="Jun";break;
  case 6: m="Jul";break;
  case 7: m="Aug";break;
  case 8: m="Sep";break;
  case 9: m="Oct";break;
  case 10: m="Nov";break;
  case 11: m="Dec";break;
}
var dat=d.getDate();
var l;
if(dat==1  || dat==21 || dat==31){
  l='st';
}
else if(dat==2 || dat==22 )
{
  l='nd';
}
else if(dat==3  || dat==23){
  l='rd';
}
else
l='th';
elementdate=y+m+dat+l;              /*key name 1*/
s=elementdate+"s";                 /*key name 2*/
document.getElementById("date").innerHTML=y +","+" "+" "+ m +"  "+ dat+l;
tasktodisplay(); //

// to display previous date
function previous(){
   d.setDate(d.getDate()-1);
	 var y;
       switch(d.getDay())
       {
          case 1: y="Mon";break;
          case 2: y="Tue";break;
          case 3: y="Wed";break;
          case 4: y="Thu";break;
          case 5: y="Fri";break;
          case 6: y="Sat";break;
          case 0: y="Sun";break;
        }
var m;
switch(d.getMonth())
       {
          case 0: m="Jan";break;
          case 1: m="Feb";break;

          case 2: m="Mar";break;
          case 3: m="Apr";break;

          case 4: m="May";break;
          case 5: m="Jun";break;

          case 6: m="Jul";break;
          case 7: m="Aug";break;
          case 8: m="Sep";break;
          case 9: m="Oct";break;
          case 10: m="Nov";break;
          case 11: m="Dec";break;
        }
var dat=d.getDate();


var l;
if(dat==1  || dat==21 || dat==31){
  l='st';
}
else if(dat==2 || dat==22 )
{
  l='nd';
}
else if(dat==3  || dat==23){
  l='rd';
}
else
l='th';

elementdate=y+m+dat+l;
s=elementdate+"s";
document.getElementById("date").innerHTML=y+","+" "+" "+ m +"  "+ dat+l;

document.getElementById("mytext").placeholder="only five tasks are allowed";

document.getElementById("taskUL").innerHTML="";
 tasktodisplay();

}
// to display nextdate

function nextDate(){

      d.setDate(d.getDate()+1);
	    var y;

      switch(d.getDay())
       {
          case 1: y="Mon";break;
          case 2: y="Tue";break;
          case 3: y="Wed";break;
          case 4: y="Thu";break;
          case 5: y="Fri";break;
          case 6: y="Sat";break;
          case 0: y="Sun";break;
        }

var m;
switch(d.getMonth())
       {
          case 0: m="Jan";break;
          case 1: m="Feb";break;

          case 2: m="Mar";break;
          case 3: m="Apr";break;

          case 4: m="May";break;
          case 5: m="Jun";break;

          case 6: m="Jul";break;
          case 7: m="Aug";break;
          case 8: m="Sep";break;
          case 9: m="Oct";break;
          case 10: m="Nov";break;
          case 11: m="Dec";break;
        }
var dat=d.getDate();
var l;
 if(dat==1  || dat==21 || dat==31)
 {
  l='st';
 }
else if(dat==2 || dat==22 )
{
  l='nd';
}
else if(dat==3  || dat==23){
  l='rd';
}
else
l='th';
elementdate=y+m+dat+l;
s=elementdate+"s";
document.getElementById("date").innerHTML=y +","+" "+" "+ m +"  "+ dat+l;
document.getElementById("taskUL").innerHTML="";
document.getElementById("mytext").placeholder="only five tasks are allowed";
 tasktodisplay();

}