// projeto Trivia

// outra forma de teste com loop
//cria o loop infinito
//while (true){
// recebe o valor nome
//var name=prompt("Digite Seu Nome:");
// retorna o alerta caso o usuario nao digitar
//if (name=="")
//   alert("Digite Seu Nome Para Iniciar O Jogo:");
//parar o loop infinito
//else break;
//}

// função do botão Entrar
function enterGame(){

  var usuario;
  //declara a variavel Name
  var name;
  do {
  // recebe o valor Name
  name = prompt("Digite Seu Nome Para Iniciar O Jogo:")
  //Cria o loop. (irá sair do Loop quando for digitado seu nome ou cancelado).
  } while (name == "");

//se o usuario não digitou o nome não vai para proxima tela
if (name =="null" || name == null || name == "" )
  return;

//econde a 1° tela quando nao for mais utilizada
 document.getElementById("tela-inicial").className="hide";

//junta nome do usuario com a mensagem
 usuario = name ;
 document.getElementById("nome-usuario").innerHTML=usuario;

//mostra a segunda tela quando for chamada
 document.getElementById("tela-tema").className="show";

}

//função que chama as questoes do tema filme
function gameFilme(){

  var questionsFilme=
  ["1- Qual o filme com a Maior bilheteria da história cinematografica? \n A) Titanic \n B) Os Vingadores \n C) Avatar",
  "2- Qual saga de livros que virou filme tem como personagens bruxos? \n A) Jogos Vorazes \n B) Harry Potter \n C) As Cronicas de Narnia ",
  "3- Qual filme tem como trilha sonora a musica 'Over the Rainbow'? \n A) O Mágico de Oz \n B) O Vento Levou \n C) O Passaro Azul " ];

//Respostas
var respFilme=[3];

//fazer as 3 perguntas (transforma toLowerCase para ficar minusculo ou toUpperCase para ficar maiusculo )
for(var i=0; i<3; i++){
//ele inicia como falso, verifica o que o usuario digitou se não for uma opção
//valida ele repete o processo.
var opcaoValida=false;
  do {
      var resultado=  prompt(questionsFilme[i]).toUpperCase();
      if (resultado == 'A'|| resultado == 'B'|| resultado=='C'){
          respFilme[i] = resultado;
          opcaoValida = true;
      }else {
        alert("Opção Invalida");
       opcaoValida = false;
      }
// verifica a condição se é igual a falso
  } while (opcaoValida == false);
}

//econde a 2° tela quando nao for mais utilizada
 document.getElementById("tela-tema").className="hide";

//junta nome do usuario com a mensagem e valida se esta correta ou incorreta
 var respostaUsuario = "Sua Resposta Foi: " + respFilme[0];
 document.getElementById("respFilme1").innerHTML=respostaUsuario;

 if (respFilme[0] == 'C'){
 document.getElementById("respFilme1C").className="correta";
} else {
  document.getElementById("respFilme1" +respFilme[0] ).className="incorreta";
}

var respostaUsuario = "Sua Resposta Foi: " + respFilme[1];
document.getElementById("respFilme2").innerHTML=respostaUsuario;

if (respFilme[1] == 'B'){
document.getElementById("respFilme2B").className="correta";
} else {
 document.getElementById("respFilme2" +respFilme[1] ).className="incorreta";
}

var respostaUsuario = "Sua Resposta Foi: " + respFilme[2];
document.getElementById("respFilme3").innerHTML=respostaUsuario;

if (respFilme[2] == 'A'){
document.getElementById("respFilme3A").className="correta";
} else {
 document.getElementById("respFilme3" +respFilme[2] ).className="incorreta";
}
//mostra a terceira tela quando for chamada
 document.getElementById("tela-respostas-filme").className="show";
}

//função que chama as questoes do tema Serie
function gameSerie(){
  var questionsSerie=
  ["1- Qual o seriado com mais temporadas da história? \n A) Doctor Who \n B) Vila Sesamo \n C) Os Simpsons",
  "2- Qual série tem um personagem chamado Sheldon? \n A) The big bang theory \n B) Flash \n C) Lost",
  "3- Onde se passa a serie 'Sexy and the city'? \n A) Paris \n B) Roma \n C) Nova York" ];

  var respSerie=[3];

  //fazer as 3 perguntas (transforma toLowerCase para ficar minusculo ou toUpperCase para ficar maiusculo )
  for(var i=0; i<3; i++){
  //ele inicia como falso, verifica o que o usuario digitou se não for uma opção
  //valida ele repete o processo.
  var opcaoValida=false;
    do {
        var resultado=  prompt(questionsSerie[i]).toUpperCase();
        if (resultado == 'A'|| resultado == 'B'|| resultado=='C'){
            respSerie[i] = resultado;
            opcaoValida = true;
        }else {
          alert("Opção Invalida");
         opcaoValida = false;
        }
  // verifica a condição se é igual a falso
    } while (opcaoValida == false);
  }

  //econde a 2° tela quando nao for mais utilizada
   document.getElementById("tela-tema").className="hide";

  //junta nome do usuario com a mensagem e valida se esta correta ou incorreta
   var respostaUsuario = "Sua Resposta Foi: " + respSerie[0];
   document.getElementById("respSerie1").innerHTML=respostaUsuario;

   if (respSerie[0] == 'B'){
   document.getElementById("respSerie1B").className="correta";
  } else {
    document.getElementById("respSerie1" +respSerie[0] ).className="incorreta";
  }

  var respostaUsuario = "Sua Resposta Foi: " + respSerie[1];
  document.getElementById("respSerie2").innerHTML=respostaUsuario;

  if (respSerie[1] == 'A'){
  document.getElementById("respSerie2A").className="correta";
  } else {
   document.getElementById("respSerie2" +respSerie[1] ).className="incorreta";
  }

  var respostaUsuario = "Sua Resposta Foi: " + respSerie[2];
  document.getElementById("respSerie3").innerHTML=respostaUsuario;

  if (respSerie[2] == 'C'){
  document.getElementById("respSerie3C").className="correta";
  } else {
   document.getElementById("respSerie3" +respSerie[2] ).className="incorreta";
  }
  //mostra a terceira tela quando for chamada
   document.getElementById("tela-respostas-serie").className="show";
  }

function voltarTelaTema(){
  //econde a 1° tela quando nao for mais utilizada
   document.getElementById("tela-respostas-filme").className="hide";
   document.getElementById("tela-respostas-serie").className="hide";

//limpando as respostas se estao correta ou incorreta - tira a cor
for (var i = 1; i < 4; i++) {
  document.getElementById("respFilme"+i+"A").className = "";
}

for (var i = 1; i < 4; i++) {
  document.getElementById("respFilme"+i+"B").className = "";
}

for (var i = 1; i < 4; i++) {
  document.getElementById("respFilme"+i+"C").className = "";
}
  //mostra a segunda tela quando for chamada
   document.getElementById("tela-tema").className="show";
}

//limpa a tela como o F5
function sair(){
  window.location.reload()
}
