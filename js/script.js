let rec;
    if(!("webkitSpeechRecognition" in window)){
        alert("no puedes usar la API");
    } else {
        rec= new webkitSpeechRecognition();
        rec.lang= "es-AR";
        rec.continuous = true;
        rec.interimResults = true;
        rec.addEventListener("result",iniciar);
    }
function iniciar(event){
    for (i= event.resultIndex; i < event.results.length; i++){
        document.getElementById("texto").innerHTML = event.results[i][0].transcript;
    }
}

rec.start();


document.getElementById('hablar').addEventListener("click",()=>{
        decir(document.getElementById("textoo").value);
});

function decir(textoo){
    speechSynthesis.speak(new SpeechSynthesisUtterance(textoo));
}