const d = document;
export function reloj(relojAlarma,iniciarReloj,detenerReloj){
    d.addEventListener('click',(e)=>{
        if(e.target.matches(iniciarReloj)){
            stop=setInterval(()=>{
               let rel = new Date().toLocaleTimeString();
               d.querySelector(relojAlarma).innerHTML =`<h3>${rel}</h3>`;
                },1000)
            d.querySelector(iniciarReloj).setAttribute("disabled", "");
        }
        if(e.target.matches(detenerReloj)){
            clearInterval(stop)
            d.querySelector(relojAlarma).innerHTML=null;
            d.querySelector(iniciarReloj).removeAttribute("disabled", "");
        }
    });
    }
        export function alarma(sonido,iniciarAlarma,detenerAlarma){
        let alarmaTempo;
            const $alarma=d.createElement("audio");
            $alarma.src=sonido; 
            d.addEventListener('click',(e)=>{
        if(e.target.matches(iniciarAlarma)){
            alarmaTempo=setTimeout(() => {
                $alarma.play();
             }, 1000);
            d.querySelector(iniciarAlarma).setAttribute("disabled", "");
        }
        if(e.target.matches(detenerAlarma)){
            clearTimeout(alarmaTempo);
            $alarma.pause();
            $alarma.currentTime=0;
            d.querySelector(iniciarAlarma).removeAttribute("disabled", "");
        }
        });
    }
    