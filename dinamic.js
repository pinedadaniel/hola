const array_concursantes=
		[
		//ARRAY DE OPCIONES

        1,2,3,4,5,6,7,8,9,10,11
		];

let canvas=document.getElementById("idcanvas");
let context=canvas.getContext("2d");
let center=canvas.width/2;

context.beginPath();
context.moveTo(center,center);
context.arc(center,center,center,0, 2*Math.PI);
context.lineTo(center,center);
context.fillStyle ='#33333333';
context.fill();

context.beginPath();
context.moveTo(center,center);
context.arc(center,center,center-10,0, 2*Math.PI);
context.lineTo(center,center);
context.fillStyle ='black';
context.fill();
let longi = '';

for (var i = 0; i < array_concursantes.length; i++) {
    context.beginPath();
    context.moveTo(center,center);
    longi = context.arc(center,center,center-20,i*2*Math.PI/array_concursantes.length, (i+1)*2*Math.PI/array_concursantes.length);
    context.lineTo(center,center);
    context.fillStyle =random_color();
    context.fill();

    context.save();
    context.translate(center, center);
    context.rotate(3*2*Math.PI/(5*array_concursantes.length)+i*2*Math.PI/array_concursantes.length);
    context.translate(-center, -center);
    context.font = "13px Comic Sans MS";
    context.textAlign = "right";
    context.fillStyle = "white";
    context.fillText(array_concursantes[i], canvas.width-30, center);
    context.restore();
}

let pos_ini= -90;
let clic=0;
let movement;
function sortear(){
    if (clic==0) {
        let canvas=document.getElementById("idcanvas");
        movement=setInterval(function(){
            pos_ini+=10;
            canvas.style.transform='rotate('+pos_ini+'deg)';
        },60);
        clic=1;
        document.getElementById("idestado").innerHTML="Detener";
    }else{
        clearInterval(movement);
        clic=0;
        document.getElementById("idestado").innerHTML="Sortear";
        const  gradoFinal = pos_ini + 90;
        const gradoXOpcion = 360 / array_concursantes.length;
        const residuo = gradoFinal % gradoXOpcion;
        let opcionesRecorridas =  gradoFinal / gradoXOpcion ;
        const result = ((residuo * 100) / gradoXOpcion) /100;
        let posicionFinal = (array_concursantes.length - 1) - (Math.floor(opcionesRecorridas) % array_concursantes.length);
        console.log(posicionFinal);
        console.log('residuo', + residuo);
        console.log(5 % 11)
        console.log('grado final = ' + gradoFinal);
        console.log('grado x opcion = ' + gradoXOpcion);
        console.log('trigualos recorridos= ' + opcionesRecorridas);
        console.log('result', + result);
        console.log('opcionesRecorridas finales', + (opcionesRecorridas + result));
        console.log('OPCION FINAL = ', + Math.floor(opcionesRecorridas));
        console.log('modulo =' + (Math.floor(opcionesRecorridas) % array_concursantes.length));
        console.log('EL GANADOR ES = ' + array_concursantes[posicionFinal])
    }
}

function random_color(){
    let ar_digit=['2','3','4','5','6','7','8','9'];
    let color='';
    let i=0;
    while(i<6){
        let pos=Math.round(Math.random()*(ar_digit.length-1));
        color=color+''+ar_digit[pos];
        i++;
    }
    return '#'+color;
}
