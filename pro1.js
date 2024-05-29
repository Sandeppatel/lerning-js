 const clocks = document.getElementById('clock')

 setInterval(function ()  {
    const date = new Date();
   clocks.innerHTML =  date.toLocaleTimeString();
 
 }, 1000);
 