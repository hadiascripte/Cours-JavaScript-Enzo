// Les types de

const typeString = "Enzo";
const typeNumber = 9;
const typeUndifined = undefined;
const typeObj = {
    a: 1,
    b: 2,
    c: 3,
};
const typeTablea = [1, 2, 3, 4, 5, 6];
const typeBooleen = true;

//  Les opérateurs

const operation = 10 % 5;
// +, -, *, /, %(modulo=reste),** (puissances)

// Les chaines de caratères (String)
const str = "Juliette";
const str2 = "John";

// La concaténation consiste à ajouter des chaines de caractères les unes aux autres.

// console.log(str + str2);
// console.log("Hello je m'appelle " + str);

// La deuxième méthode est d'utiliser des backstiks ``
// Et pour ajouter une autre variable on ajoute ${}. a L'intérieur nous pouvons reprendre la première méthode avce le +

// console.log(`Je suis une chaine de caractère ${str}, lorem lorem lorem ${str2}`);

// Créer une fonction en JavaScript.
// C'est un bloc de codes qui permet d'exécuter des actions que l'on va définir et ensuite l'appeler pour qu'elle exécute ce qu'elle contient.

// function presentation() {

//     console.log("Helle je suis Hadia");
// }

// Return permet d'exécuter une variable mais il faudra ensuite la faire appeler avecx un console.log en dehors de la fonction en l'appelant avec cette fonction (ici presentation ())

//     return a + b;
// }
// presentation();
//  console.log(presentation());

//   Dans les paranthèses des fonction on peut y mettre des paramètres que l'on peut nommer comme on veut. Nous pouvons ensuite les utuliser quand nous allons "appeler" la fonction (return a+b).

// Lorsque nous donnons des valeurs aux paramètres (dans la foncton(a,b)) on appelle ceci des arguments (4,6). Nous les ajoutons dans la console.log

// console.log(presentation(4, 6));






//  Fonction fléchée

// const foo = (a, b) => console.log("Hello World");
// //     return "je suis Hadia";
// // foo();
// console.log(foo());

//  Cette fonction fléchée est appelée fonction anonyme car elle ne sert qu'a faire une exécution.

// const bnt = document.querySelector("#btn");
// bnt.addEventListener("click", () => {
//     console.log("Tu as cliqué sur le bouton");
// });

//  Hoisting: Le fichier est lu de haut en bas. La déclarations des variables doivent être faites en haut, puis on ajoute les fonctions puis on les appelle.






//   Portée globale et portée locale.

// Ici la variable est globale et donc accessible partout.
// Alors que si une variable est déclarée dans un bloc, elle ne ser pas accessible partou et sera donc une portée local dans son bloc


// let txt = "Hello World";

// function presentation() {
//     let maVariableAPorteeLocale = "Var locale";
//     console.log(maVariableAPorteeLocale);
// }
// console.log(maVariableAPorteeLocale);
// presentation();
