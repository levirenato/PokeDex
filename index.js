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