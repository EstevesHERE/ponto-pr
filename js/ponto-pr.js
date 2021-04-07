$("#enviar").on('click', function (event) {

    var txtarea = ($("#txtarea").val());

    var obj = new Object();

    obj = txtarea.split("\n");

    console.log(obj)
    

    // Array com TODOS os Nomes
    var nomes = [];
    var horas = [];
    var prisoes = [];
    var acoes = [];
    var blitz = [];

    var cont = 0;
    var aux;
    var nomeRepetidoAtual;

    for(var i = 0; i < obj.length; i++){    

        
        //Formata linha sem espaço e tudo minusculo        
        obj[i] = obj[i].trim();
        obj[i] = obj[i].replace(/ /g,'');
        obj[i] = obj[i].toLowerCase();      
        
        // COMEÇA COM NOME
        if(obj[i].startsWith("nome")){

            // Formata nome da pessoa
            obj[i] = obj[i].replace("nome:@", " ");
            obj[i] = obj[i].replace("nome@", " ");

            nomePonto = obj[i];      
            
            isRepetido = statusNome(nomePonto, nomes);

            // Verifica se ja não possue no array
            if(isRepetido == "false"){

                // Adiciona no vetor NOME 
                nomes.push(nomePonto)
                nomeRepetidoAtual = null;

                prisoes.push(0);
                acoes.push(0);
                blitz.push(0);
                aux = cont;
                cont++;
            }       
            
            if(typeof isRepetido === 'number') {

                nomeRepetidoAtual = isRepetido;
            }

        }

        // COMEÇA COM PRISÕES
        else if(obj[i].startsWith("prisões")){

            prisaoDia = obj[i].replace(/[^0-9]+/g, "");

            prisaoDia = parseInt(prisaoDia);        

            console.log(prisaoDia)
                
            // if(nomeRepetidoAtual == null){

            //     if(isNaN(prisaoDia) || prisaoDia == null) {
            //         console.log("PRIMEIRA VEZ NULO")  
            //         console.log(nomeRepetidoAtual)
            //         console.log(prisaoDia)
            //         prisoes.push(0);
            //     }

            //     else{               
            //         console.log("PRIMEIRA VEZ ")  
            //         console.log(nomeRepetidoAtual)
            //         console.log(prisaoDia) 
            //         prisoes.push(prisaoDia);
            //     }
                    
            // }

            // if(typeof nomeRepetidoAtual === 'number'){                    
               
                if(isNaN(prisaoDia)) {

                    if(nomeRepetidoAtual == null){
                        prisoes[aux] += 0;
                    }
                    
                    prisoes[nomeRepetidoAtual] += 0; 
                    
                }

                else{

                    if(nomeRepetidoAtual == null){
                        prisoes[aux] += prisaoDia;
                    }

                    prisoes[nomeRepetidoAtual] += prisaoDia; 
                }
                           
                    
            // }

        }

        // COMEÇA COM AÇÕES
        else if(obj[i].startsWith("ações")){

            acaoDia = obj[i].replace(/[^0-9]+/g, "");

            acaoDia = parseInt(acaoDia);        
                
            // if(nomeRepetidoAtual == null){

            //     if(isNaN(acaoDia)) {
            //         acoes.push(0);
            //     }

            //     else{                    
            //         acoes.push(acaoDia);
            //     }
                    
            // }

            // if(typeof nomeRepetidoAtual === 'number'){                    
               
            //     if(isNaN(acaoDia)) {
            //         acoes[nomeRepetidoAtual] += 0; 
            //     }
            //     else{
            //         acoes[nomeRepetidoAtual] += acaoDia; 
            //     }                           
                    
            // }

            if(isNaN(acaoDia)) {

                if(nomeRepetidoAtual == null){
                    acoes[aux] += 0;
                }
                
                acoes[nomeRepetidoAtual] += 0; 
                
            }

            else{

                if(nomeRepetidoAtual == null){
                    acoes[aux] += acaoDia;
                }

                acoes[nomeRepetidoAtual] += acaoDia; 
            }

        }

        
        // COMEÇA COM BLITZ
        else if(obj[i].startsWith("blitz")){

            blitzDia = obj[i].replace(/[^0-9]+/g, "");
        
            blitzDia = parseInt(blitzDia);        
                        
            // if(nomeRepetidoAtual == null){
        
            //     if(isNaN(blitzDia)) {
            //         blitz.push(0);
            //     }
        
            //     else{                    
            //         blitz.push(blitzDia);
            //     }
                            
            // }
        
            // if(typeof nomeRepetidoAtual === 'number'){                    
                       
            //     if(isNaN(blitzDia)) {
            //         blitz[nomeRepetidoAtual] += 0; 
            //     }
            //     else{
            //         blitz[nomeRepetidoAtual] += blitzDia; 
            //     }                           
                            
            // }

            if(isNaN(blitzDia)) {

                if(nomeRepetidoAtual == null){
                    blitz[aux] += 0;
                }
                
                blitz[nomeRepetidoAtual] += 0; 
                
            }

            else{

                if(nomeRepetidoAtual == null){
                    blitz[aux] += blitzDia;
                }

                blitz[nomeRepetidoAtual] += blitzDia; 
            }
    
        }
        

        
        

        // COMEÇA COM HORAS
        else if(obj[i].startsWith("horas")){

            temHora = false;

            for(var k = 1; k <= 24; k++){

                // Verifica de 0 a 9 se possue na linha
                if(obj[i].indexOf(k+"") > 0 && obj[i].indexOf(k+"") <= 9){

                    // Pega posição do número
                    horaPosicao = obj[i].indexOf(k+"")

                    // Formata para pegar a hora
                    horaDia = obj[i].substring(horaPosicao, horaPosicao+2);

                    if(hora.indexOf("h") == -1){
                        horaDia = horaDia + "h";
                    }

                    temHora = true;
                    break;
                }

                // Verifica de 9 a 24 se possue na linha
                if(obj[i].indexOf(k+"") > 9 && obj[i].indexOf(k+"") <= 24){

                    // Pega posição do número
                    horaTemp = obj[i].indexOf(k+"")

                    // Formata para pegar a hora
                    horaDia = obj[i].substring(horaTemp, horaTemp+3);

                    if(horaDia.indexOf("h") == -1){
                        horaDia = horaDia + "h";
                    }

                    temHora = true;
                    break;
                }
            }

            // Horas trabalhadas NOT NULL

            // Adicionando hora pela primeira vez
            if(nomeRepetidoAtual == null){
                    
                if(temHora == false){
                    horas.push("0h")
                }

                else{
                    horas.push(horaDia);
                }
                    
            }
                
            // Adicionando hora para nome repetido
            if (typeof nomeRepetidoAtual === 'number') {

                if(temHora == false){
                    horas[nomeRepetidoAtual] +=  "0h";
                }

                else{
                    horas[nomeRepetidoAtual] +=  horaDia;
                }
                    
            }
        }
    }
    
    for(var k = 0; k < 60; k++){   

        horas[k] = hmh.sum(" " + horas[k]).toString();
        
    }       


    

    for(var k = 0 ; k < nomes.length; k++){
        console.log(nomes[k])
        console.log(horas[k])
        console.log("Prisões: " + prisoes[k])
        console.log("Ações: " + acoes[k])
        console.log("Blitz: "+ blitz[k])

        

        $("#info").append(`
        <table>
        <tr>
          <th>Nome</th>
          <th>Horas</th>
          <th>Prisões</th>
          <th>Ações</th>
          <th>Blitz</th>
        </tr>
        <tr>
            <td>${nomes[k]}</td>
            <td>${horas[k]}</td>
            <td>${prisoes[k]}</td>
            <td>${acoes[k]}</td>
            <td>${blitz[k]}</td>
        </tr>
      </table>
        
        
            
        `)
    }
})




function statusNome(nomeLinha, nomeLista){

    for(var i = 0; i < nomeLista.length; i++){

        if(nomeLista[i] == nomeLinha){
            
            return i;
        }
    }

    return "false";
}
