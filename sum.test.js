const sum = require('./sum');

/**
* * Création du test
*
*/

// Methode fournie en globale par Jest qui va appeler les fichier test ou spec et donner l'asertion library
// Param 1 = que doit faire le fonction testée
// Param 2 le test en lui même
test('sum() should do basic addition', () => {
    //Création du résultat du test
    const result = sum(1, 2);
    // Est-ce que result vaut bien 3 ?
    expect(result).toBe(3)
})