
function add() {
    document.getElementById("output1").innerHTML = document.getElementById("text1").value;
    document.getElementById("output2").innerHTML = document.getElementById("text2").value;
    document.getElementById("output3").innerHTML = document.getElementById("text3").value;
    document.getElementById("output4").innerHTML = document.getElementById("text4").value;
    document.getElementById("output5").innerHTML = document.getElementById("text5").value;
    document.getElementById("output6").innerHTML = document.getElementById("text6").value;

}
function delete1() {
    document.getElementById("text1").value = null;
    document.getElementById("text2").value = null;
    document.getElementById("text3").value = null;
    document.getElementById("text4").value = null;
    document.getElementById("text5").value = null;
    document.getElementById("text6").value = null;// here, value is is not stored,so no need to write innerHTML
    document.getElementById("text7").value = null;
    
}   
  
function delete2(){
    document.getElementById("output1").innerHTML = null;//here value is going to be called from the memory.
    document.getElementById("output2").innerHTML = null;
    document.getElementById("output3").innerHTML = null;
    document.getElementById("output4").innerHTML = null;
    document.getElementById("output5").innerHTML= null;
    document.getElementById("output6").innerHTML = null;
}
     

