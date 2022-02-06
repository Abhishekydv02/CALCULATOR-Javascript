
let screen = document.getElementById('screen');
let buttons= document.querySelectorAll('button');
let currentValue='';
screen.value=0;
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
    else if(btntext=='<i class="far fa-backspace"></i>')
    {
        screen.value=5555555;
    }

    else{
        currentValue+=btntext;
        screen.value=currentValue;
    }

   })
}