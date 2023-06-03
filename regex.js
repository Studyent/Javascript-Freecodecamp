
/*

Usage d'expressions régulières pour match les ocurrences des lettres et/ou symboles dans la phrase et les remplacer.

*/

function spinalCase(str) {

    let x = str.slice();
    return x.replace(/([a-z])([A-Z])|\s|_/g,'$1-$2').toLowerCase();
    
    
    }
    
    console.log(spinalCase('thisIsSpinalTap'));