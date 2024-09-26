const express = require('express');
const structureController = require('../controllers/structureCtrl');
const roleController = require('../controllers/roleCtrl');
const checkAuthMiddleware = require('../middleware/check-auth');
const fonctionController = require('../controllers/fonctionCtrl');
const anneeScolaireController = require('../controllers/anneeScolaireCtrl');

const baremeController = require('../controllers/baremeCtrl');
const budgetController = require('../controllers/budgetCtrl');
const classeController = require('../controllers/classeCtrl');
const cycleController = require('../controllers/cycleCtrl');
const economiqueController = require('../controllers/economiqueCtrl');
const emploiController = require('../controllers/emploiCtrl');
const etablissementController = require('../controllers/etablissementCtrl');
const matiereController = require('../controllers/matiereCtrl');
const typeMatiereController = require('../controllers/typeMatiereCtrl');

const router = express.Router();

router.post('/enregistrementStructure', checkAuthMiddleware.checkAuth, structureController.enregistrementStructure);
router.get('/liste_structure', checkAuthMiddleware.checkAuth, structureController.liste_structure);
//router.get('/liste_structure', structureController.liste_structure);
router.put("/modification_structure/:id", checkAuthMiddleware.checkAuth, structureController.modification_structure);
router.delete("/supprimerStructure/:id", checkAuthMiddleware.checkAuth, structureController.supprimerStructure);
router.get('/afficherUneSeulStructure/:id', checkAuthMiddleware.checkAuth, structureController.afficherUneSeulStructure);
router.get('/afficherStructureUtilisateurConnecter',checkAuthMiddleware.checkAuth,structureController.afficherStructureUtilisateurConnecter)
// router.post('/login', userController.login)


/// route gestion des roles

router.post('/enregistrementRole', checkAuthMiddleware.checkAuth, roleController.enregistrementRole);
router.get('/liste_Role', checkAuthMiddleware.checkAuth, roleController.liste_Role);
router.put("/modification_Role/:id", checkAuthMiddleware.checkAuth, roleController.modification_Role);
router.delete("/supprimerRole/:id", checkAuthMiddleware.checkAuth, roleController.supprimerRole);



// route gestion des module
router.get('/liste_Module', checkAuthMiddleware.checkAuth, roleController.liste_Module);


/// route gestion des fonctions

router.post('/enregistrementFonction', checkAuthMiddleware.checkAuth, fonctionController.enregistrementFonction);
router.get('/listeFonction', checkAuthMiddleware.checkAuth, fonctionController.listeFonction);
router.put("/modificationFonction/:id", checkAuthMiddleware.checkAuth, fonctionController.modificationFonction);
router.delete("/supprimerFonction/:id", checkAuthMiddleware.checkAuth, fonctionController.supprimerFonction);




/// route gestion des annee

router.post('/enregistrementAnneeScolaire', checkAuthMiddleware.checkAuth, anneeScolaireController.enregistrementAnneeScolaire);
router.get('/listeAnneeScolaire', checkAuthMiddleware.checkAuth, anneeScolaireController.listeAnneeScolaire);
router.put("/modificationAnneeScolaire/:id", checkAuthMiddleware.checkAuth, anneeScolaireController.modificationAnneeScolaire);
router.delete("/supprimerAnneeScolaire/:id", checkAuthMiddleware.checkAuth, anneeScolaireController.supprimerAnneeScolaire);

router.put("/basculeAnnee/:id", checkAuthMiddleware.checkAuth, anneeScolaireController.basculeAnnee);

/// route gestion des bareme

router.post('/enregistrementbareme', checkAuthMiddleware.checkAuth, baremeController.enregistrementBareme);
router.get('/listebareme', checkAuthMiddleware.checkAuth, baremeController.listeBareme);
router.put("/modificationbareme/:id", checkAuthMiddleware.checkAuth, baremeController.modificationBareme);
router.delete("/supprimerbareme/:id", checkAuthMiddleware.checkAuth, baremeController.supprimerBareme);


/// route gestion des budget

