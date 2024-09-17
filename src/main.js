document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculo-area').addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        
        let base = document.getElementById('base').value
        base = parseInt(base)

        let altura = document.getElementById('altura').value
        altura = parseInt(altura)

        let areaCalculada = base * altura
        alert(areaCalculada)
    });
});


