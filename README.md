#  O Que é Jquery ?

### Jquery é um Biblioteca do JavaScript Ja Foi Bastante Utilizada Antigamente, mas com a evolução do JavaScript caiu Bastante de Uso, Porem estou Estudando para Entender como ele Realmente Funciona, e Não ficar Completamente Perdido quando for Pegar Um Projeto que Utiliza Jquery.
<br />

# Primeiro Passos

~~~~ javascript

$("Elemento").hide() - Ira Esconder o Elemento Passado

.show() - Exiba os elementos correspondentes.


$(".titulo").hide() // por Padrão ira estar Escondido

setTimeout(() => {

}, 2000)


$.noConflict();  caso eu esteja Utilizando um FrameWork, Que o $ e retirar o possível conflitos. Apos Utilizar ele vai acontecer um Erro no console, porque é preciso passar Invés de $, Jquery(".titulo")....

~~~~

# Eventos

~~~~ javascript

- $(".titulo").click() - Para Eventos de Click
  
- $(".titulo").mouseenter() - Evento para Passar o Mouse Por Cima

- $(".titulo").mouseleave() - Evento de Saida, por Exemplo selecionei o titulo, vou passar o mouse por cima, apos retirar essa função Dispara

- $(".titulo").dbclick() - Para Capturar Eventos de Dois Click

~~~~

# Animação
 
# Fade

~~~ javascript

  // efeitos Transaction Recebe como Parâmetro, Números, tags ja Definidas como por exemplo 'slow' e 'fast'

      $("#button1").click(() => {
        $("#square").fadeOut(3000); // ao clicar no elemento Selecionado ele Ira Sumir, com um Efeito de Transição
      }); 

      $("#button2").click(() => {
        $("#square").fadeIn(3000); // ao clicar no elemento ele ira aparecer com um efeito de transição
      }); 

      $("button").click(() => {
        $("#square").fadeToggle() // para usar os dois de cima, se não tiver aparecendo vai aparecer e vice versa
      })

      $("#button").click(() => {
        $("#square").fadeTo(2000, 0.6) // ele Recebe como Parâmetro a duração e quantidade de opacidade, ele funciona como findIn e o findout
      })

~~~

# Slide

~~~ javascript

$("#button").click(() => {
  $("#square").slideUp(3000) // oculte os elementos correspondentes com um movimento deslizante.
})

$("#button").click(() => {
  $("#square").slideDown(300) //exibe os elementos correspondentes com um movimento deslizante
})

$("#button").click(() => {
  $("#square").slideToggle(3000) // exibe ou oculta os elementos correspondentes com um movimento deslizante.
})

~~~

## Animate

~~~ javascript

 $("#button").click(() => {
        $("#square").animate({ // animação que recebe como parâmetro um Objeto para ser passado as modificações que Desejo aplicar
          opacity: 0.6,
          left: "1000",
          top: "400",
          height: "toggle"
        }, 3000)
      })

      // para Pausar uma Animação

       $("#stop").click(() => {
        $("#square").stop()
      })

~~~ 

# Callback

~~~~ javascript

    $("#button").click(() => {
      $("#square-black").hide(2000, () => { // apos o quadrado preto se esconder o outro que esta com display none ira aparecer e fazer uma animação
        $("#square").show().animate({
          left: "100vw",
          opacity: 0.3,
        }, 3000)
      })

    })

~~~~

# Selecionando elementos


~~~~ javascript

  find() - Descrição: obtenha os descendentes de cada elemento no conjunto atual de elementos correspondentes, filtrados por um seletor, objeto jQuery ou elemento, ele é Obrigatário Receber Um Parâmetro para Funcionar.

  children() - Descrição: obtenha os filhos de cada elemento no conjunto de elementos correspondentes, opcionalmente filtrados por um seletor.

  Diferença Entre os Dois:

  O .children()método difere de .find()que .children()apenas percorre um único nível abaixo da árvore DOM, enquanto .find()pode percorrer vários níveis para selecionar elementos descendentes (netos, etc.) também


~~~~

# Encadeamento

