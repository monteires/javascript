// Ciclo de vida de uma variável -> Declaração -> Inicialização -> Atribuição
// 1. Declaração -> Registrar um nome
// 2. Inicialização -> Variável é iniciada com um valor undefined

/*
  VAR: Inicializada no escopo da função.
  -> Não respeita o bloco.
  -> Permite redeclaração.
  -> Permite reatribuição.
*/

// Declaração 
var pi = 3.141592;

// Redeclaração
pi = 3;

// Reatribuião 
var pi = 3.14;

// Bloco
if (true) {
  var pi = 3.14;
}

/*
  LET: É declarada no escopo da função, porém só é iniciada posteriormente.
  -> Respeita o bloco
  -> Permite Reatribuição
  -> Não Permite redeclaração
*/

// Declaração
let piLet = 3.141592;

// Reatribuição
piLet = 3.14;

// Bloco
if(true) {
  let pi = 3.14;
}

/*
  CONST: É declarada no escopo da função, porém só é iniciada posteriormente.
  -> Respeita o bloco
  -> Não Reatribuição
  -> Não Permite redeclaração
*/

// Declaração 
const piConst = 3.141592;

// Bloco
if (true) {
  const pi = 3.141592;
}

/*
 Declaração de variável sem VAR, LET ou CONST (Não fazer isso!!!).
 Quando é declarada no escopo sem um prefixo, ela é definida com global.
*/

piGlobal = 3.14;

/*
 Identificador de variável.
 Começar por: a-zA-Z_$
 Seguido por: a-zA-Z0-9_$
*/

let example;
let Example;
let _example;
let $example;