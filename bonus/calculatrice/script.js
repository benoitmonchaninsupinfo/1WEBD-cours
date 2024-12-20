const ecran = document.getElementById('ecran');

// Fonction pour ajouter un caractère à l'écran
function ajouterCaractere(caractere) {
    ecran.innerText += caractere;
}

// Fonction pour effacer l'écran
function effacer() {
    ecran.innerText = '';
}

// Fonction pour effacer le dernier caractère
function effacerDernier() {
    ecran.innerText = ecran.innerText.slice(0, -1);
}

// Fonction pour calculer le résultat
function calculer() {
    try {
        ecran.innerText = eval(ecran.innerText);
    } catch (error) {
        ecran.innerText = 'Erreur';
    }
}

// Ajout des écouteurs d'événements
document.getElementById('btn-effacer').addEventListener('click', effacer);
document.getElementById('btn-parenthese-ouvrante').addEventListener('click', () => ajouterCaractere('('));
document.getElementById('btn-parenthese-fermant').addEventListener('click', () => ajouterCaractere(')'));
document.getElementById('btn-division').addEventListener('click', () => ajouterCaractere('/'));
document.getElementById('btn-7').addEventListener('click', () => ajouterCaractere('7'));
document.getElementById('btn-8').addEventListener('click', () => ajouterCaractere('8'));
document.getElementById('btn-9').addEventListener('click', () => ajouterCaractere('9'));
document.getElementById('btn-multiplication').addEventListener('click', () => ajouterCaractere('*'));
document.getElementById('btn-4').addEventListener('click', () => ajouterCaractere('4'));
document.getElementById('btn-5').addEventListener('click', () => ajouterCaractere('5'));
document.getElementById('btn-6').addEventListener('click', () => ajouterCaractere('6'));
document.getElementById('btn-soustraction').addEventListener('click', () => ajouterCaractere('-'));
document.getElementById('btn-1').addEventListener('click', () => ajouterCaractere('1'));
document.getElementById('btn-2').addEventListener('click', () => ajouterCaractere('2'));
document.getElementById('btn-3').addEventListener('click', () => ajouterCaractere('3'));
document.getElementById('btn-addition').addEventListener('click', () => ajouterCaractere('+'));
document.getElementById('btn-0').addEventListener('click', () => ajouterCaractere('0'));
document.getElementById('btn-point').addEventListener('click', () => ajouterCaractere('.'));
document.getElementById('btn-effacer-dernier').addEventListener('click', effacerDernier);
document.getElementById('btn-egale').addEventListener('click', calculer);
