var form = document.getElementById("form-cursos")
var meusCursos = [];
form.addEventListener("Submit", function (event) {
    event.preventDefault();

    var nomeCurso = document.getElementById("nomeCurso").value;
    var cargaCurso = document.getElementById("carga-horaria-curso").value;

    

    var objetocurso = {
        nome: nomeCurso,
        cargahoraria:cargaCurso

    }



    meusCursos.push(objetocurso)
    
    console.log("minha lista de curso :", meusCursos)

    meusCursos.forEach(curso =>{
        var minhaLi = document.getElementById("li");

        minhaLi.innertext = curso.nome 
        var lista =document.getElementById("minha-lista");

        lista.appendChild(minhaLi)

    })

})