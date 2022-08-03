export default function scrolltop(up,icon){
    const d=document;
    const w=window;
    d.addEventListener("click",(e) => {
        if(e.target.matches(up) || e.target.matches(icon)){
            w.scrollTo ({
                behavior:"smooth",
                top:0
            }) 
        }
    });
       d.addEventListener("scroll",(e)=>{
           if(w.pageYOffset > 700){
        d.querySelector(up).classList.remove("hidden")
          }else
          d.querySelector(up).classList.add("hidden")
});
}