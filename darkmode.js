export default function darkmode(dark) {
const d=document;
const $moon=d.getElementById('moon')
const $sun=d.getElementById('sun')
const $selectores=d.querySelectorAll('[data-dark]');
const ls=localStorage;

const ligthMode=()=>{
    $selectores.forEach((el)=>el.classList.remove(dark));
    $moon.classList.remove('quitar')
     $sun.classList.add('quitar')
     ls.setItem('theme', 'light');  
}
const darkmode=()=>{
    $selectores.forEach((el)=>el.classList.add(dark));       
 $moon.classList.add('quitar')
 $sun.classList.remove('quitar')
 ls.setItem('theme','dark');
}

d.addEventListener('click',(e)=>{
 if(e.target===$moon){
  darkmode();
}if(e.target===$sun){
  ligthMode();
}
})

d.addEventListener('DOMContentLoaded',(e)=>{
if(ls.getItem('theme')===null){
    ls.setItem('theme','ligth')
}
if(ls.getItem('theme')==='ligth'){
    ligthMode();
}
if(ls.getItem('theme')==='dark'){
    darkmode();
}
})
}