// Exemplos de callbacks em JS
function nome(nome = 'alleph', callbacks) {
    console.log(nome);
    if (callbacks) callbacks();
}

function nome2(nome = 'nogueira', callbacks) {
    console.log(nome);
    if (callbacks) callbacks();
}

function nome3(nome = 'oliveira', callbacks) {
    console.log(nome);
    if (callbacks) callbacks();
}


nome(undefined, function() {
    nome2(undefined, function() {
        nome3(undefined, function() {
            console.log('Termino das callbacks');
        });
    });
});