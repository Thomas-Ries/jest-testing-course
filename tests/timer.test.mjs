import { sleep } from '../timer.js';

describe('Timer', function() {

    // on déclare la fonction de test comme async car la fonction à tester l'est également
    it('should wait 3 seconds', async function() {
        const t = Date.now();
        await sleep(3);
        // Je m'attends à avoir attendu au moins 3 secondes
        expect(Date.now() - t).toBeGreaterThanOrEqual(3000);
    })

})