var nameholder=[];
function enter(){
    var st1=document.getElementById("Student1").value;
    var st2=document.getElementById("Student2").value;
    var st3=document.getElementById("Student3").value;
    var st4=document.getElementById("Student4").value;
    var st5=document.getElementById("Student5").value;
    nameholder.push(st1);
    nameholder.push(st2);
    nameholder.push(st3);
    nameholder.push(st4);
    nameholder.push(st5);
    console.log(nameholder);
    document.getElementById("answerdiv").innerHTML=nameholder;
    document.getElementById("Submitbutton").style.display="none";
    document.getElementById("Sortbutton").style.display="inline-block";
}
function sorting(){
    nameholder.sort();
    document.getElementById("answerdiv").innerHTML=nameholder;
}

