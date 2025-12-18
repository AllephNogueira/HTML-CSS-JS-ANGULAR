// O array ele fica como referencia
// O que seria isso?
// Imagina que na memoria, estamos com um mapa dizendo assim:
/** 
 * A casa do Alleph esta na localização xx1
 * 
 * Se eu passo isso para outro array, ele vai continuar apontando para essa mesma região na memoria
 */

const casaAlleph = ['xx1']

const Alleph = casaAlleph // Dessa forma os 2 estao apontando para o mesmo local na memoria

/**
 * Se eu modifcar o Alleph ou casaAlleph
 * Eu vou estar modificando o mesmo array
 */

/**
 * Agora se a gente quiser criar um novo array, copiando os dados do antigo
 * Precisamos espalhar ele antes, usando o Spread operator
 * Ficando dessa forma
 */

const novoArray = [...casaAlleph]