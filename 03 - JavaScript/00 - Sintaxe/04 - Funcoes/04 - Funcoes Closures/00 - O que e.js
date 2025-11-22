/*
    Resumo (pt-BR):
    - Closure é quando uma função "lembra" do ambiente léxico onde foi criada,
        mesmo se executada fora desse ambiente.
    - Permite acesso a variáveis da função externa mesmo após a execução dela terminar.
    - Uso comum: encapsular estado (variáveis privadas), criar fábricas de funções,
        e preservar valores em callbacks/async.
*/

/* 1) Exemplo simples: a função interna acessa `x` da função externa */
function outer() {
    const x = 42;             // variável do ambiente léxico de `outer`
    return function inner() { // closure: lembra do `x`
        console.log(x);
    };
}

const fn = outer(); // `outer` já terminou, mas `inner` ainda tem acesso a `x`
fn(); // imprime 42

/* 2) Encapsulamento / variável privada com closure */
function createCounter() {
    let count = 0; // privada, só acessível pelas funções retornadas
    return {
        increment() { count += 1; return count; },
        get() { return count; }
    };
}

const counter = createCounter();
console.log(counter.get());      // 0
console.log(counter.increment()); // 1
console.log(counter.get());      // 1
// Não há acesso direto a `count` fora de createCounter

/* 3) Fábrica de funções (partial application) */
function makeAdder(a) {
    return function(b) {
        return a + b; // lembra de `a`
    };
}

const add5 = makeAdder(5);
console.log(add5(3)); // 8

/* 4) Armadilhas com loops e var vs let
     - Com `var` todas as funções fecham sobre a mesma variável (mesmo valor final).
     - Com `let` cada iteração tem sua própria binding lexical.
*/
const funcsVar = [];
for (var i = 0; i < 3; i++) {
    funcsVar.push(function() { console.log('var i =', i); });
}
// i já é 3 quando as funções rodarem
funcsVar.forEach(f => f()); // imprime "var i = 3" três vezes

const funcsLet = [];
for (let j = 0; j < 3; j++) {
    funcsLet.push(function() { console.log('let j =', j); });
}
funcsLet.forEach(f => f()); // imprime 0, 1, 2

/* 5) Padrão module (simples) usando closure */
const MyModule = (function() {
    let secret = 'segredo';
    function reveal() { return secret; }
    function setSecret(s) { secret = s; }
    return { reveal, setSecret };
})();

console.log(MyModule.reveal()); // 'segredo'
MyModule.setSecret('novo');
console.log(MyModule.reveal()); // 'novo'

/* Observações rápidas:
     - Closures mantém referências às variáveis necessárias (não copiam o valor).
     - Podem aumentar tempo de vida de objetos/variáveis — cuidado com retenção de memória.
     - São fundamentais em programação funcional e patterns em JS.
*/