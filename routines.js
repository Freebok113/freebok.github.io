var totaal = 0



function counter_one(){
    var sub1 = 0;
    var sub2 = 0;
    var sub3 = 0;
    var sub4 = 0;
    var sub5 = 0;
    var sub6 = 0;
    var sub7 = 0;
    //neem de radio button group
    var row1 = document.getElementsByName("1");
    var row2 = document.getElementsByName("2");
    var row3 = document.getElementsByName("3");
    var row4 = document.getElementsByName("4");
    var row5 = document.getElementsByName("5");
    var row6 = document.getElementsByName("6");
    var row7 = document.getElementsByName("7");
    var label = document.getElementById("totaal");
    //loop over lijn 1
    for(var i = 0, length = row1.length; i < length; i++){
        if(row1[i].checked){
            //popup voor de geselecteerde lijn
            //hier nog de waarde uit halen
            //alert(row1[i].value);
            if(row1[i].value == "R1"){
                sub1 = 0;
            }
            if(row1[i].value == "Y1"){
                sub1 = 1;
            }
            if(row1[i].value == "G1"){
                sub1 = 2;
            }        
            
        }
        if(row2[i].checked){
            if(row2[i].value == "R1"){
                sub2 = 0;
            }
            if(row2[i].value == "Y1"){
                sub2 = 1;
            }
            if(row2[i].value == "G1"){
                sub2 = 2;
            } 
            
        }

        if(row3[i].checked){
            if(row3[i].value == "R1"){
                sub3 = 0;
            }
            if(row3[i].value == "Y1"){
                sub3 = 1;
            }
            if(row3[i].value == "G1"){
                sub3 = 2;
            } 
            
        }
        if(row4[i].checked){
            if(row4[i].value == "R1"){
                sub4 = 0;
            }
            if(row4[i].value == "Y1"){
                sub4 = 1;
            }
            if(row4[i].value == "G1"){
                sub4 = 2;
            } 
            
        }
        if(row5[i].checked){
            if(row5[i].value == "R1"){
                sub5 = 0;
            }
            if(row5[i].value == "Y1"){
                sub5 = 1;
            }
            if(row5[i].value == "G1"){
                sub5 = 2;
            } 
            
        }
        if(row6[i].checked){
            if(row6[i].value == "R1"){
                sub6 = 0;
            }
            if(row6[i].value == "Y1"){
                sub6 = 1;
            }
            if(row6[i].value == "G1"){
                sub6 = 2;
            } 
            
        }
        if(row7[i].checked){
            if(row7[i].value == "R1"){
                sub7 = 0;
            }
            if(row7[i].value == "Y1"){
                sub7 = 1;
            }
            if(row7[i].value == "G1"){
                sub7 = 2;
            } 
            
        }
    }

    totaal = 0.
    totaal = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7;
    label.textContent = totaal;

}

function reset(){
    var row1 = document.getElementsByName("1");
    var row2 = document.getElementsByName("2");
    var row3 = document.getElementsByName("3");
    var row4 = document.getElementsByName("4");
    var row5 = document.getElementsByName("5");
    var row6 = document.getElementsByName("6");
    var row7 = document.getElementsByName("7");
    var label = document.getElementById("totaal");
    totaal = 0;
    for(var i = 0, length = row1.length; i < length; i++){
        row1[i].checked = false;
        row2[i].checked = false;
        row3[i].checked = false;
        row4[i].checked = false;
        row5[i].checked = false;
        row6[i].checked = false;
        row7[i].checked = false;
        label.textContent = totaal;
    }
}

function screenshot(){
        html2canvas(document.body).then(function(canvas) {
        allowTaint: true;
     
        var div = document.getElementById("screenshot");
        div.style.visibility='visible';
        div.append(canvas);
    
    }); 
    
   
}



// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function screenshot2() {
    html2canvas(document.body).then(function(canvas) {
        allowTaint: true;
     
        var div = document.getElementById("screenshot");
        div.style.visibility='visible';
        div.append(canvas);
    
    }); 
  
    var modal = document.getElementById("myModal");
    modal.style.display = "block";


}

// When the user clicks on <span> (x), close the modal
function closespan() {
  var modal = document.getElementById("myModal");
  document.getElementById("screenshot").innerHTML = "";
  modal.style.display = "none";
}

