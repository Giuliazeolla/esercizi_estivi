
/***
 * Completare il codice seguente in modo
 * che tutte le parole conute nell'oggetto "object" alle varie chiavi
 * vengano sostituite con la loro rispettiva traduzione
 * 
*/

const object = {
    a: "Hello",
    b: "World",
    c: "!",
};
const translations = {"Hello": "Ciao", "World": "Mondo", "!": "!"};
for(let key in object){
    object[key] = translations[objects[key]];
}
console.log(object);
/* deve stampare l'oggetto: {
    a: "Ciao",
    b: "Mondo",
    c: "!",
}
*/
