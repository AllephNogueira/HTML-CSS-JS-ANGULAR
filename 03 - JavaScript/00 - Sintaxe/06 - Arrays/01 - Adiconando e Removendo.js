const familiares = ['Alleph', 'Fernanda', 'Crixus', 'Amora']
/** Podemos começar uma lista vazia
 * Também podemos ter tipos diferentes como: Strings, number...
 */


console.log(familiares);
console.log(familiares[1]);

/** Adicionando de duas maneiras diferentes. */
    familiares.push('Bethovem')
    console.log(familiares);

    familiares[5] = 'Calopsita'
    console.log(familiares);

    /** Substituindo um elemento */
    familiares[5] = 'Bjiorn'
    console.log(familiares);


/** Removendo.
 */
    console.log(familiares.pop()); // REMOVE O ULTIMO
    console.log(familiares.shift()); // REMOVE O PRIMEIRO
    console.log(familiares);
    