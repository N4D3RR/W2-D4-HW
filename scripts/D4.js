/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  let areaRettangolo = l1 * l2
  console.log(areaRettangolo)
}
area(4, 3)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  if (n1 !== n2) {
    return n1 + n2
  } else {
    return (n1 + n2) * 3
  }
}
console.log(crazySum(5, 8))
console.log(crazySum(5, 5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1) {
  if (n1 < 19) {
    return Math.abs(n1 - 19)
  }
  if (n1 > 19) {
    return [Math.abs(n1 - 19), Math.abs(n1 - 19) * 3]
  }
}
console.log("guarda", crazyDiff(40))

const crazyDiffAlt = function (n1) {
  let differenza = Math.abs(n1 - 19)
  if (n1 > 19) {
    return [differenza, differenza * 3]
  }
  return diff
}
console.log(crazyDiffAlt(22))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}
console.log(boundary(10))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (str) {
  if (str.startsWith("EPICODE")) {
    return str
  } else {
    return "EPICODE " + str
  }
}
console.log(epify("INSEGNA"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (n <= 0) {
    return "il numero non è positivo"
  }
  if (n % 3 === 0 || n % 7 === 0) {
    return true
  } else {
    return false
  }
}
console.log(check3and7(7))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (word) {
  return word.split("").reverse().join("")
}
console.log(reverseString("nader"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (str) {
  let words = str.split(" ") //se non metto lo spazio " " mi divide la stringa in singoli caratteri
  let upperWords = " "

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    upperWords += word.charAt(0).toUpperCase() + word.slice(1) + " "
  }
  return upperWords
}
console.log(upperFirst("ciao a tutti")) //escono tutti in maiuscolo, perchè? perchè non avevo messo lo spazio tra " " nella riga 125

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (str) {
  return str.slice(1, -1)
}
console.log(cutString("senza la prima e l'ultima"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  let listaCasuale = []
  for (let i = 0; i < n; i++) {
    //mettendo i<= n mi dava come risultato l'n che avevo deciso +1
    listaCasuale.push(Math.floor(Math.random() * 11))
  }
  return listaCasuale
}

console.log(giveMeRandom(5))
