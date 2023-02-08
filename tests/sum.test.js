
/**
 * * Création d'un test simple
 * * avec require d'un fichier externe
*/

// Methode fournie en globale par Jest qui va appeler les fichier test ou spec et donner l'asertion library
// Param 1 = que doit faire le fonction testée
// Param 2 le test en lui même

const sum = require('../sum');
it('sum() should do basic addition', function() {
    //Création du résultat du test
    const result = sum(1, 2);
    // Est-ce que result vaut bien 3
    expect(result).toBe(3)
});


/**
* * Création de tests groupés en scénarios
*/

describe('Pack démo', function() {

    // Possibilité d'utiliser des méthodes telles que beforeEach, BeforeAll, AfterAll...

    it('Démo somme 1', function() {
        const a = 2 + 2;
        expect(a).toBe(4)
    });

    it('Démo somme 1', function() {
        const a = 2 + 2;
        expect(a).toBe(4)
    });
});