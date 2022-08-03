export default function hamburgerMenu(panelbtn,panel,menuLink){
    const d = document;
    d.addEventListener("click",(e) => {
        if(e.target.matches(panelbtn) || e.target.matches(`${panelbtn} *`)){
    d.querySelector(panel).classList.toggle("is-active");
    d.querySelector(panelbtn).classList.toggle("is-active");
    d.querySelector('.y').classList.toggle('hiddeny');
}
 if(e.target.matches(menuLink)){
    d.querySelector(panel).classList.remove("is-active");
    d.querySelector(panelbtn).classList.remove("is-active");
    d.querySelector('.y').classList.remove('hiddeny');
 }        
});
  }