~~~ javascript

  Até agora temos estado a escrever jQuery declarações um de cada vez (um após o outro).

  No entanto, não há uma técnica chamada de encadeamento, que permite executar comandos múltiplos jQuery, um a seguir ao outro, no mesmo element(s) .

  Dica: Desta forma, os navegadores não tem que encontrar o mesmo element(s) mais de uma vez.

  Para encadear uma ação, você simplesmente anexar a ação para a ação anterior.

  O exemplo a seguir cadeias juntos os css(), slideUp() , e slideDown() métodos. O "p1" primeiro elemento muda para vermelho, então ele desliza para cima e, em seguida, ele desliza para baixo:

  Exemplo:

  $("#p1").css("color","red").slideUp(2000).slideDown(2000);

  Nós também poderia ter acrescentado mais chamadas de método, se necessário.

  Dica: Quando o encadeamento, a linha de código pode se tornar bastante longo.No entanto, jQuery não é muito rigoroso sobre a sintaxe; você pode formatá-lo como quiser, incluindo quebras de linha e recuos.

  Isso também funciona muito bem:

  Exemplo:
  
  $("p1").css("color", "red")
    .slideUp(2000)
    .slideDown(2000)

~~~

# Lendo Conteúdo de Um Elemento: 

~~~~ javascript

  Pense que Voce tenha uma Lista, com Vários Li dentro, e voce quer Ler os Items que estão sendo passado, dentro deles, em formato de texto:

  $("lista").text() 
  
  Para ver Em HTML

  $("lista").html()

  Ai Fica uma Duvida, como Vou Ler o Conteúdo que esta dentro de um valor de um input?, não se Preocupe Temos o Método .val(), onde pegara os valores do elemento passado, Exemplo:

  $("input").val(), ele pode receber como parâmetro uma String, caso eu queira Alterar o Valor que esta por Default

  Agora Imagine, que Voce Queira Ler Algum Atributo, que esteja dentro de um Elemento HTML, Como Por Exemplo, Pegar o Name dessa Situação:

  <input type="text" id="novo" name="novo" value="Novo Item" />

  Para isso Temos

  $("#novo").attr("name"), Lembrando que o attr é Obrigatório Receber um Parâmetro, Caso eu Queira Alterar Algo nele, ele Recebe como Segundo Parâmetro, o novo valor que eu desejo passar para esse atributo, pode ser String e tbm Function.

~~~~

# Removendo Elementos


~~~~ javascript

$("#lista1").hide() //  Ocultar
$("#lista1").empty() // a lista permaneçe so apaga os filho dela
$("li").remove(".item1, .item2") //  Remove, e Recebe como parâmetro qual item desejo remover


~~~~

# Inserindo Elementos

~~~ javascript

lista1.append("<li>Teste</li>") // adiciona um elemento no final da lista
lista1.prepend("<li>Teste CIma</li>") // Adiciona um elemento no topo da lista

lista1.after("<li>Teste</li>") // criara uma Li, porem quando minha lista selecionada acabar
lista1.before("<li>Teste</li>") // criara uma Li, porem antes da minha lista selecionada

~~~

# Modificando Css de

~~~ javascript

setTimeout(() => {
  $("h1").addClass("bg-color");
}, 1000);

setTimeout(() => {
  $("h1").removeClass("bg-color");
}, 4000);

addClass("NOME-CLASS"); // ADICIONA
removeClass("Nome-Class"); // REMOVE
toggleClass("Nome-class"); // Faz Ambos

$("h1").css(
  { "background-color": "gray",
    "font-size": "40px",
    "color": "white",
    "text-align": "center"
}
);

~~~


# Dimensão

~~~ javascript

let box = $(".box");

// Lembrando que o Resultados que sera Mostrado em Tela, esta puxando info
// do CSS, Colocado na class ou no elemento Selecionado

box.append("largura:", box.width(), "<br>", 
  "largura  + padding:", box.innerWidth(), "<br>",
  "largura + padding + borda", box.outerWidth(), "<br>",
  "largura + padding + borda + margem:", box.outerWidth(true)
);

~~~

# Selecionando Elementos Irmão (Siblings)


~~~ javascript

// maneira de buscar todos os irmão do elemento selecionado, ou seja todos elementos que estão no mesmo nível

let selected = $("#div3").siblings()

let nextAll = $("#div3").nextAll() // pega todos elementos irmão porem ele filtra os que vem depois deles por exemplo nesse caso vai retornar #div4 e #div5

let nextUntil = $("#div1").nextUntil("#div5") 

let next = $("#div3").next() // so trais o quem vem logo em seguida

let prev = $("#div3").prev() // pega o quem vem antes dele

let prevAll = $("#div3").prevAll() // pega todos elementos quem vem antes do selecionado

let prevUntil = $("#div5").prevUntil("#div1")


console.log(prevUntil)


~~~