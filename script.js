
// maneira de buscar todos os irmão do elemento selecionado, ou seja todos elementos que estão no mesmo nível

let selected = $("#div3").siblings()

let nextAll = $("#div3").nextAll() // pega todos elementos irmão porem ele filtra os que vem depois deles por exemplo nesse caso vai retornar #div4 e #div5

let nextUntil = $("#div1").nextUntil("#div5") 

let next = $("#div3").next() // so trais o quem vem logo em seguida

let prev = $("#div3").prev() // pega o quem vem antes dele

let prevAll = $("#div3").prevAll() // pega todos elementos quem vem antes do selecionado

let prevUntil = $("#div5").prevUntil("#div1")


console.log(prevUntil)