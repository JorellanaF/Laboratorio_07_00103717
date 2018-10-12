var container = document.getElementById("c1");
container.innerText="¡Hola Mundo!";
container.style.backgroundColor="#000000";
container.style.color="#1cb723";
container.style.width="200px";
container.style.height="200px";
container.innerHTML="<input type=text placeholder='Escriba su texto'>";

var containers=document.querySelectorAll(".c2");

for(i=0;i<containers.length;i++){
    containers[i].style.backgroundColor= '#009999';
    containers[i].innerHTML="<input type='text' placeholder='EScriba sdu texto'>";
};