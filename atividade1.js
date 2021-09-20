function comprar(escolha) {
    if(escolha == "hatch") {
        console.log("Compra esfetuada com sucesso!")
    } else if(escolha != "hatch") {
        console.log("Tem certeza que não prefere este modelo?")
    } else {
        console.log("Não trabalhamos com este tipo de automóvel aqui")
    }
}

comprar("hatch")