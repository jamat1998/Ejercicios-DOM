const d=document;
let y=0;
let x=0;
export function moverpelota(e,pelota,fondo){
const $ball=d.querySelector(pelota);
const $stage=d.querySelector(fondo);
const limitPelota=$ball.getBoundingClientRect();
const limitFondo=$stage.getBoundingClientRect();
console.log(e.keyCode)
console.log(e.key)
console.log(limitPelota,limitFondo)
switch (e.keyCode) {
        case 37:
        if(limitPelota.left>limitFondo.left){
            e.preventDefault();
            x--;
        }
        break;
        case 38:
            if(limitPelota.top>limitFondo.top){
                e.preventDefault();  
                y--;
            }
        break;
        case 39:
            if(limitPelota.right<limitFondo.right){
                e.preventDefault();
                x++;
            }
        break;
        case 40:
            if(limitPelota.bottom<limitFondo.bottom){
                e.preventDefault();
                y++;
            }
        break;
}
$ball.style.transform=`translate(${x * 10}px,${y * 10}px)`;
}