router.post('/enregistrementbudget', checkAuthMiddleware.checkAuth, budgetController.enregistrementBudget);
router.get('/listebudget', checkAuthMiddleware.checkAuth, budgetController.listeBudget);
router.put("/modificationbudget/:id", checkAuthMiddleware.checkAuth, budgetController.modificationBudget);
router.delete("/supprimerbudget/:id", checkAuthMiddleware.checkAuth, budgetController.supprimerBudget);


/// route gestion des classe

router.post('/enregistrementclasse', checkAuthMiddleware.checkAuth, classeController.enregistrementClasse);
router.get('/listeclasse', checkAuthMiddleware.checkAuth, classeController.listeClasse);
router.put("/modificationclasse/:id", checkAuthMiddleware.checkAuth, classeController.modificationClasse);
router.delete("/supprimerclasse/:id", checkAuthMiddleware.checkAuth, classeController.supprimerClasse);


/// route gestion des cycle

router.post('/enregistrementcycle', checkAuthMiddleware.checkAuth, cycleController.enregistrementCycle);
router.get('/listecycle', checkAuthMiddleware.checkAuth, cycleController.listeCycle);
router.put("/modificationcycle/:id", checkAuthMiddleware.checkAuth, cycleController.modificationCycle);
router.delete("/supprimercycle/:id", checkAuthMiddleware.checkAuth, cycleController.supprimerCycle);


/// route gestion des economique

router.post('/enregistrementeconomique', checkAuthMiddleware.checkAuth, economiqueController.enregistrementEconomique);
router.get('/listeeconomique', checkAuthMiddleware.checkAuth, economiqueController.listeEconomique);
router.put("/modificationeconomique/:id", checkAuthMiddleware.checkAuth, economiqueController.modificationEconomique);
router.delete("/supprimereconomique/:id", checkAuthMiddleware.checkAuth, economiqueController.supprimerEconomique);


/// route gestion des emploi

router.post('/enregistrementemploi', checkAuthMiddleware.checkAuth, emploiController.enregistrementEmploi);
router.get('/listeemploi', checkAuthMiddleware.checkAuth, emploiController.listeEmploi);
router.put("/modificationemploi/:id", checkAuthMiddleware.checkAuth, emploiController.modificationEmploi);
router.delete("/supprimeremploi/:id", checkAuthMiddleware.checkAuth, emploiController.supprimerEmploi);


/// route gestion des etablissement

router.post('/enregistrementetablissement', checkAuthMiddleware.checkAuth, etablissementController.enregistrementEtablissement);
router.get('/listeetablissement', checkAuthMiddleware.checkAuth, etablissementController.listeEtablissement);
router.put("/modificationetablissement/:id", checkAuthMiddleware.checkAuth, etablissementController.modificationEtablissement);
router.delete("/supprimeretablissement/:id", checkAuthMiddleware.checkAuth, etablissementController.supprimerEtablissement);


/// route gestion des matiere

router.post('/enregistrementmatiere', checkAuthMiddleware.checkAuth, matiereController.enregistrementMatiere);
router.get('/listematiere', checkAuthMiddleware.checkAuth, matiereController.listeMatiere);
router.put("/modificationmatiere/:id", checkAuthMiddleware.checkAuth, matiereController.modificationMatiere);
router.delete("/supprimermatiere/:id", checkAuthMiddleware.checkAuth, matiereController.supprimerMatiere);


/// route gestion des typeMatiere

router.post('/enregistrementtypeMatiere', checkAuthMiddleware.checkAuth, typeMatiereController.enregistrementTypeMatiere);
router.get('/listetypeMatiere', checkAuthMiddleware.checkAuth, typeMatiereController.listeTypeMatiere);
router.put("/modificationtypeMatiere/:id", checkAuthMiddleware.checkAuth, typeMatiereController.modificationTypeMatiere);
router.delete("/supprimertypeMatiere/:id", checkAuthMiddleware.checkAuth, typeMatiereController.supprimerTypeMatiere);

module.exports = router;