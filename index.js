let id = Math.floor(Math.random() * 151);
fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        
        let imagemSrc = data.sprites.front_default
        if (imagemSrc == null)
            imagemSrc = data.sprites.front_default

        document.getElementById('pokemon-imagem').src = imagemSrc
        document.getElementById('nome-pokemon').innerText = data.name
        document.getElementById('poke-id').innerText = data.id

        let html = ''
        for (const i of data.types) {   
            html += `<li class="pokemon-tipos-item ${i.type.name}">${i.type.name}</li>`
        }
        
        document.getElementById('pokemon-tipos-lista').innerHTML = html
        document.getElementById('poke-peso').innerText = "WH " + data.weight + " Kg"
        document.getElementById('poke-altura').innerText = "HT " + data.height + " m"

        let status = ""
        for (const texto of  data.stats) {
            status += 
            `<li>
            <p>${texto.stat.name.replace("special-","sp.").replace("attack","atk.").replace("defense","def.")}</p>
            <P>${texto.base_stat}</P>
            <div class="barra">
                <div class="barra-valor" style="width:${texto.base_stat}px"></div>
            </div>
            </li>`
        }
        
        document.getElementById('skill-lista').innerHTML = status
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/' + id)
    .then(function (response) {
        return response.json()
    }).then(function (data2) {
        let descricao = ""
        for (const texto of  data2.flavor_text_entries) {
            
            if(texto.language.name == "en"){
                descricao = texto.flavor_text
                break
            }
        }
        
        document.getElementById('descricao').innerText = descricao.replace("\n"," ").replace("\f"," ")
    })