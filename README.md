#  O Que é Jquery ?

### Jquery é um Biblioteca do JavaScript Ja Foi Bastante Utilizada Antigamente, mas com a evolução do JavaScript caiu Bastante de Uso, Porem estou Estudando para Entender como ele Realmente Funciona, e Não ficar Completamente Perdido quando for Pegar Um Projeto que Utiliza Jquery.
<br />

# Primeiro Passos

- $("Elemento").hide() - Ira Esconder o Elemento Passado

- .show() - Exiba os elementos correspondentes.

```

$(".titulo").hide() // por Padrão ira estar Escondido

setTimeout(() => {

}, 2000)

```

- $.noConflict();  caso eu esteja Utilizando um FrameWork, Que o $ e retirar o possível conflitos. Apos Utilizar ele vai acontecer um Erro no console, porque é preciso passar Invés de $, Jquery(".titulo")....


# Eventos

- $(".titulo").click() - Para Eventos de Click
  
- $(".titulo").mouseenter() - Evento para Passar o Mouse Por Cima

- $(".titulo").mouseleave() - Evento de Saida, por Exemplo selecionei o titulo, vou passar o mouse por cima, apos retirar essa função Dispara

- $(".titulo").dbclick() - Para Capturar Eventos de Dois Click

# Animação

# Exemplos: 

## Fade


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

## Slide

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

~~~~ javascript

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

~~~~


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