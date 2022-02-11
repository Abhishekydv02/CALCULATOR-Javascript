
let screen = document.getElementById('screen');
let buttons= document.querySelectorAll('button');
let currentValue='';
screen.value=0;

function userinput(val)
{
    if(val=='bs')
    {
        currentValue=currentValue.slice(0,currentValue.length-1);
        screen.value=currentValue;
    }
}

for(let item of buttons)
{
   item.addEventListener('click',(func)=>
   {
    btntext = func.target.innerText;
    // console.log(btntext);
    if(btntext=='AC')
    {
        currentValue=''; 
        screen.value=0;
    }
    else if(btntext=='X'){
        btntext='*';
        currentValue+=btntext;
        screen.value=currentValue;
    }
    else if(btntext=='=')
    {
        currentValue=eval(currentValue);
      screen.value=eval(currentValue);
    }
    else if(btntext=='%')
    {
        screen.value='invalid';
    }
    else {
        let last= currentValue[currentValue.length-1];
        if((last== '*' || last == '/' || last =='+' || last == '-') &&
        (btntext== '+' || btntext == '-' || btntext == '*' || btntext == '/'))
        {
            currentValue=currentValue.slice(0, currentValue.length-1)+val;
            screen.value=currentValue;
        }
        else 
        {
        currentValue+=btntext;
        screen.value=currentValue;
        }
    }
    }

   )}
