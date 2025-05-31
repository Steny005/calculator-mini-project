function appendValue(value){
    const display=document.getElementById("display");
    display.value+= value;
}

function clearDisplay(){
    const display=document.getElementById("display");
    display.value="";

}

function calculate(){
    const display=document.getElementById("display");
    try{
        display.value=eval(display.value);
    }
    catch(err){
        display.value="Error";
    }
}

function square(){
    const display=document.getElementById("display");
    try{
        let num=eval(display.value);
        display.value=num*num;
    }
    catch(err){
        display.value="Error";
    }
}