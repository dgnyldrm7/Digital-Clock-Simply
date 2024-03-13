let index = document.querySelector(".clockText");

let deger = setInterval(()=>{
    let date = new Date();
    let Hours = date.getHours();
    let Minute = date.getMinutes();
    let Second = date.getSeconds();
    let Timer = "AM";

    if(Hours >= 12)
    {
        Hours = Hours - 12;
        Timer = "PM";

    }

    if(Hours < 10)
    {
        Hours = "0" + Hours;
    }
    if(Second < 10)
    {
        Second = "0" + Second;
    }
    if(Minute < 10)
    {
        Minute = "0" + Minute;
    }
    
    index.innerHTML = `${Hours}:${Minute}:${Second} :${Timer}`;
}, 1000);
