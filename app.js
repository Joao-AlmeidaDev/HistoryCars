function pesquisar(){
    
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if(campoPesquisa == ""){
        section.innerHTML = "Nada foi encontrado" 
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let foto = "";
    let descricao = "";
    let tags = "";
    

    for (let dado of dados){ 
        titulo = dado.titulo.toLowerCase()
        foto = dado.foto;
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleString()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado"> 
                <h2>
                    ${dado.titulo}
                </h2>
                <img src= ${dado.foto} width="250px" height="150px">
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank"
                    >Mais Informações</a
                >
                </div>
    
        `
        }
            
    
        
    };
    if(!resultados){
        resultados = "<p> Nada foi encontrado. Digite o nome do carro</p>"
    }
    section.innerHTML = resultados;
    
};       


//console.log(dados);


