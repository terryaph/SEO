var display = 0;
function displayNav(){
    if(display==0){
        document.getElementById("menu_principal").style.display="block";
        display=1;
    }
    else if(display==1){
        document.getElementById("menu_principal").style.display="none";
        display = 0;
    }
}