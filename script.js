

let index = document.querySelector(".clockText");

let deger = setInterval(()=>{
    setState();
},1000);

function setState()
{
    let date = new Date();
    let pam = date.get
    let Hours =date.getHours();
    let Minute = date.getMinutes();
    let Second = date.getSeconds();
    let Message = null;
    
    if(Hours>=12)
    {
        Message = "PM";
    }
    else{
        Message = "AM";
    }

    if(Hours<10)
    {
        let newHours = "0" + Hours;
        if(Second<10)
        {
            let newSecond = "0" + Second;
            index.innerHTML = `${newHours}:${Minute}:${newSecond} ${Message}`;
        }
        else{
            index.innerHTML = `${newHours}:${Minute}:${Second} ${Message}`;
        }
    }


};
